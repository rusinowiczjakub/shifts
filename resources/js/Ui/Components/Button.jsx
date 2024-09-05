const classes = 'rounded-[20px] px-4 py-2.5 flex gap-1 justify-center items-center relative border border-[#1e7afd] ';

const Primary = ({children}) => {
    return (
        <button
            className={`${classes} bg-[#1e7afd]`}
        >
            <span className={'leading-5 text-sm text-white'}>
                {children}
            </span>
        </button>
    );
}

const Secondary = ({children}) => {
    return (
        <button
            className={`${classes} bg-[transparent]`}
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
