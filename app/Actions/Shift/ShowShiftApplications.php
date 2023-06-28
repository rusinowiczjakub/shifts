<?php

declare(strict_types=1);

namespace App\Actions\Shift;

use App\Models\ProfessionalType;
use App\Models\Shift;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShowShiftApplications
{
    public function __invoke(int $shiftId): Response
    {
        return Inertia::render('Employer/Shift/List', [
            'shifts' => Shift::with('professionalType')->get(),
            'dicts' => [
                'professionalTypes' => ProfessionalType::all()
            ],
            'applications' => [], // @TODO: Implement this
            'selectedShift' => Shift::find($shiftId),
            'type' => Request::get('type')
        ]);
    }
}
