import {Link, usePage} from "@inertiajs/react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import {useState} from "react";

export const Header = () => {
    const {auth} = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <header>
            <nav id="navbar"
                 className="inset-x-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur dark:border-gray-700/30 dark:bg-gray-900/80">
                <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 lg:gap-0 lg:py-4">
                        <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                            <a href="/" aria-label="logo" className="flex items-center py-2 space-x-2">
                                <img className={'w-12 h-12'} src={'./images/logo.png'}/>
                            </a>

                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div id="layer" aria-hidden="true"
                             className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"></div>
                        <div id="navlinks"
                             className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-auto lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0 dark:lg:bg-transparent">
                            <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                <ul className="flex items-center space-y-6 text-base font-medium tracking-wide lg:flex lg:space-y-0 lg:text-sm">
                                    <li>
                                        <Link
                                            className={`block transition hover:text-primary dark:hover:text-primaryLight md:px-4 ${route().current('landing') ? 'text-blue-500' : ''}`}
                                            href="/">
                                            <span>Strona główna</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`block transition hover:text-primary dark:hover:text-primaryLight md:px-4 ${route().current('jobboard.index') ? 'text-blue-500' : ''}`}
                                            href={route('jobboard.index')}>
                                            <span>Oferty zmian</span>
                                        </Link>
                                    </li>
                                    {
                                        auth?.user &&
                                        <li>
                                            <Link
                                                className={`flex flex-row justify-between items-center gap-3 transition hover:text-primary dark:hover:text-primaryLight md:px-4`}
                                                href={route('staff.profile.edit')}>
                                                <img className={'w-10 h-10 rounded-full'}
                                                     src={auth.user?.profile_photo_url}/>
                                                <span>{auth.user.name}</span>
                                            </Link>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink href={route('landing')} active={route().current('landing')}>
                            Strona główna
                        </ResponsiveNavLink>
                        <ResponsiveNavLink href={route('jobboard.index')} active={route().current('jobboard.index')}>
                            Oferty zmian
                        </ResponsiveNavLink>
                    </div>

                    {
                        auth.user &&
                        <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                            <ResponsiveNavLink href={route('staff.profile.edit')} className={'px-4 flex flex-row gap-3'}>
                                <img className={'w-10 h-10 rounded-full'} src={auth.user?.profile_photo_url}/>
                                <div>
                                    <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                        {auth.user?.name}
                                    </div>
                                    <div className="font-medium text-sm text-gray-500">{auth.user.email}</div>
                                </div>
                            </ResponsiveNavLink>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}
