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
      <OrgCommittee />
      <CommunicationForm />
      <Footer />
    </>
  );
};

export default home;
