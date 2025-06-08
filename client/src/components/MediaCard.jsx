import React from 'react';

const MediaCard = ({ image, title, description, onPreview }) => {
    return (
        <div className='shadow'>
            <img className="self-stretch w-full h-[351px]" src={image} alt={title} loading="lazy" />
            <div className='p-4'>
                <div className='flex flex-col gap-5 mt-5'>
                    <div className="card-cambon-header">{title}</div>
                    <div className="font-gellix-content-start ">{description}</div>
                </div>
                <div className='flex flex-row gap-5 mt-5'>
                    <button className="px-2 py-2 cursor-pointer bg-zinc-800 text-white text-md font-semibold font-['Gellix']">BUY NOW</button>
                    <button
                        onClick={onPreview}
                        className="px-2 py-2 cursor-pointer outline outline-1 outline-zinc-800 text-zinc-800 text-md font-semibold font-['Gellix']"
                    >
                        PREVIEW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
