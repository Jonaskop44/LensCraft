"use client";

import Footer from "@/app/components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar color="#FFFFFF" />
      <Hero
        heading="Imprint"
        button="To the imprint"
        link="/impressum/#impressum"
      />
      <div id="gallery" className="max-w-[1240px] mx-auto">
        <h1 id="impressum" className="text-2xl font-bold text-center p-4">
          Imprint
        </h1>
        <div className="flex justify-center items-center ">
          <div className="m-20 p-16 shadow-xl">
            <div className="mb-9">
              <p>Name: [First and Last Name]</p>
              <p>Address (Street): [Street Name and Number]</p>
              <p>Address (City): [Postal Code and City]</p>
            </div>
            <div>
              <p>Phone: [Phone Number]</p>
              <p>Email: [Email Address]</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
