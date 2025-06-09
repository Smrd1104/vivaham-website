import React from 'react';

const ChooseCard = ({ number, text }) => {
    return (
        <div className="p-4 bg-[#FAF6F2] inline-flex flex-col justify-start items-start">
            <div className=" font-cambon-header">{number}.</div>
            <div className="font-gellix-content-start">
                {text}
            </div>
        </div>
    );
};

export default ChooseCard;
