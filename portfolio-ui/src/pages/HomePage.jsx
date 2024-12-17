import React from "react";
import CommonHeroSection from "../components/CommonHeroSection";
import CommonWorkSection from "../components/CommonWorkSection";

const HomePage = () => {
  return (
    <div className="w-full sm:w-3/5 flex flex-col justify-center m-auto">
      <CommonHeroSection />
      <CommonWorkSection />
    </div>
  );
};

export default HomePage;
