import { AnimatedDivider, HeroSection, KeyFeatures } from "../components";


const Home = () => {
    return (
        <div className="min-h-screen pt-10 flex flex-col bg-[#000814] home-gradient">
            <HeroSection />
            <AnimatedDivider/>
            <KeyFeatures />
        </div>
    );
};

export default Home;
