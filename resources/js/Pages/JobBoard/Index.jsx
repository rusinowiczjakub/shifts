import JobBoardAppLayout from "@/Layouts/JobBoardAppLayout";
import Navbar from "@/Partials/JobBoard/Navbar";
import JobsList from "@/Partials/JobBoard/JobsList";
import SelectedJob from "@/Partials/JobBoard/SelectedJob";
import Hero from "@/Partials/JobBoard/Hero";
import {useEffect, useState} from "react";
import {Dialog} from '@headlessui/react'
import JobRow from "@/Partials/JobBoard/JobRow";
import JobFilters from "@/Pages/JobBoard/Partial/JobFilters";
import {useForm} from "@inertiajs/react";

export default function Index({shifts, filters}) {
    const [selectedJob, selectJob] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const { data, setData } = useForm({
        city: [],
        professionalType: [],
        periodStart: null,
        periodEnd: null
    });


    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const handleMediaChange = () => {
            setIsMobile(mediaQuery.matches);
        };

        mediaQuery.addEventListener('change', handleMediaChange);
        handleMediaChange(); // Call it to set initial state

        return () => mediaQuery.removeEventListener('change', handleMediaChange);
    }, []);

    return (
        <JobBoardAppLayout>
            <Hero>
                <Navbar/>
            </Hero>
            <div className="px-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex justify-between">
                    <div className="w-full lg:w-1/4 h-screen overflow-y-auto no-scrollbar pt-20">
                        <div className={'px-2 hidden md:flex flex-col gap-10'}>
                            {/*<div>*/}
                            {/*    <h3 className={'text-lg font-semibold mb-4'}>Specjalizacja</h3>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Pielęgniarstwo*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Położnictwo*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Farmacja*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Fizjoterapia*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*    <h3 className={'text-lg font-semibold mb-4'}>Lokalizacja</h3>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Warszawa*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Poznań*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Wrocław*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Szczecin*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Rzeszów*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*    <div className="flex items-center mb-2">*/}
                            {/*        <input checked={false} type="checkbox"*/}
                            {/*               className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>*/}
                            {/*        <label htmlFor="checked-checkbox"*/}
                            {/*               className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">*/}
                            {/*            Lublin*/}
                            {/*        </label>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <JobFilters filters={filters} setData={setData} data={data}/>
                        </div>
                    </div>
                    <div className="hidden md:flex w-full lg:w-2/3 h-full pt-20">
                        <div className="w-full h-full">
                            {shifts.map((shift) => {
                                return <div className={`mb-4`}>
                                    <JobRow onClick={() => selectJob(shift)} shift={shift}/>
                                </div>

                            })}
                        </div>
                    </div>
                </div>
            </div>
            {
                isMobile && selectedJob &&
                <Dialog
                    as={'div'}
                    className={'fixed inset-0 z-10 overflow-y-auto md:hidden w-screen h-screen'}
                    open={selectedJob !== null} onClose={(e) => {selectJob(null);}}>
                    {/*<Dialog.Panel>*/}
                        <div onClick={() => selectJob(null)} className={'cursor-pointer flex justify-end w-full h-10 bg-blue-500 text-white'}>
                            <div className={'h-10 w-10 flex justify-center items-center'}>X</div>
                        </div>
                        <SelectedJob shift={selectedJob}/>
                    {/*</Dialog.Panel>*/}

                </Dialog>
            }

        </JobBoardAppLayout>
    );
}
