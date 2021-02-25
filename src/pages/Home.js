import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import About from "../components/About";
import Footer from "../components/Footer";
import Partners from "../components/Partners";
import TimerCon from "../components/TimerCon/TimerCon";
import { CommunicationForm } from "../components/CommunicationForm.js";
import { OrgCommittee } from "../components/OrgCommittee/OrgCommittee";
import { VideoPlayer } from '../components/VideoPlayer';
import { CarouselPhoto } from '../components/CarouselPhoto';
import { gallery } from '../data/index';

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="
          ПАЛИТРА ТВОРЧЕСТВА "
          subtitle="молодежный фестиваль 2021"
        >
          <TimerCon />

          <Link to="/competitions" className="btn-primary">
            галерея
          </Link>
        </Banner>
      </Hero>
      
       {gallery.map((range, index) => {
        return (
          <CarouselPhoto
            nameCarousel={range.name}
            images={range.data}
            interval={range.interval}
          />
        );
      })}

      <About />
      <FeaturedRooms />
      <Services />
      <Partners />
      <OrgCommittee />
      <CommunicationForm />
      <Footer />
    </>
  );
};

export default home;
