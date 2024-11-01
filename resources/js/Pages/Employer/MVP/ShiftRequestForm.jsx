import GuestLayout from "@/Layouts/GuestLayout";
import {Logo} from "@/Components/Logo";
import {Loader} from "@/Components/Loader";
import {useForm} from "@inertiajs/react";
import {Transition} from "@headlessui/react";

const ShiftRequestForm = ({addresses, professionalTypes, token}) => {
    const { data, setData, errors, processing, post, reset, recentlySuccessful } = useForm({
        start_date: '',
        end_date: '',
        total_pay: '',
        available_slots: '',
        professional_type_id: '',
        address_id: '',
    })


    const updateField = (name, value) => {
        setData(name, value);
        switch (name) {
            case 'start_date':
            case 'end_date':
            case 'total_pay':
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('shift.create', {token}), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
        })
    }

    return (
        <GuestLayout>
            <section className="bg-white dark:bg-gray-900 h-screen flex items-center">
                <div className="container max-w-4xl mx-auto px-6 pt-24 md:pt-0 mx-auto lg:py-32">
                    <div className="flex flex-col justify-center">
                        <div className="w-full flex flex-col items-center">
                            <Logo/>
                            <h1 className="mt-4 text-gray-600 dark:text-gray-300 md:text-lg">Witamy w <span
                                className={'text-blue-600'}>MedShifts</span></h1>

                            <h1 className="mt-4 mb-4 text-2xl font-medium text-gray-800 lg:text-3xl dark:text-white">
                                Formularz zgłoszeniowy nowej zmiany
                            </h1>

                        </div>

                        <div className="">
                            <form name="createForm" onSubmit={handleSubmit}>
                                <div className="space-y-4">

                                    <div>
                                        <label htmlFor="address"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adres pełnienia zmiany</label>
                                        <select value={data.address_id} onChange={(e) => updateField('address_id', e.target.value)} name="professional_type_id" id="professional_type"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required={true}>
                                            <option value={null}>Wybierz opcję</option>
                                            {addresses.map(
                                                (address) =>
                                                    <option key={address.id} value={address.id}>
                                                        [{address.name}] {address.street} {address.building_number}{address.apartment ? `/${address.apartment}` : ''}, {address.postal_code} {address.city}
                                                    </option>
                                            )}

                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="professional_type"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Specjalizacja</label>
                                        <select value={data.professional_type_id} onChange={(e) => updateField('professional_type_id', e.target.value)} name="professional_type_id" id="professional_type"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required={true}>
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
                                        <input value={data.start_date} onChange={(e) => updateField('start_date', e.target.value)} type="datetime-local" name="start_date" id="start_date"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Data początku zmiany" required={true}/>
                                    </div>
                                    <div>
                                        <label htmlFor="end_date"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data końca zmiany</label>
                                        <input value={data.end_date} onChange={(e) => updateField('end_date', e.target.value)} type="datetime-local" name="end_date" id="start_date"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Data końca zmiany" required={true}/>
                                    </div>
                                    <div>
                                        <label htmlFor="total_pay"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Całkowite wynagrodzenie</label>
                                        <input value={data.total_pay} onChange={(e) => updateField('total_pay', e.target.value)} min="0" step="0.01" type="number" name="total_pay" id="total_pay"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Podaj kwotę" required={true}/>
                                    </div>
                                    <div>
                                        <label htmlFor="available_slots"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ilość dostępnych miejsc</label>
                                        <input value={data.available_slots} onChange={(e) => updateField('available_slots', e.target.value)} min="1" step="1" type="number" name="total_pay" id="total_pay"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                               placeholder="Podaj liczbę" required={true}/>
                                    </div>

                                    <div className="flex justify-center items-center w-full pb-4 space-x-4">
                                        <button type={'submit'}
                                                disabled={processing}
                                                className="flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            {
                                                processing &&
                                                <Loader/>
                                            }
                                            {
                                                !processing &&
                                                'Wyślij'
                                            }

                                        </button>
                                        <Transition
                                            show={recentlySuccessful}
                                            enterFrom="opacity-0"
                                            leaveTo="opacity-0"
                                            className="transition ease-in-out ml-2"
                                        >
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Zgłoszenie zostało przyjęte.</p>
                                        </Transition>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="mt-8 md:mt-24 sm:flex sm:items-center">
                        <h3 className="text-blue-500 dark:text-blue-400 sm:w-1/2">Sprawdź nasze sociale</h3>

                        <div className="flex items-center mt-4 sm:mt-0 -mx-1.5 sm:w-1/2">
                            <a className="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                               href="https://www.instagram.com/medshifts.app" target={'_blank'}>
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11.9294 7.72275C9.65868 7.72275 7.82715 9.55428 7.82715 11.825C7.82715 14.0956 9.65868 15.9271 11.9294 15.9271C14.2 15.9271 16.0316 14.0956 16.0316 11.825C16.0316 9.55428 14.2 7.72275 11.9294 7.72275ZM11.9294 14.4919C10.462 14.4919 9.26239 13.2959 9.26239 11.825C9.26239 10.354 10.4584 9.15799 11.9294 9.15799C13.4003 9.15799 14.5963 10.354 14.5963 11.825C14.5963 13.2959 13.3967 14.4919 11.9294 14.4919ZM17.1562 7.55495C17.1562 8.08692 16.7277 8.51178 16.1994 8.51178C15.6674 8.51178 15.2425 8.08335 15.2425 7.55495C15.2425 7.02656 15.671 6.59813 16.1994 6.59813C16.7277 6.59813 17.1562 7.02656 17.1562 7.55495ZM19.8731 8.52606C19.8124 7.24434 19.5197 6.10901 18.5807 5.17361C17.6453 4.23821 16.51 3.94545 15.2282 3.88118C13.9073 3.80621 9.94787 3.80621 8.62689 3.88118C7.34874 3.94188 6.21341 4.23464 5.27444 5.17004C4.33547 6.10544 4.04628 7.24077 3.98201 8.52249C3.90704 9.84347 3.90704 13.8029 3.98201 15.1238C4.04271 16.4056 4.33547 17.5409 5.27444 18.4763C6.21341 19.4117 7.34517 19.7045 8.62689 19.7687C9.94787 19.8437 13.9073 19.8437 15.2282 19.7687C16.51 19.708 17.6453 19.4153 18.5807 18.4763C19.5161 17.5409 19.8089 16.4056 19.8731 15.1238C19.9481 13.8029 19.9481 9.84704 19.8731 8.52606ZM18.1665 16.5412C17.8881 17.241 17.349 17.7801 16.6456 18.0621C15.5924 18.4799 13.0932 18.3835 11.9294 18.3835C10.7655 18.3835 8.26272 18.4763 7.21307 18.0621C6.51331 17.7837 5.9742 17.2446 5.69215 16.5412C5.27444 15.488 5.37083 12.9888 5.37083 11.825C5.37083 10.6611 5.27801 8.15832 5.69215 7.10867C5.97063 6.40891 6.50974 5.8698 7.21307 5.58775C8.26629 5.17004 10.7655 5.26643 11.9294 5.26643C13.0932 5.26643 15.596 5.17361 16.6456 5.58775C17.3454 5.86623 17.8845 6.40534 18.1665 7.10867C18.5843 8.16189 18.4879 10.6611 18.4879 11.825C18.4879 12.9888 18.5843 15.4916 18.1665 16.5412Z"
                                        fill="currentColor"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}

export default ShiftRequestForm;
