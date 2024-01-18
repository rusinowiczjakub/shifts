import {Children, cloneElement, useState} from "react";

export const CheckboxCardGroup = ({children, onChange, value}) => {
    const [selected, setSelected] = useState(value);

    const childrenArray = Children.toArray(children);

    const update = (id) => {
        const selectedCopy = [...selected];

        if (-1 !== selected.indexOf(id)) {
            selectedCopy.splice(
                selected.indexOf(id),
                1
            );

            setSelected(selectedCopy);
            onChange(selectedCopy)

            return;
        }

        selectedCopy.push(id);

        setSelected(selectedCopy);
        onChange(selectedCopy);
    }

    return (
        <div
            className="w-full text-sm font-normal text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {
                childrenArray.map((checkboxCard) => {
                    return cloneElement(checkboxCard, {
                        onClick: update,
                        selected: selected.indexOf(checkboxCard.props.value) !== -1,
                    }, children)
                })
            }
        </div>

    )
}
