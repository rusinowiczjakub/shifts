import {Trophy} from "@/Components/Icons/Trophy";
import {Briefcase} from "@/Components/Icons/Briefcase";
import {Pin} from "@/Components/Icons/Pin";
import {Dollar} from "@/Components/Icons/Dollar";
import {Clock} from "@/Components/Icons/Clock";
import {differenceInHours, format, parseISO} from "date-fns";
import {Calendar} from "@/Components/Icons/Calendar";
import {Add} from "@/Components/Icons/Add";

const SelectedJob = ({shift}) => {
    return (
        <div className="w-full h-full  bg-white block p-6 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className={'flex items-center justify-between mb-4'}>
                <div className={'flex items-center mb-4'}>
                    <div
                        className={'flex justify-center items-center w-32 h-32 mr-4 group shadow dark:shadow-gray-700 p-6 rounded-md bg-white dark:bg-slate-900'}>
                        <img className={'w-full h-full'}
                             src={'https://brandlive.pl/wp-content/uploads/2019/12/znaki-do-artyku%C5%82u-04-1024x576.jpg'}/>
                    </div>
                    <div>
                        <h2 className={'text-xl font-semibold'}>{shift.institution.name}</h2>
                    </div>
                </div>
                <div className={'flex items-center'}>
                    <button
                            className="flex items-center justify-center px-3 py-1.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <div> Aplikuj</div>
                    </button>
                </div>
            </div>
            <div className={'flex md:items-center flex-col md:flex-row flex-wrap'}>
                <div className={'flex items-center mb-4 md:mb-2 mr-6'}>
                    <div
                        className={'flex justify-center items-center bg-blue-100 rounded-md px-4 py-4 text-blue-500 mr-4'}>
                        <Briefcase/>
                    </div>
                    <div className={'text-gray-600'}>
                        {shift.professional_type.name}
                    </div>
                </div>

                <div className={'flex items-center mb-4 md:mb-2 mr-6'}>
                    <div
                        className={'flex justify-center items-center bg-blue-100 rounded-md px-4 py-4 text-blue-500 mr-4'}>
                        <Pin/>
                    </div>
                    <div className={'text-gray-600'}>
                        {shift.address.street} {shift.address.building_number} <br/>
                        {shift.address.postal_code} {shift.address.city}
                    </div>
                </div>

                <div className={'flex items-center mb-4 md:mb-2 mr-6'}>
                    <div
                        className={'flex justify-center items-center bg-blue-100 rounded-md px-4 py-4 text-blue-500 mr-4'}>
                        <Dollar/>
                    </div>
                    <div className={'text-gray-600'}>
                        {shift.total_pay} PLN
                    </div>
                </div>
                <div className={'flex items-center mb-4 md:mb-2 mr-6'}>
                    <div
                        className={'flex justify-center items-center bg-blue-100 rounded-md px-4 py-4 text-blue-500 mr-4'}>
                        <Clock/>
                    </div>
                    <div className={'text-gray-600'}>
                        {differenceInHours(
                            parseISO(shift.end_date),
                            parseISO(shift.start_date),
                        )} godzin
                    </div>
                </div>
                <div className={'flex items-center mb-4 md:mb-2 mr-6'}>
                    <div
                        className={'flex justify-center items-center bg-blue-100 rounded-md px-4 py-4 text-blue-500 mr-4'}>
                        <Calendar/>
                    </div>
                    <div className={'text-gray-600'}>
                        <span>Od:</span> {format(parseISO(shift.start_date), 'dd/MM/yyyy HH:mm')} <br/>
                        Do: {format(parseISO(shift.end_date), 'dd/MM/yyyy HH:mm')}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SelectedJob;
