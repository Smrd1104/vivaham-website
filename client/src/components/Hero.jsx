import desktopImg from "../assets/hero/hero.webp";
import mobileImg from "../assets/hero/hero-mobile.jpg"; // portrait image
import logo from "../assets/hero/vivaham-logo.png"
const Hero = () => {
    return (
        <div className="relative w-full md:h-[620px] h-screen">
            <div className="absolute inset-0 bg-black/40 bg-opacity-50 z-0"></div>
            {/* Desktop Image */}
            <img
                src={desktopImg}
                alt="Hero Background"
                className="hidden md:block w-full h-full object-cover"
                loading="lazy"
            />

            {/* Mobile Image */}
            <img
                src={mobileImg}
                alt="Hero Background Mobile"
                className="block md:hidden w-full h-full object-cover"
                loading="lazy"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center md:translate-y-10 translate-y-62 px-4">
                {/* Logo */}
                <img data-aos="fade-up" data-aos-duration="700" src={logo} alt="Vivaham Logo" className="w-[400px] md:w-[500px] lg:w-[650px] lg:h-[300px] h-[300px]" loading="lazy" />

                {/* Heading */}
                <p data-aos="fade-up" data-aos-duration="900" className=" text-white  font-cambon-hero md:mt-0 mt-5 ">
                    Vivaham Luxury Expo
                </p>

                {/* Subheading */}
                <p data-aos="fade-up" data-aos-duration="900" className=" font-cambon-hero-content md:mt-0 mt-3 md:px-0 px-5 ">
                    Your Gateway to Remarkable Indian Weddings & Beyond
                </p>
            </div>
        </div>
    )
}

export default Hero