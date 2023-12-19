import {useForm} from "@inertiajs/react";
import {useState} from "react";

export const Waitlist = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        privacy_policy: false
    })
    const [showToast, setShowToast] = useState(false);

    if (!showToast && props.success) {
        setShowToast(true);
    }
    const submit = (e) => {
        e.preventDefault();

        post(route('landing.lead.create'), {
            preserveScroll: true,
            onSuccess: () => {
                reset('email', 'privacy_policy')
            }
        })
    }

    return (
        <section
            className="relative before:absolute before:inset-0 before:h-px before:w-96 before:bg-gradient-to-r before:from-yellow-300 before:via-pink-400 before:to-transparent after:absolute after:inset-0 after:ml-auto after:mt-auto after:h-px after:w-96 after:bg-gradient-to-l after:from-yellow-300 after:via-pink-400 after:to-transparent">
            <div className="border-y border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-darker">
                <div className="relative mx-auto px-6 md:max-w-full md:px-12 lg:max-w-6xl xl:px-0">
                    <div className="items-center justify-center md:flex">
                        <div className="h-max py-16 md:w-8/12 xl:w-8/12">
                            <div className="text-center md:text-left flex flex-col justify-center items-center">
                                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
                                    Jeden krok <br/>
                                    do <span
                                    className={'relative bg-gradient-to-r from-blue-500 via-blue-500 to-purple-500 bg-clip-text text-transparent'}>wygodnej pracy</span>
                                    <br/>
                                    w ochronie zdrowia
                                </h2>
                                <p className="mb-8 mt-6 text-center text-gray-600 dark:text-gray-300">Zostań na bieżąco z naszymi
                                    aktualizacjami! Wpisz swój adres e-mail, aby być pierwszym, który otrzyma
                                    powiadomienie o starcie aplikacji. Dołącz do społeczności, która zmienia zasady gry
                                    w pracy medycznej</p>
                                {showToast
                                    ? <div className={'mt-2 mb-2 text-blue-500'}>
                                        Dziękujemy za dołączenie do naszej społeczności! Otrzymasz powiadomienia o
                                        starcie aplikacji oraz ekskluzywne informacje. Do zobaczenia wkrótce!
                                    </div>
                                    : <form onSubmit={submit}
                                            className="w-full md:w-8/12  border-transparent focus:border-transparent focus:ring-0">
                                        <div
                                            className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3 mb-4">
                                            <div className="py-3 pl-4 lg:pl-5">
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="m-auto h-6 w-6 fill-gray-500 dark:fill-gray-400"
                                                     viewBox="0 0 20 20" fill="currentColor">
                                                    <path
                                                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                    <path
                                                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                                </svg>
                                            </div>
                                            <input required value={data.email}
                                                   onChange={(e) => setData('email', e.target.value)}
                                                   placeholder="Adres email"
                                                   className="w-full rounded-full border-0 border-transparent focus:border-transparent focus:ring-0 bg-transparent p-4 placeholder-gray-600 dark:placeholder-white"
                                                   type="email"/>
                                            <div className="md:pr-1.5 lg:pr-0">
                                                <button type="submit" title="Start buying"
                                                        className="relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6">
                                                <span
                                                    className="relative w-max font-semibold text-blue-600 dark:text-gray-900 md:block"> Zapisz się </span>

                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <input required checked={data.privacy_policy}
                                                   onChange={(e) => setData('privacy_policy', e.target.checked)}
                                                   id="checked-checkbox-2" type="checkbox"
                                                   className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label htmlFor="checked-checkbox-2"
                                                   className="ms-2 text-sm font-medium text-gray-500 dark:text-gray-300">
                                                Rozumiem i akceptuję <a className={'text-blue-500'}
                                                                        href={'/documents/polityka_prywatnosci.pdf'}
                                                                        target={'_blank'}>Politykę Prywatności</a>,
                                                zgadzając się na otrzymywanie powiadomień dotyczących aplikacji oraz
                                                informacji marketingowych.
                                            </label>
                                        </div>
                                    </form>
                                }
                            </div>
                            <div className={'mt-4 text-gray-600 text-center text-sm'}>
                                W przypadku pytań prosimy o kontakt na adres email: kontakt@medshifts.app
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
