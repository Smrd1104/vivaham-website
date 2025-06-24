import React from 'react';
import img1 from '../../assets/store/imges/img (1).png';
import img2 from '../../assets/store/imges/img (2).png';
import img3 from '../../assets/store/imges/img (3).png';
import img4 from '../../assets/store/imges/img (4).png';

const images = [img1, img2, img3, img4];

const Photos = () => {
    return (
        <div className=''>
            <div className="grid grid-cols-2 gap-5 justify-center items-center container mx-auto">
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
