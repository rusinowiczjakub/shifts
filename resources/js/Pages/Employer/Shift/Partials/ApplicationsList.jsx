import {Link} from "@inertiajs/react";

const ApplicationRow = ({shift, application}) => {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="shrink-0">
                    <img
                        className="h-8 w-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                        alt="Neil image"
                    />
                </div>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        Neil Sims
                    </p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        email@windster.com
                    </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                </div>
                <div>
                    <Link href={`/employer/shift/${shift?.id}/applications/${application?.id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </li>
    );
}

const ApplicationsList = ({shift, applications}) => {
    return (
        <div>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                <ApplicationRow shift={shift} application={{id: 1}}/>
            </ul>
        </div>
    );
}

export default ApplicationsList;
