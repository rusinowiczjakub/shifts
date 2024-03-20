import {Briefcase} from "@/Components/Icons/Briefcase";
import {router, useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {useEffect, useState} from "react";
// import {Datepicker} from 'flowbite-react';
import {Add} from "@/Components/Icons/Add";
import {SkillRow} from "@/Pages/Profile/Partials/UpdateSkillsForm";
import {Transition} from "@headlessui/react";
import Datepicker from "flowbite-datepicker/Datepicker";
import {parse, format} from "date-fns";

const theme = {
    "root": {
        "base": "relative"
    },
    "popup": {
        "root": {
            "base": "absolute top-10 z-50 block pt-2",
            "inline": "relative top-0 z-auto",
            "inner": "inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700"
        },
        "header": {
            "base": "",
            "title": "px-2 py-3 text-center font-semibold text-gray-900 dark:text-white",
            "selectors": {
                "base": "flex justify-between mb-2",
                "button": {
                    "base": "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch",
                    "prev": "",
                    "next": "",
                    "view": ""
                }
            }
        },
        "view": {
            "base": "p-1"
        },
        "footer": {
            "base": "flex mt-2 space-x-2",
            "button": {
                "base": "w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-blue-300",
                "today": "bg-blue-700 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700",
                "clear": "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            }
        }
    },
    "views": {
        "days": {
            "header": {
                "base": "grid grid-cols-7 mb-1",
                "title": "dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400"
            },
            "items": {
                "base": "grid w-64 grid-cols-7",
                "item": {
                    "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ",
                    "selected": "bg-blue-700 text-white hover:bg-blue-600",
                    "disabled": "text-gray-500"
                }
            }
        },
        "months": {
            "items": {
                "base": "grid w-64 grid-cols-4",
                "item": {
                    "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600",
                    "selected": "bg-blue-700 text-white hover:bg-blue-600",
                    "disabled": "text-gray-500"
                }
            }
        },
        "years": {
            "items": {
                "base": "grid w-64 grid-cols-4",
                "item": {
                    "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
                    "selected": "bg-blue-700 text-white hover:bg-blue-600",
                    "disabled": "text-gray-500"
                }
            }
        },
        "decades": {
            "items": {
                "base": "grid w-64 grid-cols-4",
                "item": {
                    "base": "block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900",
                    "selected": "bg-blue-700 text-white hover:bg-blue-600",
                    "disabled": "text-gray-500"
                }
            }
        }
    }
};


const ExperienceForm = ({experience = null, onCancel = null, onSuccess}) => {
    const {data, setData, patch, post, errors, processing, transform, recentlySuccessful, reset} = useForm({
        company: experience?.company ?? '',
        period_start: experience?.period_start ?? '',
        period_end: experience?.period_end ?? '',
        description: experience?.description ?? ''
    })

    const [currentlyWorking, setCurrentlyWorking] = useState(false)

    const submit = (e) => {
        e.preventDefault();

        transform((data) => ({
            ...data,
            period_end: currentlyWorking ? null : data.period_end
        }))

        if (experience) {
            post(route('staff.profile.experience.update', {experience: experience.id}), {
                preserveScroll: true,
                onSuccess: () => {

                },
                forceFormData: true
            })
            return;
        }

        post(route('staff.profile.experience.create'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                onCancel && onCancel();
            }
        });
    }

    useEffect(() => {
        const datepickerFrom = document?.getElementById("datepickerFrom");
        const datepickerTo = document?.getElementById("datepickerTo");
        // console.log(datepickerEl);
        new Datepicker(datepickerFrom, {
            // autohide: true,
            format: 'dd/mm/yyyy',
            language: 'pl'
        });
        new Datepicker(datepickerTo, {
            // autohide: true,
            format: 'dd/mm/yyyy',
            language: 'pl'
        });

        if (experience && !experience.period_end){
            setCurrentlyWorking(true)
        }
    }, []);

    const cancel = (e) => {
        e.preventDefault();
        onCancel && onCancel();
        reset();
    }

    return (
        <form onSubmit={submit} className={'mt-6 space-y-6 mb-4'}>
            <div>
                <InputLabel htmlFor={'company'} value={'Nazwa firmy'}/>
                <TextInput
                    id={'company'}
                    className={'mt-1 block w-full'}
                    value={data.company}
                    onChange={(e) => setData('company', e.target.value)}
                />
                <InputError className={'mt-2'} message={errors.company}/>
            </div>
            <div>
                <InputLabel htmlFor={'description'} value={'Stanowisko'}/>
                <TextInput
                    id={'description'}
                    className={'mt-1 block w-full'}
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                />
                <InputError className={'mt-2'} message={errors.description}/>
            </div>
            <div className={'flex justify-between'}>
                <div className={'w-full mr-2'}>
                    <InputLabel htmlFor={'period_start'} value={'Okres od'}/>
                    {/*<Datepicker*/}
                    {/*    theme={theme}*/}
                    {/*    color={'primary'}*/}
                    {/*    language={'pl-PL'}*/}
                    {/*    onSelectedDateChanged={(date) => setData('period_start', date.getTime() / 1000)}*/}
                    {/*/>*/}
                    <TextInput
                        datepicker
                        datepicker-autohide="true"
                        type="text"
                        className="w-full"
                        placeholder="Wybierz datę"
                        onSelect={(e) => setData('period_start', parse(e.target.value, 'dd/MM/yyyy', new Date()).getTime() / 1000)}
                        // onClick={(e) => dobHandler(e)}
                        // onClick={(e) => console.log(e.target.value)}
                        // onSelect={(e) => console.log(e.target.value)}
                        value={experience ? format(parse(experience.period_start, 'yyyy-MM-dd HH:mm:SS', new Date()), 'dd/MM/yyyy') : null}
                        id="datepickerFrom"
                    />
                    <InputError className={'mt-2'} message={errors.period_start}/>
                </div>
                <div className={'w-full ml-2'}>
                    <InputLabel htmlFor={'period_end'} value={'Okres do'}/>
                    <TextInput
                        datepicker
                        datepicker-autohide="true"
                        type="text"
                        className={`w-full ${currentlyWorking ? 'bg-gray-100' : ''}`}
                        placeholder="Wybierz datę"
                        onSelect={(e) => setData('period_end', parse(e.target.value, 'dd/MM/yyyy', new Date()).getTime() / 1000)}
                        // onClick={(e) => dobHandler(e)}
                        // onClick={(e) => console.log(e.target.value)}
                        // onChange={(e) => console.log(e)}
                        value={experience && experience.period_end ? format(parse(experience.period_end, 'yyyy-MM-dd HH:mm:SS', new Date()), 'dd/MM/yyyy') : null}
                        id="datepickerTo"
                        disabled={currentlyWorking}
                    />

                    {/*<Datepicker*/}
                    {/*    disabled={currentlyWorking}*/}
                    {/*    theme={theme}*/}
                    {/*    color={'primary'}*/}
                    {/*    language={'pl-PL'}*/}
                    {/*    value={data.period_end}*/}
                    {/*    onSelectedDateChanged={(date) => setData('period_end', date.getTime() / 1000)}*/}
                    {/*/>*/}
                    <InputError className={'mt-2'} message={errors.period_end}/>
                </div>
            </div>
            <div>
                <input checked={currentlyWorking} id="checked-checkbox" type="checkbox" onChange={(e) => {
                    setCurrentlyWorking(!currentlyWorking)
                    if (currentlyWorking) {
                        setData('period_end', null)
                    }
                }}
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                <label htmlFor="checked-checkbox"
                       className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nadal tu pracuję</label>
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

const Experience = ({experience, onEdit, onDelete, showActions = true}) => {
    return (
        <li className={'flex mb-4 justify-between'} key={experience.id}>
            <div className={'flex'}>
                <div
                    className={'flex justify-center items-center bg-blue-100 rounded-md px-4 py-4 text-blue-500 mr-4'}>
                    <Briefcase/>
                </div>
                <div className={'flex flex-col justify-center'}>
                    <div>{experience.company}</div>
                    <div className={'text-gray-500 text-sm'}>{experience.description}</div>
                    <div
                        className={'text-gray-500 text-sm'}>{experience.period_start} - {experience?.period_end ?? 'obecnie'}</div>
                </div>
            </div>

            <div className={'flex flex-row justify-center'}>
                {showActions &&
                    <>
                        <button type={'button'}
                            onClick={() => onDelete(experience.id)}
                                className={'text-red-500 hover:text-red-400 text-sm mr-2'}>Usuń
                        </button>
                        <button type={'button'} onClick={(e) => onEdit(experience.id)}
                                className={'text-blue-500 hover:text-blue-400 text-sm'}>Edytuj
                        </button>
                    </>
                }
            </div>
        </li>
    );
}

const UpdateExperienceForm = ({className, experiences}) => {
    const [editing, setEditing] = useState(null);
    const [creating, setCreating] = useState(false);

    const onCancel = () => {
        setEditing(null);
        setCreating(null);
    }

    const onDelete = (id) => {
        router.delete(route('staff.profile.experience.delete', {experience: id}), {
            preserveScroll: true
        });
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Doświadczenie zawodowe</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Dodaj informacje dotyczące Twojego dotychczasowego doświadczenia zawodowego.
                </p>
            </header>
            <ul className={'bg-white w-full mb-4'}>
                {
                    experiences.map((experience) => {
                        return (
                            editing === experience.id
                                ? (<>
                                    <Experience onDelete={onDelete} onEdit={() => setEditing(experience.id)} experience={experience} showActions={false}/>
                                    <ExperienceForm experience={experience} onCancel={onCancel}/>
                                </>)
                                : <Experience onDelete={onDelete} onEdit={() => setEditing(experience.id)} experience={experience}/>
                        )
                    })
                }

                {
                    creating ?
                        <li key={'new'} className={'border-t border-gray-200'}>
                            <ExperienceForm onCancel={onCancel}/>
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

export default UpdateExperienceForm;
