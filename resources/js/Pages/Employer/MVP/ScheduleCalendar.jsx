import GuestLayout from "@/Layouts/GuestLayout";
import Calendar from "@/Pages/Employer/MVP/Partials/Calendar";
import {Logo} from "@/Components/Logo";
import {useState} from "react";

const ScheduleCalendar = ({shifts}) => {
    const [selectedShift, setSelectedShift] = useState(null);


    return (
        <GuestLayout>
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
