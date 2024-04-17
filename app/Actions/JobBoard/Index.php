<?php

declare(strict_types=1);

namespace App\Actions\JobBoard;

use App\Models\Shift;
use Carbon\Carbon;
use Inertia\Inertia;
use Inertia\Response;

class Index
{
    public function __invoke(): Response
    {
        return Inertia::render('JobBoard/Index', [
            'shifts' => Shift::withCount('applications')->with(['institution', 'address', 'professionalType'])->where('start_date', '>', new Carbon())->get()
        ]);
    }
}
