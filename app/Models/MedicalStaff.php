<?php

namespace App\Models;

use App\Models\Concerns\HasAddresses;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Parental\HasParent;

/**
 * @property MedicalStaffProfile $profile
 */
class MedicalStaff extends User
{
    use HasFactory,
        HasAddresses,
        HasParent;

    public function profile(): HasOne
    {
        return $this->hasOne(
            MedicalStaffProfile::class,
        );
    }
}
