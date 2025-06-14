// Partner.jsx
import React from 'react';

const Partner = ({ title, heading, subheading, description, image }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="900" className="mx-auto container my-16 ">

            <div className="relative ">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center  z-0   "
                    style={{ backgroundImage: `url(${image})` }}
                    loading="lazy"
                ></div>

                {/* Foreground Content */}
                <div className="container mx-auto relative z-0">
                    <div className="relative z-10 lg:h-[600px] md:h-[900px]  h-[700px] lg:p-4 p-3 ">
                        <div className="absolute    p-4 md:p-6 md:bottom-5 bottom-10 bg-stone-100 bg-opacity-95 shadow-lg">
                            <div className="flex flex-col gap-4">
                                <h1 className="justify-start font-gellix-header-start">{title}</h1>
                                <h2 className="justify-start card-cambon-header">
                                    {heading}
                                </h2>
                                {/* <div className="text-black text-sm font-bold font-['Gellix'] uppercase tracking-[3.20px]">
                                    {subheading}
                                </div> */}
                            </div>
                            <p className="self-stretch justify-start font-gellix-content-start mt-5">
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
