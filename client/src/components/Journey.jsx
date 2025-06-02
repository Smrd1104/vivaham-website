'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Local images
import img1 from "../assets/journey/journey (1).png";
import img2 from "../assets/journey/journey (9).png";
import img3 from "../assets/journey/journey (8).png";
import img4 from "../assets/journey/journey (7).png";
import img5 from "../assets/journey/journey (6).png";
import img6 from "../assets/journey/journey (5).png";
import img7 from "../assets/journey/journey (4).png";
import img8 from "../assets/journey/journey (3).png";
import img9 from "../assets/journey/journey (2).png";

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const getEndValue = () => {
            const width = window.innerWidth;
            if (width >= 1024) return "+=6700";     // Desktop
            if (width >= 640) return "+=5200";      // Tablet
            return "+=4000";                        // Mobile
        };
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: headingRef.current,
                start: "top top",
                end: getEndValue,
                pin: true,
                pinSpacing: false,
            });
        });

        return () => ctx.revert();
    }, []);

    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9
    ];

    return (
        <div className="bg-stone-100">
            <div className="relative container mx-auto overflow-hidden pb-[500px]">
                {/* Fixed Heading */}
                <div
                    ref={headingRef}
                    className="w-full h-screen flex justify-center items-center z-0 px-4"
                >
                    <h1 className="text-center text-black text-3xl sm:text-4xl md:text-5xl font-bold font-['Cambon'] max-w-4xl">
                        A visual journey through the luxury, culture, and charm of Vivaham.
                    </h1>
                </div>

                {/* Scrollable Images */}
                <div className="relative z-0 -mt-screen flex flex-col gap-10 px-4 sm:px-6 md:px-10 py-20">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`w-full flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                            <img
                                src={typeof img === "string" ? img : img.src}
                                alt={`journey-${i}`}
                                className="rounded shadow-xl
                  w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%]
                  h-auto transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Journey;
