import React from 'react';

const Footer = () => {
    return (
        <div className="grid grid-cols-4 gap-4 pt-[200px] bg-[#181818] text-white mt-[100px]">
            <div className="p-6 flex flex-col  rounded-lg text-left">
                <a className="ml-[70px] mb-[40px] font-semibold" href="#about">ABOUT</a>
                <a className="ml-[70px] mb-[40px] font-semibold" href="#services">SERVICES</a>
                <a className="ml-[70px] mb-[40px] font-semibold" href="#contacts">CONTACTS</a>
                <a className="ml-[70px] mb-[40px] font-semibold" href="#careers">CAREER</a>
                <a className="ml-[70px] mb-[40px] font-semibold" href="#blog">BLOG</a>
            </div>
            <div className="p-6 flex flex-col  rounded-lg">
                <a className="ml-[70px] mb-[40px] font-semibold" href="#about">PORTFOLIO</a>
                <a className="ml-[70px] mb-[40px] font-semibold" href="#services">COMMERCIALS</a>
                <a className="ml-[70px] mb-[40px] font-semibold" href="#contacts">ARCHITECTURAL DESIGN</a>
                <a className="ml-[70px] mb-[40px] font-semibold" href="#careers">RESIDENTIAL INTERIOR</a>
                <a className="ml-[70px] mb-[40px] font-semibold" href="#blog">FURNITURE BRAND FIFTYOURMS</a>
            </div>
            <div className="p-6  rounded-lg">
                <a className="ml-[70px] mb-[40px] font-semibold" href="#about">Privacy policy</a>
            </div>
            <div className="p-6 flex flex-col rounded-lg">

                <img
                    className="w-[260px]  ml-[50px] md:mx-0"
                    src="https://devstudia54comadminstrapi.studia-54.group/uploads/mini_logo_ceae462b93.svg"
                    alt="logo"
                />
                <p className="mt-[40px]" >
                    © 2013 — 2025 Studia-54 Interior Design and <br></br> Engineering
                </p>
                <p className="mt-[40px] flex flex-row" >
                    RU
                    <p className='ml-[40px] font-semibold'>EN</p>
                </p>
                <div className='flex flex-row'>
                    <img
                        className="w-[35px] mr-[30px] "
                        src="https://devstudia54comadminstrapi.studia-54.group/uploads/whatsapp_c15711550a.svg"
                        alt="logo"
                    />
                    <img
                        className="w-[35px] mr-[30px]"
                        src="https://devstudia54comadminstrapi.studia-54.group/uploads/inst_icon_3508b4fb8a.svg"
                        alt="logo"
                    />
                    <img
                        className="w-[35px]  mr-[30px]"
                        src="https://devstudia54comadminstrapi.studia-54.group/uploads/pinterest_1a843102e8.svg"
                        alt="logo"
                    />
                    <img
                        className="w-[35px]  mr-[30px]"
                        src="https://devstudia54comadminstrapi.studia-54.group/uploads/facebook_82e0aa4cd6.svg"
                        alt="logo"
                    />
                    <img
                        className="w-[35px]  mr-[30px]"
                        src="https://devstudia54comadminstrapi.studia-54.group/uploads/youtube_9b5ae4a883.svg"
                        alt="logo"
                    />
                    <img
                        className="w-[35px]  mr-[30px]"
                        src="https://devstudia54comadminstrapi.studia-54.group/uploads/Exclude_2cf14a9985.svg"
                        alt="logo"
                    />


                </div>


            </div>
        </div >
    );
}

export default Footer;

