import React, { useRef, useState } from 'react';
import img1 from "../assets/studio/studio (1).jpg";
import img2 from "../assets/studio/studio (2).jpg";
import img3 from "../assets/studio/studio (3).jpg";
import img4 from "../assets/studio/studio (4).jpg";
import img5 from "../assets/studio/studio (5).jpg";
import img6 from "../assets/studio/studio (6).jpg";
import img7 from "../assets/studio/studio (7).jpg";
import bgImage from "../assets/hero/bg-img.jpg";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const tabs = [
    {
        title: "Bride & Groom Styling Studio",
        content: "This is a specialized studio for fashion consultation and wedding styling for brides and grooms.",
        image: img1,
    },
    {
        title: "Exclusive Matchmaking Lounge",
        content: "An exclusive space designed to facilitate introductions and connections between families.",
        image: img2,
    },
    {
        title: "Wedding Career & Academy Hub",
        content: "Kickstart your career in the wedding industry with training and networking opportunities.",
        image: img3,
    },
    {
        title: "Family Grooming & Bridal Content Creation",
        content: "Services for family grooming and creating memorable bridal content including videos and photos.",
        image: img4,
    },
    {
        title: "Pre-Wedding Shoots & Venue Planning",
        content: "Plan your perfect pre-wedding shoot and discover stunning venues tailored to your taste.",
        image: img5,
    },
    {
        title: "Saree, Jewellery, Makeup & Hair Trials",
        content: "Try out sarees, jewelry sets, and makeup styles before the big day.",
        image: img6,
    },
    {
        title: "Therapy, Manifestation & Meditation Zones",
        content: "Relax and align your mind with our curated therapy and meditation experiences.",
        image: img7,
    },
];

const Studio = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const scrollRef = useRef(null);
    const sectionRefs = useRef([]);

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const offsets = sectionRefs.current.map((section) =>
            section ? section.getBoundingClientRect().top - 100 : Infinity
        );

        let closestIndex = 0;
        let minDistance = Infinity;

        offsets.forEach((top, index) => {
            const distance = Math.abs(top);
            if (top <= 200 && distance < minDistance) {
                closestIndex = index;
                minDistance = distance;
            }
        });

        setActiveTabIndex(closestIndex);
    };

    useEffect(() => {
        AOS.init({
            once: true,
            duration: 1500,
            offset: 120      // whether animation should happen only once
        });
    }, []);


    return (
        <div className="w-full min-h-screen relative py-20 px-2 bg-white">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center gap-12 md:mx-14">

                    {/* Heading */}
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h1 data-aos="fade-up" className="text-orange-400 text-2xl font-medium font-['Gellix']">The Studio</h1>
                        <h2 data-aos="fade-up" className="text-zinc-800 md:text-5xl text-3xl font-bold font-['Cambon']">
                            Lorem ipsum molestie massa sed at nunc.
                        </h2>
                    </div>

                    {/* Main Layout */}
                    <div className="flex md:flex-row flex-col md:gap-10 gap-8 w-full relative">
                        {/* Tab Titles (Sticky on Desktop) */}
                        <div className="flex flex-col md:sticky md:top-24 md:h-[calc(100vh-6rem)] overflow-hidden md:px-0 px-4 z-10">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() =>
                                        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className={`md:px-4 px-5 py-6 text-left border-b md:w-[400px] w-[370px] cursor-pointer md:text-lg font-['Gellix'] transition-all duration-200 relative ${index === activeTabIndex
                                        ? "text-zinc-800 font-bold"
                                        : "text-slate-500 font-medium"
                                        }`}
                                >
                                    {tab.title}
                                    {index === activeTabIndex && (
                                        <div className="absolute bottom-0 md:left-0 left-0 h-[1px] md:w-[400px] w-[370px] bg-zinc-800"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content (Scrollable) */}
                        <div
                            className="flex-1 flex flex-col gap-24 overflow-y-auto max-h-[calc(100vh-6rem)] pr-2 scroll-hidden"
                            onScroll={handleScroll}
                            ref={scrollRef}
                        >
                            {tabs.map((tab, index) => (
                                <section
                                    key={index}
                                    ref={(el) => (sectionRefs.current[index] = el)}
                                    className="scroll-mt-6"
                                >
                                    <h3 className="text-zinc-800 md:text-4xl text-3xl font-bold font-['Cambon']">
                                        {tab.title}
                                    </h3>
                                    <p className="text-zinc-800 md:text-xl text-md font-normal font-['Gellix'] leading-9">
                                        {tab.content}
                                    </p>
                                    <img
                                        src={tab.image}
                                        alt={tab.title}
                                        className="w-full h-[395px] object-cover rounded mt-4"
                                    />
                                </section>
                            ))}
                        </div>
                    </div>

                    {/* Progress Line with Dots */}
                    <div className="w-full flex justify-center mt-10">
                        <div className="relative w-[90%] h-5 flex items-center">
                            {/* Background Line */}
                            {/* <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 z-0" /> */}

                            {/* Progress Line */}
                            {/* <div
                                className="absolute top-1/2 left-0 h-1 bg-black transform -translate-y-1/2 z-10 transition-all duration-300"
                                style={{
                                    width: `${(activeTabIndex / (tabs.length - 1)) * 100}%`,
                                }}
                            /> */}

                            {/* Dot + Line Numbers */}

                            <div className="w-full flex justify-center mt-10">
                                <div className="relative w-[90%] h-5 flex items-center">
                                    {/* Line Background */}
                                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 z-0" />

                                    {/* Line Progress */}
                                    <div
                                        className="absolute top-1/2 left-0 h-1 bg-orange-400 transform -translate-y-1/2 z-10 transition-all duration-300"
                                        style={{
                                            width: `${(activeTabIndex) / (tabs.length - 1) * 100}%`,
                                        }}
                                    />

                                    {/* Numbered Dots on the Line */}
                                    <div className="flex justify-between items-center w-full z-20">
                                        {tabs.map((_, index) => (
                                            <div
                                                key={index}
                                                onClick={() =>
                                                    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" })
                                                }
                                                className="flex flex-col items-center cursor-pointer group"
                                            >
                                                <div
                                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-[10px] font-semibold transition-all duration-300
            ${activeTabIndex === index
                                                            ? "bg-orange-400 border-orange-400 text-white"
                                                            : "bg-white border-gray-400 text-gray-500 group-hover:border-orange-300"
                                                        }`}
                                                >
                                                    {index + 1}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Studio;
