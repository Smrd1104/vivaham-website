import React, { useEffect, useState } from 'react';
import img1 from '../../assets/store/jewell/jewell (1).png';
import img2 from '../../assets/store/jewell/jewell (2).png';
import img3 from '../../assets/store/jewell/jewell (3).png';
import img4 from '../../assets/store/jewell/jewell (4).png';

import bgImage from '../../assets/hero/bg-img.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SareeCard from './SareeCard';


// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import JewellCard from './JewellCard';

const mediaData = [
    {
        image: img1,
        title: 'Mystic Floral Radiance',
        description: 'Diamond Necklace.',
        release: 'Coming Soon',
        discountPrice: '3,190,000',
        actualPrice: '3,427,000',
    },
    {
        image: img2,
        title: 'Gilded Lakshmi Grace',
        description: 'Gold Necklace.',
        release: 'Coming Soon',

        discountPrice: '709,000',
        actualPrice: '786,000',
    },
    {
        image: img3,
        title: 'Regal Emerald',
        description: 'Diamond Necklace.',
        release: 'Coming Soon',

        discountPrice: '5,710,000',
        actualPrice: '6,427,000',
    },
    {
        image: img4,
        title: 'Lavish Bloom',
        description: 'Diamond Necklace.',
        release: 'Coming Soon',

        discountPrice: '3,190,000',
        actualPrice: '3,427,000',
    },

];

const JewellCardSection = () => {

    const [swiperRef, setSwiperRef] = useState(null); // ✅ useState instead of useRef

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1500,
            offset: 120,
        });
    }, []);

    return (
        <div className="relative w-full py-20  ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20  z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>
            <div className='container mx-auto'>
                <div className="lg:px-5 md:px-0 px-5  flex md:flex-row flex-col md:items-center md:justify-between md:gap-0 gap-5">
                    <div className="flex flex-col gap-2 text-start">
                        <h1 data-aos="fade-up" data-aos-duration="900" className="font-cambon-header">
                            Jewellery That Captures Every Moment
                        </h1>
                        <h2 data-aos="fade-up" data-aos-duration="900" className="md:text-start text-center  text-black md:text-[1rem] text-[0.7rem] font-bold font-['Gellix'] uppercase md:tracking-[3.20px] tracking-[3.20px]">
                            Timeless Pieces for the Modern Bride                        </h2>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="900" className="flex flex-row  md:justify-end justify-between">
                        <button
                            className="lg:block hidden p-4  border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                            onClick={() => swiperRef?.slidePrev()}
                        >
                            <GoArrowLeft className="text-[1.5rem] text-slate-600" />
                        </button>
                        <button
                            className="lg:block hidden p-4  border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                            onClick={() => swiperRef?.slideNext()}
                        >
                            <GoArrowRight className="text-[1.5rem] text-slate-600" />
                        </button>
                    </div>
                </div>
            </div>




            {/* Swiper Slider */}
            <div className="relative z-10 container mx-auto pt-14 md:pl-5 md:px-0 px-5 ">
                <Swiper

                    onSwiper={setSwiperRef}
                    spaceBetween={20}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1.5,
                        },
                        1024: {
                            slidesPerView: 3.2,
                        },
                    }}
                >
                    {mediaData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <JewellCard
                                image={item.image}
                                title={item.title}
                                description={item.description}
                                release={item.release}
                                discountPrice={item.discountPrice}
                                actualPrice={item.actualPrice}


                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default JewellCardSection;
