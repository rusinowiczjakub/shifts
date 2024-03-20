import {useEffect, useRef, useState} from "react";
import TextInput from "@/Components/TextInput";

const OTPInput = ({ length = 4, value, onChange, onComplete, className = '' }) => {
    const inputRef = useRef(Array(length).fill(null));

    const handleTextChange = (input, index) => {
        const newPin = [...value];
        newPin[index] = input;
        onChange(newPin);

        // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.
        if (input.length === 1 && index < length - 1) {
            inputRef.current[index + 1]?.focus();
        }

        if (input.length === 0 && index > 0) {
            inputRef.current[index - 1]?.focus();
        }

        if (newPin.every((digit) => digit !== '')) {
            onComplete(newPin.join(''));
            inputRef.current[0].focus();
        }
    };

    return (
        <div className={`flex ${className}`}>
            {Array.from({ length }, (_, index) => (
                <TextInput
                    key={index}
                    type="text"
                    inputMode={'numeric'}
                    maxLength={1}
                    value={value[index]}
                    className={'w-16 md:w-32 text-center'}
                    onChange={(e) => handleTextChange(e.target.value, index)}
                    ref={(ref) => (inputRef.current[index] = ref)}
                    style={{ marginRight: index === length - 1 ? '0' : '10px', WebkitAppearance: "none", MozAppearance: 'textfield' }}
                />
            ))}


        </div>
    )
}

export default OTPInput
