import React, { useRef } from 'react';
import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

const Flipbook = ({ urls = [], currentIndex = 0, onClose, onNavigate }) => {
    const modalRef = useRef(null);

    if (!urls.length) return null;

    const currentUrl = urls[currentIndex];

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose(); // Close if clicked outside the modal
        }
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-6xl h-[600px] bg-white rounded shadow-lg flex flex-col "
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 border-2 bg-white text-xl font-bold text-gray-700 hover:text-gray-900 z-10"
                >
                    <IoClose className='text-3xl' />
                </button>

                <iframe
                    title="Flipbook"
                    allowFullScreen
                    scrolling="no"
                    className="w-full flex-grow rounded"
                    src={currentUrl}
                ></iframe>

                {/* Navigation arrows */}
                {/* Navigation arrows */}
                {currentIndex > 0 && (
                    <div className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10">
                        <button
                            onClick={() => onNavigate(currentIndex - 1)}
                            className="p-2 border-2 border-gray-500 bg-white rounded shadow hover:bg-gray-200"
                            aria-label="Previous Flipbook"
                        >
                            <BiLeftArrowAlt className='text-4xl' />
                        </button>
                    </div>
                )}

                {currentIndex < urls.length - 1 && (
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10">
                        <button
                            onClick={() => onNavigate(currentIndex + 1)}
                            className="p-2 border-2 border-gray-500 bg-white rounded shadow hover:bg-gray-200"
                            aria-label="Next Flipbook"
                        >
                            <BiRightArrowAlt className='text-4xl' />
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Flipbook;
