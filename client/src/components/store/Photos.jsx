import React from 'react';
import img1 from '../../assets/store/imges/img (1).png';
import img2 from '../../assets/store/imges/img (2).png';
import img3 from '../../assets/store/imges/img (3).png';
import img4 from '../../assets/store/imges/img (4).png';
import bgImage from '../../assets/hero/bg-img.webp';

const images = [img1, img2, img3, img4];

const Photos = () => {
    return (
        <div className=' relative md:py-0 py-10 '>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>
            <div className="relative z-10 grid md:grid-cols-2 gap-5 justify-center items-center container mx-auto ">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-[640px] object-fit"
                        loading="lazy"
                    />
                ))}
            </div>
        </div>
    );
};

export default Photos;
