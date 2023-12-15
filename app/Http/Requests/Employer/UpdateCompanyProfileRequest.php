<?php

namespace App\Http\Requests\Employer;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Str;

class UpdateCompanyProfileRequest extends FormRequest
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
            'address_name' => ['required'],
            'nip' => ['required', 'NIP'],
            'regon' => ['required', 'REGON'],
            'address_street' => ['required'],
            'address_building_number' => ['required'],
            'address_city' => ['required'],
            'address_postal_code' => ['post_code'],
            'address_phone_number' => ['required_without:address_email'],
            'address_email' => ['required_without:address_phone_number']
        ];
    }

    public function getInstitutionValues(): array
    {
        $fields = $this->all();

        $values = [];
        foreach ($fields as $field => $value) {
            if (!Str::startsWith($field, 'address_')) {
                $field = str_replace('address_', '', $field);
                $values[$field] = $value;
            }
        }

        return $values;
    }

    public function getAddressValues(): array
    {
        $fields = $this->all();

        $values = [];
        foreach ($fields as $field => $value) {
            if (Str::startsWith($field, 'address_')) {
                $values[Str::replace('address_', '', $field)] = $value;
            }
        }

        return $values;
    }
}
