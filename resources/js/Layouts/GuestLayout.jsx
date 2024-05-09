import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';
import {Dialog} from "@headlessui/react";
import {format} from "date-fns";
import {useEffect} from "react";

export default function Guest({children}) {
    return (
        <>

            <div className={'bg-[#F5F5F5]'}>
                {children}
            </div>
        </>

    );
}
