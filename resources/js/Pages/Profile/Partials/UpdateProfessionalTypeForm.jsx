import {CheckboxCardGroup} from "@/Components/CheckboxCardGroup";
import {CheckboxCard} from "@/Components/CheckboxCard";
import {useForm} from "@inertiajs/react";
import {Loader} from "@/Components/Loader";
import {Transition} from "@headlessui/react";
import InputError from "@/Components/InputError";

export default function UpdateProfessionalTypeForm({className, professionalTypes, userProfessionalTypes}) {
    const {data, setData, put, processing, errors, reset, recentlySuccessful} = useForm({
        professionalTypes: userProfessionalTypes.map((type) => type.id)
    })

    const isChecked = (id) => {
        return userProfessionalTypes.filter(type => type.id === id).length > 0
    }

    const submit = (e) => {
        e.preventDefault();
        put(route('staff.profile.professional-types.update'), {
            onSuccess: () => {
                console.log('updated');
            },
            preserveScroll: true
        })
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Specjalizacja</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Dodaj informacje dotyczące Twoich specjalizacji (wybierz co najmniej 1).
                </p>
            </header>
            <div>
                <form onSubmit={submit} className="w-full lg:max-w-xl">
                    <CheckboxCardGroup
                        onChange={(data) => setData('professionalTypes', data)}
                        value={data.professionalTypes}
                    >
                        {professionalTypes.map(
                            (type) => <CheckboxCard key={'professional-type-' + type.id} value={type.id} label={type.name}/>
                        )}
                    </CheckboxCardGroup>

                    <InputError className="mt-2" message={errors.professionalTypes} />

                    <div className="flex items-center gap-4 mt-4">
                        <button type={'submit'}
                                disabled={processing}
                                className="flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            {
                                processing &&
                                <Loader/>
                            }
                            {
                                !processing &&
                                'Zapisz'
                            }

                        </button>

                        <Transition
                            show={recentlySuccessful}
                            enterFrom="opacity-0"
                            leaveTo="opacity-0"
                            className="transition ease-in-out"
                        >
                            <p className="text-sm text-gray-600 dark:text-gray-400">Zapisano.</p>
                        </Transition>
                    </div>

                </form>
            </div>
        </section>
    );
}

