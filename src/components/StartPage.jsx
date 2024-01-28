import React from "react";
import { Link } from "react-router-dom";
import Cycling from "./assets/Road cycling.png";

const StartPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="sm:w-[70vh] sm:h-[70vh] w-[40vh] h-[40vh] absolute  translate-x-[-50%] translate-y-[-50%] top-[60%] left-[50%]">
        <img className="w-full h-full" src={Cycling} alt="" />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-between relative z-20 pt-24 pb-24">
        <div>
        <h1 className="font-serif sm:text-5xl text-3xl font-extrabold">
        तलाटी एंड तलाटी एलएलपी
        </h1>
        <h6 className="font-sans sm:text-3xl text-xl font-semibold text-center sm:mt-8 mt-2">
        पिकनिक 2024 😎
        </h6>
        </div>
     
        <Link to="/puzzle">
          <button className="rounded-[2em] bg-primary text-white sm:px-8 px-4 sm:py-4 py-2 sm:text-xl text-lg">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
