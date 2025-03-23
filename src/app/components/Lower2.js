"use client"
import React, { useState, useEffect } from 'react';

const images = [
    'https://devstudia54comadminstrapi.studia-54.group/uploads/prev_panch_46d5213759.jpg',
    'https://devstudia54comadminstrapi.studia-54.group/uploads/image_13_a3ff9cd27e.png',
    'http://devstudia54comadminstrapi.studia-54.group/uploads/prev_katar_c2df4b119f.jpg'
];

const Lower2 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getNextIndex = () => (currentIndex === images.length - 1 ? 0 : currentIndex + 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(getNextIndex());
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className='grid grid-cols-[63%_37%] gap-4 w-full mt-[20px]'>
            {/* Left side - Carousel */}
            <div>
                <div className='mb-[50px]'>
                    <span className="text-[#d38c37] text-[40px] ml-[50px] mb-[100px]">/ STUDIA 54 PROJECTS</span>
                </div>
                <div className="h-[600px] overflow-y-scroll flex flex-col gap-4 no-scrollbar snap-y snap-mandatory">
                    <style>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`Image ${index}`} className="w-full ml-[50px] rounded-3xl mb-[50px] snap-start" />
                    ))}
                </div>
            </div>



            <div className="relative w-full flex flex-col   overflow-hidden  gap-4">
                <div className="font-bold text-lg mb-[80px] text-[40px]">
                    WE KNOW WHAT YOU NEED
                </div>

                <div className="mb-[80px] text-[#929292] text-[25px]">
                    Executing projects across multiple countries requires <br />
                    flawless organization and control. Every stage — from <br />
                    planning to production — follows a structured <br />
                    framework that guarantees an impeccable result.
                </div>
                <div className="mb-[180px] text-[#929292] text-[25px] ">
                    By handling the entire process, we free you from <br />
                    unnecessary concerns, allowing you to fully enjoy the <br />
                    journey of creating your dream home.
                </div>
                <div className="flex flex-col items-start ml-[60px]">
                    <div className=" text-[#929292] text-[15px]">
                        №1 MAGNIFICENT MANSION IN PANCHGANI
                    </div>
                    <div className=" text-[#929292] text-[15px]">
                        №2 LUXURY INTERIOR DESIGN PROJECT OF A RESIDENCE IN REPINO
                    </div>
                    <div className=" text-white text-[15px]">
                        №3 RESIDENTAL PROJECT INTEGRATING ETHNIC MOTIFS IN QATAR
                    </div>
                </div>


            </div>



            {/* Right side - Scrollable images */}

        </div>
    );
}

export default Lower2;
