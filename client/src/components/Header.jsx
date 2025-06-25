import React, { useState, useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "The Franchise", href: "/franchise" },  // Changed to hash link
    { name: "The Store", href: "/store" },
    { name: "The Institute", href: "/institute" },
    { name: "The Gift Box", href: "/gift-Box" },
    { name: "The Magazine", href: "/magazine" },
];

function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    // Check if link is active
    const isActive = (href) => {
        if (href === "/") return location.pathname === "/";
        if (href.startsWith("#")) return location.hash === href;
        return location.pathname.startsWith(href);
    };

    // Handle navigation with smooth scroll for hash links
    const handleNavigation = (href, event) => {
        if (href.startsWith("#")) {
            event.preventDefault();
            closeMenu();

            // If we're already on the same page, just scroll to the section
            if (location.pathname === "/") {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                // Navigate to home page first, then scroll to section
                navigate("/", { replace: true });
                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
        } else {
            closeMenu();
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Highlight nav items based on scroll position for hash links
            if (location.hash) {
                const element = document.querySelector(location.hash);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        // This section is in view
                    }
                }
            }
        };

        const handleClickOutside = (event) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                (!hamburgerRef.current || !hamburgerRef.current.contains(event.target))
            ) {
                closeMenu();
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen, location.hash]);

    const openMenu = () => {
        setIsMenuOpen(true);
        setIsAnimating(true);
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsMenuOpen(false);
            document.body.style.overflow = '';
        }, 300);
    };

    return (
        <header
            className={`w-full fixed z-50 top-0 left-0 h-auto ${isScrolled ? "backdrop-blur-md bg-white/70" : "bg-white"
                } transition-all duration-300 md:px-10`}
            role="navigation"
        >
            <div className="flex justify-between items-center py-4 px-2 mx-auto max-w-7xl">
                {/* Logo
                <a href="/" className="flex flex-col items-start">
                    <img
                        src={isScrolled ? logoBlack : logoWhite}
                        alt="Logo"
                        className="object-cover w-[70px] h-[50px] transition-all duration-300"
                    />
                </a> */}
                <a href="/" >
                    <h1 className="text-zinc-800 md:text-[1.8rem] text-[1.5rem] font-bold font-['Cambon']">Vivaham Luxury Expo</h1>
                </a>
                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6 items-center">
                    {NAV_LINKS.map((link) => (
                        <li
                            key={link.name}

                            className={`text-center  text-zinc-800 text-md font-semibold font-['Gellix'] ${isScrolled ? "text-black" : "text-black"} transition`}
                        >
                            <a
                                href={link.href}
                                onClick={(e) => handleNavigation(link.href, e)}
                                className={`relative pb-1 ${isActive(link.href) ?
                                    "after:content-[''] after:absolute after:left-0 after:top-11 after:py-0.5  after:w-full after:h-[2px]  " +
                                    (isScrolled ? "after:bg-[#F6A634] " : "after:bg-[#F6A634]") :
                                    "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] " +
                                    (isScrolled ? "hover:after:bg-[#F6A634]/50" : "hover:after:bg-[#F6A634]/50")}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}

                </ul>

                {/* Hamburger Icon */}
                <button
                    ref={hamburgerRef}
                    onClick={isMenuOpen ? closeMenu : openMenu}
                    className="lg:hidden"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? (
                        <HiX size={30} color={isScrolled ? "black" : "black"} />
                    ) : (
                        <BiMenuAltLeft size={30} color={isScrolled ? "black" : "black"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <>
                    {/* Overlay with fade animation */}
                    <div
                        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
                        onClick={closeMenu}
                    />

                    {/* Menu with top-to-bottom animation */}
                    <div
                        ref={menuRef}
                        className={`lg:hidden fixed top-0 left-0 w-full h-[50vh] bg-white z-50 p-6 transition-transform duration-300 ease-in-out ${isAnimating ? 'translate-y-0' : '-translate-y-full'}`}
                    >
                        <button
                            onClick={closeMenu}
                            className="absolute top-7 right-7 border-2 border-dotted border-black"
                            aria-label="Close Menu"
                        >
                            <HiX size={25} color="black" />
                        </button>

                        <ul className="flex flex-col gap-6 text-black text-[1.5rem] mt-10">
                            {NAV_LINKS.map((link) => (
                                <li
                                    key={link.name}
                                    className="transition-all duration-200 text-zinc-800 text-md font-semibold font-['Gellix']"
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavigation(link.href, e)}
                                        className={`relative pb-1 ${isActive(link.href) ?
                                            "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F6A634]" :
                                            "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white/50"}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>


                    </div>
                </>
            )}
        </header>
    );
}

export default Header;