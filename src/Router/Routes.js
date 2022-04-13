import React from "react";
import { Routes, Route } from "react-router-dom";
import Favouritelist from "../components/Favouritelist";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";

export default function MainRoutes() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomeContent />} />
      <Route path="/favouritelist" element={<Favouritelist />} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
    <Footer/>
    </>
  );
}