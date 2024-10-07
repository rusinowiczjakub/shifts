<?php

declare(strict_types=1);

namespace App\Actions\Employer;

use App\Models\Facility;
use App\Models\Shift;
use Inertia\Inertia;
use Inertia\Response;

class ScheduleCalendar
{
    public function __invoke(string $token): Response {
        /** @var Facility $institution */
        $institution = Facility::where('token', $token)->firstOrFail();
        $shifts = Shift::with([
            'address',
            'applications' => function ($query) {
                $query->with(['medicalStaff', 'medicalStaff.user'])
                    ->orderByRaw("FIELD(applications.status, 'REQUESTED', 'ACCEPTED', 'DECLINED')");
            }
        ])
            ->where('institution_id', $institution->id)
            ->get();

        return Inertia::render(
            'Employer/MVP/ScheduleCalendar',
            [
                'token' => $token,
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
                            'category' => $shift->professionalType?->name,
                            'applications' => $shift->applications
                        ];
                    }
                ),
            ]
        );
    }
}
