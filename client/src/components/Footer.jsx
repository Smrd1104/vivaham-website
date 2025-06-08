import React from 'react';

const Footer = () => {
    return (
        <footer aria-label="Footer section" className="px-10 py-14 bg-zinc-800 flex flex-col justify-start items-center gap-20 overflow-hidden  z-10 relative">
            <div className="w-full container mx-auto flex md:flex-row flex-col justify-between items-start gap-10">
                {/* Our Presence */}
                <div role="region" aria-labelledby="presence-heading" className=" flex flex-col gap-6">
                    <h2 id="presence-heading" className="text-white text-2xl  font-bold font-['Cambon']">
                        Our Presence
                    </h2>
                    <div className="flex flex-col gap-4">
                        {['India', 'Thailand', 'USA'].map((place) => (
                            <p key={place} className="text-white text-md font-medium font-['Gellix']">{place}</p>
                        ))}
                    </div>
                </div>

                {/* Our Documentation */}
                <div role="region" aria-labelledby="docs-heading" className="flex flex-col gap-6">
                    <h2 id="docs-heading" className="text-white text-2xl  font-bold font-['Cambon']">
                        Our Documentation
                    </h2>
                    <div className="flex flex-col gap-4">
                        {['Privacy Policy', 'Franchise Agreement', 'Application Business Laws', 'Terms and Conditions', 'Affiliations'].map((doc) => (
                            <p key={doc} className="text-white text-md font-medium font-['Gellix']">{doc}</p>
                        ))}
                    </div>
                </div>

                {/* Our Headquarters */}
                <div role="region" aria-labelledby="hq-heading" className=" flex flex-col gap-6">
                    <h2 id="hq-heading" className="text-white text-2xl font-bold font-['Cambon']">
                        Our Headquarters
                    </h2>
                    <div className="flex flex-col gap-4">
                        {['1/169 Bearhatty', 'Wellington Post', 'Barreks, Coonoor', 'Nilgiris-643231'].map((line) => (
                            <p key={line} className="text-white text-md font-medium font-['Gellix']">{line}</p>
                        ))}
                    </div>
                </div>

                {/* Subscribe */}
                <div className=" flex flex-col gap-6">
                    <h2 className="text-white text-2xl font-bold font-['Cambon']">Subscribe</h2>
                    <p className="text-white text-md font-medium font-['Gellix']">
                        Follow our newsletter to stay updated about the company.
                    </p>
                    {/* <form className="flex gap-4">
                        <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded text-black" />
                        <button type="submit" className="px-6 py-3 bg-white text-zinc-800 font-bold rounded">
                            Subscribe
                        </button>
                    </form> */}
                </div>
            </div>

            {/* Footer Text */}
            <p className="w-full text-center text-white text-md font-medium font-['Gellix']">
                Copyright © 2025 Vivaham. All Rights Reserved.
            </p>
        </footer>
    );
};

export default Footer;
