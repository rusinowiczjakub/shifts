const JobRow = () => {
    return (
        <a href="#"
           className="block p-6 bg-white rounded-lg hover:bg-gray-100 dark:bg-gray-800">
            <div className="flex flex-row items-center">
                <div>
                    <img src={'https://img.redro.pl/obrazy/szpital-logo-zdrowia-700-90031093.jpg'} className={'w-16 h-16 object-cover'} />
                </div>
                <div>
                    <h2 className={'text-lg font-semibold'}>Looking for CN for...</h2>
                    <p className={'text-sm text-gray-400 font-semibold'}>We are looking for CN for night shift...</p>
                </div>

            </div>
        </a>
    )
}

export default JobRow;
