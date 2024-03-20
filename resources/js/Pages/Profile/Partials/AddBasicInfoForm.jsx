import {CheckboxCardGroup} from "@/Components/CheckboxCardGroup";
import {CheckboxCard} from "@/Components/CheckboxCard";
import {useForm} from "@inertiajs/react";
import {Loader} from "@/Components/Loader";
import {Combobox, Transition} from "@headlessui/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import {useState} from "react";

export default function AddBasicInfoForm({className, profile, user}) {
    const [cities, setCities] = useState([]);
    const {data, setData, post, transform, processing, errors, recentlySuccessful, reset} = useForm({
        name: user.name,
        bio: profile.bio,
        city: profile.city
    })

    const submit = (e) => {
        e.preventDefault();
        transform((data) => ({
            ...data,
            city: data.city.id
        }));

        post(route('staff.profile.basic'))
    }

    const loadCities = async (cityName) => {
        const citiesReq = await fetch(route('dictionary.cities', {cityName: cityName}), {
            method: 'GET'
        });

        setCities(await citiesReq.json());

    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Podstawowe informacje o Tobie</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Uzupełnij swoje imię i nazwisko, miasto i napisz nam kilka słów o sobie (opcjonalnie).
                </p>
            </header>
            <div>
                <form onSubmit={submit} className="w-full lg:max-w-xl">
                    <div className={'mb-4'}>
                        <Combobox
                            value={data.city}
                            as={'div'}
                            className={'relative flex flex-col w-full'}
                            onChange={(value) => setData('city', value)}>
                            <Combobox.Label as={'label'}
                                            className="block font-medium text-sm text-gray-700 dark:text-gray-300 ">Miasto</Combobox.Label>
                            <Combobox.Input
                                displayValue={(city) => city?.name}
                                autoComplete={'off'}
                                className={'mt-1 border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm '}
                                as={'input'}
                                onChange={(event) => loadCities(event.target.value)}/>
                            <Combobox.Options
                                as={'div'}
                                className={'w-full absolute z-50 bg-white top-[4.5rem] border-1 border-gray-300 shadow rounded-md'}
                            >
                                {cities.map((city) => (
                                    <Combobox.Option
                                        className={'cursor-pointer list-none group hover:bg-blue-600 hover:text-white rounded-md py-2 px-4'}
                                        key={city.id} value={city}>
                                        {city.name}, <span
                                        className={'text-sm text-gray-500 group-hover:text-gray-200'}>{city.province.name}</span>
                                    </Combobox.Option>
                                ))}
                            </Combobox.Options>
                        </Combobox>
                    </div>
                    <div className={'mb-4'}>
                        <InputLabel htmlFor="name" value="Imię i nazwisko"/>

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2"/>
                    </div>
                    <div className={'mb-4'}>
                        <InputLabel htmlFor="bio" value="Bio"/>

                        <textarea id="bio" rows="4"
                                  value={data.bio}
                                  onChange={(e) => setData('bio', e.target.value)}
                                  className="block p-2.5 w-full resize-none text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="Napisz kilka słów o sobie..."></textarea>


                        <InputError message={errors.bio} className="mt-2"/>
                    </div>
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

