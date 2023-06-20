import React from 'react'
import { Link } from 'react-router-dom'
const Footer2 = () => {
	return (
		<>
			<div className="container py-4">
				<div className="row">
					<div
						className="col-lg-5 col-md-5 content-inner chosesus-content text-white"
						style={{ textAlign: 'left' }}
					>
						<h2 className="box-title m-b15 ">Let's get in touch</h2>
						<p className="font-16 op8">
							Give us a call or drop by anytime, we endeavour to answer all
							enquiries within 24 hours on business days.
						</p>
						<div className="widget_getintuch">
							<div className="row py-2 px-2">
								<div className="col-2 icon-md ">
									<i className="ti-email"></i>
								</div>
								<div className="col-10 px-0">
									<strong>email</strong> <p>contact@devdisruptors.com</p>{' '}
								</div>
							</div>
							<div className="row py-2 px-2">
								<div className="col-2 icon-md ">
									<i className="ti-location-pin"></i>
								</div>
								<div className="col-10 px-0">
									<strong>address</strong> <p>08046 Willingboro, NewJersey</p>{' '}
								</div>
							</div>
							<div className="row px-2">
								<Link
									onClick={() => {
										window.open('http://www.google.com')
									}}
									className="site-button google-plus circle mx-2"
								>
									<i
										className="fa fa-google-plus text-white"
										style={{ position: 'sticky' }}
									></i>
								</Link>

								<Link
									onClick={() => {
										window.open('  https://www.linkedin.com')
									}}
									className="site-button linkedin circle mx-2 "
								>
									<i
										className="fa fa-linkedin text-white"
										style={{ position: 'sticky' }}
									></i>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-2"></div>
					<div
						className="col-lg-5 col-md-5 content-inner chosesus-content text-white"
						style={{ textAlign: 'left' }}
					>
						{' '}
						<h3 className="font-weight-500 m-b50 op6 ">
							By 35+ customers for 50+ Web and Mobile App development projects.
						</h3>
						<h4 className=""> What you will get:</h4>
						<ul className="list-checked primary ">
							<li>
								<span>Effective Collaboration </span>
							</li>
							<li>
								<span>On Time Delivery. </span>
							</li>
							<li>
								<span>Pretty and Reusable Source-code </span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer2
