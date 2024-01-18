export const CheckCircle = ({className}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
             stroke={'currentColor'}
             fill={'currentColor'}
             strokeWidth={0.5}
             viewBox="0 0 20 20" width="20" height="20" data-name="CheckCircleFill"
             data-testid="icon-component" className={className ?? 'w-6 h-6 color'}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M10 1a9 9 0 100 18 9 9 0 000-18zm3.844 6.709a.75.75 0 00-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 00-1.114 1.004l2.25 2.5a.75.75 0 001.15-.043l4.25-5.5z"
                  fill="currentColor"></path>
        </svg>
    )
}
