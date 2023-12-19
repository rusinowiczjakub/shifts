import {Header} from "@/Pages/Landing/Partials/Header";
import {Hero} from "@/Pages/Landing/Partials/Hero";
import {About} from "@/Pages/Landing/Partials/About";
import {Waitlist} from "@/Pages/Landing/Partials/Waitlist";

const Index = (props) => {
    return (
        <>
            <Header/>
            <Hero {...props} />
            <About/>
            <Waitlist {...props} />
        </>
    );
}

export default Index;
