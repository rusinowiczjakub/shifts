<?php

namespace App\Models;

use App\Models\Concerns\HasAddresses;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Institution extends Model
{
    use HasFactory,
        HasAddresses;
}
