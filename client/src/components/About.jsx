import React from 'react';
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed

const About = () => {
    return (
        <div className="relative min-h-[700px]  w-full px-4  overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            {/* Foreground Content */}
            <div className="relative z-10 container mx-auto md:translate-y-40 translate-y-20 ">
                <h1 data-aos="fade-up" data-aos-duration="800" className="text-[#F6A634] text-2xl font-medium font-gellix-header  text-center mb-8">
                    About Us
                </h1>

                <div className="flex flex-col items-center justify-center gap-5 lg:px-28 text-center">
                    <h2 data-aos="fade-up" data-aos-duration="900" className="text-zinc-800 md:text-5xl text-3xl font-bold font-['Cambon']">
                        Luxury, Tradition And Innovation - All in One Grand Experience
                    </h2>

                    <p data-aos="fade-up" data-aos-duration="1000" className="text-zinc-800 md:text-xl text-md font-medium font-gellix-content leading-9">
                        Vivaham Luxury Expo Pvt Ltd is not just a name, it’s a movement that redefines the grandeur of Indian weddings.
                        We go beyond mere planning and bring together innovation, culture, and luxury under one roof. Whether it’s crafting
                        dreamlike bridal experiences, curating industry-defining conventions, or connecting the finest brands with their
                        perfect audience, Vivaham is where ideas turn into legacies. For us, every wedding is a story, and we ensure it’s
                        told with unparalleled finesse.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
