import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import bgImage from '../assets/hero/bg-img.webp'; // adjust path as needed
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
        <div className="md:py-20  relative w-full md:min-h-[700px]  z-90 ">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>

            <div className="container mx-auto relative md:z-0 lg:z-0 z-0">
                <div className="py-2 md:px-10 px-5 flex md:flex-row flex-col md:items-center md:justify-between md:gap-0 gap-5">
                    <div className="flex flex-col gap-2 text-start">
                        <h1 data-aos="fade-up" data-aos-duration="900" className="font-cambon-header">
                            Explore the Vivaham Experience
                        </h1>
                        <h2 data-aos="fade-up" data-aos-duration="900" className="md:text-start text-center  text-black md:text-sm text-xs font-bold font-['Gellix'] uppercase md:tracking-[3.20px]">
                            Luxury, Tradition & Innovation in Every Detail
                        </h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="900" className="flex flex-row gap-2 md:justify-end justify-between">
                        <button
                            className="lg:block hidden p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                            onClick={() => swiperRef?.slidePrev()}
                        >
                            <BiLeftArrowAlt className="text-[1.5rem]" />
                        </button>
                        <button
                            className="lg:block hidden p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                            onClick={() => swiperRef?.slideNext()}
                        >
                            <BiRightArrowAlt className="text-[1.5rem]" />
                        </button>
                    </div>
                </div>

                <div className="py-10 md:pl-10 md:px-0 px-5">
                    <Swiper
                        onSwiper={setSwiperRef}
                        spaceBetween={15}
                        slidesPerView={1} // default (mobile)
                        breakpoints={{
                            // Mobile screens (up to 639px)
                            0: {
                                slidesPerView: 1,
                            },
                            // Tablets (640px to 1023px)
                            640: {
                                slidesPerView: 2,
                            },
                            // Desktops (1024px and above)
                            1024: {
                                slidesPerView: 2.2,
                            },
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
            <div data-aos="fade-up" data-aos-duration="900" className="flex flex-row gap-2 px-10 justify-between pb-5">
                <button
                    className="lg:hidden  p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    onClick={() => swiperRef?.slidePrev()}
                >
                    <BiLeftArrowAlt className="text-[1.5rem]" />
                </button>
                <button
                    className="lg:hidden  p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    onClick={() => swiperRef?.slideNext()}
                >
                    <BiRightArrowAlt className="text-[1.5rem]" />
                </button>
            </div>
        </div >
    );
};

export default ExperienceSlider;
