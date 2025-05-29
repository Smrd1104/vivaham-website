import img from "../assets/hero/hero.jpg"
import logo from "../assets/hero/vivaham-logo.png"
const Hero = () => {
    return (
        <div className="relative w-full h-screen">
            {/* Background Image */}
            <img src={img} alt="Hero Background" className="w-full h-full object-cover" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 px-4">
                {/* Logo */}
                <img src={logo} alt="Vivaham Logo" className="w-[300px] md:w-[500px] lg:w-[700px]" />

                {/* Heading */}
                <p className="text-white text-4xl md:text-6xl font-semibold">
                    Vivaham Luxury Expo
                </p>

                {/* Subheading */}
                <p className="text-white text-lg md:text-2xl font-medium">
                    Your Gateway to Remarkable Indian Weddings & Beyond
                </p>
            </div>
        </div>
    )
}

export default Hero