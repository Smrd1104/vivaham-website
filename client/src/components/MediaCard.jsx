import React from 'react';

const MediaCard = ({ image, title, description, onPreview }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="900" className='shadow'>
            <img className="self-stretch w-full lg:h-[351px]" src={image} alt={title} loading="lazy" />
            <div className='lg:p-4 md:p-10 p-4'>
                <div className='flex flex-col gap-5 mt-5'>
                    <div className="card-cambon-header">{title}</div>
                    <div className="font-gellix-content-start ">{description}</div>
                </div>
                <div className='flex md:flex-row flex-col gap-5 mt-5'>
                    <button className="px-4 py-1 cursor-pointer bg-zinc-800 text-white text-md font-semibold font-gellix-button">BUY NOW / DOWNLOAD</button>
                    <button
                        onClick={onPreview}
                        className="px-4 py-1 cursor-pointer outline outline-1  outline-zinc-800 text-zinc-800 text-md font-semibold font-gellix-button-white"
                    >
                        PREVIEW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
