import React from "react";
import cinema from "../../assets/institute/program/cinema.png";
import img1 from "../../assets/institute/program/img (1).png";
import img2 from "../../assets/institute/program/img (2).png";
import img3 from "../../assets/institute/program/img (3).png";
import img4 from "../../assets/institute/program/img (4).png";
import img5 from "../../assets/institute/program/img (5).png";
import img6 from "../../assets/institute/program/img (6).png";
import img7 from "../../assets/institute/program/img (7).png";
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed

// Replace img1 with img2-img7 for variety if needed

const programData = [
    { title: "Wedding Planners", image: img1 },
    { title: "Hairstylists", image: img3 },
    { title: "Designers", image: img4 },
    { title: "Photographers", image: img5 },
    { title: "Makeup Artists", image: img6 },
    { title: "Cinematographers", image: cinema },
    { title: "Florists", image: img7 },
    { title: "Light Designers", image: img2 },
];

const Program = () => {
    return (
        <div className="w-full px-4 relative">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>

            <section className="w-full py-28 max-w-[1720px] mx-auto flex flex-col items-center gap-16">
                {/* Title */}
                <header data-aos="fade-up" data-aos-duration="700" className="w-full text-center">
                    <h2 className="text-black text-4xl md:text-5xl font-bold font-['Cambon'] leading-tight">
                        Our programs are designed for
                    </h2>
                </header>

                {/* Grid: 4 per row on large screens */}
                <section className="relative w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {programData.map((item, index) => (
                        <article
                            key={index}
                            className="flex flex-col items-center gap-6"
                        >
                            <figure data-aos="fade-down" data-aos-duration="700" className="w-64 h-64 relative flex justify-center items-center">
                                <div className="absolute w-64 h-64 bg-[#FAF6F2] rounded-full" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-36 h-36 object-contain z-10"
                                />
                            </figure>

                            <figcaption data-aos="fade-up" data-aos-duration="700" className="text-center text-zinc-800 text-xl md:text-2xl font-bold font-['Gellix']">
                                {item.title}
                            </figcaption>
                        </article>
                    ))}
                </section>
            </section>
        </div>
    );
};

export default Program;
