"use client";
import React, { useState } from "react";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Middle1 = () => {
    const [activeSection, setActiveSection] = useState(1);

    const toggleSection = (section) => {
        if (activeSection !== section) {
            setActiveSection(section);
        }
    };

    return (
        <div className="mt-[100px] text-white relative">
            <div className="grid grid-cols-[40%_60%] gap-4 w-full">
                {/* Left Side with Text Content */}
                <div className="ml-[15px] mt-8 flex flex-col h-full space-y-4">
                    {[1, 2, 3].map((section, index) => (
                        <div key={section}>
                            <div
                                className="cursor-pointer text-xl text-white p-8 bg-[#252525] rounded-t-lg transition-all duration-300 flex items-center justify-between"
                                onClick={() => toggleSection(section)}
                            >
                                <span className="text-[25px]">
                                    {section === 1 && "A HOME THAT SURROUNDS YOU WITH WARMTH AND CARE"}
                                    {section === 2 && "BRINGING COMPLEX PROJECTS TO LIFE"}
                                    {section === 3 && "ADAPTING TO YOUR LIFESTYLE"}
                                </span>
                                <div className="relative w-[45px] h-[45px]">
                                    <CallReceivedIcon
                                        className={`absolute top-0 left-0 text-yellow-400 transition-transform duration-300 ${activeSection === section ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                                        style={{ fontSize: "45px" }}
                                    />
                                    <CallMadeIcon
                                        className={`absolute top-0 left-0 text-yellow-400 transition-transform duration-300 ${activeSection === section ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                                        style={{ fontSize: "45px" }}
                                    />
                                </div>
                            </div>
                            <div className={`bg-[#252525] pl-8 pr-8 pb-2 rounded-b-lg transition-all duration-500 overflow-hidden ${activeSection === section ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                                {section === 1 && (
                                    <>
                                        <p className="text-[20px]">
                                            In creating a home, we strive to <span className="text-[#d38c37]">fully understand your vision</span> — what details inspire you and how you imagine the perfect retreat.
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            We design homes in Studia 54’s signature style, using our own architectural and structural solutions, incorporating <span className="text-[#d38c37]">natural materials</span>, and selecting a color palette that harmonizes with the surroundings.
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            This approach allows the home to blend seamlessly with the landscape, creating a sense of complete unity with nature.
                                        </p>
                                    </>
                                )}
                                {section === 2 && (
                                    <>
                                        <p className="text-[20px]">
                                            <span className="text-[#d38c37]">Over 10 years</span> of experience handling complex architectural, structural, and engineering challenges have made us international experts in <span className="text-[#d38c37]">executing large-scale premium projects</span>, including residences exceeding 10,000 m².
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            With a comprehensive approach from our leading architects and engineers, we create personalized living scenarios,   <span className="text-[#d38c37]">shaping an environment that takes care of you.</span>                                      </p>
                                    </>
                                )}
                                {section === 3 && (
                                    <>
                                        <p className="text-[20px]">
                                            A cozy family living room for relaxation, a grand reception hall for social events, a private spa with a beauty salon, a functional fitness and yoga space.
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            Thoughtfully designed walking paths that match your pace, secluded relaxation areas by the fire, and spacious heated terraces with bioclimatic protection from the elements.
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            <span className="text-[#d38c37]">  By immersing ourselves in your lifestyle, we offer our vision of your ideal home — crafted in harmony with nature, for you and your family. </span>
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Right Side with Video */}
                <div className="text-white p-4 mt-[20px] mr-[10px]">
                    <video
                        src="https://4b5ae5ff7535-studia-videos.s3.ru1.storage.beget.cloud/MAIN_ARCH_a2bed3e61d_2bfc11fd31_1_832afdaae7.mp4"
                        className="w-full h-full object-cover rounded-3xl pointer-events-none"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                </div>
            </div>
        </div>
    );
};

export default Middle1;