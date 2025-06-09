import React from 'react';
import micro from "../../assets/franchise/micro-studio.png";
import partner from "../../assets/franchise/partner-hub.png";
import flagship from "../../assets/franchise/flagship.png";
import vivaham from "../../assets/franchise/vivaham.png";
import FranchiseBlock from './FranchiseBlock';
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed

const franchiseData = [
    {
        title: "Micro Studio ™",
        tagline: "Small Format. Big Dreams. Daily Revenue.",
        description: "Created for high-footfall areas in Tier-2 and Tier-3 cities, the Micro Studio™ is an intelligent walk-in wedding unit that lets couples explore their wedding journey — from trials to bookings — in a single, aesthetic space.",
        inventoryTitle: "Inventory:",
        inventoryItems: `Jewellery, Sarees, Invitations, Gifts, and much more<br />
        Seasonal styling cubical<br />
        Couple trial zones and look book lounges<br />
        Vendor sampling and on-the-spot bookings<br />
        Content creation corners for couples & influencers`,
        idealTitle: "Ideal For:",
        idealDescription: "Salon owners, boutique stylists, and aspiring entrepreneurs who want to become the go-to name in weddings for their region.",
        image: micro,
        reverse: false,
    },
    {
        title: "Partner Hub ™",
        tagline: "India’s First Collaborative Wedding Commerce Space",
        description: "The Partner Hub™ brings together wedding service providers, designers, creators, and stylists under one permanent roof — bridging commerce, community, and creativity. This model turns daily footfalls into multi-brand transactions and consistent revenue.",
        inventoryTitle: "Inventory:",
        inventoryItems: `Jewellery, Sarees, Invitations, Gifts, and much more<br />
        Brand Display Zones<br />
        Bridal & Groom shoot decks and trial sessions<br />
        Co-working space for vendors, planners, and stylists<br />
        Daily footfall from brides, families, and influencers`,
        idealTitle: "Designed For:",
        idealDescription: "High-potential zones where collaboration drives conversion and presence equals profit.",
        image: partner,
        reverse: true,
    },
    {
        title: "Flagship Unit ™",
        tagline: "A Destination, Not a Store. A Statement, Not a Setup.",
        description: "The Flagship Unit™ is Vivaham’s full-scale wedding universe — a multi-level experience center designed to be the wedding nerve centre of your city. From consultations to couture, this space becomes the definitive address for everything wedding.",
        inventoryTitle: "Inventory:",
        inventoryItems: `Jewellery, Sarees, Invitations, Gifts, and much more<br />
        The Daily Bridal Expo™ – India’s only permanent wedding showcase<br />
        Vivaham Academy classroom and bridal runway<br />
        Designer bridal lounges and VIP consultation suites<br />
        Planning studios, business zones, and interactive vendor pods<br />
        Influencer workshops, live shoots, and brand launches`,
        idealTitle: "Tailored For:",
        idealDescription: "Large investors, visionaries, and developers looking to create the capital of weddings in their city.",
        image: flagship,
        reverse: false,
    },
    {
        title: "Vivaham Institutional Innovation ™",
        tagline: "Where Education Meets Enterprise. An Institution by Vivaham",
        description: "Vivaham proudly introduces India’s first and only wedding entrepreneurship institution — a revolutionary model that fuses education, live business, and luxury exposure under one roof. Unlike typical collaborations, this format is owned and operated exclusively by Vivaham®, setting a gold standard in wedding industry training and enterprise creation. This is not just education. It is a wedding nerve centre for learning, innovation, and leadership.",
        inventoryTitle: "Inventory:",
        inventoryItems: `Vivaham Academy® with structured courses<br />
        Live Wedding Labs™<br />
        Fully integrated venue options<br />
        A-to-Z Simulation Studios<br />
        Student-to-Entrepreneur Pipeline™`,
        idealTitle: "Tailored For:",
        idealDescription: "Students, professionals, fashion experts, homemakers, and career shifters seeking to scale in India’s 5L crore wedding economy — backed by the Vivaham® legacy.",
        image: vivaham,
        reverse: true,
    },
];

const Content = () => {
    return (
        <main className="flex flex-col gap-20 px-10  py-20 relative w-full">
            {/* Background Image */}
            < div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
                style={{ backgroundImage: `url(${bgImage})` }
                }
                loading="lazy"
            ></div >
            {franchiseData.map((block, index) => (
                <FranchiseBlock key={index} {...block} />
            ))}
        </main>
    );
};

export default Content;
