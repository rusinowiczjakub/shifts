import {Primary} from "@/Ui/Components/Button";

export const B2BCta = () => {
    return (
        <div
            className="pt-20 pb-0 flex flex-col gap-2.5 items-start self-stretch relative w-full bg-[#f0eeef]"
        >
            <div
                className="rounded-3xl p-10 flex flex-col gap-10 items-start self-stretch relative w-full bg-[url('/images/landing/b2b-banner-mobile.png')] md:bg-[url('/images/landing/b2b-banner-desktop.png')] bg-cover bg-top"
            >
                <div className={'md:hidden h-96'}></div>
                <div className="flex flex-col gap-6 items-start relative bg-transparent">
                    <h2
                        className="tracking-[-0.064em] font-medium leading-[42px] text-[32px] text-[#1c2b41]"
                    >
                        Wypróbuj MedShifts w Twojej placówce medycznej
                    </h2>
                    <div className="flex flex-col gap-3 items-start relative bg-transparent">
                        <div className="flex gap-3 items-center relative bg-transparent">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54983 17.6537L4.21533 12.3192L5.28433 11.25L9.54983 15.5155L18.7153 6.34998L19.7843 7.41923L9.54983 17.6537Z"
                                    fill="#323335"
                                />
                            </svg>
                            <p className="leading-[26px] text-lg text-[#323335]">
                                Publikowanie ofert zmian
                            </p>
                        </div>
                        <div className="flex gap-3 items-center relative bg-transparent">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54983 17.6537L4.21533 12.3192L5.28433 11.25L9.54983 15.5155L18.7153 6.34998L19.7843 7.41923L9.54983 17.6537Z"
                                    fill="#323335"
                                />
                            </svg>
                            <p className="leading-[26px] text-lg text-[#323335]">
                                Dostęp do profili specjalistów
                            </p>
                        </div>
                        <div className="flex gap-3 items-center relative bg-transparent">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.54983 17.6537L4.21533 12.3192L5.28433 11.25L9.54983 15.5155L18.7153 6.34998L19.7843 7.41923L9.54983 17.6537Z"
                                    fill="#323335"
                                />
                            </svg>
                            <p className="leading-[26px] text-lg text-[#323335]">
                                Łatwy i szybki proces rekrutacji
                            </p>
                        </div>
                    </div>
                </div>
                <Primary>
                    Wypróbuj teraz
                </Primary>
            </div>
        </div>

    );
}
