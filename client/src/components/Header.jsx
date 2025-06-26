import React, { useState, useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { BiMenuAltLeft } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo/vivaham-logo.png"
import bgLogo from "../assets/logo/bg-logo.jpg"

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "The Franchise", href: "/franchise" },
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
    const [hideHeader, setHideHeader] = useState(false);

    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);
    const hideTimeoutRef = useRef(null);

    const isActive = (href) => {
        if (href === "/") return location.pathname === "/";
        if (href.startsWith("#")) return location.hash === href;
        return location.pathname.startsWith(href);
    };

    const handleNavigation = (href, event) => {
        if (href.startsWith("#")) {
            event.preventDefault();
            closeMenu();
            if (location.pathname === "/") {
                const element = document.querySelector(href);
                if (element) element.scrollIntoView({ behavior: "smooth" });
            } else {
                navigate("/", { replace: true });
                setTimeout(() => {
                    const element = document.querySelector(href);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                }, 100);
            }
        } else {
            closeMenu();
        }
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);

        if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);

        setHideHeader(false);

        hideTimeoutRef.current = setTimeout(() => {
            setHideHeader(true);
        }, 1000);
    };

    const handleMouseMove = (e) => {
        if (e.clientY < 80) {
            setHideHeader(false);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        }
    };

    const openMenu = () => {
        setIsMenuOpen(true);
        setIsAnimating(true);
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        setIsAnimating(false);
        setTimeout(() => {
            setIsMenuOpen(false);
            document.body.style.overflow = "";
        }, 300);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mousedown", (event) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                (!hamburgerRef.current || !hamburgerRef.current.contains(event.target))
            ) {
                closeMenu();
            }
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`w-full fixed z-50 top-0 left-0 h-auto transform transition-all duration-500 ease-in-out
                ${isScrolled ? "backdrop-blur-md bg-white/70" : "bg-white"}
                ${hideHeader ? "-translate-y-full" : "translate-y-0"}
                md:px-10`}
            role="navigation"
        >
            <div className="flex justify-between items-center py-2 md:px-2 px-10 mx-auto max-w-7xl">
                {/* Logo */}
                <a href="/">
                    <img
                        src={isScrolled ? bgLogo : logo}
                        className="md:max-w-[110px] max-w-[100px] w-full object-cover"
                    />
                </a>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-6 items-center">
                    {NAV_LINKS.map((link) => (
                        <li
                            key={link.name}
                            className={`text-center text-md font-semibold font-['Gellix'] transition text-zinc-800`}
                        >
                            <a
                                href={link.href}
                                onClick={(e) => handleNavigation(link.href, e)}
                                className={`relative pb-1 ${isActive(link.href)
                                    ? "after:content-[''] after:absolute after:left-0 after:top-11.5   after:w-full after:h-[4px] after:bg-[#F6A634]"
                                    : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-[#F6A634]/50"
                                    }`}
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
                        <HiX size={0} color="white" />
                    ) : (
                        <BiMenuAltLeft size={40} color="black" />
                    )}
                </button>
            </div>

            {/* Mobile Overlay */}
            {isMenuOpen && (
                <>
                    <div
                        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isAnimating ? "opacity-100" : "opacity-0"}`}
                        onClick={closeMenu}
                    />

                    <div
                        ref={menuRef}
                        className={`lg:hidden fixed top-0 left-0 w-full h-[50vh] bg-white z-50 p-6 transition-transform duration-300 ease-in-out ${isAnimating ? "translate-y-0" : "-translate-y-full"}`}
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
                                        className={`relative pb-1 ${isActive(link.href)
                                            ? "after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F6A634]"
                                            : "hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:bottom-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-white/50"
                                            }`}
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
