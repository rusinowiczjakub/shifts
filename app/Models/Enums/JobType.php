<?php

namespace App\Models\Enums;

enum JobType: string
{
    case PERMANENT_JOB = 'permanent_job';
    case PART_TIME_JOB = 'part_time_job';
    case ONE_TIME_JOB = 'one_time_job';
}
