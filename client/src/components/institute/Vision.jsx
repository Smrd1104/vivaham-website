import React from 'react';
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed
import vision from "../../assets/institute/vision.jpg"
const Vision = () => {
    return (
        <div className="relative">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>
            <div className='container mx-auto px-10 py-8 '>
                <section className="flex relative flex-col lg:flex-row items-center gap-10 max-w-screen-xl mx-auto">
                    <article className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-6">
                        <header>
                            <h1 className="text-zinc-800 text-4xl md:text-5xl font-bold font-['Cambon']">
                                Our Vision: A New Universe for Wedding Industry Professionals
                            </h1>
                        </header>

                        <section>
                            <h2 className="text-zinc-800 text-2xl font-bold font-['Cambon'] mt-4">
                                Imagine a space where you:
                            </h2>
                            <ul className="text-zinc-800 text-lg md:text-xl font-medium font-['Gellix'] leading-8 list-disc pl-5 mt-2 space-y-2">
                                <li>Collaborate with royal families, top celebrities and HNIs</li>
                                <li>Work on destination weddings at palaces, private islands and exotic resorts</li>
                                <li>Build your brand with global luxury labels</li>
                                <li>Feature in international magazines, shows and wedding galas</li>
                                <li>Access unlimited revenue streams — with zero limits on your growth</li>
                            </ul>
                        </section>
                    </article>

                    <figure className="w-full lg:w-1/2">
                        <img
                            className="w-full h-[450px] object-cover rounded-md"
                            src={vision}
                            alt="Vision Illustration"
                        />
                    </figure>
                </section>
            </div>
        </div>
    );
};

export default Vision;
