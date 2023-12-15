import AddressComponent from "@/Pages/Employer/Settings/Partial/AddressComponent";
import {useState} from "react";
import {Add} from "@/Components/Icons/Add";

const Addresses = ({addresses}) => {
    const [editingId, setEditingId] = useState(null);
    const [creating, setCreating] = useState(false);

    console.log(creating);
    return (
        <div>
            <ul className="bg-white w-full">
            {addresses.map((address, key) => {
                return <li key={address.id} className={`${key > 0 ? 'border-t border-gray-200' : null}`}>
                    <AddressComponent address={address} editMode={editingId === address.id} onEdition={setEditingId}/>
                </li>
            })}
                {
                    creating ?
                        <li key={'new'} className={'border-t border-gray-200'}>
                            <AddressComponent cancelCreation={setCreating} address={null} createMode={creating}/>
                        </li>
                        : null
                }
            <li className={'border-t border-gray-200'}>
                <button onClick={() => setCreating(true)} className={'flex flex-row items-center px-4 py-5 sm:px-6'}>
                    <Add className={'h-8 w-8 mr-2'}/>
                    <div> Dodaj nowy adres </div>
                </button>
            </li>
            </ul>
        </div>
    );
}

export default Addresses;
