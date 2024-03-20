<?php

namespace App\Rules;

use App\Models\VerificationCode;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class VerifyCode implements ValidationRule
{
    public function __construct(
        private readonly string $email
    )
    {
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        /** @var VerificationCode|null $verificationCode */
        $verificationCode = VerificationCode::where('email', $this->email)->first();

        if (null === $verificationCode) {
            $fail('The :attribute is invalid');
        }

        if ($verificationCode->isExpired()) {
            $fail('The :attribute has expired');
        }

        if (!$verificationCode->isValid($value)) {
            $fail('The :attribute is invalid');
        }
    }
}
