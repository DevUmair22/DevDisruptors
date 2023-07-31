import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import icon from './../../images/new-icons/arrow-right-white.svg'
import { serviceData } from './data'

const Servicee = () => {
	return (
		<div className="container m-auto ">
			<div className="row justify-content-center align-items-center py-2">
				<div className="row content-box h-100">
					{serviceData.map((service) => (
						<div
							className="col-lg-6 col-sm-12 col-md-12 col-xl-4 mt-3"
							// style={{ borderRadius: '1rem', height: '30rem' }}
						>
							<div
								className="content-right h-100 d-flex flex-column justify-content-between"
								style={{
									boxShadow: '0.5px 0.5px 10px 0.5px #B3BCC7',
									padding: '45px 25px',
									borderRadius: '0.3rem',
								}}
							>
								<div>
									<div className="d-flex ">
										<div
											style={{
												marginRight: '12px',
												marginBottom: '0px',
											}}
										>
											{service.headicon}
										</div>
										{service.name === 'Web Development' ? (
											<h4 className="m-0">
												Web
												<br />
												Development
											</h4>
										) : (
											<h4 className="mt-auto">{service.name}</h4>
										)}
									</div>
									{service.service.map((item) => (
										<ul className="list-unstyled mt-4">
											<li>
												<a href="./">
													{item.icon}
													{item.title}
												</a>
											</li>
										</ul>
									))}
								</div>
								<div className="pt-1">
									<label class="mb-0 read-more-btn mt-4 mt-md-2 mt-lg-4">
									<Link	to={`/services/${service.routes}`} className="text-white ml-1">
											Read more
											<img
												alt="arrow"
												src={icon}
												className="ml-1"
												width="20px"
											/>
										</Link>
									</label>
								</div>
							</div>
							{/* <div
								className="col-12 bg-black text-white"
								style={{ height: '15%' }}
							>
								<div className="row align-items-center justify-content-evenly pr-2">
									<span
										className="icon-md col-2 px-1"
										style={{ color: '#6dbe14' }}
									>
										{service.headicon}
									</span>
									<h5 className="col-10 text-center">{service.name}</h5>
								</div>
							</div>
							<div
								style={{
									height: '85%',
									backgroundColor: '#F8FEF9',
									borderRadius: '0.5rem',
								}}
								className=" col-12 p-4 "
							>
								{service.service.map((item) => (
									<div
										className="text-black row py-1 px-4 justify-content-start align-items-start"
										style={{ height: '3rem' }}
									>
										<span className="px-2">{item.icon}</span>
										<p style={{ fontSize: '1.2rem', fontWeight: 600 }}>
											{item.title}
										</p>
									</div>
								))}
								<button
									className="mx-3 col-10 align-items-center pr-0 pl-2 pt-2 pb-2 "
									style={{
										backgroundColor: '#6dbe14',
										border: 'none',
										borderRadius: '10px',
										color: 'white',
										maxHeight: '70%',
									}}
								>
									<div className=" row align-items-center justify-content-center ">
										{' '}
										<div
											className="col-8 "
											style={{ fontSize: '1rem', fontWeight: 'bolder' }}
										>
											Read More
										</div>{' '}
										<HiArrowLongRight
											className="col-4 p-0"
											style={{ fontSize: '2rem' }}
										/>
									</div>
								</button>
							</div> */}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Servicee
