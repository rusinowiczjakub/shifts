import {CheckCircle} from "@/Components/Icons/CheckCircle";
import {useState} from "react";

export const CheckboxCard = ({value, label, onClick, selected}) => {
    console.log(selected);
    return (
        <div
            onClick={() => onClick(value)}
            className="flex justify-between items-center w-full px-4 py-6 border-b border-gray-200 rounded-t-lg cursor-pointer dark:bg-gray-800 dark:border-gray-600">
            <span>{label}</span>
            {
                selected &&
                <CheckCircle className={'w-5 h-5 text-blue-600'}/>
            }
        </div>
    )
}
