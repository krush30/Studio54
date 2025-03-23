"use client"
import React, { useState, useEffect } from "react";

const VideoInfo = () => {
    const images = [
        "https://devstudia54comadminstrapi.studia-54.group/uploads/large_prev_katar_c2df4b119f.jpg",
        "https://devstudia54comadminstrapi.studia-54.group/uploads/large_nologo_a9d2b1887f.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFade(true); // Start fade-in
            }, 500); // 500ms fade-out before switching image
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className='w-screen aspect-video pt-[35%] px-6 md:px-24 absolute text-white bg-gradient-to-r'>
                <img
                    src="https://4b5ae5ff7535-studia-videos.s3.ru1.storage.beget.cloud/Utverzhdennoe_logo_cb76b47bf9.svg"
                    alt="Studia 54 Logo"
                />
                <h2 className="mb-[80px] mt-4 text-[25px] md:text-3xl">
                    <span style={{ color: "#d38c37" }} className="text-[25px] opacity-75">
                        A LEADING INTERNATIONAL BUREAU
                    </span>
                    <span className="text-white text-[25px] opacity-75">
                        {" "}FOR PREMIUM <br /> ARCHITECTURAL AND INTERIOR DESIGN
                    </span>
                </h2>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="flex flex-col justify-center text-white">
                        <h1 style={{ color: "#d38c37" }} className="pb-[54px] text-[25px] opacity-75">
                            OUR PROJECTS AROUND THE WORLD
                        </h1>
                        <p className="text-white text-[21px] pt-[100px] opacity-75">
                            TODAY, WE HAVE <span style={{ color: "#d38c37" }}>THE MOST EXTENSIVE PORTFOLIO <br /></span>
                            AND PROJECT SCOPE IN THE PREMIUM SEGMENT <br /> OVER 600 PROJECTS IN 32 COUNTRIES,
                            WITH AN <br /> AVERAGE AREA STARTING FROM 900 M²
                        </p>

                        {/* Image with Transition */}
                        <div className="relative w-[700px] h-[400px] mt-[70px]">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt="Project"
                                    className={`absolute w-full h-full rounded-3xl transition-opacity duration-500 ${currentImageIndex === index ? "opacity-100" : "opacity-0"}`}
                                />
                            ))}
                        </div>

                        <p className="text-white mt-[20px] text-[21px]">
                            EXPRESSIVE INTERIOR OF AN APARTMENT IN SAUDI ARABIA
                        </p>
                    </div>

                    <div className='mt-[180px]'>
                        <img
                            src="https://media-hosting.imagekit.io//c64bab7f7de842d3/EarthL2-removebg-preview.png?Expires=1837277353&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=mx-WWxBoQcSDud9H6TWRbbnqvDq8EE3rM9skEuxV-rzTbhvp5h8dEzofHrzzXZDy40dtubun8nN8svoqiTDR8gh2oCXMefRzmMC6-5nNV4nNcN0AuPH2bVwX-~nb~wbiEgGyazfBMwmRpg30CMBiR70kIAB4ZJncc0b6KV2-9epXIzZYBJTq9wQ7V3CDCJ6-mh87UX-FtMb0iRH~2aSTcZz9JVMahRP0D-prYMfnkx3zlvmOeO3t1ryYBaURj78vZ9W82GKr4GNwSUD6FJ2IgTCggDJcw3XGIqPiCHG9Z2cCUs6kUrS3jvmzULKtVpTDMM34xgdq2ZduFClthQ9Dww"
                            alt="Interior Design"
                            className="w-[700px] h-[600px] object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoInfo;
