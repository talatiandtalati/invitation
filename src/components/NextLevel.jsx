import React from "react";
import { motion } from "framer-motion";
import Celebration from './assets/Celebration-bro.webp'

const NextLevel = ({text}) => {
  return (
    <div className="w-full h-full absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1}}
      className="bg-white w-full h-full rounded-lg flex items-center justify-center flex-col p-4"
    >

         <h1 className="text-bold sm:text-5xl text-3xl text-center">{text}</h1>
         <div className="sm:w-[70vh] w-[40vh] sm:h-[70vh] h-[40vh]">
        <img className="w-full h-full" src={Celebration} alt="" />
      </div>

     
    </motion.div>
    </div>
  );
};

export default NextLevel;
