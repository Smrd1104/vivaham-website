import img from "../../assets/store/store-bg.jpg";

const Hero = () => {
    return (
        <div
            className="relative w-full  bg-cover  h-[720px] bg-no-repeat "
            style={{ backgroundImage: `url(${img}) `, backgroundPosition: "center top", }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0"></div>

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center container mx-auto">
                <p
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="text-white text-center font-cambon-header-franchise text-2xl md:text-4xl px-4"
                >
                    Discover Handpicked Sarees & Exquisite Jewelry from India’s Finest Designers
                </p>
            </div>
        </div>
    );
};

export default Hero;
