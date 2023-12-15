import SpecializationPill from "@/Partials/JobBoard/SpecializationPill";
import { Rating } from "flowbite-react";
import Bookmark from "@/Components/Icons/Bookmark";
const JobRow = () => {
    return (
        <a href="#"
           className="block p-6 bg-white hover:rounded-lg dark:bg-gray-800 border-b">
            <div className="flex flex-row items-center my-1 justify-between">
                <div>
                    <img src={'https://img.redro.pl/obrazy/szpital-logo-zdrowia-700-90031093.jpg'} className={'w-16 h-16 object-cover'} />
                </div>
                <div>
                    <h2 className={'text-lg'}>Looking for CN for...</h2>
                    <p className={'text-sm text-gray-400'}>We are looking for CN for night shift...</p>
                </div>
                <div>
                    <div className={'border rounded-md border-gray-200 p-2'}>
                        <Bookmark className={'w-6 h-6 text-gray-500'}/>
                    </div>
                </div>
            </div>
            <div className="my-1 mb-4">
                <div className="flex flex-row flex-wrap">
                    <SpecializationPill>Intensywna terapia</SpecializationPill>
                    <SpecializationPill>Kwalifikowana pięlęgniarka</SpecializationPill>
                    <SpecializationPill>12h, 19:00 - 07:00</SpecializationPill>
                    <SpecializationPill>920 PLN / 12h</SpecializationPill>
                    <SpecializationPill>3 wolne miejsca</SpecializationPill>
                </div>
            </div>
            <div className="my-1">
                <Rating>
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                    <Rating.Star />
                </Rating>
            </div>
        </a>
    )
}

export default JobRow;
