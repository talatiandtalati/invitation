import { useEffect, useState } from "react";
import "./global.css";
import StartPage from "./components/StartPage";
import QuizePage from "./components/QuizPage";
import { Route, Routes } from "react-router-dom";
import InvitationCard from "./components/InvitationCard";
import { useSearchParams } from "react-router-dom";

function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  function preventMotion(event) {
    window.scrollTo(0, 0);
    event.preventDefault();
    event.stopPropagation();
  }
  useEffect(()=>{
     if(searchParams.get('email')){
      localStorage.setItem('email', JSON.stringify(searchParams.get('email')));

     }
  },[])

  return (
    <div className="w-full h-screen flex justify-center items-center fixed">
      <Routes>
        <Route element={<StartPage />} path="/" />
        <Route element={<QuizePage />} path="/puzzle" />
        <Route element={<InvitationCard />} path="/invitation" />
      </Routes>
    </div>
  );
}

export default App;
