import {Phone} from "@/Components/Icons/Phone";
import {Email} from "@/Components/Icons/Email";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {useForm} from "@inertiajs/react";

// @TODO: Zdecydowanie do poprawy
const AddressComponent = ({address = null, editMode = false, createMode = false, cancelCreation, onEdition, onClose}) => {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: address?.name ?? '',
        street: address?.street ?? '',
        city: address?.city ?? '',
        postal_code: address?.postal_code ?? '',
        building_number: address?.building_number ?? '',
        apartment: address?.apartment ?? '',
        phone_number: address?.phone_number ?? '',
        email: address?.email ?? ''
    });

    const submit = (e) => {
        e.preventDefault()
        if (address) {
            post(route('settings.address.update', address.id), {
                onSuccess: () => {
                    console.log('updated')
                    onEdition(null)
                }
            })

            return;
        }

        post(route('settings.address.create'), {
            onSuccess: () => {
                reset();
                cancelCreation(false);
            }
        })
    }

    const deleteAddress = () => {

    }

    return (
        <div className="px-4 py-5 sm:px-6">
            {address
                ? (
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">{address.name}</h3>
                        <div className="mt-1 max-w-2xl text-sm text-gray-500">
                            <p>{`${address.street} ${address.building_number}, ${address.postal_code} ${address.city}`}</p>
                            <p className={'flex w-full justify-end items-center'}>{address.phone_number ?
                                <Phone className={'h-4 w-4 mr-2'}/> : <Email className={'h-4 w-4 mr-2'}/>}
                                <span>{address.phone_number ?? address.email}</span></p>
                        </div>
                    </div>
                )
                : null
            }


            {editMode || createMode ? (
                <div className={'mt-4'}>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nazwa"/>

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
                        <div className={'my-2'}>
                            <InputLabel htmlFor="street" value="Ulica"/>

                            <TextInput
                                id="street"
                                name="street"
                                value={data.street}
                                className="mt-1 block w-full"
                                autoComplete="street"
                                onChange={(e) => setData('street', e.target.value)}
                                required
                            />

                            <InputError message={errors.street} className="mt-2"/>
                        </div>
                        <div className={'my-2'}>
                            <InputLabel htmlFor="building_number" value="Numer budynku"/>

                            <TextInput
                                id="building_number"
                                name="building_number"
                                value={data.building_number}
                                className="mt-1 block w-full"
                                autoComplete="building_number"
                                onChange={(e) => setData('building_number', e.target.value)}
                                required
                            />

                            <InputError message={errors.building_number} className="mt-2"/>
                        </div>
                        <div className={'my-2'}>
                            <InputLabel htmlFor="city" value="Miasto"/>

                            <TextInput
                                id="city"
                                name="city"
                                value={data.city}
                                className="mt-1 block w-full"
                                autoComplete="city"
                                onChange={(e) => setData('city', e.target.value)}
                                required
                            />

                            <InputError message={errors.city} className="mt-2"/>
                        </div>
                        <div className={'my-2'}>
                            <InputLabel htmlFor="postal_code" value="Kod pocztowy"/>

                            <TextInput
                                id="postal_code"
                                name="postal_code"
                                value={data.postal_code}
                                className="mt-1 block w-full"
                                autoComplete="postal_code"
                                onChange={(e) => setData('postal_code', e.target.value)}
                                required
                            />

                            <InputError message={errors.postal_code} className="mt-2"/>
                        </div>
                        <div className={'my-2'}>
                            <InputLabel htmlFor="phone_number" value="Numer telefonu"/>

                            <TextInput
                                id="phone_number"
                                name="phone_number"
                                value={data.phone_number}
                                className="mt-1 block w-full"
                                autoComplete="phone_number"
                                onChange={(e) => setData('phone_number', e.target.value)}
                            />

                            <InputError message={errors.phone_number} className="mt-2"/>
                        </div>
                        <div className={'my-2'}>
                            <InputLabel htmlFor="email" value="Adres email"/>

                            <TextInput
                                id="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2"/>
                        </div>
                        <div className={'mt-6 flex flex-row w-full items-start'}>
                            <button className={'mr-4 text-blue-600 font-medium'} type="submit">
                                Zapisz
                            </button>
                            <button onClick={() => {
                                if (editMode) {
                                    onEdition(null)
                                }
                                if (createMode) {
                                    cancelCreation()
                                }
                            }} type="button" className={'text-gray-500'}>
                                Anuluj
                            </button>
                            <div></div>
                        </div>
                    </form>
                </div>
            ) : <div className="mt-4 flex items-center justify-end">
                <button onClick={() => onEdition(address?.id)}
                        className="font-medium text-blue-600 hover:text-blue-500">Edytuj
                </button>
            </div>}
        </div>
    )
}

export default AddressComponent
