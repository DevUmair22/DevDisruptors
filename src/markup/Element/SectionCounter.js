import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Counter from './Counter';

// import bg1 from './../../images/background/bg1.png'; style = {{ backgroundImage: "url(" + bg1 + ")" }}

const iconBlog = [
	{ icon: <i className="flaticon-pen" />, title: 'Planning', para: "We believe planning is of utmost importance in starting any development endeavor. We use modern mockup and planning tools to get a blueprint before starting development." },
	{ icon: <i className="flaticon-diamond" />, title: 'Creativity', para: "We gather the best of our creative minds together to come up with the finest creative solutions with the intersection of ideas of working in different businesses and industries." },
	{ icon: <i className="flaticon-devices" />, title: 'Automation', para: "We automate the boring DevOps processes so that the developers and client could focus to work together in designing the best possible solution for the users." },
];

class SectionCounter extends Component {
	render() {
		return (
			<Fragment>
				<div className="section-full content-inner-1 overlay-primary about-service bg-img-fix mt-5" >

					<div className="container">
						<div className="section-head text-white text-center">
							<h3 className="box-title m-tb0 max-w800 m-auto pt-4 text-capitalize">Our services are further enhanced and augmented due to our core values and strategic acumen
								<span className="bg-primary"></span></h3>
							{/* <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p> */}
						</div>
					</div>
					<div className="container" >
						<div className="row text-white" >
							{iconBlog.map((item, index) => (
								<div className="col-lg-4 col-md-4 col-sm-6 m-b30" key={index} >
									<div className="icon-bx-wraper bx-style-1 p-a30 center" style={{ height: "25em" }}>
										<div className="icon-lg text-white m-b20">
											<Link to={"#"} className="icon-cell text-white">{item.icon}</Link>
										</div>
										<div className="icon-content">
											<h5 className="dlab-tilte text-uppercase">{item.title}</h5>
											<p>{item.para}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="choses-info text-white">
						<Counter />
					</div>
				</div>
			</Fragment>
		)
	}
}
export default SectionCounter;