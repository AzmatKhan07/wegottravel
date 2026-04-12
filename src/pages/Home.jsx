import React from "react";
import Hero from "@/components/home/Hero";
import DealsSection from "@/components/home/DealsSection";
import PopularDesitination from "@/components/home/PopularDesitination";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import NewsLetter from "@/components/home/NewsLetter";

function Home() {
  return (
    <>
      <Hero />
      <DealsSection />
      <PopularDesitination />
      <WhyChooseUs />
      <NewsLetter />
    </>
  );
}

export default Home;
