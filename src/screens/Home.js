import React from "react";
import "./Main.css";
import RecommendedVideos from "../components/RecommendedVideos";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div>
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default Home;
