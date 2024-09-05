"use client";

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import SocialMedia from "../components/SocialMedia";
import sliderdata from "../utils/sliderdata";

const Home = () => {
  return (
    <div>
      <Navbar color="#FFFFFF" />
      <Hero
        heading="LensCraft Photography"
        message="Fotografie ist die Kunst, die Welt durch die Linse zu sehen."
        button="Zur Galerie"
        link="/gallery"
      />
      <Slider slides={sliderdata} />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Home;
