import img from "../assets/franchise/franchise.png"
import { Link } from "react-router-dom"
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed

const Franchise = () => {
    return (
        <div className="relative w-full min-h-[700px]">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="container mx-auto">
                <div className=" relative self-stretch md:inline-flex  md:justify-start justify-center items-center md:gap-10  md:px-14 px-5 ">
                    <img className="md:flex-1 md:w-[600px] w-[400px] md:h-[650px] h-[500px] " src={img} />
                    <div className="md:w-[840px] inline-flex flex-col justify-center items-start gap-8">
                        <div className="self-stretch flex flex-col justify-start items-start gap-4 md:mt-0 mt-5">
                            <h1 className="justify-start text-orange-400 text-2xl font-medium font-['Gellix']">The Franchise</h1>
                            <h2 className="self-stretch justify-start text-zinc-800 md:text-5xl text-3xl font-bold font-['Cambon']">Own a Legacy in Luxury Weddings</h2>
                            <h3 className="self-stretch justify-start text-black md:text-base text-xs font-bold font-['Gellix'] uppercase tracking-[3.20px]">Your Opportunity to Lead Luxury</h3>
                        </div>
                        <p className="self-stretch justify-start text-zinc-800 text-xl font-medium font-['Gellix'] leading-9">Be part of an ecosystem where wedding dreams translate into business excellence. The Vivaham franchise model isn’t about joining a brand; it’s about owning a legacy. With multiple revenue streams—from international expos and curated bridal markets to highprofile academies and magazines—we empower you to create your own success story. This is more than a franchise; it’s your gateway to becoming a trendsetter in the global wedding industry</p>
                        <Link to="/franchise">
                            <button className="px-6 py-3 bg-zinc-800 inline-flex justify-center items-center gap-2.5">
                                <div className="justify-start cursor-pointer  text-white text-xl font-semibold font-['Gellix'] leading-9">LEARN MORE</div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Franchise