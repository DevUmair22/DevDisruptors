import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Footer2 from '../Element/Footer';
import FormStyle2 from '../Element/FormStyle2';
import bgimg from './../../images/background/bg2.jpg';
import Footer from './../Layout/Footer1';
import Header from './../Layout/Header1';

class Contact extends Component {

    render() {
        return (
            <>
                <Header />
                <div className="full-section">
                    {/* <!-- inner page banner --> */}
                    <div className="dlab-bnr-inr overlay-primary-dark contact-page" style={{ backgroundImage: "url(" + bgimg + ")" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-xs-4">
                                    <div className="row text-white">
                                        <div className="col-lg-12 col-md-6 m-b30" >
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-location-pin"></i></span>
                                                        Company Address
                                                    </h5>
                                                    <p>DevDisruptors LLC,<br/>
563 High Street
Suite B PMB 1137
Burlington, NJ 08016<br/>
USA</p>
                                                    <h6 className="m-b15 font-weight-400"><i className="ti-alarm-clock"></i> Office Hours</h6>
                                                    <p className="m-b0">Mon To Sat - 08.00am-04.00pm(EST)</p>
                                                    <p>Sunday - Close</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-email"></i></span>
                                                        E-mail
                                                    </h5>
                                                    <p className="m-b0" onClick={()=>window.location.href='mailto:contact@devdisruptors.com'} style={{cursor:"pointer"}}>contact@devdisruptors.com</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-6 m-b30 ">
                                            <div className="icon-bx-wraper bx-style-1 p-a20 radius-sm">
                                                <div className="icon-content">
                                                    <h5 className="dlab-tilte">
                                                        <span className="icon-sm text-primary text-left"><i className="ti-mobile"></i></span>
                                                        Phone Number
                                                    </h5>
                                                    <p onClick={()=>window.location.href='tel:+00 0111-123456'} style={{cursor:"pointer"}}>+00 0111-123456</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-xs-8">
                                    {/* <form className="inquiry-form dzForm"  action="script/contact.php">
                                        <div className="dzFormMsg"></div>
                                        <h3 className="box-title m-t0 m-b10">Let's Convert Your Idea into Reality <span className="bg-primary"></span></h3>
                                        <p>Always feel free to contact us whether by call or sending an e-mail containing a short description of your project and we'll reach you out within 24 working hours.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-user text-primary"></i></span>
                                                        <input name="dzName" type="text" required className="form-control" placeholder="First Name" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
                                                        <input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-email text-primary"></i></span>
                                                        <input name="dzEmail" type="email" className="form-control" required placeholder="Your Email Id" />
                                                    </div>
                                                </div>
                                            </div>
                                          
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
                                                        <textarea name="dzMessage" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <div className="input-group">
                                                        <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
                                                        <input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button name="submit" type="submit" value="Submit" className="site-button button-lg" style={{borderRadius:"10px", marginLeft:"15em"}}> <span>Get A Free Quote!</span> </button>
                                            </div>
                                        </div>
                                    </form> */}
                                    <FormStyle2 />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- inner page banner END --> */}
                </div>

                <div
                    className="section-full overlay-primary-dark bg-img-fix"
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
            </>
        )
    }
}
export default Contact;