import {Primary as ButtonPrimary, Secondary as ButtonSecondary} from "@/Ui/Components/Button";

export const Navbar = () => {
    return (
        <div
            className="rounded-[60px] border border-[#e4e2e3] pl-6 pr-2 py-2 flex justify-between items-center relative w-full bg-white"
        >
            <div
                className="p-1.5 flex gap-1.5 items-center relative w-[233px] bg-transparent"
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="0.111328"
                        y="0.111328"
                        width="27.7778"
                        height="27.7778"
                        rx="6.66667"
                        fill="#1E7AFD"
                    />
                    <path
                        d="M13.3057 14.6807L13.3057 26.5001L16.0834 26.5001L16.0834 19.7596C16.0834 18.2862 15.4981 16.8731 14.4563 15.8313L13.3057 14.6807Z"
                        fill="#E9F2FF"
                    />
                    <path
                        d="M13.3057 14.6948L1.50011 14.6948L1.50011 11.917L8.2267 11.917C9.70012 11.917 11.1132 12.5024 12.1551 13.5442L13.3057 14.6948Z"
                        fill="#E9F2FF"
                    />
                    <path
                        d="M14.6948 13.3057L26.5004 13.3057L26.5004 16.0834L19.7738 16.0834C18.3004 16.0834 16.8873 15.4981 15.8454 14.4563L14.6948 13.3057Z"
                        fill="#E9F2FF"
                    />
                    <path
                        d="M14.6948 13.3057L14.6948 1.50011L11.917 1.50011L11.917 8.2267C11.917 9.70012 12.5024 11.1132 13.5442 12.1551L14.6948 13.3057Z"
                        fill="#E9F2FF"
                    />
                </svg>
                <p
                    className="tracking-[-0.06222222137451172em] leading-4 text-[15.55555534362793px] text-[#161719]"
                >
                    Medshifts
                </p>
            </div>
            <div className="flex gap-6 items-start relative bg-transparent">
                <div
                    className="py-2.5 flex gap-2.5 justify-center items-center relative bg-transparent"
                >
                    <small className="leading-5 text-sm text-[#6a6b6f]">Info</small>
                </div>
                <div
                    className="py-2.5 flex gap-2.5 justify-center items-center relative bg-transparent"
                >
                    <small className="leading-5 text-sm text-[#6a6b6f]">Dlaczego warto?</small>
                </div>
                <div
                    className="py-2.5 flex gap-2.5 justify-center items-center relative bg-transparent"
                >
                    <small className="leading-5 text-sm text-[#6a6b6f]">Blog</small>
                </div>
                <div
                    className="py-2.5 flex gap-2.5 justify-center items-center relative bg-transparent"
                >
                    <small className="leading-5 text-sm text-[#6a6b6f]">FAQ</small>
                </div>
            </div>
            <div className="flex gap-2 items-start relative bg-transparent">
                <ButtonSecondary
                    // onClick={}
                >Zaloguj się</ButtonSecondary>
                <ButtonPrimary>Przeglądaj oferty</ButtonPrimary>
            </div>
        </div>
    );
}
