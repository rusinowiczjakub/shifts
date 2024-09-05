import {Accordion} from "@/Ui/Components/Accordion";

export const FAQ = () => {
    return (
        <div className={'flex gap-10 items-center flex-col relative w-full py-20'}>
            <h2
                className="text-center font-medium leading-[62px] text-[56px] text-[#161719]"
            >
                Częste pytania
            </h2>
            <div className={'w-1/2'}>
                <Accordion/>
            </div>
        </div>

    );
}
