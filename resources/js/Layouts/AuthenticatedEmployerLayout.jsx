import {useState} from 'react';
import Sidebar from "@/Partials/Sidebar";
import Navbar from "@/Partials/Navbar";


export default function AuthenticatedEmployer({auth, header, children}) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
            <Navbar/>
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
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
