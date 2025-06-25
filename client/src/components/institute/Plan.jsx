import React from 'react';
import PlanCard from './PlanCard';
import bgImage from '../../assets/hero/bg-img.webp'; // adjust path as needed

const plans = [
    {
        title: 'Plan A',
        subtitle: '7-Day Global Wedding Pro Launch',
        features: [
            'One-week power-packed masterclass with celebrity mentors',
            'Live projects on luxury destination weddings',
            'Client pitch, presentation and negotiation mastery',
            'Build instant credibility in the industry'
        ]
    },
    {
        title: 'Plan B',
        subtitle: ' 3-Month Wedding Elite Mastery',
        features: [
            'Weekend workshops with international planners and designers',
            'Personal brand-building with PR and media features',
            'Alternate income building in weddings — events, styling, content, consulting',
            'Access to our wedding franchise micro studio model'
        ]
    },
    {
        title: 'Plan C',
        subtitle: '6-Month Wedding Empire Builder',
        features: [
            'The ultimate program for professionals, students and entrepreneurs',
            'Build your brand, your team and your legacy',
            '1-on-1 mentorship with India’s and the world’s top wedding leaders',
            'Lifetime membership in Vivaham’s HNI Wedding Circle',
            'Project opportunities across India, Dubai, Bali, Italy, Maldives'
        ]
    },
    // Add more plans if needed
];

const Plan = () => {
    return (
        <div className="w-full max-w-[1720px] mx-auto px-4  relative">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 z-0"
                style={{ backgroundImage: `url(${bgImage})` }}
                loading="lazy"
            ></div>
            <div className="py-5 md:px-14 px-5 flex flex-col gap-5 relative">
                <h2 data-aos="fade-up" data-aos-duration="900" className="font-cambon-header text-center py-5">Choose Your Royal Path</h2>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                {plans.map((plan, index) => (
                    <PlanCard
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

export default Plan;
