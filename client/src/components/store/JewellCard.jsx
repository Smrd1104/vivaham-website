import React from 'react';

const JewellCard = ({ image, title, description, discountPrice, actualPrice }) => {
    return (
        <div data-aos="fade-up" data-aos-delay="900" className='shadow-md  '>
            <img className="self-stretch w-full h-[450px]" src={image} alt={title} loading="lazy" />
            <div className='lg:p-4 md:p-5 p-4 bg-white'>
                <div className='flex flex-col gap-5 '>
                    <div className="card-cambon-header">{title}</div>
                    <div className="font-gellix-content-store ">{description}</div>
                    <div className="inline-flex justify-start items-end gap-2">
                        <div className="justify-start text-black text-4xl font-bold font-['Cambon']">₹ {discountPrice} </div>
                        <div className="justify-start text-black text-xl font-medium font-['Gellix']">MRP  </div>
                        <div className="justify-start"><span class="text-black text-xl font-bold font-['Cambon']">₹ </span><span class="text-black text-xl font-bold font-['Cambon'] line-through">{actualPrice} </span></div>
                    </div>
                </div>
                <div className='flex flex-row gap-5 mt-5'>
                    <button className="px-4 py-1 cursor-pointer bg-zinc-800 text-white text-md font-semibold font-gellix-button">BUY NOW</button>
                    <button

                        className="px-4 py-1 cursor-pointer outline outline-1 outline-zinc-800 text-zinc-800 text-md font-semibold font-gellix-button-white"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JewellCard;
