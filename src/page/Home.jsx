import React from 'react'
import { PiShootingStarThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaRadio } from "react-icons/fa6";

const Home = () => {
    return (
        <section className='min-h-[calc(100vh-56px)] background_home md:px-20 px-10 text-[#ded8d8]'>

            <div className='   lg:gap-20 gap-10 md:flex hidden justify-around pt-5 text-[#ded8d8] font-semibold'>
                <p>4.8 rating on Capterra</p>
                <p>4.8 rating on google</p>
                <p>350+ review on XERO</p>
                <p>550+ reviews on quickBook</p>

            </div>

            <div className='lg:pt-28 md:pt-10 pt-28 md:text-6xl text-4xl font-bold leading-tight flex flex-col items-center justify-center '>
                <div>
                    <p className='max-w-[35ch] wrap-normal '>Create reports,forecasts,</p>
                    <p>dashboards & consolidation</p>
                </div>

                <div className='text-lg mt-6 flex gap-2 items-center'><div className='text-yellow-300'><PiShootingStarThin size={28} /></div>Now with Ai-insights</div>

                <button className='text-lg mt-6 px-2 py-2  rounded-md text-[#181717] bg-gradient-to-b from-sky-500 to-sky-200'>start 14-days free trial</button>

                <Link className='underline text-base flex items-center mt-4 gap-2'>
                    <FaRadio />
                    <p>see what we do</p>
                </Link>
            </div>

        </section>
    )
}

export default Home
