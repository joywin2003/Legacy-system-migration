import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import Landing from "./pages/Landing";
import Repo from "./pages/Repo";

export default function TranslationForm() {
  
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/Repo" element={<Repo/>} />
      </Routes>
    </BrowserRouter>
  );
}
