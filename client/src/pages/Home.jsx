import React from 'react'
import Hero from '../components/Hero'
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed
import About from '../components/About';


const Home = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background image layer */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>


            {/* Content layer */}
            <div className="relative z-10">
                <Home />
                <About />
            </div>

        </div>

    )
}

export default Home