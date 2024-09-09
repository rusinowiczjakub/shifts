import {Accordion} from "@/Ui/Components/Accordion";
import {Disclosure} from "@headlessui/react";
import {ArrowDown} from "@/Components/Icons/ArrowDown";

export const FAQ = () => {
    return (
        <div className={'flex gap-10 flex-col items-center relative w-full py-20'}>
            <h2
                className="text-center font-medium leading-[62px] text-[56px] text-[#161719]"
            >
                Częste pytania
            </h2>
            <div className={'w-full md:w-1/2'}>
                <Disclosure
                    as={'div'}
                    className={'border-x-0 border-t-0 border-b border-[#e4e2e3] p-6 flex flex-col gap-6 items-start relative w-full bg-transparent'}>
                    <Disclosure.Button className="flex justify-between items-center relative w-full bg-transparent">
                        {({open}) => (
                            <>
                                <h4 className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#161719]">
                                    Ile kosztuje MedShifts?
                                </h4>
                                <ArrowDown className={`${open ? 'transform rotate-180' : ''}`}/>
                            </>
                        )}
                    </Disclosure.Button>
                    <Disclosure.Panel className={'pl-0 pr-10 flex gap-2.5 items-start relative w-full bg-transparent'}>
                        <p className="leading-[26px] text-lg text-[#6a6b6f]">
                            MedShits jest całkowicie darmową aplikacją. Zarejestruj się i aplikuj na
                            wybrane oferty zmian w Twojej okolicy.
                        </p>
                    </Disclosure.Panel>
                </Disclosure>

                <Disclosure
                    as={'div'}
                    className={'border-x-0 border-t-0 border-b border-[#e4e2e3] p-6 flex flex-col gap-6 items-start relative w-full bg-transparent'}>
                    <Disclosure.Button className="flex justify-between items-center relative w-full bg-transparent">
                        {({open}) => (
                            <>
                                <h4 className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#161719]">
                                    Czy muszę mieć konto, żeby aplikować na ofertę?
                                </h4>
                                <ArrowDown className={`${open ? 'transform rotate-180' : ''}`}/>
                            </>
                        )}
                    </Disclosure.Button>
                    <Disclosure.Panel className={'pl-0 pr-10 flex gap-2.5 items-start relative w-full bg-transparent'}>
                        <p className="leading-[26px] text-lg text-[#6a6b6f]">
                            Tak, aby aplikować na oferty pracy, konieczne jest założenie konta w aplikacji MedShifts. Dzięki
                            temu możemy dopasować oferty do Twojego profilu i zapewnić sprawną komunikację z placówkami.
                        </p>
                    </Disclosure.Panel>
                </Disclosure>

                <Disclosure
                    as={'div'}
                    className={'border-x-0 border-t-0 border-b border-[#e4e2e3] p-6 flex flex-col gap-6 items-start relative w-full bg-transparent'}>
                    <Disclosure.Button className="flex justify-between items-center relative w-full bg-transparent">
                        {({open}) => (
                            <>
                                <h4 className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#161719]">
                                    Na ile ofert mogę aplikować?
                                </h4>
                                <ArrowDown className={`${open ? 'transform rotate-180' : ''}`}/>
                            </>
                        )}
                    </Disclosure.Button>
                    <Disclosure.Panel className={'pl-0 pr-10 flex gap-2.5 items-start relative w-full bg-transparent'}>
                        <p className="leading-[26px] text-lg text-[#6a6b6f]">
                            Możesz aplikować na dowolną ilość ofert pracy. Nie ma żadnych ograniczeń co do liczby aplikacji,
                            które możesz wysłać.
                        </p>
                    </Disclosure.Panel>
                </Disclosure>

                <Disclosure
                    as={'div'}
                    className={'border-x-0 border-t-0 border-b border-[#e4e2e3] p-6 flex flex-col gap-6 items-start relative w-full bg-transparent'}>
                    <Disclosure.Button className="flex justify-between items-center relative w-full bg-transparent">
                        {({open}) => (
                            <>
                                <h4 className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#161719]">
                                    Czy mogę wdrożyć MedShifts w mojej placówce medycznej?
                                </h4>
                                <ArrowDown className={`${open ? 'transform rotate-180' : ''}`}/>
                            </>
                        )}
                    </Disclosure.Button>
                    <Disclosure.Panel className={'pl-0 pr-10 flex gap-2.5 items-start relative w-full bg-transparent'}>
                        <p className="leading-[26px] text-lg text-[#6a6b6f]">
                            Tak, aby wdrożyć MedShifts w swojej placówce medycznej, prosimy o kontakt pod adresem e-mail:
                            kuba@medshifts.app. Chętnie omówimy szczegóły i pomożemy w procesie wdrożenia.
                        </p>
                    </Disclosure.Panel>
                </Disclosure>

            </div>
            <div className={'w-full md:w-1/2'}>
                <p className="leading-[26px] text-lg text-[#161719]">
                    Nie możesz znaleźć tego czego szukasz?
                </p>
                <p className="leading-[26px] text-sm text-[#161719]">
                    Jeśli nie możesz znaleźć odpowiedzi na swoje pytanie, napisz do nas na <a className={'text-[#1e7afd]'} href="mailto:kuba@medshifts.app">kuba@medshifts.app</a>
                </p>
            </div>
        </div>

    );
}
