import JobBoardAppLayout from "@/Layouts/JobBoardAppLayout";
import Navbar from "@/Partials/JobBoard/Navbar";
import JobsList from "@/Partials/JobBoard/JobsList";
import SelectedJob from "@/Partials/JobBoard/SelectedJob";
import Hero from "@/Partials/JobBoard/Hero";

export default function Index(props) {
    return (
        <JobBoardAppLayout>
            <Hero>
                <Navbar/>
            </Hero>
            <div className="px-8">
                <div className="container mx-auto flex">
                    <div className="w-full lg:w-1/3 h-screen overflow-y-auto no-scrollbar pr-6 pt-20">
                        <div>
                            <JobsList/>
                        </div>
                    </div>
                    <div className="w-full lg:w-2/3 h-full pt-20">
                        <div className="w-full h-full">
                            <SelectedJob/>
                        </div>
                    </div>
                </div>
            </div>
        </JobBoardAppLayout>
    );
}
