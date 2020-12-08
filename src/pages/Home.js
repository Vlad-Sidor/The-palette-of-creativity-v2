import React from "react";
import { Link } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import About from "../components/About";
import Footer from "../components/Footer";
import Competition from "../components/Competition";
import RoomsContainer from "../components/CompetitionsContainer";
import Partners from "../components/Partners";
import TimerCon from "../components/TimerCon/TimerCon";
import CommunicationForm from "../components/CommunicationForm.js";
import Organizers from "../components/Organizers.js";
import Video2 from "../components/Video2.js";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="
          ПАЛИТРА ТВОРЧЕСТВА"
          subtitle="молодежный фестиваль"
        >
          <TimerCon />

          <Link to="/competitions" className="btn-primary">
            галерея
          </Link>
        </Banner>
      </Hero>

      <About />
      <FeaturedRooms />
      <Services />
      <Partners />
      <Organizers />

      <CommunicationForm />
      <Footer />
    </>
  );
};

export default home;
