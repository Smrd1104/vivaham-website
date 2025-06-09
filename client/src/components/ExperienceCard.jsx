import React, { useState } from 'react';

const ExperienceCard = ({ img, title, subtitle, description }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleToggle = () => {
        // Only toggle on mobile
        if (window.innerWidth < 768) {
            setIsMobileOpen(!isMobileOpen);
        }
    };

    return (
        <div
            className="relative overflow-hidden group w-full"
            onClick={handleToggle}
        >
            {/* Image */}
            <img
                src={img}
                alt="Experience"
                className="w-full h-[550px] object-cover transition-transform duration-500 md:group-hover:scale-105"
                loading="lazy"
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-95 p-4">
                <div className="flex flex-col gap-4 cursor-pointer">
                    {/* Title */}
                    <h1 className="font-gellix-header-start ">
                        {title}
                    </h1>

                    {/* Subtitle */}
                    <h2 className="text-black text-[1.5rem] font-bold card-cambon-header leading-tight">
                        {subtitle}
                    </h2>

                    {/* Description */}
                    <div
                        className={`
                            overflow-hidden transition-all duration-500 ease-in-out
                            ${isMobileOpen ? 'max-h-[550px]' : 'max-h-0'}
                            md:max-h-0 md:group-hover:max-h-[550px]
                        `}
                    >
                        <p className="font-gellix-content-start mt-2">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
