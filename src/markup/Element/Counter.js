import React, { Component, Fragment } from 'react';
import CountUp from 'react-countup';

const counterBlog = [
	{ icon: <i className="ti-bag m-r10 " />, num: '8', title: 'Years of Experience', },
	{ icon: <i className="ti-user m-r10" />, num: '95', title: 'Satisfied Clients', },
	{ icon: <i className="flaticon-users m-r10" />, num: '200', title: 'Technical Experts', },
	{ icon: <i className="ti-mobile m-r10" />, num: '150', title: 'Apps Delivered', },
];

class Counter extends Component {
	render() {
		return (
			<Fragment>
				<div className="container-fluid overlay-primary-dark" style={{
					backgroundImage:
						'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)',
				}}>
					<div className="row choses-info-content " >
						{counterBlog.map((data, index) => (
							<div className="col-6 col-lg-3 col-md-3 col-sm-6 p-a30 text-white " style={{ zIndex: "200" }}>
								<h2 className="m-t0 m-b10 font-weight-400 font-45" >
									<span>{data.icon}</span>
									<span className="counter">
										<CountUp end={data.num} duration={4} />
									</span>+</h2>
								<h4 className="font-weight-300 m-t0">{data.title}</h4>
							</div>
						))}
					</div>
				</div>
			</Fragment>
		)
	}
}
export default Counter;