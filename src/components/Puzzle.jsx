import React from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from './assets/puzzle.jpeg';
import MobileImg from './assets/puzzleMobile.jpeg'
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from 'react-responsive'

const Puzzle = ({ setFlag,setLoading,setGreetingText }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(max-width: 640px)'
  })
    const navigate=useNavigate()
    const set = () => {
      setLoading(true);
      setGreetingText("धन्यवाद्  आपके कीमती समय के लिए")
      setTimeout(()=>{
        navigate("/invitation")

        setLoading(false);

      },5000)
    };
  return (
    <div className="sm:w-[80vh] h-[80vh] w-full rounded-xl p-4 flex flex-col items-center justify-center">
      {
        isDesktopOrLaptop?  <JigsawPuzzle
        imageSrc={MobileImg}
        rows={3}
        columns={3}
        onSolved={set}
        className="w-[60%] h-[60%] 
        "
      />:  <JigsawPuzzle
        imageSrc={img}
        rows={3}
        columns={3}
        onSolved={set}
        className="w-[60%] h-[60%] 
        "
      />
      }
    
    </div>
  );
};

export default Puzzle;
