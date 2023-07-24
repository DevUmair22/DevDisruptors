
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import React from "react";
import HomeForm from "../Element/HomeForm";
import Servicee from "../Element/Servicee";
import Vanta from "../Element/Vanta";
import bgimg2 from "./../../images/background/bg-map.jpg";
import About from "./../Element/About";
import CoreValue from "./../Element/CoreValue";
import Counter from "./../Element/Counter";
import Footer2 from "./../Element/Footer";
import Tech from "./../Element/Tech";
import Footer from "./../Layout/Footer1";
import Header from "./../Layout/Header1";
//Images

const Homepage = () => {


  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <div className="page-wraper">
      <Header />

      <div className="page-content">
        {/* Slider Banner */}
        {/* <div className="container-fluid py-5"> */}

        {/* <HeroSection /> */}
        <Vanta />





        {/*  Slider Banner */}

        <div className="content-block bg-white">
          {/* <!-- About Us --> */}
          <div className="choses-info" style={{ backgroundColor: "#0f1706" }}>
            <Counter />
          </div>

          <div className="py-2"><About /></div>


          <CoreValue title="Our Core Values" />
          {/* <Service /> */}
          <div className="col-lg-12 col-sm-12 col-md-12 align-items-center my-auto">
            <h2
              className="text-center pt-5"

            >
              Services Offered
            </h2>
          </div>
          <Servicee />
          <div
            className="section-full content-inner"
            style={{
              backgroundImage: "url(" + bgimg2 + ")",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* <div className="container">
                <div className="section-head text-center">
                  <h2 className="box-title m-tb0 pt-4">Our Testimonials<span className="bg-primary"></span></h2>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div>
                <div className="section-content m-b30 ">
                  <TestimonialCarousel />
                </div>
              </div> */}

          </div>
          <div className="py-5 container">
            <div className="section-head text-center mx-auto">
              <h2 className="box-title m-tb0">Technologies We Love Working With</h2>
              <p>
                Our pool of languages and frameworks used to provide you with the best solutions for your business needs.
              </p>
            </div>

            <Tech />
          </div>
          {/* <!-- About Us End --> */}
          {/* <!-- Our Services --> */}

          {/* <!-- Our Services --> */}
          {/* <!-- Why Chose Us --> */}
          {/* <div
              className="section-full content-inner-1 overlay-primary choseus-tabs bg-img-fix"
              style={{
                backgroundImage:
                  'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #6dbe14 75%)',
              }}
            >
              <div className="container">
                <div className="section-head text-white text-center">
                  <h2 className="box-title m-tb0">
                    Why Choose Us<span className="bg-primary"></span>
                  </h2>
                  <div style={{ textAlign: "justify" }}> <p>
                    We have a proven track record of great success stories and with our customer-centric
                    and client-first approach, we try to provide the best solutions considering the available
                    client resources.

                    {" "}
                  </p></div>
                </div>
              </div>
              <HomeTab />

            </div> */}
          {/* <!-- Why Chose Us End --> */}
          {/* <!-- Our Portfolio --> */}
          {/* <div className="section-full content-inner-1 mfp-gallery">
              <div className="container-fluid">
                <div className="section-head text-center">
                  <h4 className=" m-b10 text-3xl">Our Technology Stack</h4>

                  <p className=" m-tb0 font-weight-400" style={{ fontSize: "1.3rem" }} >Technologies we use to provide you with the best
                    solutions <br /> for your business problems</p>
                  <span className="bg-primary"></span>


                </div>
                <PortfolioCarousel />
              </div>
            </div> */}
          {/* <!-- Our Portfolio END --> */}
          {/* <!-- Testimonials --> */}
          {/* <div
              className="section-full content-inner"
              style={{
                backgroundImage: "url(" + bgimg2 + ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            </div> */}
          {/* <!-- Testimonials END --> */}

          {/* <!-- Get in touch --> */}
          <div style={{ height: "20vh", marginBottom: "5rem", position: "relative", }}>
            <HomeForm />
          </div>
          <div
            className="section-full overlay-primary-dark bg-img-fix "
            style={{
              backgroundImage:
                'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)', zIndex: 5, paddingTop: isSmallScreen ? "15rem" : "10rem"

            }}
          >

            {/* <FormStyle /> */}
            <Footer2 />
            <div className="row pt-4" >
              <div
                className="col-lg-12 col-md-12 col-sm-12  "
                style={{ backgroundColor: '#6CC000', zIndex: 10 }}
              >
                {' '}
              </div>
            </div>
            <Footer />
          </div>
          {/* <!-- Get in touch --> */}
        </div>
      </div>


    </div >
  );
}

export default Homepage;
