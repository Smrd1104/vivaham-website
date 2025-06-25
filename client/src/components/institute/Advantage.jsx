import React from 'react';
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed
import ChooseCard from './ChooseCard';

const cardData = [
    "Featured in Vivaham Wedding TV and global wedding shows",
    "Shoots for top bridal magazines, campaigns and portals",
    "Speaker invites at wedding summits and luxury conclaves",
    "Priority for franchise partnerships and event projects",
    "Opportunities to co-curate palace, island and private jet weddings",
];

const Advantage = () => {
    return (
        <div className="relative ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>

            <div className="relative  container mx-auto py-10 ">
                <div className="py-5 md:px-14 px-5 flex flex-col gap-5">
                    <h2 data-aos="fade-up" data-aos-duration="900" className="font-cambon-header-start">Your Advantages</h2>

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

export default Advantage;
