"use client";

import PhotoAlbum from "react-photo-album";
import photos from "../../utils/photos";
import Footer from "@/app/components/Footer";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import { useState } from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <Navbar color="#FFFFFF" />
      <Hero heading="Galerie" button="Zur Galerie" link="/gallery/#gallery" />
      <div className="max-w-[1240px] mx-auto" id="gallery">
        <h1 id="gallery" className="text-2xl font-bold text-center p-4">
          Galerie
        </h1>
        <div className="p-4">
          <PhotoAlbum
            photos={photos}
            layout="rows"
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />
          <Lightbox
            slides={photos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
