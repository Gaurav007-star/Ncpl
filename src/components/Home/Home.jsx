import React from "react";
import Navbar from "../Layout/Navbar";
import Hero from "../Layout/Hero";
import Service from "../Layout/Service";
import Projects from "../Layout/Projects";
import Milestone from "../Layout/Milestone";
import VisionMission from "../Layout/VisionMission";
import Founder from "../Layout/Founder";
import Footer from "../Layout/Footer";

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
      <Footer/>
    </div>
  );
};

export default Home;
