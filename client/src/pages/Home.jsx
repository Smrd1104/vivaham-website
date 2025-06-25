import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About';
import Franchise from '../components/Franchise';
import Studio from '../components/Studio';
import Stories from '../components/Stories';
import ExperienceSlider from '../components/ExperienceCardSlider';
import Stores from '../components/Stores';
import PartnerSection from '../components/PartnerSection';
import Journey from '../components/Journey';
import Media from '../components/Media';
import GiftBox from '../components/GiftBox';

const Home = () => {


    return (
        <div className="">

            {/* Content layer */}
            <div className="relative z-10  ">
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