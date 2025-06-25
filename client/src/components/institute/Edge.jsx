import React from 'react';
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed
import EdgeCard from './EdgeCard';

const cardData = [
    "AI-powered business and client acquisition tools.",
    "Micro Franchise and Studio Business Kits.",
    "Global HNI wedding community network.",
    "Lifetime project pipelines with real-time support.",

];

const Edge = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>

            <div className="relative  container mx-auto py-10 ">
                <div className="py-5 md:px-14 px-5 flex flex-col gap-5">
                    <h2 data-aos="fade-up" data-aos-duration="900" className="font-cambon-header-start">The Vivaham Edge</h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 md:px-10 px-5 py-10">
                    {cardData.map((text, index) => (
                        <EdgeCard key={index} number={index + 1} text={text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Edge;
