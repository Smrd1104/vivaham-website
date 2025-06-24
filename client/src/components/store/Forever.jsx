import img from "../../assets/franchise/forever.png"
const Hero = () => {
    return (
        <div className="relative w-full lg:h-[573px] h-[373px]">
            <div className="absolute inset-0 bg-black/70 bg-opacity-50 z-0"></div>
            {/* Background Image */}
            <img src={img} alt="Hero Background" className="md:w-full  lg:h-[573px] h-[373px]  lg:object-cover  " loading="lazy" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center container mx-auto ">


                {/* Heading */}
                <p data-aos="fade-up" data-aos-duration="900" className=" font-cambon-header-forever lg:px-40 px-5">
                    Vivaham®  – Because Forever Deserves a Franchise
                </p>


            </div>
        </div>
    )
}

export default Hero