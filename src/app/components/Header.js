"use client";
import React, { useState, useEffect } from "react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full px-8 pb-8 z-50 flex flex-col md:flex-row justify-between items-center transition-all duration-300 backdrop-blur-sm ${isScrolled ? " bg-opacity-90 shadow-lg" : " bg-opacity-50"
                }`}
        >
            <div>
                <img
                    className="w-[260px] mt-[35px] ml-[50px] md:mx-0"
                    src="https://devstudia54comadminstrapi.studia-54.group/uploads/logo_Dk_YJM_Yp_L_9ae4e22864.svg"
                    alt="logo"
                />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white">
                <nav className="flex gap-4 md:gap-6 text-sm md:text-base mt-[40px]">
                    <a className="mr-[40px] hover:text-gray-400" href="#about">ABOUT</a>
                    <a className="mr-[40px] hover:text-gray-400" href="#portfolio">PORTFOLIO</a>
                    <a className="mr-[40px] hover:text-gray-400" href="#contacts">CONTACTS</a>
                    <a className="mr-[40px] hover:text-gray-400" href="#services">SERVICES</a>|
                </nav>
                <div className="flex gap-2 md:gap-4 text-sm md:text-base mt-[40px] mr-[20px]">
                    <button className="hover:text-gray-400 mr-[40px]">RU</button>
                    <button className="hover:text-gray-400">EN</button>
                </div>
            </div>
        </div>
    );
};

export default Header;
