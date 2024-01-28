<?php

namespace App\Console\Commands;

use Illuminate\Support\Facades\DB;
use Illuminate\Console\Command;

class SeedGeoCitiesCommand extends Command
{
    protected $signature = 'geocities:seed';

    protected $description = 'Seed the database with cities data';

    public function handle()
    {
        $this->truncate();
        $sql = file_get_contents(__DIR__ . '/../../../database/seeders/polish_cities.sql');

        // split the statements, so DB::statement can execute them.
        $statements = array_filter(array_map('trim', explode(';', $sql)));

        $this->warn('Seeding GeoCities');

        $bar = $this->createProgressBar(sizeof($statements));
        foreach ($statements as $stmt) {
            DB::statement($stmt);
            $bar->advance();
        }
        $bar->finish();
        $this->line("");
        $this->info('Seeded GeoCities');
    }

    private function truncate()
    {
        $this->warn('Truncating geo_cities');
        DB::table('geo_cities')->truncate();
        $this->info('Truncated geo_cities');
        $this->warn('Truncating geo_provinces');
        DB::table('geo_provinces')->truncate();
        $this->info('Truncated geo_provinces');
        $this->warn('Truncating geo_communities');
        DB::table('geo_communities')->truncate();
        $this->info('Truncated geo_communities');
        $this->warn('Truncating geo_counties');
        DB::table('geo_counties')->truncate();
        $this->info('Truncated geo_counties');
    }

    private function createProgressBar($total)
    {
        $bar = $this->output->createProgressBar($total);
        $bar->clear();
        $bar->setBarCharacter('=');
        $bar->setEmptyBarCharacter('_');
        $bar->setProgressCharacter('|');
        $bar->setFormat(" %current%/%max% [%bar%] %percent:3s%% %elapsed:6s%/%estimated:-6s% %memory:6s% %message%");
        $bar->setMessage('...wait');
        $bar->start();

        return $bar;
    }
}
