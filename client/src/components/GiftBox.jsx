import React from 'react';
import giftOne from "../assets/gifts/gift1.png"
const GiftBox = () => {
    return (
        <div className=" bg-[#FBEFE4] px-4 md:py-20 py-10 z-10 relative">
            <section className="w-full container mx-auto py-16  flex flex-col justify-center items-center gap-10">
                {/* Heading */}
                <div className="text-center">
                    <h1 data-aos="fade-up" data-aos-delay="700" className="text-black text-5xl font-bold font-cambon-header leading-[60px]">
                        Vivaham Gift Box
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="700" className="mt-6  mx-auto  font-gellix-content leading-9">
                        Step into Vivaham’s exclusive stores, where craftsmanship meets imagination. From handpicked designer couture to one-of-a-kind jewelry, our stores are more than retail spaces — they’re experiences. Every piece tells a story, every visit creates a memory.
                    </p>
                </div>

                {/* Gift Cards */}
                <div className="w-full flex flex-wrap justify-center items-stretch gap-10">
                    {[1, 2, 3].map((num) => (
                        <article
                            key={num}
                            className="w-full md:w-[30%] shadow-[-4px_4px_40px_0px_rgba(178,178,178,0.25)] flex flex-col"
                        >
                            <img
                                className="w-full h-[400px] object-cover"
                                src={giftOne}
                                alt={`Gift #${num}`}
                            />
                            <div className="p-6 bg-white flex flex-col justify-between gap-4 h-full">
                                <header className="flex flex-col gap-2">
                                    <h2 className="text-black text-3xl font-bold font-['Cambon']">{`GIFT #${num}`}</h2>
                                    <p className="text-zinc-800 text-lg font-medium font-['Gellix'] leading-8">
                                        Lorem ipsum dolor sit amet consectetur. Vitae nunc cursus cursus nisl arcu pretium aenean.
                                    </p>
                                </header>
                                <div className="mt-4 flex gap-4">
                                    <button className="px-6 py-3 bg-zinc-800 text-white text-lg font-semibold font-['Gellix'] leading-8">
                                        BUY NOW
                                    </button>
                                    <button className="px-6 py-3 outline outline-1 outline-zinc-800 text-zinc-800 text-lg font-semibold font-['Gellix'] leading-8">
                                        LEARN MORE
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View More Button */}
                <button className="mt-10 px-6 py-3 bg-zinc-800 text-white text-xl font-semibold font-['Gellix'] leading-9">
                    VIEW MORE
                </button>
            </section>
        </div>
    );
};

export default GiftBox;
