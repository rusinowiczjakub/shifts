import {Dialog} from "@headlessui/react";
import {useEffect, useState} from "react";
import {router, usePage} from "@inertiajs/react";

export default function JobBoardApp(props) {
    const {session} = usePage().props;
    const [showLoginRequired, setShowLoginRequired] = useState(false);

    useEffect(() => {
        if (session.requireAuth) {
            setShowLoginRequired(true);
        }
    }, [session])

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
                            className="flex flex-col md:flex-row py-6 border-y border-gray-100 mb-6">
                            <button type={'button'} onClick={() => router.visit(route('staff.login', {redirectTo: route('jobboard.index')}))}
                                    className="w-full items-center justify-center mr-2 px-3 py-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg md:w-1/2 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Zaloguj się
                            </button>
                            <button type={'button'} onClick={() => setShowLoginRequired(false)}
                                    className="w-full items-center justify-center ml-2 px-3 py-4 text-sm font-medium tracking-wide transition-colors duration-300 transform rounded-lg md:w-1/2 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 border border-gray-300 text-gray-600">
                                Dzięki, tylko się rozglądam
                            </button>
                        </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
            <div className={'bg-gray-50'}>
                {props.children}
            </div>
        </>
    );
}
