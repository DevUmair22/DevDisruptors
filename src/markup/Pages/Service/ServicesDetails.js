import React, { Component } from 'react'
import Card from '../../Element/Card'
import Footer from './../../Layout/Footer1'
import Header from './../../Layout/Header1'
// import PageTitle from './../../Layout/PageTitle';
// import SectionCounter from './../../Element/SectionCounter';
// import TestimonialCarousel from './../../Element/TestimonialCarousel';
import Footer2 from '../../Element/Footer'
import HomeForm from '../../Element/HomeForm'
// import FormStyle from './../../Element/FormStyle';
import { data } from './ServiceContent'

//Images
import about from './../../../images/about/pic3.jpg'
import bnr1 from './../../../images/banner/bnr5.jpg'

const iconWraper = [
    { icon: <i className="flaticon-devices" />, title: 'Custom Applications' },
    { icon: <i className="flaticon-pen" />, title: 'Dynamic Website' },
    { icon: <i className="flaticon-layers" />, title: 'CMS Development' },
    // { icon: <i className="flaticon-shop" />, title: 'PHP based E-commerce' },
    { icon: <i className="flaticon-technology" />, title: 'CMS Development' },
    // { icon: <i className="flaticon-internet" />, title: 'Cloud (SaaS, PaaS)' },
]

// const titleBlog = [
//     { title1: 'PHP Web', title2: 'Portals' },
//     { title1: 'PHP Mobile', title2: 'Web Services' },
//     { title1: 'PHP Backend', title2: 'Solutions' },
//     { title1: 'Social Networking', title2: 'Development' },
//     { title1: 'PHP eCommerce', title2: 'Solution' },
//     { title1: 'PHP', title2: 'Frameworks' },
// ];

let ServiceData
var products
class ServicesDetails extends Component {
    componentDidMount() {
        const testing = window.location.search
        const urlparam = new URLSearchParams(testing)
        products = urlparam.get('id')
        console.log(products)
        // ServiceData = data.filter((item) => item.title === products)[0];
        // console.log(ServiceData);
        return ServiceData
    }

