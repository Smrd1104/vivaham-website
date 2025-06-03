import img from "../assets/hero/hero.jpg"
import logo from "../assets/hero/vivaham-logo.png"
const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 bg-black/40 bg-opacity-50 z-0"></div>
            {/* Background Image */}
            <img src={img} alt="Hero Background" className="md:w-full  h-screen md:h-full md:object-cover  " />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center md:translate-y-10 translate-y-68 px-4">
                {/* Logo */}
                <img src={logo} alt="Vivaham Logo" className="w-[400px] md:w-[500px] lg:w-[700px]" />

                {/* Heading */}
                <p className=" text-white md:text-[4rem] text-[2.2rem] font-bold font-['Cambon'] ">
                    Vivaham Luxury Expo
                </p>

                {/* Subheading */}
                <p className="text-center justify-start text-white md:text-[1.2rem] text[0.5rem] font-semibold font-['Gellix']">
                    Your Gateway to Remarkable Indian Weddings & Beyond
                </p>
            </div>
        </div>
    )
}

export default Hero