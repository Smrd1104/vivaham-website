import img from "../assets/franchise/franchise.webp"
import { Link } from "react-router-dom"
import bgImage from '../assets/hero/bg-img.webp'; // adjust path as needed

const Franchise = () => {
    return (
        <div className="relative w-full lg:min-h-[700px]  ">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0  "
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>
            <div className="container mx-auto lg:pb-20 md:pb-10 pb-5 ">
                <div className=" relative self-stretch lg:inline-flex   md:justify-start justify-center items-center md:gap-10  lg:px-14 md:px-6 px-5 ">
                    <img loading="lazy" data-aos="fade-right" data-aos-duration="900" className="md:flex-1 lg:w-[600px] md:w-full md:h-[700px] w-[400px] lg:h-[680px] h-[500px] " src={img} />
                    <div className="lg:w-[840px] inline-flex flex-col justify-center items-start md:items-start gap-8">
                        <div className="self-stretch flex flex-col justify-center items-start md:items-start gap-4 lg:mt-0 md:mt-5 mt-5">
                            <h1 data-aos="fade-up" data-aos-duration="900" className="font-gellix-header">The Franchise</h1>
                            <h2 data-aos="fade-up" data-aos-duration="900" className="self-stretch justify-start font-cambon-header-start   ">Own a Legacy in Luxury Weddings</h2>
                            <h3 data-aos="fade-up" data-aos-duration="900" className="self-stretch justify-start text-start  text-black md:text-sm text-sm font-bold font-['Gellix'] uppercase md:tracking-[3.20px] tracking-[2.2px]">Your Opportunity to Lead Luxury</h3>
                        </div>
                        <p data-aos="fade-up" data-aos-duration="900" className="  font-gellix-content-p2  ">Be part of an ecosystem where wedding dreams translate into business excellence. The Vivaham franchise model isn’t about joining a brand; it’s about owning a legacy. With multiple revenue streams—from international expos and curated bridal markets to highprofile academies and magazines—we empower you to create your own success story. This is more than a franchise; it’s your gateway to becoming a trendsetter in the global wedding industry</p>
                        <Link to="franchise">
                            <button data-aos="fade-up" data-aos-duration="900" className="px-6 py-1 bg-zinc-800 inline-flex justify-start items-start gap-2.5">
                                <div className="justify-start cursor-pointer  font-gellix-button ">LEARN MORE</div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Franchise