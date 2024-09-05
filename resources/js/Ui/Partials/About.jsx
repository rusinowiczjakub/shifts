export const About = () => {
    return (
        <div className={'flex flex-col md:flex-row gap-2 h-full'}>
            <div
                className="w-full md:w-1/2 rounded-3xl p-10 flex flex-col gap-6 bg-[url('/images/landing/chill.png')] bg-cover bg-center"
            >
                <h1
                    className="font-medium leading-[50px] text-[42px] text-white"
                >
                    Work life balance
                </h1>
                <p className="leading-[26px] text-lg text-white">
                    Masz pełną kontrolę nad swoim grafikiem pracy, dostosowując go do swoich
                    potrzeb i lepiej balansując życie zawodowe i prywatne.
                </p>
            </div>
            <div className={'flex flex-col w-full md:w-1/2 gap-2'}>
                <div>
                    <div
                        className="rounded-3xl p-10 flex flex-col gap-10 justify-center items-center self-stretch relative w-full bg-white"
                    >
                        <div
                            className="flex flex-col gap-6 items-start self-stretch relative w-full bg-transparent"
                        >
                            <h1
                                className="font-medium leading-[50px] text-[42px] text-[#161719]"
                            >
                                Elastyczność w planowaniu
                            </h1>
                            <p className="leading-[26px] text-lg text-[#6a6b6f]">
                                Platforma umożliwia elastyczne planowanie zmian, co pozwala na pracę w
                                najbardziej dogodnych dla Ciebie godzinach.
                            </p>
                        </div>
                        <div
                            className="shadow-[0px_4px_9px_0px_rgba(0,0,0,0.02)] shadow-[0px_16px_16px_0px_rgba(0,0,0,0.02)] shadow-[0px_37px_22px_0px_rgba(0,0,0,0.01)] shadow-[0px_65px_26px_0px_rgba(0,0,0,0.00)] shadow-[0px_102px_28px_0px_rgba(0,0,0,0.00)] rounded-3xl border border-[#e4e2e3] p-6 flex flex-col gap-6 items-start relative bg-white"
                        >
                            <h4
                                className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#323335]"
                            >
                                Kiedy chcesz pracować?
                            </h4>
                            <div className="flex flex-col gap-6 items-start relative bg-transparent">
                                <div className="flex gap-1 items-start relative bg-transparent">
                                    <div
                                        className="rounded-[21px] p-2 flex flex-col gap-2.5 justify-center items-center relative w-[42px] bg-[#1e7afd]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-white">P</p>
                                    </div>
                                    <div
                                        className="rounded-[21px] p-2 flex flex-col gap-2.5 justify-center items-center relative w-[42px] bg-[#f0eeef]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-[#323335]">W</p>
                                    </div>
                                    <div
                                        className="rounded-[21px] p-2 flex flex-col gap-2.5 justify-center items-center relative w-[42px] bg-[#1e7afd]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-white">Ś</p>
                                    </div>
                                    <div
                                        className="rounded-[21px] p-2 flex flex-col gap-2.5 justify-center items-center relative w-[42px] bg-[#1e7afd]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-white">C</p>
                                    </div>
                                    <div
                                        className="rounded-[21px] p-2 flex flex-col gap-2.5 justify-center items-center relative w-[42px] bg-[#1e7afd]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-white">P</p>
                                    </div>
                                    <div
                                        className="rounded-[21px] p-2 flex flex-col gap-2.5 justify-center items-center relative w-[42px] bg-[#f0eeef]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-[#323335]">S</p>
                                    </div>
                                    <div
                                        className="rounded-[21px] p-2 flex flex-col gap-2.5 justify-center items-center relative w-[42px] bg-[#f0eeef]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-[#323335]">N</p>
                                    </div>
                                </div>
                                <div
                                    className="flex gap-1 items-center self-stretch relative w-full bg-transparent"
                                >
                                    <div
                                        className="rounded-xl px-4 py-3 flex gap-2.5 justify-center items-center flex-1 relative w-full bg-[#f7f5f6]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-[#323335]">08:00</p>
                                    </div>
                                    <p className="leading-[26px] text-lg text-[#c6c5ca]">-</p>
                                    <div
                                        className="rounded-xl px-4 py-3 flex gap-2.5 justify-center items-center flex-1 relative w-full bg-[#f7f5f6]"
                                    >
                                        <p className="font-bold leading-[26px] text-lg text-[#323335]">21:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    <div
                        className="overflow-hidden rounded-3xl p-10 flex flex-col gap-10 items-center self-stretch relative w-full bg-white"
                    >
                        <div
                            className="flex flex-col gap-6 items-start self-stretch relative w-full bg-transparent"
                        >
                            <h1
                                className="font-medium leading-[50px] text-[42px] text-[#161719]"
                            >
                                Grafik idealny
                            </h1>
                            <p className="leading-[26px] text-lg text-[#6a6b6f]">
                                MedShifts umożliwia dostosowywanie grafiku do zmieniających się
                                okoliczności, co zwiększa komfort pracy i satysfakcję zawodową.
                            </p>
                        </div>
                        <div className={'flex justify-center items-center'}>
                            <img className={'w-1/2'} src={'/images/landing/perfect-schedule.png'}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
