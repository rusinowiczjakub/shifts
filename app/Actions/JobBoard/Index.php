<?php

declare(strict_types=1);

namespace App\Actions\JobBoard;

use App\Models\Address;
use App\Models\Application;
use App\Models\GeoCommunity;
use App\Models\ProfessionalType;
use App\Models\Shift;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Inertia\Inertia;
use Inertia\Response;

class Index
{
    public function __invoke(Request $request): Response {
        $query = Shift::with('institution', 'address', 'professionalType')
            ->withCount([
                'applications' => fn(Builder $builder) => $builder->whereIn(
                    'status', [Application::STATUS_ACCEPTED]
                )
            ])
            ->where('start_date', '>', now());

        if ($request->filled('city')) {
            $query->whereHas(
                'address',
                fn(Builder $builder) => $builder->where('city', $request->input('city'))
            );
        }

        if ($request->filled('professionalType')) {
            $query->whereIn('professional_type_id', $request->input('professionalType'));
        }

        if ($request->filled('periodStart') && $request->filled('periodEnd')) {
            $query->whereBetween('start_date', [
                Carbon::createFromFormat('d/m/Y', $request->input('periodStart'))->startOfDay(),
                Carbon::createFromFormat('d/m/Y', $request->input('periodEnd'))->endOfDay(),
            ]);
        }

        $shifts = $query->get();

        return Inertia::render('JobBoard/Index', [
            'shifts' => $shifts,
            'filters' => $this->getFilters(),
        ]);
    }

    private function getFilters(): array {
        return [
            [
                'id' => 'city',
                'name' => 'Miasto',
                'options' => Address::query()->groupBy('city')->get()->map(
                    fn(Address $address) => [
                        'value' => $address->city,
                        'label' => $address->city,
                    ]
                ),
            ],
            [
                'id' => 'professionalType',
                'name' => 'Specjalizacja',
                'options' => ProfessionalType::all()->map(
                    fn(ProfessionalType $professionalType) => [
                        'value' => $professionalType->id,
                        'label' => $professionalType->name,
                    ]
                ),
            ],
        ];
    }
}
