import { useEffect, useState } from "react";
import "./global.css";
import StartPage from "./components/StartPage";
import QuizePage from "./components/QuizPage";
import { Route, Routes } from "react-router-dom";
import InvitationCard from "./components/InvitationCard";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Routes>
        <Route element={<StartPage />} path="/" />
        <Route element={<QuizePage />} path="/puzzle" />
        <Route element={<InvitationCard />} path="/invitation" />
      </Routes>
    </div>
  );
}

export default App;
