import {Header} from "@/Pages/Landing/Partials/Header";
import {Waitlist} from "@/Pages/Landing/Partials/Waitlist";
import {Navbar} from '@/Ui/Partials/Navbar';
import {Hero} from "@/Ui/Partials/Hero";
import {SubHero} from "@/Ui/Partials/SubHero";
import {About} from "@/Ui/Partials/About";
import {FAQ} from "@/Ui/Partials/FAQ";

const Index = (props) => {
    return (
        <>
            <div className={'px-10 bg-[#f0eeef]'}>
                <div className={'container mx-auto'}>
                    <div className={'py-4 flex justify-center items-center w-full'}>
                        <Navbar/>
                    </div>
                    {/*<Hero {...props} />*/}
                    <Hero/>
                    <SubHero/>
                    <About/>

                </div>
            </div>
            <div className={'px-10 bg-white'}>
                <div className={'container mx-auto'}>
                    <FAQ/>
                </div>
            </div>
        </>
    );
}

export default Index;
