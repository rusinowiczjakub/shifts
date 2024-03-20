import {useRef, useState} from "react";
import TextInput from "@/Components/TextInput";

const OTPInput = ({ length = 4, onComplete, className = '' }) => {
    const [OTP, setOTP] = useState(Array(length).fill(''));

    const inputRef = useRef(Array(length).fill(null));


    const handleTextChange = (input, index) => {
        const newPin = [...OTP];
        newPin[index] = input;
        setOTP(newPin);

        // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.


        if (input.length === 1 && index < length - 1) {
            inputRef.current[index + 1]?.focus();
        }

        if (input.length === 0 && index > 0) {
            inputRef.current[index - 1]?.focus();
        }

        if (newPin.every((digit) => digit !== '')) {
            onComplete(newPin.join(''));
        }
    };

    return (
        <div className={`flex ${className}`}>
            {Array.from({ length }, (_, index) => (
                <TextInput
                    key={index}
                    type="text"
                    maxLength={1}
                    value={OTP[index]}
                    className={'w-16 md:w-32 text-center'}
                    onChange={(e) => handleTextChange(e.target.value, index)}
                    ref={(ref) => (inputRef.current[index] = ref)}
                    style={{ marginRight: index === length - 1 ? '0' : '10px' }}
                />
            ))}


        </div>
    )
}

export default OTPInput
