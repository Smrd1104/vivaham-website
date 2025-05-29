import img from "../assets/franchise/franchise.png"
import { Link } from "react-router-dom"
const Franchise = () => {
    return (
        <div className="container mx-auto">
            <div className="self-stretch inline-flex justify-start items-center gap-10 py-32 px-14 ">
                <img className="flex-1  " src={img} width={670} />
                <div className="w-[840px] inline-flex flex-col justify-center items-start gap-8">
                    <div className="self-stretch flex flex-col justify-start items-start gap-4">
                        <h1 className="justify-start text-orange-400 text-2xl font-medium font-['Gellix']">The Franchise</h1>
                        <h2 className="self-stretch justify-start text-zinc-800 text-5xl font-bold font-['Cambon']">Own a Legacy in Luxury Weddings</h2>
                        <h3 className="self-stretch justify-start text-black text-base font-bold font-['Gellix'] uppercase tracking-[3.20px]">Your Opportunity to Lead Luxury</h3>
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
    )
}

export default Franchise