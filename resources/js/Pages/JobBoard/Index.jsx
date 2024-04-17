import JobBoardAppLayout from "@/Layouts/JobBoardAppLayout";
import Navbar from "@/Partials/JobBoard/Navbar";
import JobsList from "@/Partials/JobBoard/JobsList";
import SelectedJob from "@/Partials/JobBoard/SelectedJob";
import Hero from "@/Partials/JobBoard/Hero";
import {useEffect, useState} from "react";
import {Dialog} from '@headlessui/react'

export default function Index({shifts}) {
    const [selectedJob, selectJob] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

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
                <div className="container mx-auto flex">
                    <div className="w-full lg:w-1/3 h-screen overflow-y-auto no-scrollbar pr-6 pt-20">
                        <div>
                            <JobsList shifts={shifts} onSelect={selectJob} selected={selectedJob}/>
                        </div>
                    </div>
                    <div className="hidden md:flex w-full lg:w-2/3 h-full pt-20">
                        <div className="w-full h-full">
                            {selectedJob && <SelectedJob shift={selectedJob}/>}

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
