<?php

declare(strict_types=1);

namespace App\Actions\Shift;

use App\Models\ProfessionalType;
use App\Models\Shift;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShowShiftList
{
    public function __invoke(Request $request): Response
    {
        return Inertia::render('Employer/Shift/List', [
            'shifts' => Shift::with('professionalType')->get(),
            'dicts' => [
                'professionalTypes' => ProfessionalType::all()
            ],
        ]);
    }
}
