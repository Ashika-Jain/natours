import React, { useEffect } from "react";
import "./home.css";
import video from "../../Assets/video.mp4";

import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent">
        <div className="textDiv">
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <i className="ficons fa-brands fa-facebook" />
            <i className="ficons fa-brands fa-instagram" />
            <i className="ficons fa-brands fa-x-twitter" />
          </div>

          <div className="leftIcons">
            <i class="fa-regular fa-list" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
