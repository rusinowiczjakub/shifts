import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {useForm} from "@inertiajs/react";

export const SkillRow = ({skill = null}) => {
    const { data, setData, patch, post, errors, processing, recentlySuccessful } = useForm({
        name: skill.name ?? '',
        description: skill.description ?? '',
        file: skill.file ?? ''
    });

    const submit = (e) => {
        e.preventDefault();

        if (skill) {

            return;
        }
    }

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div>
                <InputLabel htmlFor="name" value="Nazwa"/>
                <TextInput
                    id="name"
                    className="mt-1 block w-full"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                    isFocused
                    autoComplete="name"
                />
                <InputError className="mt-2" message={errors.name} />
            </div>
        </form>
    )
}

export default function UpdateSkillsForm({className, skills}) {

    console.log(skills);

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Twoje umiejętności</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Dodaj swoje umiejętności, certyfikaty lub dyplomy ukończenia specjalistycznych kursów/szkoleń.
                </p>
            </header>

        </section>
    )
}
