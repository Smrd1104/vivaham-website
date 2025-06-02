import React, { useState } from 'react';
import img1 from "../assets/studio/studio (1).jpg"
import img2 from "../assets/studio/studio (2).jpg"
import img3 from "../assets/studio/studio (3).jpg"
import img4 from "../assets/studio/studio (4).jpg"
import img5 from "../assets/studio/studio (5).jpg"
import img6 from "../assets/studio/studio (6).jpg"
import img7 from "../assets/studio/studio (7).jpg"
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed


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
    const activeTab = tabs[activeTabIndex];

    return (
        <div className="  w-full min-h-[700px] relative py-20">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className='container mx-auto '>

                <div className="relative flex flex-col items-center md:gap-12 gap-5 md:mx-14">
                    {/* Heading */}
                    <div className="flex flex-col items-center gap-4 text-center">
                        <h1 className="text-orange-400 text-2xl font-medium font-['Gellix']">The Studio</h1>
                        <h2 className="text-zinc-800 md:text-5xl text-3xl font-bold font-['Cambon']">Lorem ipsum molestie massa sed at nunc.</h2>
                    </div>

                    {/* Tabs layout */}
                    <div className="flex md:flex-row flex-col md:gap-10 gap-8 w-full">
                        {/* Left: Tab Titles */}
                        <div className="md:w-[548px] flex flex-col md:px-0 px-4">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveTabIndex(index)}
                                    className={` md:px-4 px-5 py-6 text-left border-b md:w-[400px] w-[370px]    cursor-pointer md:text-lg font-['Gellix'] transition-all duration-200 relative
        ${index === activeTabIndex
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

                        {/* Right: Tab Content */}
                        <div className="flex-1 flex flex-col gap-4 md:mx-0 mx-5">
                            <h3 className="text-zinc-800 md:text-4xl text-3xl font-bold font-['Cambon']">{activeTab.title}</h3>
                            <p className="text-zinc-800 md:text-xl text-md font-normal font-['Gellix'] leading-9">{activeTab.content}</p>
                            <img src={activeTab.image} alt={activeTab.title} className="w-full h-[360px] object-cover rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Studio;
