import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Course1, Icon1, Icon2, User1 } from "../imagepath";
import { aseemSinghal } from "../imagePathNew";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="main-wrapper ps-0 pe-0" style={{ paddingTop: "98px" }}>
      <div className="page-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h1 className="mb-0">About us</h1>
            </div>
          </div>
        </div>
      </div>

      {/* What's new Featured Course */}
      <section className="section new-course">
        <div className="container">
          <div className="course-feature">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 d-block">
                <div className="course-box d-flex aos" data-aos="fade-up">
                  <div className="product">
                    <div className="product-img">
                      <Link to="/course-details">
                        <img className="img-fluid" alt="" src={aseemSinghal} />
                      </Link>
                    </div>
                    <div className="product-content">
                      <div className="course-group d-flex">
                        <div className="course-group-img d-flex">
                          <div className="course-name">
                            <h4 className="text-center">
                              <Link
                                to="/instructor-profile"
                                className="w-auto text-center"
                              >
                                Aseem Singhal
                              </Link>
                            </h4>
                            <p>Founder</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <p className="m-0 p-0 mb-3 text-secondary">Welcome to Unfluke! We are passionate about empowering traders and investors like you with the tools and resources needed to test and refine your trading ideas and strategies. Our platform provides a comprehensive suite of features that enable you to make informed decisions based on historical data, receive timely alerts, leverage powerful scanners, and perform accurate backtesting.</p>
                <p className="m-0 p-0 mt-3 mb-3 text-secondary">At Unfluke, we understand the challenges traders face in today's dynamic and ever-evolving markets. It can be daunting to navigate the complexities of the financial world, interpret market trends, and identify profitable opportunities. That's why we have built a user-friendly and intuitive platform that caters to traders of all experience levels, from beginners to seasoned professionals.</p>
                <p className="m-0 p-0 mt-3 mb-3 text-secondary">Our primary goal is to make testing accessible and efficient for everyone. We believe that by providing robust tools and valuable insights, we can help you gain a competitive edge in the market. Whether you are a day trader, swing trader, or long-term investor, our platform equips you with the necessary resources to make smarter decisions and maximize your potential for success.</p>
                <p className="m-0 p-0 mt-3 mb-3 text-secondary">Key Features of Unfluke:</p>
                <ol className="mt-3 mb-3">
                    <li className="text-secondary mt-1 mb-1"><b>Historical Data Analysis: </b> Leverage our vast historical database to analyze past market trends, price movements, and trading patterns. Uncover valuable insights that can guide your future trading decisions.</li>
                    <li className="text-secondary mt-1 mb-1"><b>Strategy Testing and Optimization: </b> Test out your trading ideas and strategies using our advanced backtesting capabilities. Identify strengths and weaknesses, refine your approach, and improve your overall trading performance.</li>
                    <li className="text-secondary mt-1 mb-1"><b>Real-time Alerts: </b> Stay informed with timely alerts that notify you about significant market events, price movements, and potential trading opportunities. Customize alerts based on your specific preferences and trading style.</li>
                    <li className="text-secondary mt-1 mb-1"><b>Powerful Scanners: </b> Discover potential trades and investments efficiently with our comprehensive scanning tools. Filter stocks, currencies, or other financial instruments based on your desired criteria, such as price, volume, volatility, and technical indicators.</li>
                </ol>
                <p className="m-0 p-0 mt-3 mb-3 text-secondary">We are dedicated to providing you with a seamless and enriching trading experience. Our team of experts is committed to continuous improvement and innovation, ensuring that our platform remains at the forefront of trading technology. We value your feedback and are always open to suggestions on how we can enhance our services to better meet your needs. Join Unfluke today and unlock the full potential of your trading journey. Empower yourself with the tools, knowledge, and support you need to achieve your financial goals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What's new Featured Course */}
    </div>
  );
};

export default AboutUs;
