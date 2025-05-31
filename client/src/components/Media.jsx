import React, { useState } from 'react';
import MediaCard from './MediaCard';
import Flipbook from './Flipbook';
import img1 from '../assets/media/media (1).png';
import img2 from '../assets/media/media (2).png';
import img3 from '../assets/media/media (3).png';
import bgImage from '../assets/hero/bg-img.jpg';

const mediaData = [
    {
        image: img1,
        title: 'Happy Wedding',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        flipbookUrls: [
            'https://heyzine.com/flip-book/fbe67d5f2c.html',
            'https://heyzine.com/flip-book/0696d2cdd6.html',
            'https://heyzine.com/flip-book/another-flipbook.html',
        ],
    },
    {
        image: img2,
        title: 'Happy Wedding',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        flipbookUrls: [
            'https://heyzine.com/flip-book/fbe67d5f2c.html',
            'https://heyzine.com/flip-book/0696d2cdd6.html',
            'https://heyzine.com/flip-book/another-flipbook.html',
        ],
    },
    {
        image: img3,
        title: 'Happy Wedding',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        flipbookUrls: [
            'https://heyzine.com/flip-book/fbe67d5f2c.html',
            'https://heyzine.com/flip-book/0696d2cdd6.html',
            'https://heyzine.com/flip-book/another-flipbook.html',
        ],
    },
];

const Media = () => {
    const [currentUrls, setCurrentUrls] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePreview = (urls, index = 0) => {
        setCurrentUrls(urls);
        setCurrentIndex(index);
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

    return (
        <div className="relative w-full py-10">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className="pb-10">
                <h1 className="relative text-center text-orange-400 text-2xl font-medium font-['Gellix']">Magazines & Media</h1>
                <p className="relative text-center text-black text-5xl font-bold font-['Cambon'] leading-[60px]">The Voice of Luxury Weddings</p>
            </div>

            {/* Cards grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-14">
                {mediaData.map((item, index) => (
                    <MediaCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        flipbookUrls={item.flipbookUrls}
                        onPreview={(url) => {
                            const idx = item.flipbookUrls.indexOf(url);
                            handlePreview(item.flipbookUrls, idx);
                        }}
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
