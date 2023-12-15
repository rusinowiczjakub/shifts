import {Tabs, Card, Button} from 'flowbite-react'
import AuthenticatedEmployer from "@/Layouts/AuthenticatedEmployerLayout";
import {Head} from "@inertiajs/react";
import CompanySettings from "@/Pages/Employer/Settings/Partial/CompanySettings";
import DashboardHeader from "@/Components/DashboardHeader";
import Addresses from "@/Pages/Employer/Settings/Partial/Addresses";


export default function Settings(props) {
    const submitGeneral = () => {

    }
    console.log(props);

    return (
        <AuthenticatedEmployer
            auth={props.auth}
            errors={props.errors}
            header={<h2
                className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Ustawienia</h2>}
        >
            <Head title="Ustawienia"/>
            <DashboardHeader heading={'Ustawienia'} breadcrumbs={['Ustawienia']}>
                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                </div>
            </DashboardHeader>
            <Tabs color={'blue'} style="underline" theme={{
                tablist: {
                    base: 'bg-white flex text-center'
                },
            }}>
                <Tabs.Item title="Ogólne" className={'px-4 py-2'}>
                    <div className={'grid grid-cols-3 gap-4'}>
                        <div className={'col-span-3 xl:col-span-1'}>
                            <Card className={'m-2'}>
                                <div
                                    className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                                    <img className="mb-4 rounded-lg w-28 h-28 sm:mb-0 xl:mb-4 2xl:mb-0"
                                         src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
                                         alt="Jese picture"/>
                                    <div>
                                        <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">Profile
                                            picture</h3>
                                        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                                            JPG, GIF or PNG. Max size of 800K
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <button type="button"
                                                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                <svg className="w-4 h-4 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path>
                                                    <path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path>
                                                </svg>
                                                Upload picture
                                            </button>
                                            <button type="button"
                                                    className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className={'col-span-3 xl:col-span-2'}>
                            <Card className={'m-2 mb-8'}>
                                <h3 className="mb-2 text-xl font-semibold dark:text-white">Dane firmowe</h3>
                                <CompanySettings institution={props.institution}/>
                            </Card>
                            <Card className={'m-2'}>
                                <h3 className={'mb-2 text-xl font-semibold dark:text-white'}>Zmiana hasła</h3>
                            </Card>
                        </div>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Adresy" className={'px-4'}>
                    <div className={'grid grid-cols-3 gap-4 p-2'}>
                        <div className={'col-span-3 xl:col-span-1'}>
                            <div
                               className="flex items-center rounded-lg bg-blue-500 p-3 text-base text-gray-100">
                                <div>

                                </div>
                                <div className="ml-3 flex-1">Dodaj adresy pod którymi będziesz zgłaszał zapotrzebowanie na personel</div>
                            </div>
                        </div>
                        <div className={'col-span-3 xl:col-span-2'}>
                            <Card>
                                <Addresses addresses={props.institution.addresses}/>
                            </Card>
                        </div>
                    </div>
                </Tabs.Item>
            </Tabs>

            {/*<Tabs aria-label="Tabs with underline" style="underline" className={'px-4'}>*/}
            {/*    <Tabs.Item title="Dane firmowe" className={'px-4 py-2'}>*/}
            {/*        <Card className={'px-4 py-2'}>*/}
            {/*            <CompanySettings institution={props.institution}/>*/}
            {/*        </Card>*/}
            {/*    </Tabs.Item>*/}
            {/*    <Tabs.Item title="Placówki">*/}

            {/*    </Tabs.Item>*/}
            {/*    <Tabs.Item title="Konto">*/}

            {/*    </Tabs.Item>*/}
            {/*</Tabs>*/}

        </AuthenticatedEmployer>
    )
}
