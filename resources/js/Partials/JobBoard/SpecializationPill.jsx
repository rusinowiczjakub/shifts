const SpecializationPill = (props) => {
    return (
        <div className="my-2 block rounded-lg bg-neutral-100 px-4 py-2 text-xs font-medium leading-tight text-gray-500 data-[te-nav-active]:!bg-primary-100 data-[te-nav-active]:text-primary-700 dark:bg-neutral-700 dark:text-white dark:data-[te-nav-active]:text-primary-700 md:mr-4">
            {props.children}
        </div>
    )
}

export default SpecializationPill;
