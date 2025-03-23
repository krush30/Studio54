"use client";
import React, { useState, useEffect } from "react";

const images = [
    "https://4b5ae5ff7535-studia-videos.s3.ru1.storage.beget.cloud/Rectangle_9826_1_d3469b7406.png",
    "https://4b5ae5ff7535-studia-videos.s3.ru1.storage.beget.cloud/Screenshot_16_1_cc42082628.png",
    "https://4b5ae5ff7535-studia-videos.s3.ru1.storage.beget.cloud/Screenshot_5_1_20230175fc.png",
    "https://4b5ae5ff7535-studia-videos.s3.ru1.storage.beget.cloud/image_142_1_a765b7f994.png"
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const getNextIndex = () => (currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    const getPrevIndex = () => (currentIndex === 0 ? images.length - 1 : currentIndex - 1);

    // Auto-slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(getNextIndex());
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]); // Re-run effect when currentIndex changes

    return (
        <div className="relative w-full flex justify-center items-center overflow-hidden">
            <div className="relative flex w-[1000px] h-[600px] rounded-3xl">
                {[getPrevIndex(), currentIndex, getNextIndex()].map((index, i) => {
                    const position = i === 1 ? "z-10 scale-100 opacity-100" : "z-0 scale-75 opacity-50 cursor-pointer";

                    return (
                        <img
                            key={index}
                            src={images[index]}
                            alt={`Slide ${index}`}
                            className={`absolute left-1/2 rounded-3xl transform -translate-x-1/2 transition-all duration-500 ease-in-out rounded-xl shadow-lg ${position}`}
                            style={{
                                width: i === 1 ? "100%" : "60%",
                                left: `${(i - 1) * 50 + 50}%`,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
};

const Section = () => {
    return (
        <div className="mt-[100px] text-white relative">
            <div className="grid grid-cols-[37%_63%] gap-4 w-full">
                {/* Left Side */}
                <div className="ml-[15px] mt-8 flex flex-col h-full space-y-4">
                    <div className="text-xl mb-8 p-8 bg-[#252525] rounded-3xl transition-all duration-300 flex flex-col items-start justify-between">
                        {/* Title */}
                        <span className="text-[#d38c37] text-[39px] font-light">
                            / STUDIO 54&apos;S TEAM
                        </span>

                        {/* Description Below */}
                        <p className="text-white text-lg mt-4 text-[39px]">
                            YOUR PROJECT IN THE HANDS <br />
                            OF <span className="text-[#d38c37]">200 PROFESSIONALS</span>
                        </p>
                        <p className="text-white text-lg mt-4 text-[25px]">
                            Your project begins in our 800 m² office, where a <br />
                            dedicated team of 200 experts brings your vision to <br />
                            life in Studia 54&apos;s distinctive style.
                        </p>
                    </div>
                    <div className="text-xl mb-8 p-8 bg-[#252525] rounded-3xl transition-all duration-300 flex flex-col items-start justify-between">
                        <div className="text-[25px]">
                            Every detail is meticulously managed by your <br />
                            personal project manager, ensuring seamless <br />
                            execution from concept to completion through our <br />
                            structured premium project methodology.
                        </div>
                    </div>
                </div>

                {/* Right Side (Looping Auto-Sliding Carousel) */}
                <div className="flex justify-center items-center">
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Section;
