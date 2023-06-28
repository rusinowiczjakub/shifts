import {parseISO, parse, format} from "date-fns";
import {Avatar, Modal} from "flowbite-react";
import {useState} from "react";
import ApplicationsList from "@/Pages/Employer/Shift/Partials/ApplicationsList";
import {Link} from "@inertiajs/react";

const ShiftRow = ({shift, selectRowHandler, showRowDetails = null, selected = false}) => {
    shift = {
        ...shift,
        start_date: format(parseISO(shift.start_date), 'dd/MM/yyyy HH:mm'),
        end_date: format(parseISO(shift.end_date), 'dd/MM/yyyy HH:mm')
    }
    return (
        <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
            <td className="w-4 p-4">
                <div className="flex items-center">
                    <input onChange={e => selectRowHandler(e, shift.id)} id={`checkbox-${shift.id}`} checked={selected}
                           aria-describedby="checkbox-1" type="checkbox"
                           className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor={`checkbox-${shift.id}`} className="sr-only">checkbox</label>
                </div>
            </td>
            <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                {shift?.professional_type?.name || 'Kwalifikowana pielęgniarka'}
            </td>
            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {shift.start_date}
            </td>
            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {shift.end_date}
            </td>
            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <Link href={`/employer/shift/${shift.id}/applications?type=${'all'}`}>
                    <Avatar.Group>
                        <Avatar
                            rounded={true}
                            stacked={true}
                        />
                        <Avatar
                            rounded={true}
                            stacked={true}
                        />
                        <Avatar
                            rounded={true}
                            stacked={true}
                        />
                        <Avatar.Counter className={'cursor-pointer'} total={99}/>
                    </Avatar.Group>
                </Link>
            </td>
            <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                {shift.total_pay}
            </td>
            <td className="p-4 space-x-2 whitespace-nowrap">
                {/*<button type="button" data-modal-toggle="edit-user-modal"*/}
                {/*        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">*/}
                {/*    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"*/}
                {/*         xmlns="http://www.w3.org/2000/svg">*/}
                {/*        <path*/}
                {/*            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>*/}
                {/*        <path fill-rule="evenodd"*/}
                {/*              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"*/}
                {/*              clip-rule="evenodd"></path>*/}
                {/*    </svg>*/}
                {/*    Edit user*/}
                {/*</button>*/}
                {/*<button type="button" data-modal-toggle="delete-user-modal"*/}
                {/*        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">*/}
                {/*    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"*/}
                {/*         xmlns="http://www.w3.org/2000/svg">*/}
                {/*        <path fill-rule="evenodd"*/}
                {/*              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"*/}
                {/*              clip-rule="evenodd"></path>*/}
                {/*    </svg>*/}
                {/*    Delete user*/}
                {/*</button>*/}
            </td>
        </tr>
    )
}

const ShiftTable = ({shifts, onRowSelected, selectedRows}) => {
    const [showApplications, setShowApplications] = useState(-1);

    const columns = [
        'Specjalista',
        'Początek zmiany',
        'Koniec zmiany',
        'Aplikacje',
        'Wynagrodzenie',
        ''
    ];

    const selectAllRows = (e) => {
        if (e.target.checked) {
            onRowSelected(shifts.map(s => s.id));
            return;
        }

        onRowSelected([]);
    }

    const selectRow = (e, id) => {
        if (e.target.checked) {
            onRowSelected([...selectedRows, id]);
            return;
        }

        onRowSelected(selectedRows.filter(r => r !== id));
    }

    const isSelected = (id) => {
        return selectedRows.includes(id);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input onChange={e => selectAllRows(e)} id="checkbox-all"
                                                   aria-describedby="checkbox-1" type="checkbox"
                                                   className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    {columns.map((name, index) => (
                                        <th key={index} scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                            {name}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {shifts.map((shift) =>
                                    <ShiftRow
                                        selected={isSelected(shift.id)}
                                        selectRowHandler={selectRow}
                                        showRowDetails={() => setShowApplications(1)}
                                        key={shift.id} shift={shift}/>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showApplications !== -1} size="lg" onClose={() => setShowApplications(-1)}>
                <Modal.Header>
                    Aplikacje - [...]
                </Modal.Header>
                <Modal.Body>
                    <ApplicationsList applications={[]}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ShiftTable;
