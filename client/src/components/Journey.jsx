'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Local images
import img1 from "../assets/journey/journey (1).png";
import img2 from "../assets/journey/journey (2).png";
import img3 from "../assets/journey/journey (3).png";
import img4 from "../assets/journey/journey (4).png";
import img5 from "../assets/journey/journey (5).png";
import img6 from "../assets/journey/journey (6).png";
import img7 from "../assets/journey/journey (7).png";
import img8 from "../assets/journey/journey (8).png";
import img9 from "../assets/journey/journey (9).png";
// import img10 from "../assets/journey/journey ().png";
// import img11 from "../assets/journey/journey ().png";



gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
    const headingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: headingRef.current,
                start: "top top",
                end: "+=6400",
                pin: true,
                pinSpacing: false,
            });
        });

        return () => ctx.revert();
    }, []);

    const images = [
        { src: img1, width: 708, height: 657 },
        { src: img2, width: 542, height: 560 },
        { src: img3, width: 551, height: 828 },
        { src: img4, width: 447, height: 621 },
        { src: img5, width: 487, height: 1033 },
        { src: img6, width: 586, height: 657 },
        { src: img7, width: 593, height: 495 },
        { src: img8, width: 540, height: 560 },
        { src: img9, width: 493, height: 1040 },
        // { src: img10, width: 900, height: 700 },
        // { src: img11, width: 820, height: 640 },
    ];

    return (
        <div className='  bg-stone-100'>
            <div className="relative container mx-auto  overflow-hidden pb-[900px] ">
                {/* Fixed Heading */}
                <div
                    ref={headingRef}
                    className="w-full h-screen flex justify-center items-center z-0"
                >
                    <h1 className="text-center text-black text-5xl font-bold font-['Cambon'] max-w-4xl">
                        A visual journey through the luxury, culture, and charm of Vivaham.
                    </h1>
                </div>

                {/* Scrollable Images */}
                <div className="relative z-0 -mt-screen flex flex-col items-center gap-10 px-10 py-20">
                    {images.map((image, i) => (
                        <div
                            key={i}
                            className={`w-fit journey-image ${i % 2 === 0 ? "self-start" : "self-end"}`}
                        >
                            <img
                                src={typeof image.src === "string" ? image.src : image.src.src}
                                width={image.width}
                                height={image.height}
                                alt={`journey-${i}`}
                                className="rounded-xl shadow-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Journey;
