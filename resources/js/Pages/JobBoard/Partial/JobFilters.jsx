import {Fragment, useEffect, useRef, useState} from 'react'
import {Dialog, Disclosure, Menu, Transition} from '@headlessui/react'
import Datepicker from "flowbite-datepicker/Datepicker";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {format, parse} from "date-fns";
import InputError from "@/Components/InputError";
// import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const filters = [
    {
        id: 'city',
        name: 'Miasto',
        options: [
            {value: 'white', label: 'Warszawa', checked: false},
            {value: 'beige', label: 'Poznań', checked: false},
            {value: 'blue', label: 'Szczecin', checked: true},
            {value: 'brown', label: 'Wrocałw', checked: false},
            {value: 'green', label: 'Lublin', checked: false},
            {value: 'purple', label: 'Katowice', checked: false},
            {value: 'purple', label: 'Kraków', checked: false},
        ],
    },
    {
        id: 'professional-type',
        name: 'Specjalizacja',
        options: [
            {value: 1, label: 'Położnictwo', checked: false},
            {value: 2, label: 'Pielęgniarstwo', checked: false},
        ],
    },
]

const JobFilters = (professionalTypes = []) => {
    const datepickerFromRef = useRef();
    const datepickerToRef = useRef();

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
                                                            defaultChecked={option.checked}
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
                                                    value={null}
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
                                                    value={null}
                                                    id="datepickerTo"
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
