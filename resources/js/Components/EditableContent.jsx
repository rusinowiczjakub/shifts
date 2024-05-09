import {PencilIcon, CheckIcon, XMarkIcon} from '@heroicons/react/16/solid';
import {useForm} from "@inertiajs/react";  // Dodajemy nowe ikony
import {useEffect, useRef, useState} from "react";

const EditableContent = ({initialValue, postUrl, displayModeFormatter = null, inputType = 'text', options = []}) => {
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);
    const spanRef = useRef(null);
    const [spanWidth, setSpanWidth] = useState(null);

    const renderInput = (inputType) => {
        switch (inputType) {
            case 'text':
            case 'number':
            case 'datetime-local':
                return (
                    <input
                        ref={inputRef}
                        type={inputType}
                        className="outline-none px-2 py-1 border border-gray-300 rounded"
                        value={form.data.value}
                        // defaultValue={form.data.value}
                        onChange={e => form.setData('value', e.target.value)}
                        autoFocus
                        onBlur={handleBlur}
                    />
                )
            case 'select':
                return (
                    <select
                        onBlur={handleBlur}
                        onChange={e => form.setData('value', e.target.value)}
                        autoFocus
                        value={form.data.value} className="outline-none px-2 py-1 border border-gray-300 rounded">
                        {options.map((option) =>
                            <option key={option.value} value={option.value}>{option.label}</option>
                        )}

                    </select>
                )

        }
    }

    useEffect(() => {
        if (spanRef.current) {
            setSpanWidth(spanRef.current.offsetWidth);
            console.log(spanRef.current.offsetWidth);
        }
    }, [spanRef.current]);

    useEffect(() => {
        if (spanWidth && inputRef.current) {
            inputRef.current.style.width = `${spanWidth}px`;
            console.log(spanWidth);
        }
    }, [spanWidth, isEditing])

    // Inicjalizacja stanu formularza z Inertia useForm
    const form = useForm({
        value: initialValue
    });

    const handleEdit = () => {
        setIsEditing(true);
        console.log(form.data.value);
    };

    const handleSave = () => {
        form.post(postUrl, {
            onFinish: () => setIsEditing(false)
        });
    };

    const handleCancel = () => {
        form.reset('value');
        setIsEditing(false);
    };

    const handleBlur = () => {
        // Opóźnienie aby pozwolić na kliknięcie przycisków przed anulowaniem
        setTimeout(() => {
            if (!form.isDirty) {
                handleCancel();
            }
        }, 200);
    };

    const displayValue = displayModeFormatter ? displayModeFormatter(form.data.value) : form.data.value;

    return (
        <div className="flex items-center space-x-2">
            {isEditing ? (
                <div className="relative">
                    {renderInput(inputType)}
                    {/*<input*/}
                    {/*    ref={inputRef}*/}
                    {/*    type={inputType}*/}
                    {/*    className="outline-none px-2 py-1 border border-gray-300 rounded"*/}
                    {/*    value={form.data.value}*/}
                    {/*    // defaultValue={form.data.value}*/}
                    {/*    onChange={e => form.setData('value', e.target.value)}*/}
                    {/*    autoFocus*/}
                    {/*/>*/}
                    <div className="absolute z-10 w-40 px-4 mt-2 bg-white shadow-lg rounded-md">
                        <div className="flex justify-around">
                            <button onClick={handleSave} className="p-1">
                                <CheckIcon className="h-5 w-5 text-blue-500"/>
                            </button>
                            <button onClick={handleCancel} className="p-1">
                                <XMarkIcon className="h-5 w-5 text-gray-500"/>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div ref={spanRef} className={'relative flex flex-row items-center'}>
                    <span className="flex-1">{displayValue}</span>
                    <button onClick={handleEdit} className="p-1">
                        <PencilIcon className="h-5 w-5 text-gray-600"/>
                    </button>
                </div>
            )}
        </div>
    );
};

export default EditableContent;
