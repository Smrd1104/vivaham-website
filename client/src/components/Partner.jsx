// Partner.jsx
import React from 'react';

const Partner = ({ title, heading, subheading, description, image }) => {
    return (
        <div className="mx-auto container my-16 ">

            <div className="relative ">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-no-repeat md:bg-cover md:bg-center bg- z-0  "
                    style={{ backgroundImage: `url(${image})` }}
                ></div>

                {/* Foreground Content */}
                <div className="container mx-auto relative z-0">
                    <div className="relative z-10 h-[600px] p-5 ">
                        <div className="absolute  bottom-10  p-10  bg-stone-100 bg-opacity-95 shadow-lg">
                            <div className="flex flex-col gap-4">
                                <h1 className="justify-start text-orange-400 text-lg font-medium font-['Gellix']">{title}</h1>
                                <h2 className="justify-start text-black text-2xl font-bold font-['Cambon']">
                                    {heading}
                                </h2>
                                {/* <div className="text-black text-sm font-bold font-['Gellix'] uppercase tracking-[3.20px]">
                                    {subheading}
                                </div> */}
                            </div>
                            <p className="self-stretch justify-start text-black text-sm font-medium font-['Gellix'] leading-6 mt-5">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;
