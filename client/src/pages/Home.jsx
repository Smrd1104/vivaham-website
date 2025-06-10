import React from 'react'
import Hero from '../components/Hero'
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed
import About from '../components/About';
import Franchise from '../components/Franchise';
import Studio from '../components/Studio';
import Stories from '../components/Stories';
import ExperienceCard from '../components/ExperienceCard';
import ExperienceSlider from '../components/ExperienceCardSlider';
import Stores from '../components/Stores';
import Partner from '../components/Partner';
import PartnerSection from '../components/PartnerSection';
import Journey from '../components/Journey';
import Media from '../components/Media';
import GiftBox from '../components/GiftBox';

const Home = () => {
    return (
        <div className="relative min-h-screen">
            
            {/* Content layer */}
            <div className="relative z-10">
                <Hero />
                <About />
                <Franchise />
                <Stores />
                <Studio />
                <Stories />
                <Journey />
                <GiftBox />
                <Media />
                <PartnerSection />
                <ExperienceSlider />




            </div>

        </div>

    )
}

export default Home