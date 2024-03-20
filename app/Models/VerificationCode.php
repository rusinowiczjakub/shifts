<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Nette\Utils\Random;

/**
 * @property Carbon $expires_at
 */
class VerificationCode extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'code',
        'expires_at'
    ];

    protected $casts = [
        'expires_at' => 'datetime',
    ];

    public function isExpired(): bool
    {
        return $this->expires_at->isPast();
    }

    public function isValid(string $code): bool
    {
        return Hash::check($code, $this->code);
    }

    public static function createCode(string $email): string
    {
        $code = Random::generate(4, '0-9');

        self::create([
            'email' => $email,
            'code' => Hash::make($code),
            'expires_at' => now()->addMinutes(90)
        ]);

        return $code;
    }
}
