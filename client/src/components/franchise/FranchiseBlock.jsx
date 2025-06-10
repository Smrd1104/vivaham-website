import React from 'react';

const FranchiseBlock = ({ title, tagline, description, inventoryTitle, inventoryItems, idealTitle, idealDescription, image, reverse }) => {
    return (

        <div className='container mx-auto w-full'>


            <section className={`relative flex flex-col md:flex-row items-center gap-10 ${reverse ? 'md:flex-row-reverse' : ''}`}>
                <img
                    src={image}
                    alt={title}
                    className="flex-1 h-[550px] object-cover"
                    loading="lazy" data-aos="fade-right" data-aos-duration="900"
                />
                <article className="flex flex-col gap-4 flex-1">
                    <header className="flex flex-col gap-4">
                        <h2 data-aos="fade-left" data-aos-duration="900" className=" font-cambon-header-start">{title}</h2>
                        <p data-aos="fade-left" data-aos-duration="900" className="text-black text-base font-bold uppercase tracking-[3.20px] font-['Gellix']">
                            {tagline}
                        </p>
                    </header>
                    <p data-aos="fade-left" data-aos-duration="900" className=" font-gellix-content-start">
                        {description}
                    </p>
                    <div>
                        <h3 data-aos="fade-left" data-aos-duration="900" className="text-zinc-800 text-2xl font-bold font-['Cambon']">{inventoryTitle}</h3>
                        <p data-aos="fade-left" data-aos-duration="900" className="text-zinc-800 text-xl font-medium leading-9 font-['Gellix']" dangerouslySetInnerHTML={{ __html: inventoryItems }} />
                    </div>
                    <aside data-aos="fade-left" data-aos-duration="900" className="bg-[#FAF6F2] px-6 py-3 flex flex-col gap-2">
                        <h3 className="text-zinc-800 text-2xl font-bold font-['Cambon']">{idealTitle}</h3>
                        <p className="text-black text-xl font-semibold leading-9 font-['Gellix']">
                            {idealDescription}
                        </p>
                    </aside>
                </article>

            </section >

        </div>
    );
};

export default FranchiseBlock;
