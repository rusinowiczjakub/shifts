export const Accordion = () => {
    return (
        <div>
            <div
                className="border-x-0 border-t-0 border-b border-[#e4e2e3] p-6 flex flex-col gap-6 items-start relative w-full bg-transparent"
            >
                <div
                    className="flex justify-between items-center relative w-full bg-transparent"
                >
                    <h4
                        className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#161719]"
                    >
                        Ile kosztuje MedShifts?
                    </h4>
                    <div className="rounded-[20px] p-2 flex gap-2.5 items-start relative bg-white">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.25 19.5V7.373L5.55375 13.0693L4.5 12L12 4.5L19.5 12L18.4462 13.0693L12.75 7.373V19.5H11.25Z"
                                fill="#161719"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    className="pl-0 pr-10 flex gap-2.5 items-start relative w-full bg-transparent"
                >
                    <p className="leading-[26px] text-lg text-[#6a6b6f]">
                        MedShits jest całkowicie darmową aplikacją. Zarejestruj się i aplikuj na
                        wybrane oferty zmian w Twojej okolicy.
                    </p>
                </div>
            </div>
            <div
                className="border-x-0 border-t-0 border-b border-[#e4e2e3] p-6 flex justify-between items-center relative w-full bg-transparent"
            >
                <h4
                    className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#161719]"
                >
                    Czy muszę mieć konto, żeby aplikować na ofertę?
                </h4>
                <div className="rounded-[20px] p-2 flex gap-2.5 items-start relative bg-white">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.25 4.5V16.627L5.55375 10.9307L4.5 12L12 19.5L19.5 12L18.4462 10.9307L12.75 16.627V4.5H11.25Z"
                            fill="#161719"
                        />
                    </svg>
                </div>
            </div>
            <div
                className="border-x-0 border-t-0 border-b border-[#e4e2e3] p-6 flex justify-between items-center relative w-full bg-transparent"
            >
                <h4
                    className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#161719]"
                >
                    Na ile ofert mogę aplikować?
                </h4>
                <div className="rounded-[20px] p-2 flex gap-2.5 items-start relative bg-white">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.25 4.5V16.627L5.55375 10.9307L4.5 12L12 19.5L19.5 12L18.4462 10.9307L12.75 16.627V4.5H11.25Z"
                            fill="#161719"
                        />
                    </svg>
                </div>
            </div>
            <div
                className="border-x-0 border-t-0 border-b border-[#e4e2e3] p-6 flex justify-between items-center relative w-full bg-transparent"
            >
                <h4
                    className="tracking-[-0.024em] font-medium leading-[31px] text-2xl text-[#161719]"
                >
                    Czy mogę wdrożyć MedShifts w mojej placówce medycznej?
                </h4>
                <div className="rounded-[20px] p-2 flex gap-2.5 items-start relative bg-white">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.25 4.5V16.627L5.55375 10.9307L4.5 12L12 19.5L19.5 12L18.4462 10.9307L12.75 16.627V4.5H11.25Z"
                            fill="#161719"
                        />
                    </svg>
                </div>
            </div>

        </div>
        )

}
