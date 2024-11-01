const classes = 'rounded-[20px] px-4 py-2.5 flex gap-1 justify-center items-center relative border border-[#1e7afd] ';

const Primary = ({children, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`${classes} bg-[#1e7afd] hover:bg-[#0B66E4]`}
        >
            <span className={'leading-5 text-sm text-white'}>
                {children}
            </span>
        </button>
    );
}

const Secondary = ({children, onClick}) => {
    return (
        <button
            onClick={onClick}
            className={`${classes} bg-[transparent] hover:bg-[#E9F2FF]`}
        >
            <span className={'leading-5 text-sm text-[#1e7afd]'}>
                {children}
            </span>
        </button>
    );
}

export {
    Primary,
    Secondary
}
