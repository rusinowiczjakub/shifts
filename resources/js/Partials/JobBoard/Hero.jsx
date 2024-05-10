const Hero = (props) => {
    return (
        <section className="bg-gradient-to-bl from-neutral-100 via-violet-100 to-indigo-200 dark:bg-gray-900">
            {props.children}
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <div
                    className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

                </div>
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                    <span className="font-semibold text-gray-400 uppercase"></span>
                    <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
