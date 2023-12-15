<?php

namespace App\Http\Requests\Employer;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAddressRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required'],
            'street' => ['required'],
            'building_number' => ['required'],
            'city' => ['required'],
            'postal_code' => ['post_code'],
            'phone_number' => ['required_without:email'],
            'email' => ['required_without:phone_number']
        ];
    }
}
