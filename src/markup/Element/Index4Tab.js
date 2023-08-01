import classnames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane } from 'reactstrap';


import pic5 from "./../../images/about/pic5.svg";
import pic6 from "./../../images/about/pic6.svg";
import pic7 from "./../../images/about/pic7.svg";
import pic8 from "./../../images/about/pic8.svg";
import pic9 from "./../../images/about/pic9.svg";

const Index4Tab = () => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	const dataArray = [
		{
			title: "Quality | Time | Price",
			headline: "Why Choose Us?",
			icons: <i className="flaticon-business"></i>,
			img: pic5,
			tabind: 1,
			para: "Quality, time, and price (QTP) are interlinking factors that define the progress of a project. We balance these elements to deliver maximum value."
		}, {
			title: "Track Record",
			headline: "Why Choose Us?",
			icons: <i className="flaticon-tracking-map"></i>,
			img: pic6,
			tabind: 2,
			para: "Proven success with our global client base speaks volumes about our capabilities. Throughout these years, we have succeeded in designing technical solutions for companies of various sizes and businesses including healthcare, finance, e-commerce, entertainment, telecommunication, manufacturing, transport, and retail."
		}, {
			title: "Quality & Innovation",
			icons: <i className="flaticon-value"></i>,
			headline: "Why Choose Us?",
			img: pic7,
			tabind: 3,
			para: "We're not just about meeting expectations, but exceeding them. We use innovation, automation, and proven project workflow methodologies to build cost-effective high-quality solutions."
		}, {
			title: "Expert Team",
			headline: "Why Choose Us?",
			icons: <i className="flaticon-team"></i>,
			img: pic8,
			tabind: 4,
			para: "Our skilled professionals are dedicated to providing top-notch solutions. Each of our developers are experts in all the major technologies and platforms and have extensive multi-year experience working on and completing complex projects on time and within the budget."
		}
		, {
			title: "Tailored Solutions",
			headline: "Why Choose Us?",
			icons: <i className="flaticon-strategy"></i>,
			img: pic9,
			tabind: 5,
			para: "We believe each client is unique and deserves solutions customized to their specific needs. We adjust the complete lifecycle of the project based on the client's finalized resources and cost and use the latest technologies and techniques in DevOps and automated testing."
		}
	]
	return (
		<>
			<div className="dez-tabs" >
				<div className="m-auto text-center tab-market">
					<ul className="nav nav-tabs">
						{dataArray.map((data) => (
							<li>
								<Link to={"#"} className={classnames({ active: activeTab === `${data.tabind}` }) + ''} onClick={() => { toggle(`${data.tabind}`); }}>
									{data.icons}<span className="title-head">{data.title}</span>
								</Link>
							</li>
						))}

					</ul>
				</div>


				<div className="tab-content m-t50 text-white">

					<TabContent activeTab={activeTab} >
						{dataArray.map((data) => (
							<TabPane tabId={`${data.tabind}`}>
								<div className="tab-pane show fade">
									<div className="row">
										<div className="col-lg-8 m-b30" >
											<div className="box" style={{ width: "90%" }}>
												<h3 className="font-40">{data.headline}</h3>
												<p style={{ textAlign: "justify" }}>{data.para}</p>
												{/* <Link to={"#"} className="site-button radius-xl button-md">Read More</Link> */}
											</div>
										</div>
										<div className="col-lg-4" >
											<img src={data.img} className="radius-sm" alt="" style={{ width: "20rem", marginBottom: "1rem" }} />
										</div>
									</div>
								</div>
							</TabPane>))}
						{/* <TabPane tabId="2">
							<div id="web-development" className="tab-pane show fade">
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={about4} className="radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="box">
											<h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
											<Link to={"#"} className="site-button radius-xl button-md">Read More</Link>
										</div>
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tabId="3">
							<div id="mobile-app" className="tab-pane active show fade">
								<div className="row">
									<div className="col-lg-8 m-b30">
										<div className="box">
											<h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
											<Link to={"#"} className="site-button radius-xl button-md">Read More</Link>
										</div>
									</div>
									<div className="col-lg-4">
										<img src={about4} className="radius-sm" alt="" />
									</div>
								</div>
							</div>
						</TabPane>
						<TabPane tabId="4">
							<div id="internet-marketing" className="tab-pane show fade">
								<div className="row">
									<div className="col-lg-4 m-b30">
										<img src={about4} className="radius-sm" alt="" />
									</div>
									<div className="col-lg-8">
										<div className="box">
											<h3 className="font-40"><span className="font-weight-300">Make business with us</span> & become beautiful</h3>
											<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
											<Link to={"#"} className="site-button radius-xl button-md">Read More</Link>
										</div>
									</div>
								</div>
							</div>
						</TabPane> */}
					</TabContent>

				</div>

			</div>
		</>
	)
}

export default Index4Tab;