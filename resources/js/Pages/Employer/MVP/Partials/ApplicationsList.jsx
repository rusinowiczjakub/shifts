import {CheckIcon, EyeIcon, XMarkIcon} from "@heroicons/react/24/outline";
import {router} from "@inertiajs/react";

const ApplicationsList = ({applications, token}) => {
    const randomiseSensitiveData = (value) => {
        let randomStr = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Characters used to generate the random string

        for (let i = 0; i < value.length; i++) {
            randomStr += characters.charAt(Math.floor(Math.random() * characters.length)); // Randomly pick characters from the pool of characters and append them to the string
        }

        return randomStr;
    }

    const accept = (application) => {
        router.post(
            route('employer.application.change-status', {
                application,
                status: 'ACCEPTED',
                token
            }),
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {

                }
            }
        )
    }

    const decline = (application) => {
        router.post(
            route('employer.application.change-status', {
                application,
                status: 'DECLINED',
                token
            }),
            {},
            {
                preserveScroll: true,
                preserveState: true
            }
        )
    }

    const renderStatus = (status) => {
        switch (status) {
            case 'REQUESTED':
                return <p
                    className="flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Oczekujące</p>
            case 'ACCEPTED':
                return <p
                    className="flex items-center bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Zaakceptowane</p>
            case 'DECLINED':
                return <p
                    className="flex items-center bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Odrzucone</p>

        }
    }

    return (
        <ul role="list" className="divide-y divide-gray-100 w-full max-h-[500px] overflow-y-scroll no-scrollbar">
            {
                applications.map(
                    (application, key) => <li key={key} className="flex justify-between items-center gap-x-6 py-5">
                        <div className="flex min-w-0 gap-x-4">
                            <img className="h-12 w-12 flex-none rounded-full bg-gray-50"
                                 src={application.medical_staff?.user?.profile_photo_url}
                                 alt=""/>
                            <div className="min-w-0 flex-auto">
                                <p className="text-sm font-semibold leading-6 text-gray-900">
                                    {application.medical_staff?.user?.name}
                                </p>
                                <p className="relative mt-1 truncate text-xs leading-5 text-gray-500">
                                    {
                                        application.status !== 'ACCEPTED' &&
                                        <div
                                            className={'absolute w-full h-full top-0 l-0 backdrop-blur-sm bg-white/10'}></div>
                                    }
                                    {
                                        application.status !== 'ACCEPTED'
                                            ? randomiseSensitiveData(application.medical_staff?.user?.email)
                                            : application.medical_staff?.user?.email
                                    }
                                </p>
                            </div>
                        </div>
                        <div>

                            <div className="text-xs flex gap-2">
                                {
                                    renderStatus(application.status)
                                }
                                <button onClick={() => {
                                    open(route('employer.profile-preview', {
                                        token: token,
                                        application: application
                                    }), '_blank', {popup: true})
                                }}
                                        className={'w-6 h-6 p-1 border text-gray-500 border-gray-500 rounded-md'}>
                                    <EyeIcon/>
                                </button>
                                {
                                    application.status === 'REQUESTED' &&
                                    <>
                                        <button
                                            onClick={() => accept(application)}
                                            className={'hover:bg-blue-400 hover:text-white w-6 h-6 p-1 border text-blue-500 border-blue-500 rounded-md'}>
                                            <CheckIcon/>
                                        </button>
                                        <button onClick={() => decline(application)}
                                                className={'hover:bg-red-400 hover:text-white w-6 h-6 p-1 border text-red-400 border-red-400 rounded-md'}>
                                            <XMarkIcon/>
                                        </button>
                                    </>
                                }
                            </div>
                            <p className="mt-1 text-xs leading-5 text-gray-500">

                            </p>
                        </div>
                    </li>
                )
            }
        </ul>
    )
}

export default ApplicationsList
