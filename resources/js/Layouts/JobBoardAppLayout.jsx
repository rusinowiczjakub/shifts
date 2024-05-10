import {Dialog} from "@headlessui/react";
import {useEffect, useState} from "react";
import {router, usePage} from "@inertiajs/react";
import {Toast} from "flowbite-react";
import {Check} from "@/Components/Icons/Check";
import {CheckIcon, ExclamationTriangleIcon} from "@heroicons/react/24/outline";

export default function JobBoardApp(props) {
    const {session, flash} = usePage().props;
    const [showLoginRequired, setShowLoginRequired] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const getFlashColor = (status) => {
        switch (status) {
            case 'success':
                return 'green';
            case 'warning':
                return 'yellow';
        }
    }

    const getFlashIcon = (status) => {
        switch (status) {
            case 'success':
                return <CheckIcon/>;
            case 'warning':
                return <ExclamationTriangleIcon/>
        }
    }

    useEffect(() => {
        if (session.requireAuth) {
            setShowLoginRequired(true);
        }
    }, [session])

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
            <Dialog
                as="div"
                open={showLoginRequired} onClose={() => setShowLoginRequired(false)}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true"/>
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <Dialog.Panel className="max-w-xl w-full space-y-4 border bg-white p-12 rounded-md">
                        <Dialog.Title>
                            <h2 className="font-semibold">Nie jesteś zalogowany</h2>
                        </Dialog.Title>
                        <Dialog.Description>
                            Musisz być zalogowany, aby móc w pełni korzystać z aplikacji.
                        </Dialog.Description>
                        <div
                            className="flex flex-col md:flex-row py-6 gap-2 border-y border-gray-100 mb-6">
                            <button type={'button'} onClick={() => router.visit(route('staff.login', {redirectTo: route('jobboard.index')}))}
                                    className="w-full items-center justify-center px-3 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Zaloguj się
                            </button>
                            <button type={'button'} onClick={() => setShowLoginRequired(false)}
                                    className="w-full items-center justify-center px-3 py-4 text-sm font-medium tracking-wide transition-colors duration-300 transform rounded-lg md:w-1/2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 border border-gray-300 text-gray-600">
                                Dzięki, tylko się rozglądam
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
            {
                showToast &&
                flash?.message &&
                <div className={'fixed top-20 right-10 z-50'}>
                    <Toast>
                        <div className={`inline-flex h-8 w-8 p-2 shrink-0 items-center justify-center rounded-lg bg-${getFlashColor(flash?.status)}-100 text-${getFlashColor(flash?.status)}-500 dark:bg-green-800 dark:text-green-200`}>
                            {getFlashIcon(flash?.status)}
                        </div>
                        <div className="pl-4 text-sm font-normal">{flash.message}</div>
                    </Toast>
                </div>
            }
            <div className={'bg-gray-50'}>
                {props.children}
            </div>
        </>
    );
}
