import React, { Component } from 'react';
import box7 from '../../../images/portfolio/data1.jpg';
import box11 from '../../../images/portfolio/herbi.jpg';
import box1 from '../../../images/portfolio/img1.jpg';
import box3 from '../../../images/portfolio/img2-1.jpg';
import box12 from '../../../images/portfolio/meriksolutions1.jpg';
import box15 from '../../../images/portfolio/meriksolutions_10.jpg';
import box16 from '../../../images/portfolio/meriksolutions_11.jpg';
import box18 from '../../../images/portfolio/meriksolutions_13.jpg';
import box19 from '../../../images/portfolio/meriksolutions_14.jpg';
import box21 from '../../../images/portfolio/meriksolutions_16.jpg';
import box13 from '../../../images/portfolio/meriksolutions_8.jpg';
import box14 from '../../../images/portfolio/meriksolutions_9.jpg';
import box5 from '../../../images/portfolio/NCRI.jpg';
import box9 from '../../../images/portfolio/pharmaa.jpg';
import FormStyle from '../../Element/FormStyle';
import Footer from '../../Layout/Footer1';
import Header from '../../Layout/Header1';
// import { useParams } from 'react-router-dom';
// import box20 from '../../../images/portfolio/meriksolutions_15.jpg';
// import box17 from '../../../images/portfolio/meriksolutions_12.jpg';
//Images
import bg1 from './../../../images/background/bg1.png';
import bnr5 from './../../../images/banner/bnr2.jpg';

const iconBox = [
    { icon: <i className="flaticon-devices" />, title: 'AUDIO / VIDEO CALLING APPLICATION', onclick: "checked1", href: "#1", image: box1 },
    { icon: <i className="flaticon-notebook" />, title: 'RESIDENTIAL APARTMENTS BOOKING WEBSITE', onclick: "checked2", href: "#1", image: box3 },
    {
        icon: <i className="flaticon-pen" />, title: 'DEBT COLLECTION SOFTWARE FOR AGENCIES', onclick: "checked3", href: "#1", image: box5
    },
    {
        icon: <i className="flaticon-bar-chart" />,
        title: 'DATA MINING & SENTIMENT ANALYSIS',
        onclick: "checked4",
        href: "#1",
        image: box7
    },
    // {
    //     icon: <i className="flaticon-file" />, title: 'HEALTH FACILITIES MANAGEMENT SYSTEM', onclick: "checked5", href: "#1", image: box9
    // },

    // 	{icon: <i className="flaticon-team" />, title:'We create efficient scalable  real time applications',description:<p>
    //    Within a span of 15 years “xyz” has emerged as one of the leading companies teaming the expert and experienced angular developers. With the undaunted skills and the unmatched assistance our team of 30+ strong and dedicated angular developers we have developed 50+ portals and websites for 20+ clients. We support clients from all over the world including USA, UK, Australia, France, and New Zealand.
    //    .<br />We offer AngularJS development services that cover the range from e-commerce and marketplaces to music and video streaming apps, to social apps development. Whether you need a custom widget or an interactive dashboard, our AngularJS development services can tailor to your needs.
    //    <br/> </p> },
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked6", href: "#1", image: box11 },
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked7", href: "#1", image: box12 },
    // { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked8", href: "#1", image: box17 },
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked9", href: "#1", image: box13 },
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked10", href: "#1", image: box14 },
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked11", href: "#1", image: box16 },
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked12", href: "#1", image: box15 },
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked13", href: "#1", image: box18 },
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked14", href: "#1", image: box19 },
    // { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked15", href: "#1", image: box20},
    { icon: <i className="flaticon-devices" />, title: 'E-COMMERCE WEBSITE FOR HERBS PROVIDERSS', onclick: "checked16", href: "#1", image: box21 },
];

