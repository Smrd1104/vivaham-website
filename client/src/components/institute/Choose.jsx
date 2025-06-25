import React from 'react';
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed
import ChooseCard from './ChooseCard';

const cardData = [
    "The ONLY Hybrid Wedding Institution + Franchise Platform in Asia.",
    "Backed by 100+ premium wedding and lifestyle brands.",
    "Personal access to **HNI wedding clientele and billion-dollar wedding projects.",
    "Lifetime mentorship — not just a course, but a journey with us.",
    "Fast-track to becoming a wedding industry icon.",
    "Cross-border collaborations — Dubai, Maldives, Italy, Thailand and more.",
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

            <div className="relative  container mx-auto py-10 ">
                <div className="py-5 md:px-14 px-5 flex flex-col gap-5">
                    <h2 data-aos="fade-up" data-aos-duration="900" className="font-cambon-header-start">Why Choose Vivaham?</h2>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 md:px-10 px-5 py-10">
                    {cardData.map((text, index) => (
                        <ChooseCard key={index} number={index + 1} text={text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Choose;