    render() {
        //    const{test} = this.props.location.state.test;/

        return (
            <>
                <Header />
                <div className="page-content bg-white">
                    {/* <!-- inner page banner --> */}
                    <div
                        className="dlab-bnr-inr overlay-primary"
                        style={{ backgroundImage: 'url(' + bnr1 + ')', height: '20vh' }}
                    >
                        {/* <PageTitle motherMenu='Our Services ' activeMenu='Our Services ' /> */}
                    </div>
                    {/* <!-- inner page banner END --> */}
                    {data.map((item, i) => (
                        <>
                            {item.id == products ? (
                                <>
                                    <div className="content-block">
                                        {/* <!-- About Us --> */}

                                        {/* <!-- Our Services --> */}

                                        <div className="section-full content-inner pb-5 pt-4">
                                            <div className="container">
                                                <div className="text-black text-center">
                                                    <h4 className="text-gray-dark m-b10">Services</h4>

                                                    <h2 className="box-title m-tb0">
                                                        {item.serviceTitle}
                                                    </h2>
                                                    <p className="px-5 pb-4">{item.serviceDescription}</p>
                                                </div>
                                            </div>

                                            <div className="container">
                                                <div className="row ">
                                                    {/* {titleBlog.map((data,index)=>( */}
                                                    {/* <div className="col-lg-4 col-md-6 col-sm-6 m-b30" key={index}> */}
                                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                                        <div
                                                            className="icon-bx-wraper expertise  bx-style-1 p-a30 center"
                                                            style={{
                                                                height: '100%',
                                                                boxShadow: '#32a852 -2px 1px 10px 0px',
                                                            }}
                                                        >
                                                            <div className="icon-content">
                                                                {/* <h4 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title1}	<br/>{data.title2}</Link></h4> */}
                                                                <h4 className="dlab-tilte text-uppercase">
                                                                    {' '}
                                                                    {item.serviceCardTitle1}{' '}
                                                                </h4>
                                                                <p>{item.serviceCardDes1}</p>
                                                                {/* <Link to={"#"} className="site-button radius-xl outline outline-2">Read Move</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                                        <div
                                                            className="icon-bx-wraper expertise  bx-style-1 p-a30 center"
                                                            style={{
                                                                height: '100%',
                                                                boxShadow: '#32a852 -2px 1px 10px 0px',
                                                            }}
                                                        >
                                                            <div className="icon-content">
                                                                {/* <h4 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title1}	<br/>{data.title2}</Link></h4> */}
                                                                <h4 className="dlab-tilte text-uppercase">
                                                                    {' '}
                                                                    {item.serviceCardTitle2}{' '}
                                                                </h4>
                                                                <p>{item.serviceCardDes2}</p>

                                                                {/* <Link to={"#"} className="site-button radius-xl outline outline-2">Read Move</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                                        <div
                                                            className="icon-bx-wraper expertise  bx-style-1 p-a30 center"
                                                            style={{
                                                                height: '100%',
                                                                boxShadow: '#32a852 -2px 1px 10px 0px',
                                                            }}
                                                        >
                                                            <div className="icon-content">
                                                                {/* <h4 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title1}	<br/>{data.title2}</Link></h4> */}
                                                                <h4 className="dlab-tilte text-uppercase">
                                                                    {' '}
                                                                    {item.serviceCardTitle3}{' '}
                                                                </h4>
                                                                <p>{item.serviceCardDes3}</p>

                                                                {/* <Link to={"#"} className="site-button radius-xl outline outline-2">Read Move</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                                        <div
                                                            className="icon-bx-wraper expertise  bx-style-1 p-a30 center"
                                                            style={{
                                                                height: '100%',
                                                                boxShadow: '#32a852 -2px 1px 10px 0px',
                                                            }}
                                                        >
                                                            <div className="icon-content">
                                                                {/* <h4 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title1}	<br/>{data.title2}</Link></h4> */}
                                                                <h4 className="dlab-tilte text-uppercase">
                                                                    {' '}
                                                                    {item.serviceCardTitle4}{' '}
                                                                </h4>
                                                                <p>{item.serviceCardDes4}</p>

                                                                {/* <Link to={"#"} className="site-button radius-xl outline outline-2">Read Move</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                                        <div
                                                            className="icon-bx-wraper expertise  bx-style-1 p-a30 center"
                                                            style={{
                                                                height: '100%',
                                                                boxShadow: '#32a852 -2px 1px 10px 0px',
                                                            }}
                                                        >
                                                            <div className="icon-content">
                                                                {/* <h4 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title1}	<br/>{data.title2}</Link></h4> */}
                                                                <h4 className="dlab-tilte text-uppercase">
                                                                    {' '}
                                                                    {item.serviceCardTitle5}{' '}
                                                                </h4>
                                                                <p>{item.serviceCardDes5}</p>
                                                                {/* <Link to={"#"} className="site-button radius-xl outline outline-2">Read Move</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-6 m-b30">
                                                        <div
                                                            className="icon-bx-wraper expertise  bx-style-1 p-a30 center"
                                                            style={{
                                                                height: '100%',
                                                                boxShadow: '#32a852 -2px 1px 10px 0px',
                                                            }}
                                                        >
                                                            <div className="icon-content">
                                                                {/* <h4 className="dlab-tilte text-uppercase"><Link to={"#"}>{data.title1}	<br/>{data.title2}</Link></h4> */}
                                                                <h4 className="dlab-tilte text-uppercase">
                                                                    {' '}
                                                                    {item.serviceCardTitle6}{' '}
                                                                </h4>
                                                                <p>{item.serviceCardDes6}</p>

                                                                {/* <Link to={"#"} className="site-button radius-xl outline outline-2">Read Move</Link> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* ))}                                     */}
                                                </div>
                                            </div>
                                            <div className="section-full content-inner exp-services">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="section-head text-black text-center pt-4">
                                                                {console.log(ServiceData, 'Testing')}

                                                                {/* <h4 className="text-gray-dark font-weight-500 m-b10">
                                                                {item.header} Technologies
                                                            </h4> */}
                                                                <h2 className="box-title m-tb0 px-5">
                                                                    {item.title}
                                                                </h2>
                                                                <p className="font-weight-300 font-18">
                                                                    {' '}
                                                                    {item.description1}{' '}
                                                                </p>
                                                                {/* <p className="font-weight-300 font-18">
                                                                    {' '}
                                                                    {item.description2}{' '}
                                                                </p>
                                                                <p className="font-weight-300 font-18">
                                                                    {' '}
                                                                    {item.description3}{' '}
                                                                </p> */}
                                                                <Card />
                                                                {/* <p className="font-weight-300 font-18">We offer AngularJS development services that cover the range from e-commerce and marketplaces to music and video streaming apps, to social apps development. Whether you need a custom widget or an interactive dashboard, our AngularJS development services can tailor to your needs.</p> */}
                                                            </div>
                                                            {/* <div className="row pt-4">
                                                            {iconWraper.map((data, index) => (
                                                                <div
                                                                    className="col-lg-3 col-md-3 col-sm-6 m-b30"
                                                                    key={index}
                                                                >
                                                                    <div className="icon-bx-wraper expertise  bx-style-1 p-lr10 p-tb20 center">
                                                                        <div
                                                                            className="icon-bx-sm bg-primary radius m-b20"
                                                                            style={{
                                                                                pointerEvents: 'none',
                                                                                background: '#6cc000',
                                                                            }}
                                                                        >
                                                                            <Link className="icon-cell">
                                                                                {data.icon}
                                                                            </Link>
                                                                        </div>
                                                                        <div className="icon-content">
                                                                            <h5
                                                                                className="dlab-tilte"
                                                                                style={{ pointerEvents: 'none' }}
                                                                            >
                                                                                <Link>{data.title}</Link>
                                                                            </h5>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Our Services --> */}
                                        {/* <!-- Why Chose Us --> */}
                                        {/* <SectionCounter /> */}
                                        {/* <!-- Why Chose Us End --> */}
                                        {/* <!-- Testimonials --> */}
                                        {/* <div className="section-full content-inner" style={{ backgroundImage: "url(" + bgmap + ")", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
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
                                        {/* <div className="section-full overlay-primary-dark bg-img-fix" style={{ backgroundImage: "url(" + bg1 + ")" }}>
                                    <FormStyle />
                                </div> */}
                                        {/* <!-- Get in touch --> */}
                                    </div>
                                </>
                            ) : (
                                <></>
                            )}
                        </>
                    ))}
                    {/* <!-- contact area END --> */}
                    {/* <!-- About Us --> */}
                    <div className="section-full">
                        <div className="container-fluid">
                            <div className="row dzseth">
                                <div className="col-lg-6 col-md-12 p-a0 img-fix">
                                    <img src={about} alt="" className="img-cover" />
                                </div>
                                <div className="col-lg-6 col-md-12 bg-black-light p-lr0 dis-tbl">
                                    <div className="p-a30 dis-tbl-cell ">
                                        <div className="max-w500 m-auto p-tb30">
                                            <div className="row">
                                                <div className="col-lg-12 text-white">
                                                    <h3 className="box-title m-b10">
                                                        How We Work
                                                        <span className="bg-primary"></span>
                                                    </h3>
                                                    <h5 className="m-b30">
                                                        By initiating your project with <b>DevDisruptors</b>
                                                        , you will get a competent resource backing you up
                                                        24/7. Our customer-focused processes have been
                                                        designed to reduce business operation costs, address
                                                        complex development challenges to offer a
                                                        competitive edge. We give due importance to all
                                                        stages of your project so that you get quality in a
                                                        timely and visible manner.
                                                    </h5>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 m-b30 chosesus-content">
                                                    <ul className="list-checked primary text-white">
                                                        <li>
                                                            <span>Client-centric Approach</span>
                                                        </li>
                                                        <li>
                                                            <span>Effective Collaboration</span>
                                                        </li>
                                                        <li>
                                                            <span>Quality Delivered in Time</span>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        Since our foundation in 2016, we have been committed
                                                        to the service of web app development. Our goal has
                                                        been to use digital technology to create
                                                        experiences. Over these years, we have developed
                                                        websites and web apps for small and larger companies
                                                        across a broad spectrum of industries.
                                                    </p>
                                                    {/* <p>
                                                        One crucial thing We got to know over
                                                        these years regarding how we see our
                                                        business is that our clients are not
                                                        simply looking for a service. Rather, they
                                                        are glancing for a station to increase
                                                        their engagement with their clients
                                                        directing a more significant amount of
                                                        company profits. Furthermore, we expanded
                                                        our services and today we wrap Website,
                                                        Web app, E-Commerce, ERP, CRM Development,
                                                        and more.
                                                    </p> */}
                                                    {/* <Link
                               to={"#"}
                               className="site-button radius-xl outline white"
                             >
                               Read More{" "}
                               <i className="fa fa-long-arrow-right"></i>
                             </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- About Us End --> */}
                </div>
                <div style={{ height: '30vh' }}>
                    <HomeForm />
                </div>
                <div
                    className="section-full overlay-primary-dark bg-img-fix pt-5"
                    style={{
                        backgroundImage:
                            'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)',
                        zIndex: 5,
                    }}
                >
                    <div style={{ height: '5rem' }}></div>
                    {/* <FormStyle /> */}
                    <Footer2 />
                    <div className="row">
                        <div
                            className="col-lg-12 col-md-12 col-sm-12  "
                            style={{ backgroundColor: '#6CC000', zIndex: 10 }}
                        >
                            {' '}
                        </div>
                    </div>
                    <Footer />
                </div>
                {/* <Footer /> */}
            </>
        )
    }
}
export default ServicesDetails
