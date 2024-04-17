import SpecializationPill from "@/Partials/JobBoard/SpecializationPill";
import { Rating } from "flowbite-react";
import Bookmark from "@/Components/Icons/Bookmark";
import {differenceInHours, formatDistance, parseISO} from "date-fns";
import { pl } from 'date-fns/locale'

const JobRow = ({shift, onClick}) => {
    console.log(shift);
    return (
        // <a href="#"
        //    className="block p-6 bg-white hover:rounded-lg dark:bg-gray-800 border-b">
        //     <div className="flex flex-row items-center my-1 justify-between">
        //         <div>
        //             <img src={'https://img.redro.pl/obrazy/szpital-logo-zdrowia-700-90031093.jpg'} className={'w-16 h-16 object-cover'} />
        //         </div>
        //         <div>
        //             <h2 className={'text-lg'}>Looking for CN for...</h2>
        //             <p className={'text-sm text-gray-400'}>We are looking for CN for night shift...</p>
        //         </div>
        //         <div>
        //             <div className={'border rounded-md border-gray-200 p-2'}>
        //                 <Bookmark className={'w-6 h-6 text-gray-500'}/>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="my-1 mb-4">
        //         <div className="flex flex-row flex-wrap">
        //             <SpecializationPill>Intensywna terapia</SpecializationPill>
        //             <SpecializationPill>Kwalifikowana pięlęgniarka</SpecializationPill>
        //             <SpecializationPill>12h, 19:00 - 07:00</SpecializationPill>
        //             <SpecializationPill>920 PLN / 12h</SpecializationPill>
        //             <SpecializationPill>3 wolne miejsca</SpecializationPill>
        //         </div>
        //     </div>
        //     <div className="my-1">
        //         <Rating>
        //             <Rating.Star />
        //             <Rating.Star />
        //             <Rating.Star />
        //             <Rating.Star />
        //             <Rating.Star />
        //         </Rating>
        //     </div>
        // </a>
        <div onClick={() => onClick(shift)} className="group shadow-sm dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div
                        className="w-16 h-16 object-cover mr-2 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                        <img src="https://edukacja.um.warszawa.pl/documents/66399/49001353/Szpital+Biela%C5%84ski+logo.png/bebcbdba-16af-9128-bb3b-40fbf26ce9b2?version=1.0&t=1650530781517&imagePreview=1" className="size-8" alt=""/>
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

                <span
                    className="bg-blue-600/10 group-hover:bg-blue-600 inline-block text-blue-600 group-hover:text-white text-xs px-2.5 py-0.5 font-semibold rounded-full transition-all duration-500">
                    {shift.total_pay} PLN / <span className={'text-xxs'}>{differenceInHours(
                        parseISO(shift.end_date),
                        parseISO(shift.start_date),
                )} godzin</span>
                </span>
            </div>

            <div className="mt-6">
                <a href="job-detail-three.html"
                   className="text-lg hover:text-blue-600 font-semibold transition-all duration-500">{shift.professional_type.name}</a>
                <h6 className="text-base font-medium">
                    <i className="uil uil-map-marker"></i>
                    {shift.address.city}
                </h6>
            </div>

            <div className="mt-6">
                <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-[6px]">
                    <div className={`bg-blue-600 h-[6px] rounded-full w-[${(shift.applications_count / shift.available_slots) * 100}%]`}></div>
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
