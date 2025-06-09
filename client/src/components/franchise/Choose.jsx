import React from 'react';
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed
import ChooseCard from './ChooseCard';

const cardData = [
    "India’s only integrated wedding commerce network",
    "Daily footfall, recurring revenue, and cross - category influence",
    "200+ premium brands already onboarded",
    "Real - time CRM, influencer marketing, and curated bridal events",
    "Complete training, launch support, and branding assistance",
    "Tailored formats for solo - preneurs, professionals, and seasoned investors",
];

const Choose = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>

            <div className="relative py-20 container mx-auto ">
                <div className="py-10 px-14">
                    <h2 className="font-cambon-header">Why Choose a Vivaham® Franchise?</h2>
                    <p className="text-black text-base font-bold font-['Gellix'] uppercase tracking-[3.20px]">
                        Because we are not offering you a franchise. We are offering you a wedding legacy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 py-10">
                    {cardData.map((text, index) => (
                        <ChooseCard key={index} number={index + 1} text={text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Choose;
