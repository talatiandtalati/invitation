import React, { useState,useEffect } from "react";
import picnic from "./assets/picnic1.webp";
import picnicMob from "./assets/picnicMob1.webp";
import Puzzle from "./Puzzle";
import Riddle from "./Riddle";
import { useMediaQuery } from "react-responsive";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import NextLevel from "./NextLevel";

const QuizPage = () => {
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);
  const { width, height } = useWindowSize();
  const [greetingText,setGreetingText]=useState("");
  useEffect(()=>{
    setLoading(true);
    setGreetingText("आरम्भ करते है पहले पड़ाव से")
    setTimeout(()=>{
      setGreetingText("")
      setLoading(false);
    },5000)
  },[])

  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 640px)",
  });

  return (
    <div
      style={{
        background: `url(${isDesktopOrLaptop ? picnicMob : picnic})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-screen flex items-center sm:justify-end justify-center sm:pr-12 pr-0 fixed"
    >
      {flag ? (
        <Puzzle setFlag={setFlag} setLoading={setLoading} setGreetingText={setGreetingText}/>
      ) : (
        <Riddle setFlag={setFlag} setLoading={setLoading} setGreetingText={setGreetingText}></Riddle>
      )}
      {loading ? (
        <>
        <NextLevel text={greetingText}></NextLevel>
          <Confetti width={width} height={height} gravity={0.5} />
        </>
      ) : (
        <></>
      )}
      {/* <Confetti width={width} height={height} gravity={0.5}/> */}
    </div>
  );
};

export default QuizPage;
