import React from "react";
import Navbar from "../Layout/Navbar";
import Hero from "../Layout/Hero";
import Service from "../Layout/Service";
import Projects from "../Layout/Projects";
import Milestone from "../Layout/Milestone";
import VisionMission from "../Layout/VisionMission";
import Founder from "../Layout/Founder";

const Home = () => {
  return (
    <div className="w-full h-max">
      <Navbar />
      <Hero/>
      <VisionMission/>
      <Service/>
      <Milestone/>
      <Projects/>
      <Founder/>
    </div>
  );
};

export default Home;
