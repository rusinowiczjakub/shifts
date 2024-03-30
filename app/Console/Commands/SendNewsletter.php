<?php

namespace App\Console\Commands;

use App\Mail\Newsletter;
use App\Models\Lead;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendNewsletter extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:send-newsletter';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): void
    {
        Mail::bcc(Lead::all()->map(
            fn(Lead $lead) => $lead->email
        )->toArray())
            ->send(new Newsletter);
    }
}
