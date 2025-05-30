// PartnerSection.jsx
import React from 'react';
import Partner from './Partner';
import stories from '../assets/stories/stories.jpg'; // Just once if used in all items
import partner1 from '../assets/partner/partner1.jpg'; // Just once if used in all items
import partner2 from '../assets/partner/partner2.jpg'; // Just once if used in all items
import bgImage from '../assets/hero/bg-img.jpg'; // adjust path as needed

const PartnerSection = () => {
    const partnerData = [
        {
            id: 1,
            title: 'Collaborations & Partnerships',
            heading: 'Strategic Partnerships for Excellence',
            subheading: 'A Curated Universe of Bridal Luxury.',
            description: "Vivaham thrives on collaboration. Whether you’re a luxury designer, a leading brand, or a visionary entrepreneur, we create partnerships that push boundaries and define success. Partner with us to co-create unforgettable experiences.",
            image: partner1,
        },
        {
            id: 2,
            title: 'Membership Privileges',
            heading: 'A Membership That Redefines Luxury',
            subheading: 'Where tradition meets modernity.',
            description:
                'Vivaham Membership is an invitation to belong to something extraordinary. With priority access to our events, personalized services, and behind-the-scenes exclusives, you’ll experience the pinnacle of luxury like never before.',
            image: partner2,
        },
    ];

    return (
        <div className="relative w-full">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>

            <div className='container mx-auto'>
                <h1 className="text-center text-black text-5xl font-bold font-['Cambon'] leading-[60px]">
                    Partner with Vivaham
                </h1>
                <p className="text-center text-black text-sm font-bold font-['Gellix'] uppercase tracking-[3.20px]">
                    Embrace the Fusion of Timeless Indian Heritage and Contemporary Style
                </p>

                <div className="flex flex-row justify-between gap-5 overflow-hidden px-14">
                    {partnerData.map((item, index) => (
                        <Partner
                            key={index}
                            title={item.title}
                            heading={item.heading}
                            subheading={item.subheading}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;