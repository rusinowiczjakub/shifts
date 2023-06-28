import JobRow from "@/Partials/JobBoard/JobRow";

const JobsList = (props) => {
    return (
        <div>
            <div className={'my-4'}>
                <JobRow/>
            </div>
            <div className={'my-4'}>
                <JobRow/>
            </div>
            <div className={'my-4'}>
                <JobRow/>
            </div>
            <div className={'my-4'}>
                <JobRow/>
            </div>
            <div className={'my-4'}>
                <JobRow/>
            </div>
            <div className={'my-4'}>
                <JobRow/>
            </div>
        </div>
    )
}

export default JobsList;
