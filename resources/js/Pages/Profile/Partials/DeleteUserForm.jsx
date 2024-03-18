import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import {Loader} from "@/Components/Loader";

export default function DeleteUserForm({ className }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('staff.profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Usuń konto</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Po usunięciu konta wszystkie jego zasoby i dane zostaną trwale usunięte. Przed
                    usunięciem konta należy pobrać wszelkie dane lub informacje, które mają zostać zachowane.
                </p>
            </header>

            <button onClick={confirmUserDeletion}
                    className="flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                {
                    processing &&
                    <Loader/>
                }
                {
                    !processing &&
                    'Usuń konto'
                }

            </button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Czy na pewno chcesz usunąć konto?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Po usunięciu konta wszystkie jego zasoby i dane zostaną trwale usunięte.
                        Wprowadź hasło, aby potwierdzić chęć trwałego usunięcia konta.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Hasło" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Hasło"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button type={'button'} onClick={closeModal}
                                disabled={processing}
                                className="flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 transform bg-white mr-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-800 focus:ring-opacity-50">
                            {
                                processing &&
                                <Loader/>
                            }
                            {
                                !processing &&
                                'Anuluj'
                            }

                        </button>
                        <button type={'submit'}
                                disabled={processing}
                                className="flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50">
                            {
                                processing &&
                                <Loader/>
                            }
                            {
                                !processing &&
                                'Usuń konto'
                            }

                        </button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
