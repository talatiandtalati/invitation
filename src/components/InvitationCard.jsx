import { useEffect, useRef,useState } from "react";
import video from "./assets/invitation.mp4";
import MobVideo from "./assets/invitationMobile.mp4";
import { motion, useAnimationControls } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import data from './data.json'

const InvitationCard = () => {
  const [name,setName]=useState("")
  const v = useRef(null);
  const controls = useAnimationControls();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 640px)",
  });
  useEffect(() => {
    v.current.play();
    setName(data[JSON.parse(localStorage.getItem('email'))].name)
  }, []);
  return (
    <div className="w-full h-full">
      <video
        ref={v}
        muted
        className="sm:w-full w-screen h-full object-cover"
        onEnded={() => controls.start({ opacity: 1, scale: 1 })}
        src={video}
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={controls}
          transition={{ duration: 0.5 }}
          className=" sm:w-[80%] w-[90%] sm:h-[65vh] h-[60%] flex flex-col items-center sm:justify-start justify-between sm:py-0 py-4 "
        >
          <h1 className="sm:text-5xl text-2xl font-bold relative sm:mb-20 mb-8 text-[#1C110D]">
            सादर आमंत्रण{" "}
            <span className="inline-block w-full bg-[#1C110D] h-[0.1em] absolute bottom-[-15%] left-0"></span>
          </h1>
          <p className="text-center sm:text-4xl text-lg leading-6 sm:leading-[2.8rem] sm:mb-12 mb-4 text-[#563F2F] sm:font-normal font-bold ">
            सम्माननीय पार्टनर्स, {(name)?`${name},`:""} <br />
            समस्त प्रथम वर्ष के आर्टिकल्स की ओर से आयोजित उक्त स्नेह मिलन <br />
            कार्यक्रम में आप सपरिवार सादर आमंत्रित हैं। <br />
            कृपया, पधारकर हमें अनुगृहीत करें।
          </p>
          <div className="w-[20vmin] h-[0.01em] bg-[#563F2F] mb-4"></div>
          <h5 className="text-center sm:text-2xl text-sm sm:mb-8 mb-4 text-[#513A2E] font-bold">
            शनिवार, 10 फरवरी, 2024 <br />
            प्रात: 10.00 से सायं 8.00 बजे तक <br />
            बंसारी ग्रीन्स रिज़ॉर्ट, अलुवा, अहमदाबाद
          </h5>
          <div className="w-[20vmin] h-[0.01em] bg-[#563F2F] mb-4"></div>

          <h6 className="text-center sm:text-2xl text-sm text-[#563F2F] sm:font-normal font-bold">
            विनयावनत <br /> समस्त आर्टिकल्स, प्रथम वर्ष, <br />
            तलाटी एंड तलाटी
          </h6>
        </motion.div>
      </div>
    </div>
  );
};

export default InvitationCard;
