<?php

namespace App\Rules;

use App\Models\VerificationCode;
use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Str;
use Illuminate\Translation\PotentiallyTranslatedString;

class VerifyCode implements ValidationRule
{
    public function __construct(
        private readonly string $email
    ) {
    }

    /**
     * Run the validation rule.
     *
     * @param string                                        $attribute
     * @param mixed                                         $value
     * @param \Closure(string): PotentiallyTranslatedString $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        /** @var VerificationCode|null $verificationCode */
        $verificationCode = VerificationCode::where('email', $this->email)->first();

        if (null === $verificationCode) {
            $fail(Str::ucfirst(__('validation.verify-code.invalid')));
        }

        if ($verificationCode->isExpired()) {
            $fail(Str::ucfirst(__('validation.verify-code.expired')));
        }

        if (!$verificationCode->isValid($value)) {
            $fail(Str::ucfirst(__('validation.verify-code.invalid')));
        }
    }
}
