import {Head, router, useForm} from '@inertiajs/react';
import AuthenticatedEmployer from "@/Layouts/AuthenticatedEmployerLayout";
import CreateShiftForm from "@/Pages/Employer/Shift/Partials/CreateShiftForm";
import ShiftTable from "@/Pages/Employer/Shift/Partials/ShiftTable";
import DashboardHeader from "@/Components/DashboardHeader";
import {useEffect, useState} from "react";
import { Button, Modal } from "flowbite-react";
import ApplicationsList from "@/Pages/Employer/Shift/Partials/ApplicationsList";
import ApplicationDetails from "@/Pages/Employer/Shift/Partials/ApplicationDetails";

export default function ShiftList(props) {
    const [createModalOpened, setCreateModalOpened] = useState(false);
    const [applicationsModalOpened, setApplicationsModalOpened] = useState(false);
    const [applicationDetailsOpened, setApplicationsDetailsOpened] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);
    console.log(props);

    useEffect(() => {
        if (props.selectedShift) {
            setApplicationsModalOpened(true);
        }

        if (props.selectedApplication) {
            setApplicationsDetailsOpened(true);
            setApplicationsModalOpened(false);
        }

    }, [])

    const openCreationModal = () => {
        setCreateModalOpened(true);
    }

    const closeCreationModal = () => {
        setCreateModalOpened(false);
    }

    return (
        <AuthenticatedEmployer
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Zmiany</h2>}
        >
            <Head title="Zmiany" />

            <DashboardHeader heading={'Zmiany'}>
                <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                    <Button onClick={openCreationModal}>
                        Nowa zmiana
                    </Button>
                </div>
            </DashboardHeader>
            <div>
                <ShiftTable onRowSelected={setSelectedRows} selectedRows={selectedRows} shifts={props.shifts}/>
            </div>
            <Modal show={createModalOpened} size="lg" onClose={closeCreationModal}>
                <Modal.Header>
                    Nowa Zmiana
                </Modal.Header>
                <Modal.Body>
                    <CreateShiftForm onSubmit={closeCreationModal} dismiss={closeCreationModal} professionalTypes={props.dicts?.professionalTypes}/>
                </Modal.Body>
                {/*<Modal.Footer>*/}

                {/*</Modal.Footer>*/}
            </Modal>
            <Modal show={applicationsModalOpened} onClose={() => router.visit('/employer/shift')}>
                <Modal.Header>
                    Aplikacje
                </Modal.Header>
                <Modal.Body>
                    <ApplicationsList shift={props.selectedShift} applications={[]}/>
                </Modal.Body>
            </Modal>
            <Modal show={applicationDetailsOpened} onClose={() => window.history.back()}>
                <Modal.Header>
                    Aplikacja - Jan Kowalski - szczegóły
                </Modal.Header>
                <Modal.Body>
                    <ApplicationDetails/>
                </Modal.Body>
            </Modal>
            {/*<div id="drawer-create-product-default"*/}
            {/*     className="fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform bg-white dark:bg-gray-800 translate-x-full"*/}
            {/*     tabIndex="-1" aria-labelledby="drawer-label" aria-hidden="true">*/}

            {/*</div>*/}

        </AuthenticatedEmployer>
    );
}
