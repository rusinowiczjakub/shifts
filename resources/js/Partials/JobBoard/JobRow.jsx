import SpecializationPill from "@/Partials/JobBoard/SpecializationPill";
import {Rating} from "flowbite-react";
import Bookmark from "@/Components/Icons/Bookmark";
import {differenceInHours, format, formatDistance, parseISO} from "date-fns";
import {pl} from 'date-fns/locale'
import {Dollar} from "@/Components/Icons/Dollar";
import {Briefcase} from "@/Components/Icons/Briefcase";
import {Pin} from "@/Components/Icons/Pin";
import {Calendar} from "@/Components/Icons/Calendar";
import {router} from "@inertiajs/react";

const JobRow = ({shift, onClick}) => {
    const apply = (shiftId) => {
        router.post(route('staff.shift.apply', {shift: shiftId}), {}, {
            preserveState: true,
            preserveScroll: true,
            onSuccess: () => {
                console.log('success');
            }
        })
    }

    return (
        <div onClick={() => onClick(shift)}
             className="group shadow-sm dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div
                        className="w-16 h-16 object-cover mr-2 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img
                            src="https://edukacja.um.warszawa.pl/documents/66399/49001353/Szpital+Biela%C5%84ski+logo.png/bebcbdba-16af-9128-bb3b-40fbf26ce9b2?version=1.0&t=1650530781517&imagePreview=1"
                            className="size-8" alt=""/>
                    </div>

                    <div className="ms-3">
                        <a href="employer-detail.html"
                           className="block text-[16px] font-semibold hover:text-emerald-600 transition-all duration-500">
                            {shift.institution.name}
                        </a>
                        <span className="block text-sm text-slate-400">{formatDistance(
                            parseISO(shift.created_at),
                            new Date(),
                            {locale: pl},
                        )} temu</span>
                    </div>
                </div>
                <div>
                    <button
                        type={'button'}
                        onClick={() => apply(shift.id)}
                        className="flex items-center justify-center px-3 py-1.5 text-sm tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-xs">
                        <div> Aplikuj</div>
                    </button>
                </div>
            </div>
            <div className={'flex flex-col lg:flex-row lg:gap-6'}>
                <div className={'mt-6 flex flex-row items-center'}>
                    <div
                        className={'flex w-10 h-10 justify-center items-center bg-blue-100 rounded-md text-blue-500 mr-4'}>
                        <Dollar/>
                    </div>
                    <div className={'text-sm'}>
                        <p className={'text-xs text-gray-500'}>Budżet</p>
                        <p>{shift.total_pay} PLN</p>
                    </div>
                </div>
                <div className={'mt-6 flex flex-row items-center'}>
                    <div
                        className={'flex w-10 h-10 justify-center items-center bg-blue-100 rounded-md text-blue-500 mr-4'}>
                        <Briefcase/>
                    </div>
                    <div className={'text-sm'}>
                        <p className={'text-xs text-gray-500'}>Specjalizacja</p>
                        <p>{shift.professional_type.name}</p>
                    </div>
                </div>
                <div className={'mt-6 flex flex-row items-center'}>
                    <div
                        className={'flex w-10 h-10 justify-center items-center bg-blue-100 rounded-md text-blue-500 mr-4'}>
                        <Pin/>
                    </div>
                    <div className={'text-sm'}>
                        <p className={'text-xs text-gray-500'}>Lokalizacja</p>
                        <p>{shift.address.city}</p>
                    </div>
                </div>
                <div className={'mt-6 flex flex-row items-center'}>
                    <div
                        className={'flex w-10 h-10 justify-center items-center bg-blue-100 rounded-md text-blue-500 mr-4'}>
                        <Calendar/>
                    </div>
                    <div className={'text-sm'}>
                        <p className={'text-xs text-gray-500'}>Termin</p>
                        <p>{format(parseISO(shift.start_date), 'HH:mm dd.MM ')}
                            - {format(parseISO(shift.end_date), 'HH:mm dd.MM ')}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div
                        className={`bg-blue-600 h-[6px] rounded-full w-[${(shift.applications_count / shift.available_slots) * 100}%]`}></div>
                </div>
                <div className="mt-2">
                    <span className="text-slate-400 text-sm"><span
                        className="text-slate-900 dark:text-white font-semibold inline-block">{shift.applications_count} aplikacji</span> na {shift.available_slots} miejsc</span>
                </div>
            </div>
        </div>
    )
}

export default JobRow;
