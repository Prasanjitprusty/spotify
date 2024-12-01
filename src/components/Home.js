import React from "react";
import Sidebar from "../components/Sidebar";
import MainComponent from "../components/MainComponent";

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <MainComponent />
    </div>
  );
}

export default Home;
