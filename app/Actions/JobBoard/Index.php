<?php

declare(strict_types=1);

namespace App\Actions\JobBoard;

use Inertia\Inertia;
use Inertia\Response;

class Index
{
    public function __invoke(): Response
    {
        return Inertia::render('JobBoard/Index', []);
    }
}
