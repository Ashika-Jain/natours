import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../Assets/video (2).mp4";

import Aos from "aos";
import "aos/dist/aos.css";



const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter Email Address"
              c
            />
            <button data-aos="fade-up" className="btn flex" type="submit">
              SEND <i class="fa-light fa-paper-plane" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <i class="fa-light fa-earth-africa" /> Travel.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              ..........................................................................................................................
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <i class="fa-brands fa-twitter" />
              <i class="fa-brands fa-youtube" />
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>

          <div className="footerLinks grid">
            {/*Group 1 */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup"
            >
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <i class="fa-light fa-angle-right" />
                Services
              </li>

              <li className="footerList flex">
                <i class="fa-light fa-angle-right" />
                Insurance
              </li>

              <li className="footerList flex">
                <i class="fa-light fa-angle-right" />
                Agency
              </li>
            </div>

            {/*Group 2 */}
            <div
              data-aos="fade-up"
              data-aos-duration="4000"
              className="linkGroup"
            >
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <i class="fa-light fa-angle-right" />
                Bookings
              </li>

              <li className="footerList flex">
                <i class="fa-light fa-angle-right" />
                Trivago
              </li>

              <li className="footerList flex">
                <i class="fa-light fa-angle-right" />
                TripAdvisor
              </li>
            </div>

            {/*Group 3 */}
        
          </div>

          <div className="footerDiv flex">
            <small>BEST TEAM</small>
            <small>COPYRIGHTS RESERVED--NOMADS</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
