<?php

namespace App\Notifications;

use App\Models\Application;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ApplicationStatusChanged extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        private readonly Application $application
    ) {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array {
        return ['mail', 'database'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage {
        return (new MailMessage)
            ->subject('Zmieniono status aplikacji')
            ->markdown(
                'emails.application-status',
                [
                    'status' => match ($this->application->status) {
                        Application::STATUS_ACCEPTED => 'Zaakceptowano',
                        Application::STATUS_REQUESTED => 'Oczekujące na akceptację placówki',
                        Application::STATUS_DECLINED => 'Odrzucone przez placókwę'
                    },
                    'institution' => $this->application->shift->institution->name,
                    'address' => sprintf(
                        '%s %s%s, %s %s',
                        $this->application->shift->address->street,
                        $this->application->shift->address->building_number,
                        $this->application->shift->address->apartment ? '/' . $this->application->shift->address->apartment : '',
                        $this->application->shift->address->postal_code,
                        $this->application->shift->address->city,
                    ),
                    'startDate' => $this->application->shift->start_date->format('d.m.Y H:i'),
                    'endDate' => $this->application->shift->end_date->format('d.m.Y H:i'),
                    'totalPay' => $this->application->shift->total_pay,
                ]
            );
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array {
        return [
            //
        ];
    }
}
