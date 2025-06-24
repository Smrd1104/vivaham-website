import React from 'react'
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed

const CollectionContent = () => {
    return (
        <div className='relative min-h-[700px]  w-full   overflow-hidden'>
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>
            <div className="relative z-10 container mx-auto lg:translate-y-28 md:translate-y-2 translate-y-5 lg:my-0 md:my-24  my-10   ">
                <h1 data-aos="fade-up" data-aos-duration="800" className=" font-gellix-header text-center mb-8">
                    Vivaham’s Sarees and Jewellery Collection
                </h1>

                <div className="flex flex-col items-center justify-center gap-5 lg:px-38 md:px-6 px-5 text-center">
                    <h2 data-aos="fade-up" data-aos-duration="900" className="font-cambon-header">
                        Where every bride discovers her perfect expression of tradition and style
                    </h2>

                    <p data-aos="fade-up" data-aos-duration="1000" className="font-gellix-content text-justify  ">
                        At Vivaham, we celebrate the individuality of every bride by offering a thoughtfully curated selection of sarees and jewellery that reflect timeless elegance and cultural richness. Whether you're drawn to classic Kanjivarams, contemporary designer drapes, or statement bridal jewelry with intricate craftsmanship, we’re here to guide and inspire you.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="1000" className="font-gellix-content text-justify  ">
                        From bold hues to delicate pastels, from heirloom-worthy gold to sparkling stones—our collection embraces every aesthetic, every heritage, and every bridal dream.
                    </p>
                    <p data-aos="fade-up" data-aos-duration="1000" className="font-gellix-content  text-justify  ">
                        Because on your big day, you deserve to feel authentically you.                    </p>
                </div>
            </div>
        </div>
    )
}

export default CollectionContent