import React from 'react';
import checkIcon from "../../assets/institute/tick (3).png"
const PlanCard = ({ title, subtitle, features }) => {
    return (
        <section className="w-full p-8 bg-[#FAF6F2] flex flex-col justify-start items-start gap-10 rounded-xl">
            <header className="flex flex-col gap-2">
                <h3 className="text-Text-Title-Color text-3xl font-bold font-['Cambon'] tracking-tight">
                    {title}
                </h3>
                <p className="text-zinc-800 text-lg font-semibold font-['Gellix'] tracking-tight">
                    {subtitle}
                </p>
            </header>

            <ul className="flex flex-col  gap-4">
                {features.map((text, index) => (
                    <li key={index} className="flex items-start gap-4">
                        <img src={checkIcon} alt="check" className="w-4 h-4 object-contain mt-1.5 " />
                        <p className="text-Basic-Forms-Checkbox-Placeholder-Color text-base font-medium font-['Gellix'] leading-normal tracking-tight">
                            {text}
                        </p>
                    </li>

                ))}
            </ul>
        </section>
    );
};

export default PlanCard;
