import React from "react";
import { Routes, Route } from "react-router-dom";
import Favouritelist from "../components/favouritelist";
import VideoPlayer from "../components/VideoPlayer";
import WhatsPopulars from "../components/WhatsPopulars";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WhatsPopulars />} />
      <Route path="/favouritelist" element={<Favouritelist />} />
      <Route path="/video" element={<VideoPlayer />} />
    </Routes>
  );
}
