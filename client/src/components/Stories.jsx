import React from 'react';
import stories from '../assets/stories/stories.jpg'; // Adjust path if needed
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed

const Stories = () => {
    return (
        <div className='md:px-10 px-2'>
            <div className='  relative   container mx-auto '>
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center z-10 "
                    style={{ backgroundImage: `url(${stories})` }}
                    loading="lazy"
                ></div>
                <div className="    relative w-full   lg:min-h-[700px] md:min-h-[1000px] min-h-[700px]  h-[650px] overflow-hidden px-5  ">


                    {/* Foreground Content */}
                    <div className="relative z-10  h-full  lg:-right-5 md:-right-10 ">
                        <div className="absolute   md:right-0 md:p-5 bg-stone-100 bg-opacity-95 lg:max-w-[550px]  lg:p-8 p-4 bottom-0 md:bottom-1/10  shadow-lg">
                            <div className="flex flex-col gap-4 ">
                                <div className="font-gellix-header-start-stories">The Stories</div>
                                <h2 className=" font-cambon-header-stories ">
                                    A Curated Universe of <br />Bridal Luxury
                                </h2>
                                <div className=" font-gellix-title-content ">
                                    A Curated Universe of Bridal Luxury.
                                </div>
                            </div>
                            <p className="mt-6 font-gellix-content-start">
                                Step into Vivaham’s exclusive stores, where craftsmanship meets imagination. From handpicked designer couture to one-of-a-kind jewelry, our stores are more than retail spaces—they’re experiences. Every piece tells a story, every visit creates a memory.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
