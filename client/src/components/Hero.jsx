import img from "../assets/hero/hero.jpg"
import logo from "../assets/hero/vivaham-logo.png"
const Hero = () => {
    return (
        <div className="relative w-full h-full">
            {/* Background Image */}
            <img src={img} alt="Hero Background" className="w-full h-full object-cover" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center translate-y-20 px-4">
                {/* Logo */}
                <img src={logo} alt="Vivaham Logo" className="w-[300px] md:w-[500px] lg:w-[750px]" />

                {/* Heading */}
                <p className=" text-white text-[4rem] font-bold font-['Cambon'] ">
                    Vivaham Luxury Expo
                </p>

                {/* Subheading */}
                <p className="text-center justify-start text-white text-[1.2rem] font-semibold font-['Gellix']">
                    Your Gateway to Remarkable Indian Weddings & Beyond
                </p>
            </div>
        </div>
    )
}

export default Hero