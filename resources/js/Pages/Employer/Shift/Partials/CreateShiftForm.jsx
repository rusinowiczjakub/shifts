import {useForm} from "@inertiajs/react";

const CreateShiftForm = ({ professionalTypes, onSubmit = null, dismiss }) => {
    const { data, setData, errors, post, reset } = useForm({
        start_date: null,
        end_date: null,
        total_pay: null,
        available_slots: null,
        professional_type_id: null
    })


    const updateField = (name, value) => {
        setData(name, value);
        switch (name) {
            case 'start_date':
            case 'end_date':
            case 'total_pay':
                calculateHourlyPay();
                break;
        }
    }

    const calculateHourlyPay = () => {
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('shift.create'), {
            onSuccess: () => {
                reset();
                onSubmit();
            }
        })
    }

    return (
        <form name="createForm" onSubmit={handleSubmit}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="professional_type"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specjalizacja</label>
                    <select onChange={(e) => updateField('professional_type_id', e.target.value)} name="professional_type_id" id="professional_type"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                           placeholder="Data końca zmiany" required={true}>
                        <option value={null}>Wybierz opcję</option>
                        {professionalTypes.map(
                            (type) =>
                                <option key={type.id} value={type.id}> {type.name} </option>
                        )}

                    </select>
                </div>
                <div>
                    <label htmlFor="start_date"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data początku zmiany</label>
                    <input onChange={(e) => updateField('start_date', e.target.value)} type="datetime-local" name="start_date" id="start_date"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                           placeholder="Data początku zmiany" required={true}/>
                </div>
                <div>
                    <label htmlFor="end_date"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data końca zmiany</label>
                    <input onChange={(e) => updateField('end_date', e.target.value)} type="datetime-local" name="end_date" id="start_date"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                           placeholder="Data końca zmiany" required={true}/>
                </div>
                <div>
                    <label htmlFor="total_pay"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Całkowite wynagrodzenie</label>
                    <input onChange={(e) => updateField('total_pay', e.target.value)} min="0" step="0.01" type="number" name="total_pay" id="total_pay"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                           placeholder="Podaj kwotę" required={true}/>
                </div>
                <div>
                    <label htmlFor="available_slots"
                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ilość dostępnych miejsc</label>
                    <input onChange={(e) => updateField('available_slots', e.target.value)} min="1" step="1" type="number" name="total_pay" id="total_pay"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                           placeholder="Podaj liczbę" required={true}/>
                </div>

                <div className="flex justify-center w-full pb-4 space-x-4">
                    <button type="submit"
                            className="text-white w-full justify-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Dodaj zmianę
                    </button>
                    <button onClick={dismiss} type="button" data-drawer-dismiss="drawer-create-product-default"
                            aria-controls="drawer-create-product-default"
                            className="inline-flex w-full justify-center text-gray-500 items-center bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        <svg aria-hidden="true" className="w-5 h-5 -ml-1 sm:mr-1" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                        Anuluj
                    </button>
                </div>

            </div>
        </form>
    );
}

export default CreateShiftForm;
