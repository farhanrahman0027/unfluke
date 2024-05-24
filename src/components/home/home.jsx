import React, { useState } from "react";
import { bannerimg, Share } from "../imagepath";
import { Link } from "react-router-dom";
import { Section1, Section2, Section3, Section4 ,bottomSectionImg} from "../imagePathNew";
import Loginbg from "../../assets/img/banner.png";
import BgBanner1 from "../../assets/img/bg-banner-01.png";
import Testimonial from "./slider/testimonial";
import Select from "react-select";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import CountUp from "react-countup";

const options = [
  { label: "Category", value: "Category" },
  { label: "Angular", value: "Angular" },
  { label: "Node Js", value: "Node Js" },
  { label: "React", value: "React" },
  { label: "Python", value: "Python" },
];

export const Home = () => {
  const [setValue] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isActivetwo, setIsActivetwo] = useState(false);
  const [isActivethree, setIsActivethree] = useState(false);
  const [isActivefour, setIsActivefour] = useState(false);
  const [isActivefive, setIsActivefive] = useState(false);
  const [isActivesix, setIsActivesix] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };
  const toggleClasstwo = () => {
    setIsActivetwo(!isActivetwo);
  };
  const toggleClassthree = () => {
    setIsActivethree(!isActivethree);
  };
  const toggleClassfour = () => {
    setIsActivefour(!isActivefour);
  };
  const toggleClassfive = () => {
    setIsActivefive(!isActivefive);
  };
  const toggleClasssix = () => {
    setIsActivesix(!isActivesix);
  };

  const formatValue = (value) => `${Math.floor(value)}`;

  const style = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: "#FFDEDA",
      border: state.isFocused ? 0 : 0,
      paddingLeft: "5px",
      paddingTop: "5px",
      paddingBottom: "5px",
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      borderRadius: state.isSelected ? "0" : "10px",
      fontSize: "14px",
      "&:hover": {
        border: state.isFocused ? 0 : 0,
        color: "black",
      },
      // eslint-disable-next-line no-dupe-keys
      borderRadius: "50px",
      outline: "none",
    }),
    menu: (base) => ({ ...base, marginTop: "2px" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#FFDEDA" : "white",
      fontSize: "14px",
      "&:hover": {
        backgroundColor: "#FFDEDA",
      },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      color: "black",
      transform: state.selectProps.menuIsOpen ? "rotate(-180deg)" : "rotate(0)",
      transition: "250ms",
    }),
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div className="main-wrapper m-0 p-0">
        {/* banner */}
        <section
          className="home-slide d-flex align-items-center"
          style={{ backgroundImage: "url(" + Loginbg + ")" }}
        >
          <div className="container">
            <div className="row ">
              <div className="col-md-7">
                <div className="home-slide-face aos" data-aos="fade-up">
                  <div className="home-slide-text ">
                    <h1>One stop solution to test your Strategy ideas</h1>
                    <p>
                      As we are launching a Beta soon, we are giving away 1
                      month FREE subscription to our early backers. Sign up
                      below to get FREE subscription.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                <div className="girl-slide-img aos" data-aos="fade-up">
                  <img src={bannerimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /banner */}

        {/* Top Category with Owl Carousel */}
        <section className="section how-it-works">
          <div className="container">
            <div className="section-header aos" data-aos="fade-up">
              <div className="section-sub-head w-100">
                <span className="text-center">Features</span>
                <h2 className="text-center">
                  Excellent Features. Excellent Results
                </h2>
              </div>
            </div>
            <div
              className="section-text aos w-100"
              data-aos="fade-up"
              style={{ maxWidth: "100%" }}
            >
              <p className="text-center ">
                Start working with Unfluke to manage all your strategies
              </p>
            </div>
          </div>
        </section>
        {/* Top Category with Owl Carousel */}
        {/* Share knowledge */}
        <section className="section share-knowledge">
          <div className="container">
            <div className="row flex-md-row flex-column-reverse">
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Section1} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center ">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>HISTORICAL INTRADAY CHARTS</h2>
                  <p>
                    Get historical intraday charts of Equity, Futures and
                    Options.
                  </p>
                  <ul className="course-list">
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Different Segment Charts
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Data Since 2017
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section share-knowledge"
          style={{ backgroundImage: "url(" + BgBanner1 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>HISTORICAL SCANNER</h2>
                  <p>
                    Check scanner results using a combination of different
                    indicators and time frames.
                  </p>
                  <ul className="course-list">
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Different Segment Scanner
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check" />
                      Data Since 2017 for FNO
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Section2} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section share-knowledge">
          <div className="container">
            <div className="row flex-md-row flex-column-reverse">
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Section3} alt="" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>BACKTEST STRATEGIES</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="section share-knowledge"
          style={{ backgroundImage: "url(" + BgBanner1 + ")" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-center">
                <div className="join-mentor aos" data-aos="fade-up">
                  <h2>ADVANCE BACKTEST STRATEGIES</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="knowledge-img aos" data-aos="fade-up">
                  <img src={Section4} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Share knowledge */}

        {/**Last section */}
        <div
          className="section p-5"
          
        >
          <div className="container">
            <div className="row m-0 p-0 align-items-center justify-content-center">
              <h2 className="m-0 p-0 text-center mt-4 mb-4">In partnership with</h2>
              <img src={bottomSectionImg} className="m-0 p-0 mt-3 mb-5" alt="" style={{height:'100px',width:'100px'}}/>
              <p className="m-0 p-0 text-center text-secondary">
                TradingView is a widely recognized and highly regarded platform
                among traders and investors, with a vast user base spanning the
                globe. It offers state-of-the-art charting tools that allow
                market enthusiasts to engage, analyze data, and prepare for btc
                usd, eth usd trading and various other assets.
              </p>
            </div>
          </div>
        </div>
        {/** /Last section */}
      </div>
    </>
  );
};

export default Home;
