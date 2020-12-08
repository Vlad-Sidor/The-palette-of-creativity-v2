import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Video2 from "../components/Video2";
import { CarouselPhoto } from "../components/CarouselPhoto";
import { gallery } from "../data/index";

const competitions = () => {
  return (
    <div className="competions">
      <Hero hero="roomsHero">
        <Banner title="Галерея">
          <Link to="/" className="btn-primary">
            Вернуться на главную
          </Link>
        </Banner>
      </Hero>
      <Video2 />

      {gallery.map((range) => {
        return (
          <CarouselPhoto
            nameCarousel={range.name}
            images={range.data}
            interval={range.interval}
          />
        );
      })}
    </div>
  );
};

export default competitions;
