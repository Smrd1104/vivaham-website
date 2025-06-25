import React from 'react'
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed

const Content = () => {
    return (
        <div className='relative min-h-[400px]  w-full   overflow-hidden'>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>
            <div className="relative z-10 container mx-auto lg:translate-y-28 md:translate-y-2 translate-y-5 lg:my-0 md:my-24  my-10  px-2  ">


                <div className="flex flex-col items-center justify-center gap-5 lg:px-38 md:px-6   text-center">
                    <h2 data-aos="fade-up" data-aos-duration="900" className="font-cambon-header">
                        Welcome to Asia’s Most Elite Wedding Industry Institution                    </h2>

                    <p data-aos="fade-up" data-aos-duration="1000" className="font-gellix-content text-justify px-5  ">
                        At Vivaham Luxury Expo Pvt Ltd, we don’t just train wedding professionals — we create pioneers who shape trends, design experiences, and build billion-dollar legacies in the global wedding ecosystem.                    </p>

                </div>
            </div>
        </div>
    )
}

export default Content