import React from 'react'
import flutter from '../../../images/new-icons/flutter.svg'
import node from '../../../images/new-icons/Node.svg'
import python from '../../../images/new-icons/Python.svg'
import react from '../../../images/new-icons/react-native.svg'
import box1 from '../../../images/portfolio/img1.jpg'
import box3 from '../../../images/portfolio/img2-1.jpg'
import box12 from '../../../images/portfolio/meriksolutions1.jpg'
import box15 from '../../../images/portfolio/meriksolutions_10.jpg'
import box16 from '../../../images/portfolio/meriksolutions_11.jpg'
import box18 from '../../../images/portfolio/meriksolutions_13.jpg'
import box19 from '../../../images/portfolio/meriksolutions_14.jpg'
import box21 from '../../../images/portfolio/meriksolutions_16.jpg'
import box13 from '../../../images/portfolio/meriksolutions_8.jpg'
import box14 from '../../../images/portfolio/meriksolutions_9.jpg'
import { projects } from '../../Element/data'
import Footer2 from '../../Element/Footer'
import ModalBox from '../../Element/ModalBox'
import Footer from '../../Layout/Footer1'
import Header from '../../Layout/Header1'
import bnr from './../../../images/about-us/banner.jpeg'
import PageTitle from './../../Layout/PageTitle'
const OurPortfolio = () => {
	const flipPort = [
		{
			image: box18,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls ',
		},
		{
			image: box19,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls.',
		},
		{
			image: box21,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls',
		},
		{
			image: box1,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls',
		},
		{
			image: box3,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls ',
		},
		// {
		// 	image: box5,
		// 	title: 'Ring a Doctor',
		// 	para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls and share medical records securely back and forth.We had integrated multiple payment methods into the application, so that doctors could collect a small fee based on the number and duration of calls.',
		// },
		// {
		// 	image: box9,
		// 	title: 'Ring a Doctor',
		// 	para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls and share medical records securely back and forth.We had integrated multiple payment methods into the application, so that doctors could collect a small fee based on the number and duration of calls.',
		// },
		// {
		// 	image: box7,
		// 	title: 'Ring a Doctor',
		// 	para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls and share medical records securely back and forth.We had integrated multiple payment methods into the application, so that doctors could collect a small fee based on the number and duration of calls.',
		// },
		{
			image: box12,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls .',
		},
		{
			image: box13,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls ',
		},
		{
			image: box14,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls ',
		},
		{
			image: box15,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls ',
		},
		{
			image: box16,
			title: 'Ring a Doctor',
			para: 'We built a VOIP-based mobile app for one of our clients to enable patients to communicate with doctors over audio/video calls ',
		},
	]

	return (
		<>
			<div className="page-wraper">
				<Header />
				<div
					className="dlab-bnr-inr overlay-primary text-center"
					style={{ backgroundImage: 'url(' + bnr + ')', height: '10vh' }}
				>
					<PageTitle motherMenu="Our Portfolio" />
					{/* activeMenu='about1 Us' */}
				</div>

				<div className="content-inner pro-client-review">
					<div className="container">
						{/* <div className="section-head title-bx text-center">
							<h2 style={{ color: '#313030f3' }}></h2>
						</div> */}

						<div className="row justify-content-center">
							{/* {flipPort.map((data, index) => ( */}
							{projects?.map((item, index) => (
								<>
									<div className="col-lg-4 col-md-8 col-sm-10 py-3">
										<div className="flip-bx testimonial-flip">
											<div className="front  ">
												<div className="inner ">
													{/* <div className=" ">
														<img
															src={data.image}
															alt=""
															width="400"
															height="300"
														/>
													</div> */}
													<div className="testimonial-detail">
														<h5 style={{ color: 'white' }}>{item.name}</h5>
													</div>
												</div>
											</div>
											<div className="back overlay-primary-dark">
												<div className="inner text-white">
													<p
														className="py-3"
														style={{ fontSize: '0.9rem', zIndex: 10 }}
													>
														{item.shortDescription}
													</p>
													<div className="row justify-content-center">
														<div className="row mx-auto">
															<div className="col-3 ">
																{' '}
																<img
																	src={item.image1}
																	className="mr-3"
																	alt="react"
																	width="30px"
																	height="30px"
																/>
															</div>{' '}
															<div className="col-3">
																{' '}
																<img
																	src={item.image2}
																	className="mr-3"
																	alt="react"
																	width="30px"
																	height="30px"
																/>
															</div>{' '}
															<div className="col-3">
																{' '}
																<img
																	src={item.image3}
																	className="mr-3"
																	alt="react"
																	width="30px"
																	height="30px"
																/>
															</div>{' '}
															<div className="col-3">
																{' '}
																<img
																	src={item.image4}
																	className="mr-3"
																	alt="react"
																	width="30px"
																	height="30px"
																/>
															</div>
														</div>
														<div className="row py-2">
															<ModalBox item={item} />
														</div>
													</div>
													{/* <div className="testimonial-detail">
													<strong className="testimonial-name">
														David Matin
													</strong>
													<span className="testimonial-position">Student</span>
												</div> */}
												</div>
											</div>
										</div>
									</div>
									<div></div>
								</>
							))}
							{/* // ))} */}
						</div>
					</div>
				</div>

				<div
					className="section-full overlay-primary-dark bg-img-fix mt-2"
					style={{
						backgroundImage:
							'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)',
						zIndex: 5,
					}}
				>
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
			</div>
		</>
	)
}

export default OurPortfolio
