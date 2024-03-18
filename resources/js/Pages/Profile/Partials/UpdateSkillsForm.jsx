import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {useForm} from "@inertiajs/react";
import {Add} from "@/Components/Icons/Add";
import {useEffect, useState} from "react";
import AddressComponent from "@/Pages/Employer/Settings/Partial/AddressComponent";
import Dropzone from "@/Components/Dropzone";
import {Textarea} from "flowbite-react";
import {Trophy} from "@/Components/Icons/Trophy";
import {Transition} from "@headlessui/react";
import { router } from '@inertiajs/react'

export const SkillRow = ({skill = null, onCancel, onSuccessHandler}) => {
    const {data, setData, patch, post, errors, processing, recentlySuccessful, reset} = useForm({
        name: skill?.name ?? '',
        description: skill?.description ?? '',
        files: skill?.file ?? null
    });

    const [files, setFiles] = useState(null);

    const submit = (e) => {
        e.preventDefault();

        if (skill) {
            post(route('staff.profile.skills.update', {skill: skill.id}), {
                preserveScroll: true,
                onSuccess: () => {
                    setFiles(null)
                    onSuccessHandler();
                },
                forceFormData: true
            })
            return;
        }

        post(route('staff.profile.skills.create'), {
            preserveScroll: true,
            onSuccess: () => {
                setFiles(null);
                reset();
                onSuccessHandler();
            }
        });
    }

    const cancel = (e) => {
        e.preventDefault();
        onCancel();
        reset();
        setFiles(null);
    }

    return (
        <form onSubmit={submit} className="mt-6 space-y-6 mb-4">
            <div>
                <InputLabel htmlFor="name" value="Nazwa"/>
                <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                />
                <InputError className="mt-2" message={errors.name}/>
            </div>
            <div>
                <InputLabel htmlFor="description" value="Opis"/>
                <textarea
                    id="description"
                    className="block p-2.5 w-full resize-none text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    required
                    rows={4}
                />
                <InputError className="mt-2" message={errors.description}/>
            </div>
            <div>
                <InputLabel htmlFor="file" value="Skan certyfikatu/dyplomu lub podobne (opcjonalnie)"/>
                <Dropzone uploadedFiles={skill?.media} files={data.files} onChange={(v) => setData('files', v)}/>
                <InputError className="mt-2" message={errors.files}/>
            </div>
            <div className={'flex flex-row items-center'}>
                <button type={'button'} onClick={(e) => cancel(e)}
                        className={'flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 transform bg-white mr-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-gray-800 focus:ring-opacity-50'}
                >
                    <div> Anuluj</div>
                </button>
                <button onClick={e => submit(e)}
                        className="flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <div>Zapisz</div>
                </button>
                <Transition
                    show={recentlySuccessful}
                    enterFrom="opacity-0"
                    leaveTo="opacity-0"
                    className="transition ease-in-out ml-2"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">Zapisano.</p>
                </Transition>
            </div>

        </form>
    )
}

const StaticSkill = ({skill, onEdit, onDelete, showActions = true}) => {
    return (
        <li className={'flex mb-4 justify-between'} key={skill.id}>
            <div className={'flex'}>
                <div
                    className={'flex justify-center items-center bg-blue-100 rounded-md px-4 py-4 text-blue-500 mr-4'}>
                    <Trophy/>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <div>{skill.name}</div>
                    <div className={'text-gray-500 text-sm'}>{skill.description}</div>
                </div>
            </div>

            <div className={'flex flex-row justify-center'}>
                {showActions &&
                    <>
                        <button type={'button'} onClick={() => onDelete(skill.id)}
                                className={'text-red-500 hover:text-red-400 text-sm mr-2'}>Usuń
                        </button>
                        <button type={'button'} onClick={(e) => onEdit(skill.id)}
                                className={'text-blue-500 hover:text-blue-400 text-sm'}>Edytuj
                        </button>
                    </>
                }
            </div>
        </li>
    )
}

export default function UpdateSkillsForm({className, skills}) {

    const [creating, setCreating] = useState(false);
    const [editingId, setEditingId] = useState(null);

    const onCancel = () => {
        setCreating(false);
        setEditingId(null);
    }

    const onDelete = (id) => {
        router.delete(route('staff.profile.skill.delete', {skill: id}));
    }

    const onSuccess = () => {
        setCreating(false);
        setEditingId(null);
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Twoje umiejętności</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Dodaj swoje umiejętności, certyfikaty lub dyplomy ukończenia specjalistycznych kursów/szkoleń.
                </p>
            </header>

            <ul className="bg-white w-full mb-4">
                {
                    skills.map((skill) => {
                        return (
                            editingId === skill.id
                                ? (
                                    <div key={skill.id}>
                                        <StaticSkill skill={skill} showActions={false}/>
                                        <SkillRow onCancel={onCancel} onSuccessHandler={onSuccess} skill={skill}/>
                                    </div>
                                )
                                : <StaticSkill
                                    key={skill.id}
                                    skill={skill}
                                    onDelete={() => onDelete(skill.id)}
                                    onEdit={() => setEditingId(skill.id)}/>
                        )
                    })
                }
                {
                    creating ?
                        <li key={'new'} className={'border-t border-gray-200'}>
                            <SkillRow onCancel={onCancel} onSuccessHandler={onSuccess}/>
                        </li>
                        : null
                }
            </ul>

            {!creating &&
                <button onClick={() => setCreating(true)}
                        className="flex items-center justify-center px-3 py-1.5 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    <Add className={'h-8 w-8 mr-2'}/>
                    <div> Dodaj</div>
                </button>
            }


        </section>
    )
}
