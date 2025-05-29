import React from 'react';

const ExperienceCard = ({ img, title, subtitle, description }) => {
    return (
        <div className="relative overflow-hidden group ">
            {/* Image */}
            <img
                src={img}
                alt="Experience"
                className="w-full h-[501px] object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-95 p-4">
                <div className="flex flex-col gap-4 cursor-pointer">
                    {/* Title */}
                    <h1 className="text-orange-400 text-xl   font-medium font-['Gellix']">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-black text-3xl font-bold font-['Cambon'] leading-tight">
                        {subtitle}
                    </h2>

                    {/* Description - shows on hover */}
                    <div className="
                        max-h-0 overflow-hidden transition-all duration-500 ease-in-out 
                        group-hover:max-h-[500px]
                    ">
                        <p className="text-black text-md font-medium font-['Gellix'] leading-relaxed mt-2">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
