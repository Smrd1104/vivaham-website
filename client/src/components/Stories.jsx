import React from 'react';
import stories from '../assets/stories/stories.jpg'; // Adjust path if needed
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed

const Stories = () => {
    return (
        <div className='  relative md:mx-14 mx-5 '>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center "
                style={{ backgroundImage: `url(${stories})` }}
            ></div>
            <div className="  container mx-auto  relative w-full   min-h-screen md:max-w-[1580px] h-[650px] overflow-hidden px-10  ">


                {/* Foreground Content */}
                <div className="relative z-10  h-full  md:-right-20 ">
                    <div className="absolute   md:right-0 md:p-12    bg-stone-100 bg-opacity-95 md:max-w-[550px]  p-5 bottom-0 md:bottom-1/6  shadow-lg">
                        <div className="flex flex-col gap-4 ">
                            <div className="text-orange-400 md:text-xl text-md md:text-start text-center font-medium font-['Gellix']">The Stories</div>
                            <h2 className="text-black md:text-4xl text-2xl md:text-start text-center font-bold font-['Cambon'] md:leading-[48px] leading-[24px]">
                                A Curated Universe of <br />Bridal Luxury
                            </h2>
                            <div className="text-black md:text-sm md:text-start text-center text-xs font-bold font-['Gellix'] uppercase tracking-[3.20px]">
                                A Curated Universe of Bridal Luxury.
                            </div>
                        </div>
                        <p className="mt-6 text-black md:text-[1rem] text-xs md:text-start text-center font-medium font-['Gellix'] md:leading-9">
                            Step into Vivaham’s exclusive stores, where craftsmanship meets imagination. From handpicked designer couture to one-of-a-kind jewelry, our stores are more than retail spaces—they’re experiences. Every piece tells a story, every visit creates a memory.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
