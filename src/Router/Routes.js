import React from "react";
import { Routes, Route } from "react-router-dom";
import Favouritelist from "../components/Users/Favouritelist";
import Footer from "../components/Footer/Footer";
import HomeContent from "../components/Banner/HomeContent";
import { MediaDetails } from "../Utilty/MediaDetails";
import Navbar from "../components/Navbar/Navbar";
import SignUp from "../components/Users/SignUp";

export default function MainRoutes() {
  
  return (
    <>
    <Navbar />
    <div className="body-flex">
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/favouritelist" element={<Favouritelist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details/:id" element={<MediaDetails />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}