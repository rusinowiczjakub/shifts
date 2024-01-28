import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import {Head} from '@inertiajs/react';
import {Tab} from '@headlessui/react';
import UpdateSkillsForm from "@/Pages/Profile/Partials/UpdateSkillsForm";

export default function Edit({auth, mustVerifyEmail, medicalStaffProfile, status}) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Twój
                profil</h2>}
        >
            <Head title="Medshifts - Profil"/>

            <Tab.Group>
                <Tab.List className={'flex bg-white h-12'}>
                    <div className="max-w-7xl h-full w-full mx-auto px-4 sm:px-6 lg:px-8">
                        <div className={'flex h-full'}>
                        <Tab className={'mr-2'}>
                            {({selected}) => (
                                <div className={
                                    'h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                                    (selected
                                            ? 'border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 '
                                            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 '
                                    )
                                }>
                                    Profil zawodowy
                                </div>
                            )}
                        </Tab>
                        <Tab className={'mr-2'}>
                            {({selected}) => (
                                <div className={
                                    'h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                                    (selected
                                            ? 'border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 '
                                            : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 '
                                    )
                                }>
                                    Twoje konto
                                </div>
                            )}
                        </Tab>
                        </div>
                    </div>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>
                        <div className={'py-12'}>
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                    <UpdateSkillsForm skills={medicalStaffProfile.skills} className={'max-w-xl'}/>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                    <Tab.Panel>
                        <div className="py-12">
                            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                    <UpdateProfileInformationForm
                                        mustVerifyEmail={mustVerifyEmail}
                                        status={status}
                                        className="max-w-xl"
                                    />
                                </div>

                                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                    <UpdatePasswordForm className="max-w-xl"/>
                                </div>

                                <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                                    <DeleteUserForm className="max-w-xl"/>
                                </div>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </AuthenticatedLayout>
    );
}
