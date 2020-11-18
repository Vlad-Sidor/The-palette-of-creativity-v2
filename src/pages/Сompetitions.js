import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Video2 from "../components/Video2";
import GallerySongs from "../components/GallerySongs";
import GalleryDancing from "../components/GalleryDancing";
import GalleryTheatre from "../components/GalleryTheatre";
import GalleryFoto from "../components/GalleryFoto";

const competitions = () => {
  return (
    <>
   
      <Hero hero="roomsHero">
        
        <Banner title="Галерея">
          
          <Link to="/" className="btn-primary">
           Вернуться на главную  
          </Link>
         
        </Banner>
      </Hero>      
      <Video2/>
      
      <GallerySongs/>
      <GalleryDancing/>
      <GalleryTheatre/>
      <GalleryFoto/>

    </>
  );
};

export default competitions;