import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Information from "../components/Information";
import DetailedServices from "../components/DetailedServices";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <Information />
      <DetailedServices />
    </div>
  );
};

export default Home;
