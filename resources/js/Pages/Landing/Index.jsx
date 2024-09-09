import {Header} from "@/Pages/Landing/Partials/Header";
import {Waitlist} from "@/Pages/Landing/Partials/Waitlist";
import {Navbar} from '@/Ui/Partials/Navbar';
import {Hero} from "@/Ui/Partials/Hero";
import {SubHero} from "@/Ui/Partials/SubHero";
import {About} from "@/Ui/Partials/About";
import {FAQ} from "@/Ui/Partials/FAQ";
import {B2BCta} from "@/Ui/Partials/B2BCta";
import {SEO} from "@/Ui/Partials/SEO";
import {Footer} from "@/Ui/Partials/Footer";

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
            <div className={'px-10 bg-[#f0eeef]'}>
                <div className={'container mx-auto'}>
                    <B2BCta/>
                    <SEO/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    );
}

export default Index;
