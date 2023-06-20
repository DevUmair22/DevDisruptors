import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import Slider3 from './../../images/main-slider/FBD.jpg';
import Slider1 from './../../images/main-slider/HDD.jpg';
import Slider2 from './../../images/main-slider/PDUI.jpg';


function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className="owl-next la la-angle-right" onClick={onClick} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className=" owl-prev la la-angle-left" onClick={onClick} style={{ zIndex: 1 }} />
		</div>
	);
}

class HomeOwlSlider extends Component {

	render() {
		var settings = {
			arrows: true,

			speed: 2000,
			autoplaySpeed: 9000,
			slidesToShow: 1,
			infinite: true,
			autoplay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,

					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 1,

					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,

					}
				}
			]
		};
		return (

			<Slider className="owl-slider owl-carousel owl-theme owl-none" {...settings}>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider1} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white" style={{ textAlign: "left" }}>
								<h2 className="text-white font-weight-400">Hire dedicated developers  <br /></h2>
								<p>Our team of highly-skilled developers is ready to become an intelligent extension of
									your company and help you boost your software development productivity by creating easy to maintain high-quality software products. </p>
								<Link to={"../contact"} className="site-button m-r10 outline outline-2 button-lg">Get Started</Link>
								{/* <Link to ={"#"} className="site-button outline outline-2 button-lg">How It Work</Link> */}
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider3} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white" style={{ textAlign: "left" }}>
								<h2 className="text-white font-weight-400">Frontend, Backend & Mobile Development Services <br /></h2>
								<p>We provide customized solutions for building reliable, scalable, and secure web and mobile services.
									We've honed our processes and implemented best development practices to build apps that match both the needs of our clients and the market demands. </p>
								<Link to={"../contact"} className="site-button m-r10 outline outline-2 button-lg">Get Started</Link>
								{/* <Link to ={"#"} className="site-button outline outline-2 button-lg">How It Work</Link> */}
							</div>
						</div>
					</div>
				</div>
				<div className="item slide-item">
					<div className="slide-item-img"><img src={Slider2} className="w-100" alt="" /></div>
					<div className="slide-content overlay-primary">
						<div className="slide-content-box container">
							<div className="max-w600 text-white" style={{ textAlign: "left" }}>
								<h2 className="text-white font-weight-400">Product Design (UI/UX)
								</h2>
								<p>We understand the importance of a delightful and pleasant digital experience for building apps that users love.
									Our designers and developers use various UI/UX design disciplines and Visual Elements interaction strategies to build modern digital
									products with a focus on user-centered design with usability and accessibility as priorities.</p>
								<Link to={"../contact"} className="site-button m-r10 outline outline-2 button-lg">Get Started</Link>
								{/* <Link to ={"#"} className="site-button outline outline-2 button-lg">How It Work</Link> */}
							</div>
						</div>
					</div>
				</div>
			</Slider>
		)

	}

}

export default HomeOwlSlider;