import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; // optional: install lucide-react or use any icon
import { FaWhatsapp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button on scroll
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll to top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-5 right-5 z-50 lg:p-3  md:p-5 p-4 rounded-full bg-black/80 text-white shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp className="lg:w-5 lg:h-5 md:w-10 md:h-10 w-5 h-5" />
            </button>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/919876543210" // Replace with your number
                target="_blank"
                rel="noopener noreferrer"
                className={`fixed lg:bottom-18 md:bottom-32 bottom-20 right-5 z-50 lg:p-3  md:p-5 p-4 rounded-full bg-green-500 text-white shadow-lg transition-opacity duration-300  ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp className="lg:w-5 lg:h-5 md:w-10 md:h-10 w-5 h-5" />
            </a>

        </>
    );
};

export default ScrollToTopButton;
