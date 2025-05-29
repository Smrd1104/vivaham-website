import React from 'react';
import stories from '../assets/stories/stories.jpg'; // Adjust path if needed

const Stories = () => {
    return (
        <div className='container mx-auto '>
            <div className="relative w-full max-w-[1500px] h-[947px] overflow-hidden px-14 ">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center"
                    style={{ backgroundImage: `url(${stories})` }}
                ></div>

                {/* Foreground Content */}
                <div className="relative z-10 h-full  -right-14">
                    <div className="absolute right-0 px-10 top-1/2 -translate-y-1/2 bg-stone-100 bg-opacity-95 max-w-[450px] py-10 shadow-lg">
                        <div className="flex flex-col gap-4 ">
                            <div className="text-orange-400 text-xl font-medium font-['Gellix']">The Stories</div>
                            <h2 className="text-black text-4xl font-bold font-['Cambon'] leading-[48px]">
                                A Curated Universe of <br />Bridal Luxury
                            </h2>
                            <div className="text-black text-sm font-bold font-['Gellix'] uppercase tracking-[3.20px]">
                                A Curated Universe of Bridal Luxury.
                            </div>
                        </div>
                        <p className="mt-6 text-black text-md font-medium font-['Gellix'] leading-9">
                            Step into Vivaham’s exclusive stores, where craftsmanship meets imagination. From handpicked designer couture to one-of-a-kind jewelry, our stores are more than retail spaces—they’re experiences. Every piece tells a story, every visit creates a memory.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
