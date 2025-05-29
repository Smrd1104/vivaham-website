import React from 'react'
import Hero from '../components/Hero'
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed


const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <Hero />
            

        </div>
    )
}

export default Home