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

const Home = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background image layer */}
            {/* <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 "
                style={{ backgroundImage: `url(${bgImage})` }}

            >

            </div> */}


            {/* Content layer */}
            <div className="relative z-10">
                <Hero />
                <About />
                <Franchise />
                <Stores />
                <Studio />
                <Stories />
                <Journey />
                <Media />
                <PartnerSection />
                <ExperienceSlider />
                


            </div>

        </div>

    )
}

export default Home