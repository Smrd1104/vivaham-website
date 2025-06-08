import React, { useState } from 'react';
import MediaCard from './MediaCard';
import Flipbook from './Flipbook';
import img1 from '../assets/media/media (1).png';
import img2 from '../assets/media/media (2).png';
import img3 from '../assets/media/media (3).png';
import bgImage from '../assets/hero/bg-img.jpg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
const mediaData = [
    {
        image: img1,
        title: 'Happy Wedding',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        flipbookUrls: [
            'https://heyzine.com/flip-book/c546d9effe.html',


        ],
    },
    {
        image: img2,
        title: 'Happy Wedding',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        flipbookUrls: [
            'https://heyzine.com/flip-book/c546d9effe.html',

        ],
    },
    {
        image: img3,
        title: 'Happy Wedding',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        flipbookUrls: [
            'https://heyzine.com/flip-book/c546d9effe.html',


        ],
    },
];

const Media = () => {
    const [currentUrls, setCurrentUrls] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePreview = (urls) => {
        setCurrentUrls(urls);
        setCurrentIndex(0); // Always start from first URL
    };

    const handleClose = () => {
        setCurrentUrls([]);
        setCurrentIndex(0);
    };

    const handleNavigate = (newIndex) => {
        if (newIndex >= 0 && newIndex < currentUrls.length) {
            setCurrentIndex(newIndex);
        }
    };

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1500,

            offset: 120      // whether animation should happen only once
        });
    }, []);

    return (
        <div className="relative w-full py-10 ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>

            <div className="pb-10">
                <h1 data-aos="fade-up" className="relative text-center text-orange-400 text-2xl font-medium font-gellix-header">Magazines & Media</h1>
                <p data-aos="fade-up" className="relative text-center  font-cambon-header  mt-4 ">The Voice of Luxury Weddings</p>
            </div>

            {/* Cards grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto md:px-14 px-5">
                {mediaData.map((item, index) => (
                    <MediaCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        onPreview={() => handlePreview(item.flipbookUrls)} // Always start from index 0
                    />
                ))}

                {/* Show Flipbook modal */}
                {currentUrls.length > 0 && (
                    <Flipbook
                        urls={currentUrls}
                        currentIndex={currentIndex}
                        onClose={handleClose}
                        onNavigate={handleNavigate}
                    />
                )}
            </div>
        </div>
    );
};

export default Media;
