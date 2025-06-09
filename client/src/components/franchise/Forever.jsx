import img from "../../assets/franchise/forever.png"
const Hero = () => {
    return (
        <div className="relative w-full md:h-[573px] h-[373px]">
            <div className="absolute inset-0 bg-black/70 bg-opacity-50 z-0"></div>
            {/* Background Image */}
            <img src={img} alt="Hero Background" className="md:w-full  md:h-[573px] h-[373px]  md:object-cover  " loading="lazy" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center ">


                {/* Heading */}
                <p data-aos="fade-up" data-aos-duration="900" className=" font-cambon-header-forever md:px-40">
                    Vivaham®  – Because Forever Deserves a Franchise
                </p>


            </div>
        </div>
    )
}

export default Hero