import {Primary} from "@/Ui/Components/Button";

export const SubHero = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 items-start relative w-full">
            <div
                className="px-10 py-20 flex flex-col gap-2.5 items-center flex-1 self-stretch relative w-full h-full bg-transparent"
            >
                <h1
                    className="tracking-[0em] font-medium leading-[50px] text-[42px] text-[#161719]"
                >
                    Zarządzanie czasem pracy nigdy nie było prostsze.
                </h1>
            </div>
            <div
                className="pl-0 pr-10 py-20 flex flex-col gap-10 justify-center items-start flex-1 self-stretch relative w-full h-full bg-transparent"
            >
                <h4
                    className="font-medium leading-[31px] text-2xl text-[#6a6b6f]"
                >
                    Odkrywaj placówki medyczne, które poszukują specjalistów takich
                    jak Ty. Zarządzaj grafikiem i planuj pracy szybko, łatwo i elastycznie.
                    Optymalizuj swoją pracę i zyskaj więcej czasu na to, co dla Ciebie ważne.
                    Pracuj na własnych warunkach dzięki MedShifts
                </h4>
                <Primary>
                    Przeglądaj oferty
                </Primary>
            </div>
        </div>

    );
}
