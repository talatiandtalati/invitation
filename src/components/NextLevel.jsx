import React from "react";
import { motion } from "framer-motion";
import Celebration from './assets/Celebration-bro.png'

const NextLevel = ({text}) => {
  return (
    <div className="w-full h-full absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3}}
      className="bg-white w-full h-full rounded-lg flex items-center justify-center flex-col"
    >

         <h1 className="text-bold text-5xl">{text}</h1>
         <div className="sm:w-[70vh] w-[50vh] sm:h-[70vh] h-[50vh]">
        <img className="w-full h-full" src={Celebration} alt="" />
      </div>

     
    </motion.div>
    </div>
  );
};

export default NextLevel;
