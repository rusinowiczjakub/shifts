<?php

namespace App\Http\Requests\Shift;

use Illuminate\Foundation\Http\FormRequest;

class CreateShiftRequest extends FormRequest
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
            'start_date' => ['required'],
            'end_date' => ['required'],
            'total_pay' => ['required'],
            'available_slots' => ['required'],
            'professional_type_id' => ['required'],
            'address_id' => ['required']
        ];
    }
}
