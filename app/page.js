import About from "@/components/About";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Navbar/> 
      <HeroSection />
      <About />
      <Features />
    </main>
  );
};

export default page;
