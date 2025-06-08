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
                    loading="lazy"
                ></div>

                {/* Foreground Content */}
                <div className="container mx-auto relative z-0">
                    <div className="relative z-10 md:h-[600px]  h-[900px] p-5 ">
                        <div className="absolute    p-4 md:p-6 md:top-52 top-72 bg-stone-100 bg-opacity-95 shadow-lg">
                            <div className="flex flex-col gap-4">
                                <h1 className="justify-start font-gellix-header">{title}</h1>
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
