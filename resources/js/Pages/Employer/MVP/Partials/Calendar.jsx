import {
    add,
    eachDayOfInterval,
    endOfMonth,
    format,
    getDay,
    isEqual,
    isSameDay,
    isSameMonth,
    isToday,
    parse,
    parseISO,
    startOfToday,
} from 'date-fns'
import {Fragment, useEffect, useRef, useState} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {pl} from 'date-fns/locale';
import {Briefcase} from "@/Components/Icons/Briefcase";
import {ChevronDownIcon, ChevronUpIcon} from "@heroicons/react/16/solid";

const meetings = [
    {
        id: 1,
        name: 'Leslie Alexander',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2024-05-11T13:00',
        endDatetime: '2024-05-11T14:30',
    },
    {
        id: 2,
        name: 'Michael Foster',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2022-05-20T09:00',
        endDatetime: '2022-05-20T11:30',
    },
    {
        id: 3,
        name: 'Dries Vincent',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2022-05-20T17:00',
        endDatetime: '2022-05-20T18:30',
    },
    {
        id: 4,
        name: 'Leslie Alexander',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2022-06-09T13:00',
        endDatetime: '2022-06-09T14:30',
    },
    {
        id: 5,
        name: 'Michael Foster',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        startDatetime: '2022-05-13T14:00',
        endDatetime: '2022-05-13T14:30',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Calendar({shifts, selectShift}) {
    let today = startOfToday()
    let [selectedDay, setSelectedDay] = useState(today)
    let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
    let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())
    const scrollContainerRef = useRef(null);
    const [atBottom, setAtBottom] = useState(false);

    useEffect(() => {
        scrollContainerRef.current.scrollBy({top: -99999})
        setAtBottom(false);
    }, [selectedDay])

    let days = eachDayOfInterval({
        start: firstDayCurrentMonth,
        end: endOfMonth(firstDayCurrentMonth),
    })

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, {months: -1})
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, {months: 1})
        setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
    }

    let selectedDayMeetings = shifts.filter((meeting) =>
        isSameDay(parseISO(meeting.startDatetime), selectedDay)
    )

    const handleScroll = () => {
        const element = scrollContainerRef.current;
        const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
        setAtBottom(atBottom);
    };


    const scrollContent = () => {
        const element = scrollContainerRef.current;
        const scrollAmount = 200; // Możesz dostosować tę wartość

        if (atBottom) {
            element.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
        } else {
            element.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
    };


    return (
        <div className="pt-16">
            <div className="max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6">
                <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:divide-x md:divide-gray-200">
                    <div className="md:pr-14">
                        <div className="flex items-center">
                            <h2 className="flex-auto font-semibold text-gray-900">
                                {format(firstDayCurrentMonth, 'MMM yyyy', {locale: pl})}
                            </h2>
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <div>{'<'}</div>
                            </button>
                            <button
                                onClick={nextMonth}
                                type="button"
                                className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Next month</span>
                                <div>{'>'}</div>
                            </button>
                        </div>
                        <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
                            <div>S</div>
                            <div>M</div>
                            <div>T</div>
                            <div>W</div>
                            <div>T</div>
                            <div>F</div>
                            <div>S</div>
                        </div>
                        <div className="grid grid-cols-7 mt-2 text-sm">
                            {days.map((day, dayIdx) => (
                                <div
                                    key={day.toString()}
                                    className={classNames(
                                        dayIdx === 0 && colStartClasses[getDay(day)],
                                        'py-1.5'
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => setSelectedDay(day)}
                                        className={classNames(
                                            isEqual(day, selectedDay) && 'text-white',
                                            !isEqual(day, selectedDay) &&
                                            isToday(day) &&
                                            'text-blue-500',
                                            !isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            isSameMonth(day, firstDayCurrentMonth) &&
                                            'text-gray-900',
                                            !isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            !isSameMonth(day, firstDayCurrentMonth) &&
                                            'text-gray-400',
                                            isEqual(day, selectedDay) && isToday(day) && 'bg-blue-500',
                                            isEqual(day, selectedDay) &&
                                            !isToday(day) &&
                                            'bg-gray-900',
                                            !isEqual(day, selectedDay) && 'hover:bg-gray-200',
                                            (isEqual(day, selectedDay) || isToday(day)) &&
                                            'font-semibold',
                                            'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                                        )}
                                    >
                                        <time dateTime={format(day, 'yyyy-MM-dd')}>
                                            {format(day, 'd')}
                                        </time>
                                    </button>

                                    <div className="w-1 h-1 mx-auto mt-1">
                                        {shifts.some((meeting) =>
                                            isSameDay(parseISO(meeting.startDatetime), day)
                                        ) && (
                                            <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative md:pl-14 md:max-h-[400px]">
                        <section ref={scrollContainerRef} className="md:mt-0 overflow-y-scroll no-scrollbar h-full" onScroll={handleScroll}>
                            <h2 className="sticky top-0 w-full bg-white font-semibold text-gray-900">
                                Zmiany na dzień {' '}
                                <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
                                    {format(selectedDay, 'dd MMM, yyyy', { locale: pl })}
                                </time>
                            </h2>
                            <ol className="space-y-1 text-sm leading-6 text-gray-500">
                                {selectedDayMeetings.length > 0 ? (
                                    selectedDayMeetings.map((meeting) => (
                                        <Meeting selectShift={selectShift} meeting={meeting} key={meeting.id} />
                                    ))
                                ) : (
                                    <p>W tym dniu nie ma jeszcze żadnej zmiany.</p>
                                )}
                            </ol>
                        </section>
                        {
                            selectedDayMeetings.length > 0 &&
                            <button onClick={scrollContent} className="absolute right-4 bottom-4 p-2 bg-blue-500 text-white rounded-full shadow-lg">
                                {atBottom ? <ChevronUpIcon className="h-6 w-6" /> : <ChevronDownIcon className="h-6 w-6" />}
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

function Meeting({meeting, selectShift}) {
    let startDateTime = parseISO(meeting.startDatetime)
    let endDateTime = parseISO(meeting.endDatetime)

    return (
        <li className="cursor-pointer flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100">
            <div
                className={'flex justify-center items-center bg-blue-100 rounded-full px-4 py-4 text-blue-500 mr-4'}>
                <Briefcase/>
            </div>
            <div className="flex-auto">
                <h2 className="">{meeting.category}</h2>
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                    <time dateTime={meeting.startDatetime}>
                        {format(startDateTime, 'dd/MM/yyyy h:mm a')}
                    </time>
                    {' '}
                    <br/>
                    <time dateTime={meeting.endDatetime}>
                        {format(endDateTime, 'dd/MM/yyyy h:mm a')}
                    </time>
                </p>
            </div>
            <Menu
                as="div"
                className="relative focus-within:opacity-100 group-hover:opacity-100"
            >
                <div>
                    <Menu.Button
                        className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                        <div className={'leading-[5px] font-bold'}>
                            .<br/>
                            .<br/>
                            .
                        </div>
                        <span className="sr-only">Open options</span>
                        {/*<DotsVerticalIcon className="w-6 h-6" aria-hidden="true" />*/}
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="absolute right-0 z-50 mt-2 origin-top-right bg-white rounded-md shadow-sm w-36 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        type={'button'}
                                        onClick={() => selectShift(meeting)}
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'w-full px-4 py-2 text-sm'
                                        )}
                                    >
                                        Aplikacje
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <button
                                        className={classNames(
                                            active ? ' bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'w-full px-4 py-2 text-sm'
                                        )}
                                    >
                                        Usuń zmianę
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </li>
    )
}

let colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
]
