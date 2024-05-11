import GuestLayout from "@/Layouts/GuestLayout";
import {Logo} from "@/Components/Logo";
import Calendar from "@/Pages/Employer/MVP/Partials/Calendar";
import {format, parse} from "date-fns";
import {pl} from "date-fns/locale";
import {Popover} from "@headlessui/react";
import {QuestionMarkCircleIcon} from "@heroicons/react/24/outline";


const ProfilePreview = ({application}) => {
    console.log(application);
    return (
        <GuestLayout>
            <section className="bg-white dark:bg-gray-900 pt-12 pb-8     flex items-center">
                <div className="container max-w-4xl mx-auto px-6 md:pt-0">
                    <div className="flex flex-col justify-center">
                        <div className="w-full flex flex-col items-center">
                            <Logo/>
                            <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Witamy w <span
                                className={'text-blue-600'}>MedShifts</span></h1>

                            <h1 className="mt-4 mb-4 text-2xl font-medium text-gray-800 lg:text-3xl dark:text-white">
                                Podgląd profilu
                            </h1>

                        </div>
                    </div>
                    <div className="">
                        <div className={''}>
                            <div className="px-4 sm:px-0">
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Dane aplikującego</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Dane o użytowniku</p>
                            </div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Imię i nazwisko</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{application?.medical_staff?.user?.name}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Specjalizacje</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {application?.medical_staff?.professional_types?.map(
                                                (type, index) => (
                                                    <span key={index}>
                                                        {type.name}
                                                        {index < (application.medical_staff.professional_types.length - 1) && ', '}
                                                    </span>
                                                )
                                            )}
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Adres email</dt>
                                        <dd className="relative flex flex-row gap-2 items-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {
                                                application.status !== 'ACCEPTED' &&
                                                <div
                                                    className={'absolute w-full h-full top-0 l-0 backdrop-blur-sm bg-white/10'}></div>
                                            }

                                            {
                                                application.status !== 'ACCEPTED'
                                                    ? 'adres@email.hidden'
                                                    : application.medical_staff?.user?.email
                                            }

                                            <Popover className="relative">
                                                <Popover.Button as={'div'} className={'w-5 h-5 cursor-pointer'}>
                                                    <QuestionMarkCircleIcon/>
                                                </Popover.Button>

                                                <Popover.Panel className="absolute top-0 left-5 z-10 bg-white shadow-md p-2 rounded-md">
                                                    Dostępne po zaakceptowaniu
                                                </Popover.Panel>
                                            </Popover>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Numer telefonu
                                        </dt>
                                        <dd className="relative flex flex-row gap-2 items-center mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {
                                                application.status !== 'ACCEPTED' &&
                                                <div
                                                    className={'absolute w-full h-full top-0 l-0 backdrop-blur-sm bg-white/10'}></div>
                                            }

                                            {
                                                application.status !== 'ACCEPTED'
                                                    ? '+48 XXX XXX XXX'
                                                    : application.medical_staff?.user?.phone_number
                                            }

                                            <Popover className="relative">
                                                <Popover.Button as={'div'} className={'w-5 h-5 cursor-pointer'}>
                                                    <QuestionMarkCircleIcon/>
                                                </Popover.Button>

                                                <Popover.Panel className="absolute top-0 left-5 z-10 bg-white shadow-md p-2 rounded-md">
                                                    Dostępne po zaakceptowaniu
                                                </Popover.Panel>
                                            </Popover>
                                        </dd>
                                    </div>
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Bio</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            {application.medical_staff?.bio}
                                        </dd>
                                    </div>
                                    {/*<div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">*/}
                                    {/*    <dt className="text-sm font-medium leading-6 text-gray-900">Umiejętności i*/}
                                    {/*        certyfikaty*/}
                                    {/*    </dt>*/}
                                    {/*    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">*/}
                                    {/*        {application.medical_staff?.skills.map(*/}
                                    {/*            (skill) => {*/}

                                    {/*            }*/}
                                    {/*        )}*/}
                                    {/*    </dd>*/}
                                    {/*</div>*/}
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Doświadczenie
                                            zawodowe
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            <ol className="relative border-s border-gray-200 dark:border-gray-700">

                                                {application.medical_staff?.experiences.map(
                                                    (experience) =>
                                                        <li className="mb-10 ms-4">
                                                            <div
                                                                className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                            <time
                                                                className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                                                {format(parse(experience.period_start, 'yyyy-MM-dd HH:mm:ss', new Date()), 'MMM yyyy', {locale: pl})} - {experience.period_end === null ? 'obecnie' : format(parse(experience.period_end, 'yyyy-MM-dd HH:mm:ss', new Date()), 'MMM yyyy', {locale: pl})}
                                                            </time>
                                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                                {experience.company}
                                                            </h3>
                                                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                                                {experience.description}
                                                            </p>
                                                        </li>
                                                )}
                                            </ol>

                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}

export default ProfilePreview;
