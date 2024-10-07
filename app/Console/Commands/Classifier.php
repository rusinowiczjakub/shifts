<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use MedShifts\ClassifierML\ProfessionalTypeClassifier;

class Classifier extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:classifier';

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
        $classifier = new ProfessionalTypeClassifier();

        dd($classifier->classify('Położna/Położny'));
        //$classifier->train();
    }
}
