import React, { useEffect } from "react";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import img from "./assets/puzzle.webp";
import MobileImg from "./assets/puzzleMobile.webp";
import { Link, useNavigate } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

const Puzzle = ({ setFlag, setLoading, setGreetingText }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 640px)",
  });
  const navigate = useNavigate();
  const set = () => {
    setLoading(true);
    setGreetingText("धन्यवाद्  आपके कीमती समय के लिए");
    setTimeout(() => {
      navigate("/invitation");

      setLoading(false);
    }, 5000);
  };

 
 
  return (
    <div className="sm:w-[80vh] h-fit w-full rounded-xl p-4 flex flex-col items-center justify-center fixed touch-none">
      <Link to={"/invitation"}>
        <button
          className="rounded-2xl border-none text-white bg-[#00000049] px-4 py-2 absolute top-[-10%] left-0"
        >
          Skip
        </button>
      </Link>

      {isDesktopOrLaptop ? (
        <JigsawPuzzle
          imageSrc={MobileImg}
          rows={3}
          columns={3}
          onSolved={set}
          className="w-[60%] h-[60%] 
        "
        />
      ) : (
        <JigsawPuzzle
          imageSrc={img}
          rows={3}
          columns={3}
          onSolved={set}
          className="w-[60%] h-[60%] 
        "
        />
      )}
    </div>
  );
};

export default Puzzle;
