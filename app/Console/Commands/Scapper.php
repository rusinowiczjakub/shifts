<?php

namespace App\Console\Commands;

use App\Models\ExternalJob;
use Illuminate\Console\Command;
use MedShifts\JobScrapper\OLX\CompanyDetails;
use MedShifts\JobScrapper\OLX\Scrapper;

class Scapper extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:scapper';

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
        $scrapper = new Scrapper(
        );

        $offers = $scrapper->execute();

        /** @var ExternalJob $offer */
        foreach ($offers as $offer) {
            $offer->save();
        }
    }
}
