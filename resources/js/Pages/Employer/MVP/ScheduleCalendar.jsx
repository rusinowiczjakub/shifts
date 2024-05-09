import GuestLayout from "@/Layouts/GuestLayout";
import Calendar from "@/Pages/Employer/MVP/Partials/Calendar";
import {Logo} from "@/Components/Logo";
import {useState} from "react";
import {Dialog} from '@headlessui/react'
import ApplicationsList from "@/Pages/Employer/MVP/Partials/ApplicationsList";
import EditableContent from "@/Components/EditableContent";
import {format} from "date-fns";

const dateTimeDisplayFormatter = value => {
    console.log(value);
    if (!value) return value;
    // Formatowanie daty
    return format(new Date(value), 'dd/MM/yyyy HH:mm');
};

const ScheduleCalendar = ({shifts}) => {
    const [selectedShift, setSelectedShift] = useState(null);

    return (
        <GuestLayout>
            <Dialog
                as="div"
                open={selectedShift !== null} onClose={() => setSelectedShift(null)}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel className="max-w-xl w-full space-y-4 border bg-white p-12">
                        <Dialog.Title>
                            <h2 className="font-semibold">Aplikacje</h2>
                            </Dialog.Title>
                        <div
                            className="flex flex-col md:flex-row justify-between py-6 border-y border-gray-100 mb-6">
                            <div className="box group">
                                <p className="font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">
                                    Termin zmiany
                                </p>
                                <h6 className="font-manrope">
                                    <EditableContent displayModeFormatter={(v) => dateTimeDisplayFormatter(v)}
                                                     initialValue={(format(new Date(), 'yyyy-MM-dd\'T\'HH:mm'))}
                                                     postUrl={'https://test.test'} inputType={'datetime-local'}/>
                                </h6>
                            </div>
                            <div className="box group">
                                <p className="font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">Budżet</p>
                                <h6 className="font-manrope">
                                    <EditableContent displayModeFormatter={(v) => v + ' PLN'} initialValue={100}
                                                     inputType={'text'} postUrl={'https://test.test'}/>
                                </h6>
                            </div>
                            <div className="box group">
                                <p className="font-normal text-sm leading-7 text-gray-500 mb-3 transition-all duration-500 group-hover:text-gray-700">Specjalizacja</p>
                                <h6 className="font-manrope">
                                    <EditableContent
                                        options={[
                                            {
                                                value: 1,
                                                label: 'Położnictwo'
                                            }
                                        ]}
                                        initialValue={1}
                                        inputType={'select'}
                                        postUrl={'https://test.test'}
                                        displayModeFormatter={(v) => 'Położnictwo'}
                                    />

                                </h6>
                            </div>
                        </div>

                        <ApplicationsList/>
                    </Dialog.Panel>
                </div>
            </Dialog>
            <section className="bg-white dark:bg-gray-900 lg:h-screen flex items-center">
                <div className="container max-w-4xl mx-auto px-6 pt-24 md:pt-0 lg:py-32">
                    <div className="flex flex-col justify-center">
                        <div className="w-full flex flex-col items-center">
                            <Logo/>
                            <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Witamy w <span
                                className={'text-blue-600'}>MedShifts</span></h1>

                            <h1 className="mt-4 mb-4 text-2xl font-medium text-gray-800 lg:text-3xl dark:text-white">
                                Kalendarz zmian
                            </h1>

                        </div>
                    </div>
                    <div className="">
                        <Calendar selectShift={(value) => setSelectedShift(value)} shifts={shifts}/>
                    </div>
                </div>
            </section>
        </GuestLayout>
    )
}

export default ScheduleCalendar;
