import classnames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabContent, TabPane } from 'reactstrap';


import pic5 from "./../../images/about/pic5.jpg";
import pic6 from "./../../images/about/pic6.jpg";
import pic7 from "./../../images/about/pic7.jpg";
import pic8 from "./../../images/about/pic8.jpg";

const Index4Tab = () => {
	const [activeTab, setActiveTab] = useState('1');

	const toggle = (tab) => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	const dataArray = [
		{
			title: "Cost Effectiveness",
			headline: "Why Choose Us?",
			icons: <i className="ti-money"></i>,
			img: pic5,
			tabind: 1,
			para: "Our developers use innovation, automation, and proven project workflow methodologies to build cost-effective high-quality solutions.We adjust the complete lifecycle of the project based on the client's finalized resources and cost and use the latest technologies and techniques in DevOps and automated testing to effectively deliver a complete cost- efficient product."
		}, {
			title: "Technology Expertise",
			headline: "Why Choose Us?",
			icons: <i className="ti-crown"></i>,
			img: pic6,
			tabind: 2,
			para: "Our developers are experts in all the major technologies and platforms and have extensive multi-year experience working on and completing complex projects on time and within the budget.We have an intensively thorough selection process and grading method that we use to hire and retain the best talent in their field.We also provide access to various resources and learning material for our talent to assess and improve their expertise and help them upkeep with the continuously changing technological landscape.Throughout these years, we have accumulated domain- level expertise in designing technical solutions for companies of various sizes and businesses including healthcare, finance, e - commerce, entertainment, telecommunication, manufacturing, transport, and retail."
		}, {
			title: "Working Methodology",
			icons: <i className="ti-ruler-pencil"></i>,
			headline: "Why Choose Us?",
			img: pic7,
			tabind: 3,
			para: "We have mastered the implementation and integration of standardized processes to steer our development work. Our expertise in CI/CD and code workflow helps us in building robust automated mechanisms that prove valuable throughout the development and production lifecycles.We believe that there's no one size fits all methodology and we need to modify our processes based on the unique needs of each client. We use Agile, Waterfall, and a hybrid respectively as per the requirements of the clients and projects.With continuous tracking and feedback provisioning, the client has real- time control over the processes and could ask for modifications to further align the processes with the client's needs."
		}, {
			title: "Responsiveness",
			headline: "Why Choose Us?",
			icons: <i className="ti-dashboard"></i>,
			img: pic8,
			tabind: 4,
			para: "With daily standups and real-time communication channels established, clients could always check in to see the progress of the development underway. We use communication tools like Slack, Teams, Zoom, and Google Meet to enable the smoothest communication experience for our clients and teams.Progress of tasks and issues is tracked over Jira and clients can create new issues and tasks or reprioritize the old ones.Our developers responsively complete the tasks and keep the clients in the loop on the progress.Any hindrance or issue faced by the client in these processes would be catered to immediately by utilizing the client's feedback to modify the process accordingly."
		}
	]
	return (
		<>
			<div className="dez-tabs">
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

					<TabContent activeTab={activeTab}>
						{dataArray.map((data) => (
							<TabPane tabId={`${data.tabind}`}>
								<div className="tab-pane show fade">
									<div className="row">
										<div className="col-lg-8 m-b30">
											<div className="box">
												<h3 className="font-40">{data.headline}</h3>
												<p>{data.para}</p>
												{/* <Link to={"#"} className="site-button radius-xl button-md">Read More</Link> */}
											</div>
										</div>
										<div className="col-lg-4">
											<img src={data.img} className="radius-sm" alt="" />
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