import React from 'react';

const AdvantageCard = ({ number, text }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="900" className="p-4 bg-[#FAF6F2] inline-flex flex-col justify-start items-start">
            <div className=" font-cambon-header">{number}.</div>
            <div className="font-gellix-content-start">
                {text}
            </div>
        </div >
    );
};

export default AdvantageCard;
