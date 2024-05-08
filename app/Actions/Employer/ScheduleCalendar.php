<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Models\Institution;
use App\Models\Shift;
use Inertia\Inertia;
use Inertia\Response;

class ScheduleCalendar
{
    public function __invoke(string $token): Response {
        /** @var Institution $institution */
        $institution = Institution::where('token', $token)->firstOrFail();
        $shifts      = Shift::with('address')->where('institution_id', $institution->id)->get();

        return Inertia::render(
            'Employer/MVP/ScheduleCalendar',
            [
                'shifts' => $shifts->map(
                    function (Shift $shift) {
                        $address = $shift->address;

                        $formattedAddress = null;

                        if ($address) {
                            $formattedAddress = sprintf(
                                '[%s] %s %s, %s %s',
                                $address->name,
                                $address->street,
                                $address->building_number . ($address->apartment ? '/' . $address->apartment : ''),
                                $address->postal_code,
                                $address->city
                            );
                        }
                        return [
                            'id' => $shift->id,
                            'name' => $formattedAddress,
                            'imageUrl' => '',
                            'startDatetime' => $shift->start_date,
                            'endDatetime' => $shift->end_date,
                            'category' => $shift?->professionalType?->name
                        ];
                    }
                ),
            ]
        );
    }
}
