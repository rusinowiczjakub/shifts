import JobBoardAppLayout from "@/Layouts/JobBoardAppLayout";
import Navbar from "@/Partials/JobBoard/Navbar";
import Hero from "@/Partials/JobBoard/Hero";
import {useEffect, useState} from "react";
import {Dialog} from '@headlessui/react'
import JobRow from "@/Partials/JobBoard/JobRow";
import JobFilters from "@/Pages/JobBoard/Partial/JobFilters";
import {useForm} from "@inertiajs/react";
import {AdjustmentsHorizontalIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {Loader} from "@/Components/Loader";

export default function Index({shifts, filters}) {
    const [selectedJob, selectJob] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {data, setData} = useForm({
        city: [],
        professionalType: [],
        periodStart: null,
        periodEnd: null
    });

    useEffect(() => {
        console.log(data)
    }, [data])

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
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between">
                    {!isMobile &&
                        <div className="w-full lg:w-1/4 h-screen overflow-y-auto no-scrollbar pt-20">
                            <div className={'px-2 hidden md:flex flex-col gap-10'}>
                                <JobFilters filters={filters} setData={setData} data={data}/>
                            </div>
                        </div>
                    }
                    {
                        isMobile &&
                        <div className={'w-full border-b border-gray-200 px-2 py-2'}>
                            <div onClick={() => setIsModalOpen(true)}
                                 className={'flex flex-row justify-end cursor-pointer'}>
                                <div className={'text-sm mr-2'}>Filtruj</div>
                                <div className={'w-6 h-6 text-gray-600'}>
                                    <AdjustmentsHorizontalIcon/>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="lg:flex w-full lg:w-2/3 h-full pt-20">
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
                isMobile &&
                <Dialog
                    open={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    <div className="fixed bg-white inset-0 flex flex-col px-4 py-4">
                        <div className={'w-full flex justify-end'}>
                            <button onClick={() => setIsModalOpen(false)} type={'button'} className={'h-6 w-6'}>
                                <XMarkIcon/>
                            </button>
                        </div>
                        <Dialog.Title>
                            Filtruj wyniki wyszukiwania
                        </Dialog.Title>
                        <Dialog.Panel>

                            <JobFilters filters={filters} setData={setData} data={data}/>
                            <div>
                                <button onClick={() => setIsModalOpen(false)}
                                    type={'button'}
                                        className="w-full flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Zastosuj
                                </button>
                            </div>
                        </Dialog.Panel>
                    </div>
                </Dialog>

            }

        </JobBoardAppLayout>
    );
}