class Service2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: "",

        };
    }


    render() {
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr5 + ")" }}>
                        {/* <PageTitle motherMenu='Our Portfolio' activeMenu='Our Portfolio' /> */}
                    </div>
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block">
                        {/* <!-- about Us --> */}
                        <div className="section-full content-inner">
                            <div className="container py-2">
                                <div className="section-head text-black text-center">
                                    <h4 className="text-gray-dark m-b10" style={{ fontWeight: "normal" }}>OUR  PORTFOLIO </h4>
                                    <h2 className='box-title mtb0'>
                                        <p>
                                            DevDisruptors has served clients from multiple industries to achieve their business objectives through the use of technology.

                                        </p>
                                        <span className='bg-primary'></span></h2>

                                </div>
                            </div>
                            {/* <div className="container">
                                <div className="row ">
                                    {iconBox.map((data, index) => (
                                        <div className="col-md-4 col-sm-6 m-b30 " key={index}>
                                            <div  className="icon-bx-wraper expertise   center dlab-media   dlab-img-effect"  onClick={() => {
                                                this.setState({ checked: data.onclick });
                                                window.location.href = data.href
                                            }}>
                                                <img src={data.image} style={{ height: "20vh", width: "41vh", cursor: "pointer" }} alt="" />

                                            
                                            </div>
                                        
                                        </div>

                                    ))}
                                </div>
                            </div> */}

                            <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                                <div className="col-md-12 col-sm-12 m-b30 " id={3}>
                                    <div className="row ">

                                        <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                            <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>
                                                <div className='row' style={{ margin: "0 0 0 2vh " }}>
                                                    <div className="col-md-4 col-sm-4 m-t10" >
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Python</div>

                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Redis</div>

                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >REST_API</div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Django</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >RxJS</div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Angular</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Celery</div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                                <div className="col-md-12 col-sm-12 "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>


                                                    With our highly skilled team of web developers, we designed a customized solution for a group of agencies to easily collect debt payments for their clients (banks).

                                                    <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Our front-end developers used Angular to develop a reasonably customized and complex UI/UX to a pixel-perfect detail.

                                                        The application's back-end was written in Python, and we deployed various data transformation and storage techniques/tools to deal with the high volume of data flow.</p></p>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="col-md-6 col-sm-6 m-t30">
                                            <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Debt Collection Software for Agencies</h4><p style={{ textAlign: "center" }}>Web Development</p></div>
                                            <img src={box5} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                        </div>
                                    </div>




                                </div></div>
                            <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                                <div className="col-md-12 col-sm-12 m-b30 " >
                                    <div className="row ">
                                        <div className="col-md-6 col-sm-6 m-t30">
                                            <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Video/Audio Calling Application</h4><p style={{ textAlign: "center" }}>Ring a Doctor</p></div>
                                            <img src={box1} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                        </div>
                                        <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                            <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology </h5></div>
                                                <div className='row ' style={{ margin: "0 0 0 2vh " }}>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        {/* <ul style={{ listStyle: "none", textAlign: "left", padding: "0 0 0 1vh" }}> */}


                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >React</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Twilio</div>

                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Bootstrap</div>
                                                        {/* </ul> */}
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 m-t10" >
                                                        {/* <ul style={{ listStyle: "none", textAlign: "left", padding: "0 0 0 1vh" }}> */}
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >WebRTC</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Node.js</div>

                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Stripe</div>
                                                        {/* </ul> */}
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        {/*<ul style={{ listStyle: "none", textAlign: "left", padding: "0 0 0 1vh" }}> */}
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >ExpressJs</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15'>REST API</div>
                                                        {/* </ul> */}
                                                    </div></div>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                                <div className="col-md-12 col-sm-12  "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>
                                                    We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls and share medical records securely back and forth.

                                                    We had integrated multiple payment methods into the application, so that doctors could collect a small fee based on the number and duration of calls.<p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Our developers designed the Front-end with React, and the back-end was written with NodeJS.</p></p>
                                                </div>
                                            </div>



                                        </div>
                                    </div>




                                </div>	</div>
                            <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                                <div className="col-md-12 col-sm-12 m-b30 " id={2}>
                                    <div className="row ">

                                        <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                            <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>
                                                <div className='row' style={{ margin: "0 0 0 2vh " }}>
                                                    <div className="col-md-4 col-sm-4 m-t10 ">

                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >React</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Google Tag</div>


                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GraphQL</div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Webpack</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >API Integration</div>




                                                    </div>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Lodash</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Google Analytics</div>



                                                    </div></div>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                                <div className="col-md-12 col-sm-12  "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>

                                                    Our responsibilities were to build the site from scratch using the latest web technologies like React, GraphQL, and Prismic CMS.

                                                    Multiple third-party APIs for maps, analytics, and tag management were integrated in this application.
                                                    <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Our designers designed the front-end using Figma and interacted with the client to develop an appealing UI/UX experience.
                                                        Our Back-end Developers set up Prismic CMS and exposed GraphQL endpoints for better management of data flow between client and server.</p></p>
                                                </div>
                                            </div>



                                        </div>
                                        <div className="col-md-6 col-sm-6 m-t30">
                                            <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Residential Apartments Booking Website</h4><p style={{ textAlign: "center" }}>Amli.com</p></div>
                                            <img src={box3} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                        </div>
                                    </div>




                                </div></div>

                            {/* <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                                	<div className="col-md-12 col-sm-12 m-b30 " id={4}> */}
                            {/* <div className="row ">
                                        
                                        <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color:"#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}> */}



                            {/* <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 1vh" }}>Technology</h5></div>
                                                <div className="col-md-6 col-sm-6 "><ul style={{ listStyle: "none", textAlign: "left", padding: "0 0 0 2vh" }}>
                                                    <div className='col-lg-12 col-md-12 col-sm-12' style={{padding:"0",margin:"0"}} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Model Tuning</div>
                                                    <div   className='col-lg-12 col-md-12 col-sm-12'style={{padding:"0",margin:"0"}} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Machine Learning</div>
                                                    <div   className='col-lg-12 col-md-12 col-sm-12'style={{padding:"0",margin:"0"}} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Sklearn</div>
                                                    <div  className='col-lg-12 col-md-12 col-sm-12'style={{padding:"0",margin:"0"}}  ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Fastai</div>
                                                 <div   className='col-lg-12 col-md-12 col-sm-12'style={{padding:"0",margin:"0"}} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Finetuned Neural Network</div>
                                                    </ul></div>
                                                <div className="col-md-6 col-sm-6 "><ul style={{ listStyle: "none", textAlign: "left", padding: "0 0 0 2vh" }}>
                                                <div  className='col-lg-12 col-md-12 col-sm-12'style={{padding:"0",margin:"0"}}  ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Data Mining</div>
                                                <div  className='col-lg-12 col-md-12 col-sm-12'style={{padding:"0",margin:"0"}}  ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Deep Learning</div>
                                                <div  className='col-lg-12 col-md-12 col-sm-12' style={{padding:"0",margin:"0"}} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>AWD_LSTM </div>
                                                <div  className='col-lg-12 col-md-12 col-sm-12' style={{padding:"0",margin:"0"}} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Classification</div>
                                                <div  className='col-lg-12 col-md-12 col-sm-12' style={{padding:"0",margin:"0"}} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#6dbe45" class="bi bi-check m-t10" viewBox="0 -2 13 13">
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg>Sentiment Analysis</div>
                                                </ul></div>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh" }}>Overview</h5></div>
                                                <div className="col-md-12 col-sm-12  "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>
                                                    We have provided Machine Learning services to one of the best educational institute of Asia. We helped out in classification of data, Predictive data mining & Sentiment Analysis.

                                                    <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Achieved Accuracy; 74%</p></p>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 1vh" }}>Technology</h5></div>
                                                <div className="col-md-6 col-sm-6 "><ul style={{ listStyle: "none", textAlign: "left", padding: "0 0 0 2vh" }}>
                                                    <div className=' col-lg-4 col-md-4 col-sm-4 capsule ' >Model Tuning</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Machine Learning</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Sklearn</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Fastai</div>
                                                 <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Finetuned Neural Network</div>
                                                    </ul></div>
                                                <div className="col-md-6 col-sm-6 "><ul style={{ listStyle: "none", textAlign: "left", padding: "0 0 0 2vh" }}>
                                                <div className='col-lg-4 col-md-4 col-sm-4 capsule ' >Data Mining</div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Deep Learning</div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >AWD_LSTM </div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Classification</div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Sentiment Analysis</div>
                                                </ul></div>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh" }}>Overview</h5></div>
                                                <div className="col-md-12 col-sm-12  "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>
                                                    We have provided Machine Learning services to one of the best educational institute of Asia. We helped out in classification of data, Predictive data mining & Sentiment Analysis.

                                                    <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Achieved Accuracy; 74%</p></p>
                                                </div>
                                            </div>
                                        <div className="col-md-6 col-sm-6 m-t30">
                                            <div style={{ textAlign: "center" }}>
                                                <h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Data Mining & Sentiment Analysis</h4>
                                                <p style={{ textAlign: "center" }}>Data Analysis & Testing</p>
                                            </div>
                                            <img src={box7} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight:"auto",width:"inherit", borderRadius: "3vh",display:"block" }} />

                                        </div>
                        </div>*/}




                            {/* </div></div>   */}
                            <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                                <div className="col-md-12 col-sm-12 m-b30 " id={5}>
                                    <div className="row ">
                                        <div className="col-md-6 col-sm-6 m-t30">
                                            <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Health Facilities Management System</h4><p style={{ textAlign: "center" }}>Web & Mobile Design</p></div>
                                            <img src={box9} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                        </div>
                                        <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                            <div className='row'>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>
                                                <div className='row' style={{ margin: "0 0 0 2vh " }}>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >React  </div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >React Native</div>

                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >RESTful Architecture</div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 m-t10 ">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Python</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Django</div>



                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >.NET Framework</div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Redis</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Celery</div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >RESTful API</div>
                                                    </div>
                                                </div>
                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                                <div className="col-md-12 col-sm-12 "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>




                                                    We designed a multi-platform health facilities management system for one of our clients, having 150+ health facilities under administration.
                                                    The system was composed of many application components including a website dashboard, a desktop application, and an android application.

                                                    <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Our developers designed the website with React, desktop application with .NET, and the mobile application with React Native. Back-end was a micro-services based RESTful API architecture built with Python.</p></p>
                                                </div>
                                            </div>



                                        </div>
                                    </div>




                                </div></div>
                            {/* <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}> */}
                            {/* <div className="col-md-12 col-sm-12 m-b30 " id={6}> */}
                            {/* <div className="row "> */}

                            {/* <div className="col-md-6 col-sm-6 m-t30" style={{ backgroundColor: "#1e1e1e", color:"#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                                <div className='row'>
                                                    <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh" }}>Technology</h5></div>
                                                    <div className='row' style={{margin:"0 0 0 2vh "  }} >
                                                    <div className="col-md-4 col-sm-4 m-t10 ">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >React </div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >RESTful API</div>
                                                  
                                                        
                                                    
                                                        </div>
                                                        <div className="col-md-4 col-sm-4 m-t10">
                                                        <div className=' col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Ecommerce </div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >MySQL</div>
                                                       
                                                            </div>
                                                    <div className="col-md-4 col-sm-4 m-t10">
                                                        <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Node.js</div>
                                                        <div className=' col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Responsiveness</div>
                                                        
                                                        </div>
                                                          </div></div>
                                                        <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 0" }}>Overview</h5></div>
                                                    <div className="col-md-12 col-sm-12  "><p style={{ textAlign: "left", padding: "0 " }}>


                                                        We have developed e-commerce website for one of the largest and most famous herbs provider warehouse.
                                                        We have developed and integrated various third party solutions for warehouse, retail, and shipping management system.
                                                        <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Our developers designed the Front-end with React, and the back-end was written with NodeJS.</p></p>
                                                    </div>
                                                </div> */}




                            {/* <div className="col-md-6 col-sm-6 m-t30">
                                                <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>E-commerce Website For Herbs Providers
                                                </h4><p style={{ textAlign: "center" }}>E-commerce Development</p></div>
                                                <img src={box11} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight:"auto",width:"inherit", borderRadius: "3vh",display:"block" }} />

                                                 </div> */}
                            {/* </div> */}
                            {/* </div> */}




                            {/* </div> */}
                        </div>
                        <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                            <div className="col-md-12 col-sm-12 m-b30 " id={7}>
                                <div className="row ">

                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>


                                        <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>
                                        <div className='row' style={{ margin: "0 0 0 2vh " }}>


                                            <div className="col-md-4 col-sm-4 m-t10">
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >React </div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GraphQL</div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Redux </div>
                                            </div>
                                            <div className="col-md-4 col-sm-4 m-t10">

                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Git</div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>


                                            </div>
                                            <div className="col-md-4 col-sm-4 m-t10">
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >ReactBootstrap</div>


                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >RESTful API</div>

                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 0", color: "#e5e1e1" }}>Overview</h5></div>

                                            <div className="col-md-12 col-sm-12  "><p style={{ textAlign: "left", padding: "0 " }}>


                                                Our responsibility was to develop the fully functioning web application for a marketplace of airplane,spare parts and accessories.
                                                We had implemented multiple payement methods so that it would be reliable and increasing usability.We have built it  using Github for Continuous integration and development.<p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Our development team developed the
                                                    front end using Reactjs,Next Js and Django framework .<br />Back-end Developers set up and exposed GraphQL endpoints for better management of data flow between client and server.</p></p>
                                            </div>
                                        </div>




                                    </div>
                                    <div className="col-md-6 col-sm-6 m-t30">
                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Marketplace for Airplanes
                                        </h4><p style={{ textAlign: "center" }}>E-commerce Development</p></div>
                                        <img src={box12} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                    </div>
                                </div>




                            </div>
                        </div>
                        {/* <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                                            <div className="col-md-12 col-sm-12 m-b30 " id={8}>
                                                <div className="row ">
                                                    
                                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color:"#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                                        <div className='row'>
                                                        <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh" }}>Technology</h5></div>
                                                        <div className='row' style={{margin:"0 0 0 2vh "  }}>
                                                       
                                                   
                                                       <div className="col-md-4 col-sm-4 m-t10">
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >ReactJS </div>
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Redux</div>
                                                          
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Django</div>
                                                           </div>
                                                           <div className="col-md-4 col-sm-4 m-t10">
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 '> NextJS </div>
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GIT</div>
                                                          
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Figma</div>
                                                           </div>
                                                           <div className="col-md-4 col-sm-4 m-t10">
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >AdobeXD </div>
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>
                                                          
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >RestAPI</div>
                                                           </div>

                                                           </div>

                                                                <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh" }}>Overview</h5></div>
                                                            <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 2vh 0 2vh" }}>

                                                                Our responsibility was to develop interactive and engaging front end from scratch for an e-commerce web application
                                                                selling printed mugs. Complete front end involved  reactjs, nextjs, redux, django and more. We have built it  using Github for Continuous integration and development.
                                                                <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Our development team  designed and developed the front end using AdobeXD,Reactjs,Next Js and Django framework to get a flick of tasty layout.</p></p>
                                                            </div></div>

                                                    </div>
                                                    <div className="col-md-6 col-sm-6 m-t30">
                                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>E-commerce Website For Mug Providers
                                                        </h4><p style={{ textAlign: "center" }}>E-commerce Development</p></div>
                                                        <img src={box17} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight:"auto",width:"inherit", borderRadius: "3vh",display:"block" }} />

                                                    </div>
                                                </div>




                                            </div></div>  */}
                        <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                            <div className="col-md-12 col-sm-12 m-b30 " id={9}>
                                <div className="row ">
                                    <div className="col-md-6 col-sm-6 m-t30">
                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Marketplace for Diners and Restaurants
                                        </h4><p style={{ textAlign: "center" }}>E-commerce Development</p></div>
                                        <img src={box13} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                    </div>
                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>

                                            <div className='row' style={{ margin: "0 0 0 2vh " }}>


                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >ReactJS </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >ExpressJS</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >NodeJS </div>

                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 '> NextJS </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GIT</div>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >MongoDB</div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >ReactBootstrap</div>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>


                                                </div>

                                            </div>

                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                            <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 2vh 0 2vh" }}>


                                                We have developed a highly interactive, reliable, and maintainable full fledged marketplace for listing of local diners and restaurants
                                                for one of our most recurring client. It includes chat and calling widgets along with different payement options for both end users and clients.
                                                It took us a whole year until deployement to complete this masterpiece.
                                                <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Our developers developed frontend using reactJs,react bootstrap, NextJs, and jquery.
                                                    Backend includes NodeJS, ExpressJS, MongoDB and we deployed various data transformation
                                                    and storage techniques/tools to deal with the high volume of data flow.</p></p>
                                            </div>
                                        </div>



                                    </div>
                                </div>




                            </div></div> <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                            <div className="col-md-12 col-sm-12 m-b30 " id={10}>
                                <div className="row ">

                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>


                                            <div className='row' style={{ margin: "0 0 0 2vh " }}>


                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >HTML </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >SCSS</div>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Bootstrap</div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 '> JavaScript </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GIT</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>

                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Python</div>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >DynamoDB</div>


                                                </div>

                                            </div>

                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                            <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 2vh 0 2vh" }}>


                                                We have induldged our best efforts to develop and deploy a web application for a solar panel selling organization having a prestigious name in the solar industry. Which have increased its chances of getting more leads than ever.
                                                It includes a chatting widget and a CMS along different login schemas for user and the admin.
                                                <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Front end was developed using HTML, SCSS, Bootstrap, Javascript and  JQuery.
                                                    Backend includes Python and dynamoDB.</p></p>
                                            </div>
                                        </div> </div>


                                    <div className="col-md-6 col-sm-6 m-t30">
                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>WebApp for Solar Panel Company
                                        </h4><p style={{ textAlign: "center" }}>Dynamic Websites</p></div>
                                        <img src={box14} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                    </div>
                                </div>




                            </div></div> <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                            <div className="col-md-12 col-sm-12 m-b30 " id={11}>
                                <div className="row ">
                                    <div className="col-md-6 col-sm-6 m-t30">
                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Tour Planner
                                        </h4><p style={{ textAlign: "center" }}>Booking WebApp</p></div>
                                        <img src={box16} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                    </div>
                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>

                                            <div className='row' style={{ margin: "0 0 0 2vh " }}>


                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >ReactJs </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >SCSS</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Laravel</div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GIT</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >NextJs</div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 '> ReactBootstrap </div>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >SQL</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >PHP</div>


                                                </div>

                                            </div>


                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                            <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>


                                                One of our client wanted us to make a trip booking web appliction to allow people book their trips to heavenly lakes, and valleys of northern Pakistan internationally.
                                                Different trip organizers are previleged to add their pricing and accomodation details.
                                                Our responsibility was to follow the design and built it from scratch.  <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Front End was designed in ReactJs,React Bootstrap, JQuery and SCSS. Backend was developed in PHP using Laravel and SQL.</p></p>
                                            </div>
                                        </div>



                                    </div>
                                </div>




                            </div></div> <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                            <div className="col-md-12 col-sm-12 m-b30 " id={12}>
                                <div className="row ">

                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>

                                            <div className='row' style={{ margin: "0 0 0 2vh " }}>


                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >HTML </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >CSS</div>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Bootstrap</div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 '> JavaScript </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GIT</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>

                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Python</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >JQuery</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >DynamoDB</div>


                                                </div>

                                            </div>

                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                            <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>


                                                We have induldged our best efforts to develop and deploy a web application for a solar panel selling organization having a prestigious name in the solar industry. Which have increased its chances of getting more leads than ever.
                                                It includes a chatting widget and a CMS along different login schemas for user and the admin.
                                                <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Front end was developed using HTML, SCSS, Bootstrap, Javascript and  JQuery.
                                                    Backend includes Python and dynamoDB.</p></p>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="col-md-6 col-sm-6 m-t30">
                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Web Services Provider
                                        </h4><p style={{ textAlign: "center" }}>Dynamic Websites</p></div>
                                        <img src={box15} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                    </div>
                                </div>




                            </div></div> <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                            <div className="col-md-12 col-sm-12 m-b30 " id={13}>
                                <div className="row ">
                                    <div className="col-md-6 col-sm-6 m-t30">
                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Blockchain Organization
                                        </h4><p style={{ textAlign: "center" }}>Static Website</p></div>
                                        <img src={box18} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                    </div>
                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>

                                            <div className='row' style={{ margin: "0 0 0 2vh " }}>


                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >ReactJS </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >SCSS</div>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >ReactBootstrap</div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 m-l15'> Redux </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 m-l15' >GIT</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 m-l15' >GitHub</div>

                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Python</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Rest API</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Django</div>


                                                </div>

                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                            <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>
                                                We have got a chance to work with a proficient blockchain development agency to build a highly interactive
                                                and engaging web application for them to unlock more possibilities for the organization.Our role was to re-develop
                                                the front end for the legacy system they have been using since a decade.
                                                <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Frontend was developed using ReactJs, React Bootstrap,Redux and Django.
                                                </p></p>
                                            </div>
                                        </div>



                                    </div>
                                </div>




                            </div></div> <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                            <div className="col-md-12 col-sm-12 m-b30 " id={14}>
                                <div className="row ">

                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                        <div className='row'>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>

                                            <div className='row' style={{ margin: "0 0 0 2vh " }}>


                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >HTML </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >CSS</div>

                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Bootstrap</div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 '> JavaScript </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GIT</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>

                                                </div>
                                                <div className="col-md-4 col-sm-4 m-t10">
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >PHP</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Laravel</div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >SQL</div>


                                                </div>

                                            </div>
                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div>
                                            <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>


                                                We have developed a blogging website for a newspaper company to unlock more possibilities and to allow
                                                them to go beyond limits by creating their presence over the virtual world and to expand their horizons.
                                                The web app was able to communicate between client and the host for daily updates.
                                                <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Frontend was developed using HTML, CSS, Bootstrap and Backend was developed using PHP, Laravel and SQL.
                                                </p></p>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="col-md-6 col-sm-6 m-t30">
                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>News and Blogging
                                        </h4><p style={{ textAlign: "center" }}>Dynamic Websites</p></div>
                                        <img src={box19} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                    </div>
                                </div>




                            </div></div>
                        {/* <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>
                                                            <div className="col-md-12 col-sm-12 m-b30 " id={15}>
                                                                <div className="row ">
                                                                    <div className="col-md-6 col-sm-6 m-t30">
                                                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>News and Blogging
                                                                        </h4><p style={{ textAlign: "center" }}>Dynamic Websites</p></div>
                                                                        <img src={box20} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight:"auto",width:"inherit", borderRadius: "3vh",display:"block" }} />

                                                                    </div>
                                                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color:"#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>

                                                                        
                                                                        <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh" }}>Technology</h5></div>

                                                                        <div className='row' style={{margin:"0 0 0 2vh "  }}>
                                                       
                                                   
                                                       <div className="col-md-4 col-sm-4 m-t10">
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >HTML </div>
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >CSS</div>
                                                          
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GIT</div>
                                                           </div>
                                                           <div className="col-md-4 col-sm-4 m-t10">
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 '> AngularJS</div>
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >ng-Bootstrap</div>
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>
                                                           
                                                           </div>
                                                           <div className="col-md-4 col-sm-4 m-t10">
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >NodeJS</div>
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >ExpressJS</div>
                                                           <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >MongoDB</div>
                                                          
                                                    
                                                           </div>

                                                           </div>

                                                                           
                                                                            <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh" }}>Overview</h5></div>
                                                                            <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>


                                                                            Our responsibility was to develop a web application for a news channel to show case their updates and to deliver
 their services over the internet. It wasn't just helping them to expand their boundries but to write and tell the world
 about some topic they may not be able to publish over the television. 
                                                                                <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Frontend was developed using AngularJS, HTML,
 CSS and ng-bootstrap. Backend was developed using mongoDB, node and expressJS.</p></p>
                                                                            </div>
                                                                        
                                                                        





                                                                    </div>
                                                                </div>




                                                            </div></div>  */}
                        <div className="container" id={1} style={{ backgroundColor: "rgba(240, 255, 240,0.2)", height: "auto", boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", borderRadius: "3vh" }}>


                            <div className="col-md-12 col-sm-12 m-b60 " id={16}>
                                <div className="row ">
                                    <div className="col-md-6 col-sm-6 m-t30 ">
                                        <div style={{ textAlign: "center" }}><h4 style={{ fontWeight: "bolder", textAlign: "center" }}>Dairy and Meat Vendor
                                        </h4><p style={{ textAlign: "center" }}>WebStore Application</p></div>
                                        <img src={box21} alt="" style={{ height: "inherit", marginLeft: "auto", marginRight: "auto", width: "inherit", borderRadius: "3vh", display: "block" }} />

                                    </div>
                                    <div className="col-md-6 col-sm-6 m-t50" style={{ backgroundColor: "#1e1e1e", color: "#e5e1e1", height: "auto", borderRadius: "3vh", boxShadow: "#6dbe45 -2px 1px 10px 0px", margin: "5vh 0 2vh 0" }}>


                                        <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "4vh 0 0 2vh", color: "#e5e1e1" }}>Technology</h5></div>

                                        <div className='row' style={{ margin: "0 0 0 2vh " }}>


                                            <div className="col-md-4 col-sm-4 m-t10">
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >ReactJS </div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Redux</div>

                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Git</div>
                                            </div>

                                            <div className="col-md-4 col-sm-4 m-t10">
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 ' >Python</div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >RestAPI</div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >MongoDB</div>


                                            </div>
                                            <div className="col-md-4 col-sm-4 m-t10">
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15 '> ReactBootstrap </div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >Tailwind CSS</div>
                                                <div className='col-lg-12 col-md-12 col-sm-12 capsule m-t15' >GitHub</div>

                                            </div>
                                        </div>



                                        <div className='col-lg-12 col-md-12 col-sm-12'><h5 style={{ textAlign: "left", padding: "3vh 0 0 2vh", color: "#e5e1e1" }}>Overview</h5></div> <div className="col-md-12 col-sm-12 m-t20 "><p style={{ textAlign: "left", padding: "0 0 0 2vh" }}>


                                            We have developed a complete web application for one of our client selling dairy and poultry products to expand their
                                            horizons from miami to the rest of the world. Our responsibility was to develop complete application with the most efficient technologies.
                                            <p style={{ paddingTop: "2vh", fontWeight: "bolder", color: "#6dbe45", textAlign: "center" }}>Front end was developed using ReactJs, React Bootstrap, Redux and Tailwind CSS. Backend was developed
                                                using mongoDB, Python and REST API's.</p></p>
                                        </div>










                                    </div>

                                </div>




                            </div></div>



                        {/* <!-- Our Services --> */}
                        {/* <!-- Why Chose Us --> */}
                        {/* <SectionCounter /> */}
                        {/* <!-- Why Chose Us End --> */}
                        {/* <div className="section-full content-inner-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="section-head text-center">
                                            <h2 className="box-title m-tb0">Our Pricing<span className="bg-primary"></span></h2>
                                            <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                        </div>
                                        <div className="section-content box-sort-in button-example">
                                            <div className="pricingtable-row">
                                                <div className="row max-w1000 m-auto">
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-rocket-ship"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Starter</h4>
                                                                    <span className="pricingtable-bx text-primary">$25</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <Link to={"#"} className="site-button outline outline-2 button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1 active">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-users"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Professional</h4>
                                                                    <span className="pricingtable-bx text-primary">$50</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20 m-b5">
                                                                    <Link to={"#"} className="site-button button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-12 col-md-4 col-lg-4 p-lr0">
                                                        <div className="pricingtable-wrapper style1">
                                                            <div className="pricingtable-inner">
                                                                <div className="pricingtable-price">
                                                                    <div className="pricingtable-icon"><i className="flaticon-bar-chart"></i></div>
                                                                    <h4 className="font-weight-300 m-t10 m-b0">Enterprise</h4>
                                                                    <span className="pricingtable-bx text-primary">$75</span> <span className="pricingtable-type">Par Month</span>
                                                                </div>
                                                                <ul className="pricingtable-features">
                                                                    <li><i className="fa fa-check text-primary"></i> Full Responsive </li>
                                                                    <li><i className="fa fa-check text-primary"></i> Multi color theme</li>
                                                                    <li><i className="fa fa-check text-primary"></i> With Bootstrap</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Easy to customize</li>
                                                                    <li><i className="fa fa-check text-primary"></i> Many Sortcodes</li>
                                                                </ul>
                                                                <div className="m-t20">
                                                                    <Link to={"#"} className="site-button outline outline-2 button-md">Sign Up</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- Testimonials --> */}
                        {/* <div className="section-full content-inner "   style={{ backgroundImage: "url(" + bgmap + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                            <div className="container">
                                <div className="section-head text-center">
                                    <h2 className="box-title m-tb0">Our Testimonials<span className="bg-primary"></span></h2>
                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                                </div>
                                <div className="section-content m-b30 ">
									<TestimonialCarousel /> 
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- Testimonials END --> */}
                        {/* <!-- Get in touch --> */}
                        <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                            <FormStyle />
                        </div>
                        {/* <!-- Get in touch --> */}
                    </div>
                    {/* <!-- contact area END --> */}
                </div>

                <Footer />
            </>
        )
    }
}
export default Service2;