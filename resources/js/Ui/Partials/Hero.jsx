export const Hero = () => {
    return (
        <div className={'flex flex-col md:flex-row gap-2 md:min-h-[696px]'}>
            <div
                className="rounded-3xl p-10 flex flex-col gap-10 justify-end items-start relative w-full h-auto bg-[#0a326c]"
            >
                <div className="flex flex-col gap-4 items-start relative bg-transparent">
                    <h1
                        className="font-medium leading-[80px] text-[76px] text-white"
                    >
                        Praca na twoich zasadach
                    </h1>
                    <p className="leading-[26px] text-lg text-[#cce0ff]">
                        Doświadcz niezależności w pracy medycznej. Dostosuj grafik i pracuj na
                        własnych warunkach.
                    </p>
                </div>
                <button
                    className="rounded-[20px] px-4 py-2.5 flex gap-1 justify-center items-center relative bg-[#1e7afd]"
                >
                    <span className="leading-5 text-sm text-white">Przeglądaj oferty</span>
                </button>
            </div>
            <div
                className="overflow-hidden rounded-3xl relative w-full h-auto bg-[url('/images/landing/hero-right.png')] bg-cover bg-center"
            >
                <div
                    className="absolute px-4 bottom-0 left-1/2 transform -translate-x-1/2 rounded-t-[72px] border-4 border-white border-b-0 w-[442px] h-[527px] bg-[#161719]/[0.15]"
                >
                    {/*------*/}

                    <div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-3xl p-6 flex gap-6 items-center w-full bg-white"
                    >
                        <div
                            className="rounded-[40px] p-5 flex gap-2.5 items-start relative bg-[#1e7afd]"
                        >
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18.167 33.9163V23.208L8.87533 28.583L7.04199 25.3747L16.3337 19.9997L7.04199 14.6663L8.87533 11.458L18.167 16.833V6.08301H21.8337V16.833L31.1253 11.458L32.9587 14.6663L23.667 19.9997L32.9587 25.3747L31.1253 28.583L21.8337 23.208V33.9163H18.167Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div
                            className="flex flex-col gap-2 items-start flex-1 relative w-full bg-transparent"
                        >
                            <div
                                className="flex flex-col gap-1 items-start self-stretch relative w-full bg-transparent"
                            >
                                <div
                                    className="flex gap-6 items-start self-stretch relative w-full bg-transparent"
                                >
                                    <h4
                                        className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#323335]"
                                    >
                                        Oddział Neonatologii Szpital Warszawa
                                    </h4>
                                </div>
                                <div
                                    className="flex gap-2 items-start self-stretch relative w-full bg-transparent"
                                >
                                    <small className="leading-5 text-sm text-[#6a6b6f]">Pielęgniarka</small
                                    ><small className="leading-5 text-sm text-[#6a6b6f]">•</small
                                ><small className="leading-5 text-sm text-[#6a6b6f]">850 PLN / 12h</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*------*/}
                </div>
            </div>

        </div>
    );
}
