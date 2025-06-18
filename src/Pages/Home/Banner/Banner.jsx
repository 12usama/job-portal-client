import React from 'react';
import { motion } from "framer-motion";
import team1 from '../../../assets/images/office happy.jpg'
import team2 from '../../../assets/images/program.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-100 py-8 ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{y:[20,70,20]}}
                        transition={{duration: 7, repeat: Infinity }}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-5 border-b-5 border-blue-400 w-40
                        lg:w-80 shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{x:[150,200,150]}}
                        transition={{duration: 7, repeat: Infinity }}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-5 border-b-5 border-blue-400 w-40
                        lg:w-80 shadow-2xl"
                    />
                    </div>
                    <div className='flex-1'>
                        <motion.h1
                        animate={{ x: 50, y:-20, opacity: 1, color: ["#3b82f6", "#ffaf33"] }}
                        transition={{ duration: 1.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="text-2xl lg:text-5xl font-bold">Latest Jobs For You!</motion.h1>
                        <p className="py-6 lg:text-lg font-semibold text-[#3b82f6]">
                        Discover the most in-demand jobs, updated daily just for you. 
                        <span className='text-[#ffaf33]'> Apply in one click and get hired faster!</span>
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;