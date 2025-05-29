import React from "react";
import imgOne from "../assets/stores/start (1).png";
import imgTwo from "../assets/stores/start (2).png";
import imgThree from "../assets/stores/start (3).png";
import imgFour from "../assets/stores/start (4).png";
import imgFive from "../assets/stores/start (5).png";
import imgSix from "../assets/stores/start (6).png";
import imgSeven from "../assets/stores/start (7).png";
import imgEight from "../assets/stores/start (8).png";
import imgNine from "../assets/stores/start (9).png";

import revImg1 from "../assets/stores/reverse (9).png"
import revImg2 from "../assets/stores/reverse (8).png"
import revImg3 from "../assets/stores/reverse (7).png"
import revImg4 from "../assets/stores/reverse (6).png"
import revImg5 from "../assets/stores/reverse (5).png"
import revImg6 from "../assets/stores/reverse (4).png"
import revImg7 from "../assets/stores/reverse (3).png"
import revImg8 from "../assets/stores/reverse (2).png"
import revImg9 from "../assets/stores/reverse (1).png"




const logos = [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSix, imgSeven, imgEight, imgNine,];
const reverseLogos = [revImg1, revImg2, revImg3, revImg4, revImg5, revImg6, revImg7, revImg8, revImg9,]

const Stores = () => {
    return (
        <div className="bg-black container mx-auto ">
            <div className="relative  text-center  overflow-hidden  ">
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-black/70 bg-opacity-50 z-10"></div>

                {/* Content */}
                <div className="relative z-20  translate-y-64 ">
                    <h2 className="justify-start text-orange-400 text-2xl font-medium font-['Gellix']">The Stores</h2>
                    <p className="self-stretch text-center justify-start text-white text-5xl font-bold font-['Cambon'] leading-[60px] mb-4">A Curated Universe of Bridal Luxury
                    </p>
                    <h2 className="self-stretch text-center justify-start text-white text-base font-bold font-['Gellix'] uppercase tracking-[3.20px] mb-4">A Curated Universe of Bridal Luxury.</h2>
                    <p className="self-stretch text-center justify-start text-white text-xl font-medium font-['Gellix'] leading-9">Step into Vivaham’s exclusive stores, where craftsmanship meets imagination. From
                        <br />handpicked designer couture to one-of-a-kind jewelry, our stores are more than retail
                        <br />spaces—they’re experiences. Every piece tells a story, every visit creates a memory</p>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative w-full overflow-hidden  -translate-y-62">
                    <div className="flex whitespace-nowrap animate-marquee opacity-80">
                        {[...logos, ...logos].map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="brand"
                                className="w-[350px] object-contain mx-2"
                            />
                        ))}
                    </div>
                </div>

                {/* Marquee Bottom (Reverse Scroll) */}
                <div className="relative w-full overflow-hidden mt-2  -translate-y-60 -mb-58">
                    <div className="flex whitespace-nowrap animate-marquee-reverse min-w-max opacity-80">
                        {[...reverseLogos, ...reverseLogos].map((img, index) => (
                            <img
                                key={`bottom-${index}`}
                                src={img}
                                alt="brand"
                                className="w-[350px] object-contain mx-2"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stores;