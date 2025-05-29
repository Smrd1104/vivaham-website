import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

import ExperienceCard from '../components/ExperienceCard';

// Import images
import img1 from '../assets/exp/exp (1).jpg';
import img2 from '../assets/exp/exp (5).jpg';
import img3 from '../assets/exp/exp (3).jpg'; // Add as needed
import img4 from '../assets/exp/exp (4).jpg'; // Add as needed

import img5 from '../assets/exp/exp (2).jpg'; // Add as needed


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
        subtitle: 'Crafting Moments,One Bride at a time',
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
        subtitle: 'Join The Inner Circle of Elegance ',
        description:
            'Discover how we bridge imagination with execution in every moment that matters.',
    },
    // Add more cards if needed
];

const ExperienceSlider = () => {
    return (
        <div className="container mx-auto py-20 pl-14 ">

            <div className='py-10'>
                <h1 className="justify-start text-black text-5xl font-bold font-['Cambon'] leading-[60px]">Explore the Vivaham Experience</h1>
                <h2 className="self-stretch justify-start text-black text-base font-bold font-['Gellix'] uppercase tracking-[3.20px]">Luxury, Tradition & Innovation in Every Detail</h2>

            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={2.5}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                navigation
                pagination={{ clickable: true }}
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
    );
};

export default ExperienceSlider;
