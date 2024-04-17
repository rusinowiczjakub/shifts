import JobRow from "@/Partials/JobBoard/JobRow";

const JobsList = ({shifts, onSelect, selected}) => {
    console.log(selected);
    return (
        <div>
            {shifts.map((shift) => {
                return <div className={`my-4`}>
                    <JobRow onClick={onSelect} shift={shift}/>
                </div>

            })}
        </div>
    )
}

export default JobsList;
