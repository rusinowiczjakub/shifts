import {Fragment, useEffect, useRef, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import Datepicker from "flowbite-datepicker/Datepicker";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {format, parse} from "date-fns";
import InputError from "@/Components/InputError";
import {router} from "@inertiajs/react";
// import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

// const filters = [
//     {
//         id: 'city',
//         name: 'Miasto',
//         options: [
//             {value: 'white', label: 'Warszawa', checked: false},
//             {value: 'beige', label: 'Poznań', checked: false},
//             {value: 'blue', label: 'Szczecin', checked: true},
//             {value: 'brown', label: 'Wrocałw', checked: false},
//             {value: 'green', label: 'Lublin', checked: false},
//             {value: 'purple', label: 'Katowice', checked: false},
//             {value: 'purple', label: 'Kraków', checked: false},
//         ],
//     },
//     {
//         id: 'professional-type',
//         name: 'Specjalizacja',
//         options: [
//             {value: 1, label: 'Położnictwo', checked: false},
//             {value: 2, label: 'Pielęgniarstwo', checked: false},
//         ],
//     },
// ]

const JobFilters = ({setData, data, filters = []}) => {
    const datepickerFromRef = useRef();
    const datepickerToRef = useRef();
    const [shouldSubmit, setShouldSubmit] = useState(false);

    // useEffect(() => {
    //     submitFilters();
    // }, [])

    const handleDateChange = (field, value) => {
        if (!value) {
            return;
        }
        // Parsuj wartość daty z formatu wprowadzonego w interfejsie użytkownika
        const parsedDate = parse(value, 'dd/mm/yyyy', new Date());

        // Ustaw wartość w stanie formularza
        setData(prevData => ({
            ...prevData,
            [field]: parsedDate // Formatuj datę do formatu akceptowanego przez backend
        }));
    };

    const handleFilterChange = (filterType, value, checked) => {
        // Obsługa dla opcji checkbox
        if (Array.isArray(data[filterType])) {
            setData(prevData => {
                const newValues = new Set(prevData[filterType] || []);

                if (checked) {
                    newValues.add(value);
                } else {
                    newValues.delete(value);
                }

                return {
                    ...prevData,
                    [filterType]: Array.from(newValues)
                };
            });

            setShouldSubmit(true);
        } else {
            console.log('dupa');
            // Dla pojedynczych wartości, np. dat
            setData(prevData => ({
                ...prevData,
                [filterType]: value
            }));

            setShouldSubmit(true);
        }
    };

    const submitFilters = () => {
        router.get(route('jobboard.index'), data, {
            preserveState: true,
            preserveScroll: true
        });
    };

    useEffect(() => {
        if (shouldSubmit) {
            submitFilters();
            setShouldSubmit(false); // Reset flag after submitting
        }
    }, [shouldSubmit]); // Listen only to shouldSubmit changes



    useEffect(() => {
        if (datepickerFromRef?.current && datepickerToRef?.current) {
            new Datepicker(datepickerFromRef.current, {
                // autohide: true,
                format: 'dd/mm/yyyy',
                language: 'pl'
            });
            new Datepicker(datepickerToRef.current, {
                // autohide: true,
                format: 'dd/mm/yyyy',
                language: 'pl'
            });
        }
    }, [datepickerFromRef.current, datepickerToRef.current]);


    return (
        <main className="w-full">

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
                <div className="w-full">
                    {/* Filters */}
                    <form className="hidden lg:block">
                        {filters.map((section) => (
                            <Disclosure defaultOpen={true} as="div" key={section.id} className="border-b border-gray-200 py-6">
                                {({open}) => (
                                    <>
                                        <h3 className="-my-3 flow-root">
                                            <Disclosure.Button
                                                className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                <span className="ml-6 flex items-center">
                              {open ? (
                                  '-'
                                  // <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : ('+'
                                  // <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                                            </Disclosure.Button>
                                        </h3>
                                        <Disclosure.Panel className="pt-6">
                                            <div className="space-y-4">
                                                {section.options.map((option, optionIdx) => (
                                                    <div key={option.value} className="flex items-center">
                                                        <input
                                                            id={`filter-${section.id}-${optionIdx}`}
                                                            name={`${section.id}[]`}
                                                            defaultValue={option.value}
                                                            type="checkbox"
                                                            // defaultChecked={option.checked}
                                                            onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                        />
                                                        <label
                                                            htmlFor={`filter-${section.id}-${optionIdx}`}
                                                            className="ml-3 text-sm text-gray-600"
                                                        >
                                                            {option.label}
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                        <Disclosure defaultOpen={true} as={'div'} key={'date-range'} className={'border-b border-gray-200 py-6'}>
                            {({open}) => (
                                <>
                                    <h3 className="-my-3 flow-root">
                                        <Disclosure.Button
                                            className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                            <span className="font-medium text-gray-900">Data</span>
                                            <span className="ml-6 flex items-center">
                              {open ? (
                                  '-'
                                  // <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : ('+'
                                  // <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                                        </Disclosure.Button>
                                    </h3>

                                    <Disclosure.Panel className="pt-6">
                                        <div className="flex justify-between">
                                            <div className={'w-full mr-2'}>
                                                <InputLabel htmlFor={'period_start'} value={'Okres od'}/>
                                                {/*<Datepicker*/}
                                                {/*    theme={theme}*/}
                                                {/*    color={'primary'}*/}
                                                {/*    language={'pl-PL'}*/}
                                                {/*    onSelectedDateChanged={(date) => setData('period_start', date.getTime() / 1000)}*/}
                                                {/*/>*/}
                                                <TextInput
                                                    ref={datepickerFromRef}
                                                    datepicker
                                                    datepicker-autohide="true"
                                                    type="text"
                                                    className="w-full"
                                                    placeholder="Wybierz datę"
                                                    // onSelect={(e) => setData('period_start', parse(e.target.value, 'dd/MM/yyyy', new Date()).getTime() / 1000)}
                                                    // onClick={(e) => dobHandler(e)}
                                                    // onClick={(e) => console.log(e.target.value)}
                                                    // onSelect={(e) => console.log(e.target.value)}
                                                    // value={null}
                                                    // onSelect={(e) => handleFilterChange('periodStart', e.target.value, true)}
                                                    onSelect={(e) => handleFilterChange('periodStart', e.target.value, true)}
                                                    // value={data.periodStart || null}
                                                    id="datepickerFrom"
                                                />
                                                {/*<InputError className={'mt-2'} message={errors.period_start}/>*/}
                                            </div>
                                            <div className={'w-full ml-2'}>
                                                <InputLabel htmlFor={'period_end'} value={'Okres do'}/>
                                                <TextInput
                                                    ref={datepickerToRef}
                                                    datepicker
                                                    datepicker-autohide="true"
                                                    type="text"
                                                    className={`w-full`}
                                                    placeholder="Wybierz datę"
                                                    // onSelect={(e) => setData('period_end', parse(e.target.value, 'dd/MM/yyyy', new Date()).getTime() / 1000)}
                                                    // onClick={(e) => dobHandler(e)}
                                                    // onClick={(e) => console.log(e.target.value)}
                                                    // onChange={(e) => console.log(e)}
                                                    // value={experience && experience.period_end ? format(parse(experience.period_end, 'yyyy-MM-dd HH:mm:SS', new Date()), 'dd/MM/yyyy') : null}
                                                    id="datepickerTo"
                                                    // onSelect={(e) => handleFilterChange('periodEnd', e.target.value, true)}
                                                    onSelect={(e) => handleFilterChange('periodEnd', e.target.value, true)}
                                                    // value={data.periodEnd || null}
                                                    // disabled={currentlyWorking}
                                                />

                                                {/*<Datepicker*/}
                                                {/*    disabled={currentlyWorking}*/}
                                                {/*    theme={theme}*/}
                                                {/*    color={'primary'}*/}
                                                {/*    language={'pl-PL'}*/}
                                                {/*    value={data.period_end}*/}
                                                {/*    onSelectedDateChanged={(date) => setData('period_end', date.getTime() / 1000)}*/}
                                                {/*/>*/}
                                                {/*<InputError className={'mt-2'} message={errors.period_end}/>*/}
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </>

                            )}
                        </Disclosure>
                    </form>
                </div>
            </section>
        </main>
    )
}

export default JobFilters;
