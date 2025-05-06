import React from 'react';
import { motion } from "framer-motion";
import team1 from '../../../assets/images/office happy.jpg'
import team2 from '../../../assets/images/program.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-100">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate={{y:[20,70,20]}}
                        transition={{duration: 7, repeat: Infinity }}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-5 border-b-5 border-blue-400
                        w-72 shadow-2xl"
                    />
                    <motion.img
                        src={team2}
                        animate={{x:[150,200,150]}}
                        transition={{duration: 7, repeat: Infinity }}
                        className="max-w-sm rounded-t-3xl rounded-br-3xl border-l-5 border-b-5 border-blue-400
                        w-72 shadow-2xl"
                    />
                    </div>
                    <div className='flex-1'>
                        <motion.h1
                        animate={{ x: 50, y:-20, opacity: 1, color: ["#3b82f6", "#ffaf33"] }}
                        transition={{ duration: 1.5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="text-5xl font-bold">Latest Jobs For You!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;