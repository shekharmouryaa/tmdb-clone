import React from "react";
import { Routes, Route } from "react-router-dom";
import Favouritelist from "../components/favouritelist";
import HomeCotent from "../components/HomeCotent";
import VideoPlayer from "../components/VideoPlayer";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeCotent />} />
      <Route path="/favouritelist" element={<Favouritelist />} />
      <Route path="/video" element={<VideoPlayer />} />
    </Routes>
  );
}
