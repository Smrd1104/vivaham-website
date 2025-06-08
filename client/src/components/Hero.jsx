import img from "../assets/hero/hero.jpg"
import logo from "../assets/hero/vivaham-logo.png"
const Hero = () => {
    return (
        <div className="relative w-full h-[750px]">
            <div className="absolute inset-0 bg-black/40 bg-opacity-50 z-0"></div>
            {/* Background Image */}
            <img src={img} alt="Hero Background" className="md:w-full  h-[750px] md:h-full md:object-cover  " loading="lazy" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center md:translate-y-10 translate-y-68 px-4">
                {/* Logo */}
                <img data-aos="fade-up" data-aos-duration="700" src={logo} alt="Vivaham Logo" className="w-[400px] md:w-[500px] lg:w-[700px]" loading="lazy" />

                {/* Heading */}
                <p data-aos="fade-up" data-aos-duration="900" className=" text-white  font-cambon-hero ">
                    Vivaham Luxury Expo
                </p>

                {/* Subheading */}
                <p data-aos="fade-up" data-aos-duration="900" className="text-center justify-start font-cambon-hero-content">
                    Your Gateway to Remarkable Indian Weddings & Beyond
                </p>
            </div>
        </div>
    )
}

export default Hero