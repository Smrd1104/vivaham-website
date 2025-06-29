import React from 'react';
import { Link } from 'react-router-dom';

const MediaCard = ({ image, title, description, onPreview }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay="900"
            className="w-full lg:max-w-md mx-auto bg-white shadow-sm overflow-hidden"
        >
            <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-100 md:h-180 lg:h-96 object-fit"
            />

            <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <h3 className="card-cambon-header text-lg font-semibold">{title}</h3>
                    <p className="font-gellix-content-start text-sm text-gray-700">{description}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Link to="https://wa.link/dsu7l5" target="_blank">
                        <button className="w-full sm:w-auto px-5 py-2 bg-zinc-800 text-white font-semibold font-gellix-button text-sm  cursor-pointer">
                            BUY NOW / DOWNLOAD
                        </button>
                    </Link>
                    <button
                        onClick={onPreview}
                        className="w-full sm:w-auto px-5 py-2 border border-zinc-800 text-zinc-800 font-semibold font-gellix-button-white text-sm  cursor-pointer"
                    >
                        PREVIEW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MediaCard;
