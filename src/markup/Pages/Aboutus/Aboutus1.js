import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Footer2 from '../../Element/Footer';
import Footer from '../../Layout/Footer1';
import Header from '../../Layout/Header1';
import bnr from "./../../../images/about-us/banner.jpeg";
import bnr2 from './../../../images/background/bgg.png';
import PageTitle from "./../../Layout/PageTitle";
//Images
import Index4Tab from '../../Element/Index4Tab';
import about19 from './../../../images/about/pic9.jpg';
import bg2 from './../../../images/background/bg-map.jpg';

import services1 from './../../../images/our-services/pic1.jpg';
import services2 from './../../../images/our-services/pic2.jpg';
class aboutus extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    <div className="dlab-bnr-inr overlay-primary text-center" style={{ backgroundImage: "url(" + bnr + ")", height: '10vh' }}>
                        <PageTitle motherMenu='About Us' />
                        {/* activeMenu='about1 Us' */}
                    </div>
                    <div className="content-block">
                        <div className="section-full content-inner-2 py-5 mb-5" style={{ backgroundImage: "url(" + bnr2 + ")", backgroundRepeat: "repeat" }}>

                            <div className="container py-3" >
                                {/* <div className="section-head text-black text-center">

                                    <h2 className="box-title m-tb0">Solutions that make a difference<span className="bg-primary"></span></h2>
                                    <p>Our dedicated team welcomes new challenges everyday since we stepped in.</p>
                                </div> */}

                                <div className=" row dzseth  m-b30">
                                    <div className="col-lg-6 col-md-12 m-b30">

                                        <div
                                            className="rounded"
                                            style={{
                                                height: '29rem',
                                                width: '100%',
                                                backgroundImage: `url(${about19})`,
                                                backgroundPosition: 'center',
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        ></div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                                        <div className="dis-tbl-cell">
                                            <h2 className="box-title m-tb0">Solutions that make a difference<span className="bg-primary"></span></h2>
                                            <p>DevDisruptors believes in excellence, innovation, and passion
                                                for creating the best software development solutions for our
                                                global client base.</p>


                                            {/* style={{ textAlign: 'justify', color: '#212529' }} */}

                                            <p style={{ color: '#212529' }}>
                                                We are a team of experienced professionals committed to exceeding client expectations, streamlining operations, boosting productivity, and fostering business growth. This highly dedicated team welcomes new challenges everyday.
                                            </p>
                                            <p style={{ color: '#212529' }}>
                                                We specialize in leveraging cutting-edge technologies to create high-quality, scalable, and robust web applications that cater to the diverse needs of our clients. Our services include design and development for both mobile and
                                                web platforms, ERPs, CRMs, e-commerce solutions, QA testing, and
                                                user interface design.
                                            </p>
                                            <p style={{ color: '#212529' }}>
                                                {' '}
                                                Our team has developed many B2B and B2C apps with solutions based on high
                                                volumes of data and artificial intelligence in industries as
                                                diverse as financial services, telecommunications, e-commerce,
                                                healthcare, and retail.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* <div style={{ maxHeight: "50rem" }}>
                                    <HeroSection aboutImg={about19} />
                                </div> */}
                            </div>

                            {/* <div className="container">
                                <div className="row ">
                                    <div className="col-lg-5 col-md-4 about-img">
                                        <img src={about19} data-tilt alt="" />
                                    </div>
                                    <div className="col-lg-7 col-md-8" >
                                        <div className="abuot-box left row m-lr0 " style={{ boxShadow: "#6dbe45 -2px 1px 10px 0px", textAlign: "left" }}>
                                            <div className="col-lg-4">
                                                <h3 className="box-title m-tb0">About Us<span className="bg-primary"></span></h3>
                                                <h5 className="text-gray-dark">Solutions that make a difference</h5>
                                            </div>
                                            <div className="col-lg-8" style={{ textAlign: "justify", color: "#212529" }}>
                                                <p>
                                                    DevDisruptors believes in excellence, innovation, and passion for creating the best software development solutions for our global client base.




                                                </p>
                                                <p>Our services include design and development for both mobile and web platforms,
                                                    ERPs, CRMs, e-commerce solutions, QA testing, and user interface design.</p>
                                                <p> We developed many B2B and B2C apps with solutions based on high
                                                    volumes of data and artificial intelligence in industries as diverse as
                                                    financial services, telecommunications, e-commerce,
                                                    healthcare, and retail.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}

                            <div className="section-full content-inner-2 tab-bx br-top overlay-primary-dark">
                                <div className="container">
                                    <div className="">
                                        <Index4Tab />
                                    </div>
                                </div>
                            </div>

                        </div>
                        { /* Counetr section */}
                        {/* <SectionCounter /> */}
                        { /* Counetr section End*/}
                        <VisionBlog />

                        {/* <!-- Testimonials --> */}

                        {/* <!-- Testimonials END --> */}
                        <div
                            className="section-full overlay-primary-dark bg-img-fix mt-2"
                            style={{
                                backgroundImage:
                                    'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)', zIndex: 5
                            }}
                        >
                            {/* <FormStyle /> */}
                            <Footer2 />
                            <div className="row" >
                                <div
                                    className="col-lg-12 col-md-12 col-sm-12  "
                                    style={{ backgroundColor: '#6CC000', zIndex: 10 }}
                                >
                                    {' '}
                                </div>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>

            </>
        )
    }
}
function VisionBlog() {
    return (
        <>
            <div className="section-ful our-about-info content-inner-1 mb-5" style={{ backgroundImage: "url(" + bg2 + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="container" style={{ color: "#212529" }}>
                    {/* <div className="section-head text-center">
                        <h1 className="box-title m-tb0 ">Mission And Vision
                        </h1>
                        <br /><br />			</div> */}
                    <div className=" row dzseth  m-b30">
                        <div className="col-lg-6 col-md-12 m-b30 about-img ">
                            <img src={services1} data-tilt alt="" />
                        </div>
                        <div className="col-lg-6 col-md-12 m-b30 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h2 className="box-title">Mission</h2>
                                <p className="font-16"><b>Our Mission “Adding value to your business.” </b></p>
                                <p className="font-16">Our mission is to enable access to high-quality IT services for small start-ups to large firms at a reasonable cost. We strive to timely deliver the best quality product to the client with the most competitive price-to-quality ratio found in the industry.


                                </p>

                                <p className="font-16">         We believe that in today’s world, it is vital to develop technology-driven products and services and to digitize systems and processes to increase their efficiency and productivity. We will leverage the best technologies to help our clients excel in their businesses and in turn, accelerate the modernization of the global economy.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row dzseth column-reverse">
                        <div className="col-lg-6 col-md-12 dis-tbl text-justify">
                            <div className="dis-tbl-cell">
                                <h2 className="box-title">Vision<span className="bg-primary"></span></h2>
                                <p><b>Our Vision “Aim of giving back to the society.” </b></p>

                                <p className="font-16">
                                    Our vision is to be the leading IT services and solutions company
                                    enabling the modernization of the global economy. We want to
                                    be known in the industry as the most reliable, competent, and
                                    customer-friendly software service providers.



                                </p>
                                <p className="font-16">
                                    Our growth is firmly attached to the growth of our clients. We will exceed the expectations of our clients by creating best-in-class customized software solutions
                                    to address business problems and build strong partnerships.

                                </p>

                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 about-img ">
                            <img src={services2} data-tilt alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { VisionBlog };
export default aboutus;