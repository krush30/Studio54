import React from 'react'

const LowerForm = () => {
    return (
        <div className='grid grid-cols-[45%_55%] gap-4 w-full rounded-4xl mr-[100px] ml-[40px] mt-[40px] bg-black'>
            <div>
                <img
                    src='https://4b5ae5ff7535-studia-videos.s3.ru1.storage.beget.cloud/forma_angl_1bf4fd7415.png'
                    alt='alter'
                    className='mt-[50px] w-[850px] rounded-lg' />
            </div>
            <div className='relative w-full overflow-hidden gap-4 flex flex-col'>
                <div className='text-[35px] mt-[60px]'>
                    STEP INTO THE WORLD OF STUDIO 54
                </div>
                <div className='text-[#B2AFB2] text-[25px] mt-6'>
                    A place where your dreams take shape through the unique vision of our <br></br>
                    studio. We look forward to embarking on this inspiring journey with you and <br></br>
                    bringing your project to life
                </div>
                <div className="text-[#d38c37] text-[25px] mt-20">
                    Fill out the form and our manager will contact you
                </div>
                <form className="rounded-3xl w-[90%] p-2">
                    <input
                        type="text"
                        placeholder="Your name"
                        className="rounded-3xl w-full mb-6 bg-[#0F0F0F] h-[90px] p-2 pl-6  border border-gray-300 focus:outline-none focus:border-[#B2AFB2] text-xl"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        className="rounded-3xl w-full bg-[#0F0F0F] h-[90px] p-2 pl-6  border border-gray-300 focus:outline-none focus:border-[#B2AFB2] text-xl"
                    />
                </form>
                <button className='bg-[#d38c37] text-[30px] ml-[12px] rounded-3xl w-full h-[100px]'>
                    REQUEST A MANGER&apos;S CONSULATION
                </button>
                <div className="flex items-center mt-4 gap-2 text-[#B2AFB2] text-lg">
                    <input type="checkbox" id="privacyPolicy" className="w-5 h-5 accent-[#d38c37]" />
                    <label htmlFor="privacyPolicy">
                        I accept the <span className="text-[#d38c37] cursor-pointer">Privacy Policy</span>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default LowerForm
