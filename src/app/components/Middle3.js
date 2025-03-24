"use client";
import React, { useState } from "react";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import CallMadeIcon from "@mui/icons-material/CallMade";

const Middle3 = () => {
    const [activeSection, setActiveSection] = useState(3);

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
                                    {section === 1 && "OWN PRODUCTION FACILITY"}
                                    {section === 2 && "UNIQUE PRODUCTS FROM OUR BRAND"}
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
                                            Every detail of your project is executed with precision  — <br></br>exactly as envisioned during development.
                                            <span className="text-[#d38c37]"> From layout <br></br>

                                            </span>
                                            <span className="text-[#d38c37]">to exclusive furniture, everything is realized with <br></br> meticulous accuracy.
                                            </span>
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            Our <span className="text-[#d38c37]"> in-house 1,500 m² production facility  </span>
                                            allows us to <br></br> manufacture custom suede and veneer panels, complex <br></br> cabinetry, and premium furniture collections.

                                        </p>

                                    </>
                                )}
                                {section === 2 && (
                                    <>
                                        <p className="text-[20px]">
                                            FiftyFourms embodies our expertise in working with intricate materials and forms.
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            Under the guidance of our Italian technologist, the combination of artisanal craftsmanship and state-of-the-art equipment results in
                                            <span className="text-[#d38c37]"> high-quality </span>pieces, distinguished by Studia 54’s signature design.
                                        </p>
                                    </>
                                )}
                                {section === 3 && (
                                    <>
                                        <p className="text-[20px]">
                                            <span className="text-[#d38c37]">    A cozy family living room for relaxation, a grand reception hall for social events, a private spa with a beauty salon, a functional fitness and yoga space.</span>
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            Thoughtfully designed walking paths that match your pace, secluded relaxation areas by the fire, and spacious heated terraces with bioclimatic protection from the elements.
                                        </p>
                                        <p className="mt-2 text-[20px]">
                                            By immersing ourselves in your lifestyle, we offer our vision of your ideal home — crafted in harmony with nature, for you and your family.
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
                        src="https://s3.ru1.storage.beget.cloud/4b5ae5ff7535-studia-videos/4da2_4ac3_8bb5_de5c5857abbf_5a8c377e49.mp4"
                        className="w-full h-full object-cover rounded-3xl pointer-events-none"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                </div>
            </div>
        </div >
    );
};

export default Middle3;