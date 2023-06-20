import React, { Component } from 'react';
import Footer2 from '../../Element/Footer';
import HomeForm from "./../../Element/HomeForm";
import SectionCounter from './../../Element/SectionCounter';
import Footer from "./../../Layout/Footer1";
import Header from './../../Layout/Header1';
import { data } from "./ServiceContent";
//Images
const iconBlog = [
    {
        icon: <i className="flaticon-diamond" />,
        title: 'Passion',
        para: 'Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.',
    },
    {
        icon: <i className="flaticon-pen" />,
        title: 'Innovation',
        para: 'Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.',
    },
    {
        icon: <i className="flaticon-diamond" />,
        title: 'Collaboration',
        para: 'Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.',
    },
    {
        icon: <i className="flaticon-devices" />,
        title: 'Customization',
        para: 'Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.',
    },
    {
        icon: <i className="flaticon-devices" />,
        title: 'Customization',
        para: 'Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.',
    },
    {
        icon: <i className="flaticon-devices" />,
        title: 'Customization',
        para: 'Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.',
    },
]

const iconBox = [
    { icon: <i className="flaticon-devices" />, id: 1, title: 'Our Python Development Services', description: <p>  </p>, routes: `./services-details?id=1` },
    { icon: <i className="flaticon-notebook" />, id: 2, title: 'Our Node.JS Development Services', description: <p> </p>, routes: `./services-details?id=2` },
    {
        icon: <i className="flaticon-pen" />, id: 3, title: 'Our React.js Development Services', description:
            <p>
            </p>, routes: `./services-details?id=3`
    },
    {
        icon: <i className="flaticon-bar-chart" />, id: 4, title: 'Our Vue.JS Development Services.', description: <p>
        </p>, routes: `./services-details?id=4`
    },
    {
        icon: <i className="flaticon-file" />, id: 5, title: 'Our PHP Development Services.', description:
            <p> </p>, routes: `./services-details?id=5`
    },


    { icon: <i className="flaticon-devices" />, id: 6, title: 'Our Angular Development Services', description: <p></p>, routes: `./services-details?id=6` },
];

class Service extends Component {


    // ServiceData = data.filter((item) => item.title === products)[0];
    // console.log(ServiceData);



    render() {
        const testing = window.location.search
        const urlparam = new URLSearchParams(testing)
        const products = urlparam.get('id')
        console.log(products)
        const title = "Our Services"
        const para = "DevDisruptors is a well reputed development company providing expertise in Python development to ensure seamless performance of web applications."
        return (
            <>
                <Header />

                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    {/* <div className="dlab-bnr-inr overlay-primary" style={{ backgroundImage: "url(" + bnr5 + ")", height: "30vh" }}>

                    </div> */}
                    {/* <!-- inner page banner END --> */}
                    <div className="content-block pt-1">
                        {/* <!-- About Us --> */}
                        <div className="section-full content-inner ">

                            <div
                                className="section-full content-inner-1 overlay-primary-dark about-service pb-5 pt-5 "
                                style={{
                                    backgroundImage:
                                        'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)',
                                }}
                            >
                                <div className="container">
                                    <div className="section-head text-white text-center">
                                        <h2 className="box-title mx-auto max-w800 text-capitalize pt-4">
                                            Our Services
                                            <p style={{ fontWeight: "400" }}>DevDisruptors is a well reputed software development company providing expertise Web development to ensure seamless performance of web applications.</p>
                                        </h2>

                                    </div>
                                </div>
                                <div className="container">
                                    <div className="row text-white">

                                        {data.map((item, i) => (
                                            <>
                                                {item.id == products ? (
                                                    <>
                                                        {item.data.length === 4 ? (
                                                            item.data.map((itemm) => (

                                                                < div className="col-lg-3 col-md-6 col-sm-6 " key={i} >
                                                                    <div
                                                                        className="icon-bx-wraper bx-style-1 p-a30 center mb-sm-5 mb-sm-4 "
                                                                    // style={{ minHeight: '29rem' }}
                                                                    >
                                                                        {/* <div className="icon-lg text-white ">{item.icon}</div> */}
                                                                        <div className="icon-content">
                                                                            <h5
                                                                                className="dlab-tilte text-uppercase"
                                                                                style={{ color: '#6dbe14' }}
                                                                            >
                                                                                {itemm.title}
                                                                            </h5>
                                                                            <p>{itemm.description}</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        ) : (item.data.map((itemm) => (

                                                            < div className="col-lg-4 col-md-6 col-sm-6 " key={i} >
                                                                <div
                                                                    className="icon-bx-wraper bx-style-1 p-a30 center mb-sm-5 mb-sm-4 "
                                                                // style={{ minHeight: '29rem' }}
                                                                >
                                                                    {/* <div className="icon-lg text-white ">{item.icon}</div> */}
                                                                    <div className="icon-content">
                                                                        <h5
                                                                            className="dlab-tilte text-uppercase"
                                                                            style={{ color: '#6dbe14' }}
                                                                        >
                                                                            {itemm.title}
                                                                        </h5>
                                                                        <p>{itemm.description}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )))}  </>
                                                ) : (
                                                    <></>
                                                )}
                                            </>
                                        ))}

                                    </div>
                                </div>
                            </div>

                            {/* <div className="container">
                                <div className="row ">
                                    {iconBox.map((data, index) => (
                                        <div className="col-md-4 col-sm-6 m-b30 " key={index}>
                                            <div className="icon-bx-wraper expertise  bx-style-1 p-a30 shadow-lg center " style={{ backgroundColor: "#3A3A3A", color: "white" }}>
                                                <div className="icon-lg m-b20 ">
                                                    <Link to={"#"} className="icon-cell" style={{ color: "#6dbe14" }}>{data.icon}</Link>
                                                </div>
                                                <div className="icon-content text-white">
                                                    <Link to={data.routes}> <h5 className="dlab-tilte text-uppercase "  >{data.title}</h5></Link>
                                                    <div> {data?.description}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                        {/* <!-- Our Services --> */}
                        {/* <!-- Why Chose Us --> */}
                        <SectionCounter />

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
                        <div style={{ height: "20vh", marginBottom: "5rem" }}>
                            <HomeForm />
                        </div>
                        <div
                            className="section-full overlay-primary-dark bg-img-fix "
                            style={{
                                backgroundImage:
                                    'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)', zIndex: 5, paddingTop: "10rem"

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
                    {/* <!-- contact area END --> */}
                </div>

            </>
        )
    }
}
export default Service;