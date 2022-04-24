import React from "react";
import { Routes, Route } from "react-router-dom";
import Favouritelist from "../components/Favouritelist";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";
import { MediaDetails } from "../components/MediaDetails";
import Navbar from "../components/Navbar";
import SignUp from "../components/SignUp";

export default function MainRoutes() {

  

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/favouritelist" element={<Favouritelist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/details/:id" element={<MediaDetails />} />
      </Routes>
      <Footer />
    </>
  );
}