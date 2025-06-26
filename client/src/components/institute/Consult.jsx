import React from 'react';
import ConsultCard from './ConsultCard';
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed

const plans = [
    {
        title: 'E-Consultation',
        subtitle: '₹250 only',

    },
    {
        title: 'Physical Consultation',
        subtitle: ' ₹1000 (at Vivaham HQ or franchise units)',

    },
    {
        title: 'Limited batches',
        subtitle: 'First come, first serve',

    },
    // Add more plans if needed
];

const Consult = () => {
    return (
        <div className="w-full max-w-[1720px] mx-auto px-4  pb-20 relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>
            <div className="py-5 md:px-14 px-5 flex flex-col gap-5 relative">
                <h2 data-aos="fade-up" data-aos-duration="700" className="font-cambon-header text-center py-5">Enrollment and Consultations</h2>

            </div>
            <div  data-aos="fade-up" data-aos-duration="700" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                {plans.map((plan, index) => (
                    <ConsultCard
                        key={index}
                        title={plan.title}
                        subtitle={plan.subtitle}
                        features={plan.features}
                    />
                ))}
            </div>
        </div>
    );
};

export default Consult;
