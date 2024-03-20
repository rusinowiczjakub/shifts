<?php

declare(strict_types=1);

namespace App\Models\Concerns;

use App\Models\VerificationCode;
use Nette\Utils\Random;

trait HasVerificationCode {

    /**
     * Generate a *0-9* code of a given length
     */
    public function generateCode(int $lenght = 5) : string
    {
        return Random::generate($lenght, "0-9");
    }

    /**
     * Generate a verification code for a given user
     */
    public function generateVerificationCodeFor(
        object $user,
    ) : VerificationCode
    {
        $code = $this->generateCode();
        while (VerificationCode::where('code', $code)->first() || strlen($code) !== 5) {
            $code = $this->generateCode();
        }

        return VerificationCode::create([
            'user_id' => $user->id,
            'expires_at' => now()->addMinutes(30),
            'code' => $this->generateCode(),
        ]);
    }
}
