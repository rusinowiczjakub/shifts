import {useEffect, useState} from 'react';
import Sidebar from "@/Partials/Sidebar";
import Navbar from "@/Partials/Navbar";
import {usePage} from "@inertiajs/react";
import {Toast} from 'flowbite-react';
import {Check} from "@/Components/Icons/Check";

export default function AuthenticatedEmployer({auth, header, children}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);
    const {flash} = usePage().props
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const flashTimer = setTimeout(() => {
            setShowToast(false);
        }, 3000)

        if (flash.message) {
            setShowToast(true)
        }

        return () => {
            clearTimeout(flashTimer);
        };
    }, [flash])

    return (
        <>
            <Navbar/>
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                {
                    showToast &&
                    flash?.message &&
                    <div className={'fixed top-20 right-10 z-50'}>
                        <Toast>
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
                                <Check/>
                            </div>
                            <div className="pl-4 text-sm font-normal">{flash.message}</div>
                        </Toast>
                    </div>
                }
                <Sidebar/>
                <div id="main-content"
                     className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">

                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}
