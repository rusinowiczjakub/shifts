import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {Button} from "flowbite-react";

function CompanySettings({institution}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        name: institution.name,
        nip: institution.nip,
        regon: institution.regon,
        krs: institution.krs,
        address_name: institution.address?.name,
        address_street: institution.address?.street,
        address_city: institution.address?.city,
        address_postal_code: institution.address?.postal_code,
        address_building_number: institution.address?.building_number,
        address_apartment: institution.address?.apartment,
        address_phone_number: institution.address?.phone_number,
        address_email: institution.address?.email
    });

    const submit = (e) => {
        e.preventDefault()
        post(route('settings.company.update'), {
            onSuccess: () => {
                console.log('updated')
            },
            preserveScroll: true
        })
    }

    return (
        <form onSubmit={submit}>
            <div>
                <InputLabel htmlFor="name" value="Nazwa" />

                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    autoComplete="name"
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />

                <InputError message={errors.name} className="mt-2" />
            </div>
            <div className={'my-2'}>
                <InputLabel htmlFor="nip" value="NIP" />

                <TextInput
                    id="nip"
                    name="nip"
                    value={data.nip}
                    className="mt-1 block w-full"
                    autoComplete="nip"
                    onChange={(e) => setData('nip', e.target.value)}
                    required
                />

                <InputError message={errors.nip} className="mt-2" />
            </div>
            <div className={'my-2'}>
                <InputLabel htmlFor="regon" value="Regon" />

                <TextInput
                    id="regon"
                    name="regon"
                    value={data.regon}
                    className="mt-1 block w-full"
                    autoComplete="regon"
                    onChange={(e) => setData('regon', e.target.value)}
                    required
                />

                <InputError message={errors.regon} className="mt-2" />
            </div>
            <div className={'my-2'}>
                <InputLabel htmlFor="street" value="Ulica" />

                <TextInput
                    id="street"
                    name="street"
                    value={data.address_street}
                    className="mt-1 block w-full"
                    autoComplete="street"
                    onChange={(e) => setData('address_street', e.target.value)}
                    required
                />

                <InputError message={errors.address_street} className="mt-2" />
            </div>
            <div className={'my-2'}>
                <InputLabel htmlFor="building_number" value="Numer budynku" />

                <TextInput
                    id="building_number"
                    name="building_number"
                    value={data.address_building_number}
                    className="mt-1 block w-full"
                    autoComplete="building_number"
                    onChange={(e) => setData('address_building_number', e.target.value)}
                    required
                />

                <InputError message={errors.address_building_number} className="mt-2" />
            </div>
            <div className={'my-2'}>
                <InputLabel htmlFor="city" value="Miasto" />

                <TextInput
                    id="city"
                    name="city"
                    value={data.address_city}
                    className="mt-1 block w-full"
                    autoComplete="city"
                    onChange={(e) => setData('address_city', e.target.value)}
                    required
                />

                <InputError message={errors.address_city} className="mt-2" />
            </div>
            <div className={'my-2'}>
                <InputLabel htmlFor="postal_code" value="Kod pocztowy" />

                <TextInput
                    id="postal_code"
                    name="postal_code"
                    value={data.address_postal_code}
                    className="mt-1 block w-full"
                    autoComplete="postal_code"
                    onChange={(e) => setData('address_postal_code', e.target.value)}
                    required
                />

                <InputError message={errors.address_postal_code} className="mt-2" />
            </div>
            <div className={'my-2'}>
                <InputLabel htmlFor="phone_number" value="Numer telefonu" />

                <TextInput
                    id="phone_number"
                    name="phone_number"
                    value={data.address_phone_number}
                    className="mt-1 block w-full"
                    autoComplete="phone_number"
                    onChange={(e) => setData('address_phone_number', e.target.value)}
                />

                <InputError message={errors.address_phone_number} className="mt-2" />
            </div>
            <div className={'my-2'}>
                <InputLabel htmlFor="email" value="Adres email" />

                <TextInput
                    id="email"
                    name="email"
                    value={data.address_email}
                    className="mt-1 block w-full"
                    autoComplete="email"
                    onChange={(e) => setData('address_email', e.target.value)}
                />

                <InputError message={errors.address_email} className="mt-2" />
            </div>
            <div className={'mt-6 flex flex-col w-full justify-between items-start'}>
                <Button type="submit">
                    Zapisz
                </Button>
                <div></div>
            </div>
        </form>
    )
}

export default CompanySettings;
