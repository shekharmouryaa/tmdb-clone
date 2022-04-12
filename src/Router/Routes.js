import React from "react";
import { Routes, Route } from "react-router-dom";
import Favouritelist from "../components/favouritelist";
import HomeContent from "../components/HomeContent";
import VideoPlayer from "../components/VideoPlayer";
export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/tmdb-clone" element={<HomeContent />} />
      <Route path="/favouritelist" element={<Favouritelist />} />
      <Route path="/video" element={<VideoPlayer />} />
    </Routes>
  );
}
