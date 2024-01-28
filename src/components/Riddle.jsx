import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Riddle = ({ setFlag, setLoading, setGreetingText }) => {
  const [ans, setAns] = useState("");
  const handleSubmit = () => {
    if (
      ans === "कागज" ||
      ans.toLowerCase() === "paper" ||
      ans.toLowerCase() === "kagaj" ||
      ans.toLowerCase() === "kagaz"
    ) {
      setLoading(true);
      setGreetingText("स्वागत है आपका दूसरे और अंतिम पड़ाव  में");
      setTimeout(() => {
        setFlag(true);
        setLoading(false);
        setGreetingText("");
      }, 5000);
    }else{
      toast.error("गलत जवाब, पुनः प्रयास कीजिए")
    }
  };
  return (
    <div className="sm:w-[60vh] w-full h-[60vh] backdrop-blur-lg rounded-xl border border-white p-4  relative">
       <ToastContainer />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-xl font-extrabold text-[#4D3006] mb-16 relative">
          बूझो तो जाने{" "}
          <span className="inline-block w-full bg-[#1C110D] h-[0.1em] absolute bottom-[-20%] left-0"></span>
        </h1>
        <h6 className="text-2xl sm:text-3xl text-text_primary text-center mb-8 font-bold ">
          प्रथम कटे हाथी बन जाऊं, <br />
          मध्य कटे तो काज कहाऊ, <br />
          अंत कटे तो काग कहाऊँ, <br />
          पढ़े-लिखे के काम आऊं ।
        </h6>
        <input
          className="my-4 bg-transparent border border-b-text_primary border-t-0 border-l-0 border-r-0 outline-none text-center pb-1 text-text_primary placeholder-text_primary sm:text-xl text-base"
          type="text"
          placeholder="Type your ans here...."
          value={ans}
          onChange={(e) => {
            setAns(e.target.value);
          }}
        />
        <button
          onClick={handleSubmit}
          className="rounded-[2em] bg-primary text-white sm:px-8 px-4 sm:py-4 py-2 sm:text-lg text-sm"
        >
          SUBMIT
        </button>
      </div>
      {/* <div className="w-full h-full absolute left-0 top-0">
        <img className="w-full h-full" src={confetti} alt="" />
      </div> */}
    </div>
  );
};

export default Riddle;
