import JobBoardAppLayout from "@/Layouts/JobBoardAppLayout";
import Navbar from "@/Partials/JobBoard/Navbar";
import JobsList from "@/Partials/JobBoard/JobsList";
import SelectedJob from "@/Partials/JobBoard/SelectedJob";

export default function Index(props) {
    return (
        <JobBoardAppLayout>
            {/*<header className="bg-gray-900 text-white py-6">*/}
            {/*    <div className="container mx-auto flex items-center justify-between">*/}
            {/*        <h1 className="text-2xl font-bold">Logo</h1>*/}
            {/*        <nav>*/}
            {/*            <ul className="flex space-x-4">*/}
            {/*                <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>*/}
            {/*                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>*/}
            {/*                <li><a href="#" className="text-gray-300 hover:text-white">Services</a></li>*/}
            {/*                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>*/}
            {/*            </ul>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</header>*/}

            {/*<main className="bg-gray-100 py-12">*/}
            {/*    <div className="container mx-auto flex">*/}
            {/*        <div className="w-1/4 h-96 bg-gray-200 overflow-y-auto">*/}
            {/*            <ul className="p-6">*/}
            {/*                <li className="py-2">Item 1</li>*/}
            {/*                <li className="py-2">Item 2</li>*/}
            {/*                <li className="py-2">Item 3</li>*/}
            {/*                <li className="py-2">Item 4</li>*/}
            {/*                <li className="py-2">Item 5</li>*/}
            {/*                <li className="py-2">Item 6</li>*/}
            {/*                <li className="py-2">Item 7</li>*/}
            {/*                <li className="py-2">Item 8</li>*/}
            {/*                <li className="py-2">Item 9</li>*/}
            {/*                <li className="py-2">Item 10</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        <div className="w-3/4 px-4">*/}
            {/*            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">*/}
            {/*                <div className="bg-white p-6 rounded-lg shadow-md">*/}
            {/*                    <h2 className="text-xl font-bold mb-4">Feature 1</h2>*/}
            {/*                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales, ex ac*/}
            {/*                        pharetra*/}
            {/*                        suscipit, lorem enim vestibulum dolor, vel sodales est libero eu odio.</p>*/}
            {/*                </div>*/}
            {/*                <div className="bg-white p-6 rounded-lg shadow-md">*/}
            {/*                    <h2 className="text-xl font-bold mb-4">Feature 2</h2>*/}
            {/*                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales, ex ac*/}
            {/*                        pharetra*/}
            {/*                        suscipit, lorem enim vestibulum dolor, vel sodales est libero eu odio.</p>*/}
            {/*                </div>*/}
            {/*                <div className="bg-white p-6 rounded-lg shadow-md">*/}
            {/*                    <h2 className="text-xl font-bold mb-4">Feature 3</h2>*/}
            {/*                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sodales, ex ac*/}
            {/*                        pharetra*/}
            {/*                        suscipit, lorem enim vestibulum dolor, vel sodales est libero eu odio.</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</main>*/}

            {/*<footer className="bg-gray-900 text-white py-6">*/}
            {/*    <div className="container mx-auto text-center">*/}
            {/*        <p>&copy; 2023 Your Website. All rights reserved.</p>*/}
            {/*    </div>*/}
            {/*</footer>*/}
            <div className="bg-gray-50 px-8">
                <Navbar/>
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
