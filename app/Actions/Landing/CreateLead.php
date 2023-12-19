<?php

declare(strict_types=1);

namespace App\Actions\Landing;

use App\Models\Lead;
use Illuminate\Database\QueryException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CreateLead
{
    public function __invoke(Request $request): Response
    {
        $request->validate([
            'email' => ['required', 'email'],
            'privacy_policy' => ['required', 'accepted']
        ]);

        try {
            Lead::create([
                'email' => $request->email
            ]);
        } catch (QueryException $exception) {
            switch ($exception->errorInfo[1]) {
                case 1062:
                    return Inertia::render('Landing/Index', [
                        'success' => true
                    ]);
                default:
                    throw $exception;
            }
        }

        return Inertia::render('Landing/Index', [
            'success' => true
        ]);
    }
}
