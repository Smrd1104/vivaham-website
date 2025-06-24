import img from "../../assets/store/store-bg.jpg"
const Hero = () => {
    return (
        <div className="relative w-full h-[720px]">
            <div className="absolute inset-0 bg-black/40 bg-opacity-50 z-0"></div>
            {/* Background Image */}
            <img src={img} alt="Hero Background" className="md:w-full  h-[720px] md:object-cover  " loading="lazy" />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center container mx-auto ">


                {/* Heading */}
                <p data-aos="fade-up" data-aos-duration="900" className="  text-center font-cambon-header-franchise ">
                    Discover Handpicked Sarees & Exquisite Jewelry from India’s Finest Designers                </p>


            </div>
        </div>
    )
}

export default Hero