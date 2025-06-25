import React from 'react';

const JewellCard = ({ image, title, description, release, discountPrice, actualPrice }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="shadow-md rounded overflow-hidden bg-white"
        >
            {/* Apply blur + make sure image fills container */}
            <div className="w-full h-[450px] overflow-hidden">
                <img
                    className="w-full h-full object-fit blur-sm scale-105"
                    src={image}
                    alt={title}
                    loading="lazy"
                />
            </div>

            <div className="p-4">
                <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold font-cambon">{title}</h3>
                    <p className="font-gellix-content-store">{description}</p>
                    <p className="text-black text-xl font-bold font-cambon">{release}</p>


                    {/* <div className="flex items-end gap-2">
                        <span className="text-black text-4xl font-bold font-cambon">₹ {discountPrice}</span>
                        <span className="text-black text-xl font-medium font-gellix">MRP</span>
                        <span className="text-black text-xl font-bold font-cambon line-through">
                            ₹ {actualPrice}
                        </span>
                    </div> */}
                </div>

                <div className="flex gap-4 mt-5">
                    <button className="px-4 py-1 bg-zinc-800 text-white font-semibold font-gellix-button">BUY NOW</button>
                    <button className="px-4 py-1 border border-zinc-800 text-zinc-800 font-semibold font-gellix-button-white">
                        Learn More
                    </button>
                </div>
            </div>
        </div >
    );
};

export default JewellCard;
