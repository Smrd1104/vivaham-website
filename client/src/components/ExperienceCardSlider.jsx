import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bgImage from '../assets/hero/bg-img.jpg'; // adjust path if needed
import ExperienceCard from '../components/ExperienceCard';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

// Import images
import img1 from '../assets/exp/exp (1).jpg';
import img2 from '../assets/exp/exp (5).jpg';
import img3 from '../assets/exp/exp (3).jpg';
import img4 from '../assets/exp/exp (4).jpg';
import img5 from '../assets/exp/exp (2).jpg';

const experienceData = [
    {
        img: img1,
        title: 'The Conventions',
        subtitle: 'Where Innovation Meets Tradition',
        description:
            'Experience the present and guide the future. From here, one begins to notice the connection that tradition has with innovation.',
    },
    {
        img: img2,
        title: 'Bridal Affairs',
        subtitle: 'Crafting Moments, One Bride at a time',
        description:
            'Take a leap into the extraordinary where passion fuels progress and history inspires the future.',
    },
    {
        img: img3,
        title: 'Events & Expo',
        subtitle: 'A Celebration Like No other',
        description:
            'Discover how we bridge imagination with execution in every moment that matters.',
    },
    {
        img: img4,
        title: 'Live Offer & Exclusive',
        subtitle: 'Indulge In Exclusive Luxury Deals',
        description:
            'Discover how we bridge imagination with execution in every moment that matters.',
    },
    {
        img: img5,
        title: 'The Vivaham Circle',
        subtitle: 'Join The Inner Circle of Elegance',
        description:
            'Discover how we bridge imagination with execution in every moment that matters.',
    },
];

const ExperienceSlider = () => {
    const [swiperRef, setSwiperRef] = useState(null); // ✅ useState instead of useRef

    return (
        <div className="py-20 relative w-full min-h-[700px]">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className="container mx-auto relative z-10">
                <div className="py-2 px-10 flex flex-row items-center justify-between">
                    <div className="flex flex-col gap-2 text-start">
                        <h1 className="text-black text-5xl font-bold font-['Cambon'] leading-[60px]">
                            Explore the Vivaham Experience
                        </h1>
                        <h2 className="text-black text-xs font-semibold font-['Gellix'] uppercase tracking-[3.20px]">
                            Luxury, Tradition & Innovation in Every Detail
                        </h2>
                    </div>
                    <div className="flex flex-row gap-2">
                        <button
                            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                            onClick={() => swiperRef?.slidePrev()}
                        >
                            <BiLeftArrowAlt className="text-[1.5rem]" />
                        </button>
                        <button
                            className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                            onClick={() => swiperRef?.slideNext()}
                        >
                            <BiRightArrowAlt className="text-[1.5rem]" />
                        </button>
                    </div>
                </div>

                <div className="py-10 pl-10">
                    <Swiper
                        onSwiper={setSwiperRef} // ✅ assign swiper instance here
                        spaceBetween={15}
                        slidesPerView={2.5}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 2.5 },
                        }}
                        modules={[Navigation, Pagination]}
                        className="mySwiper"
                    >
                        {experienceData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <ExperienceCard
                                    img={item.img}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                    description={item.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSlider;
