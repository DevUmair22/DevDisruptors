import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import { NotificationManager } from 'react-notifications'

const HeroSection = (props) => {
	const form = useRef()
	const sendEmail = (e) => {
		e.preventDefault()
		debugger

		emailjs
			.sendForm(
				'service_1qj3vwd',
				'template_igul9qr',
				form.current,
				'ZLeR-68dSKjSqONrJ'
			)
			.then(
				(result) => {
					console.log(result.text)
					NotificationManager.success('Email Send Successfully')
				},
				(error) => {
					console.log(error.text)
				}
			)
		e.target.reset()
	}

	return (
		<>
			<div className="row align-items-center justify-content-center m-auto py-4">
				<div
					className="col-lg-6 col-md-6 col-sm-12 m-auto px-4 "
					style={{
						top: '1.5rem',
						right: '2rem',
						position: 'relative',
					}}
				>
					{/* <form
						className="inquiry-form dzForm  px-4 py-4 row mt-5"
						style={{
							borderRadius: '1rem',
							backgroundColor: 'transparent',
							border: '1px solid white',
						}}
						ref={form}
						onSubmit={sendEmail}
					>
						<h4 className="box-title col-12 px-4 py-4 text-center ">
							Let's Convert Your Idea into Reality{' '}
						</h4>

						<div className="row align-items-center mx-auto">
							<div className="row row-cols-6 g-1">
								<div className="col">
									<div className=" form-group">
										<div className="input-group">
											<span className="input-group-addon bg-transparent ">
												<i className="ti-user "></i>
											</span>
											<input
												name="Name"
												type="text"
												required
												className="form-control bg-transparent "
												placeholder="First Name"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className=" form-group">
										<div className="input-group">
											<span className="input-group-addon bg-transparent ">
												<i className="ti-mobile"></i>
											</span>
											<input
												name="Name"
												type="text"
												required
												className="form-control bg-transparent "
												placeholder="Phone"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="row row-cols-6 g-1">
								<div className="col">
									<div className=" form-group">
										<div className="input-group">
											<span className="input-group-addon bg-transparent ">
												<i className="ti-email"></i>
											</span>
											<input
												name="Name"
												type="text"
												required
												className="form-control bg-transparent "
												placeholder="Your Email Id"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className=" form-group">
										<div className="input-group">
											<span className="input-group-addon bg-transparent ">
												<i className="ti-world"></i>
											</span>
											<input
												name="Name"
												type="text"
												required
												className="form-control bg-transparent "
												placeholder="Your Country"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-12 px-0">
								<div className=" form-group">
									<div className="input-group">
										<span className="input-group-addon bg-transparent">
											<i className="ti-agenda"></i>
										</span>
										<textarea
											name="Message"
											rows="2"
											className="form-control bg-transparent"
											required
											placeholder="Tell us about your project or idea"
										></textarea>
									</div>
								</div>
							</div>
							<div className="col-lg-2"></div>
							<div className="col-lg-8">
								{' '}
								<button
									name="submit"
									type="submit"
									value="Submit"
									className="site-button col"
									style={{ borderRadius: '10px' }}
								>
									{' '}
									<span className="text-lg">Get Quote!</span>{' '}
								</button>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</form> */}
					<div
						className="rounded"
						style={{
							height: '29rem',
							width: '100%',
							backgroundImage: `url(${props.aboutImg})`,
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
						}}
					></div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-12">
					{/* <h3 className="mt-5 py-2 text-bold " style={{ color: '#6dbe14' }}>
						Empowering Businesses Through Technology
					</h3>
					<p className=" mx-auto text-justify">
						DevDisruptors believes in excellence, innovation, and passion for
						creating the best software development solutions for our global
						client base.
					</p> */}
					<div
						className="abuot-box left row m-lr0 "
						style={{
							boxShadow: '#077F84  -2px 1px 10px 0px',
							textAlign: 'left',
						}}
					>
						<div className="col-lg-4">
							<h3 className="box-title m-tb0">
								About Us<span className="bg-primary"></span>
							</h3>
							{/* <h5 className="text-gray-dark">
								Solutions that make a difference
							</h5> */}
						</div>
						<div
							className="col-lg-8"
							style={{ textAlign: 'justify', color: '#212529' }}
						>
							<p>
								DevDisruptors believes in excellence, innovation, and passion
								for creating the best software development solutions for our
								global client base.
							</p>
							<p>
								Our services include design and development for both mobile and
								web platforms, ERPs, CRMs, e-commerce solutions, QA testing, and
								user interface design.
							</p>
							<p>
								{' '}
								We developed many B2B and B2C apps with solutions based on high
								volumes of data and artificial intelligence in industries as
								diverse as financial services, telecommunications, e-commerce,
								healthcare, and retail.
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* 2nd */}
			{/* <div className="row align-items-center justify-content-center m-auto py-4"> */}
			{/* <div className="col-lg-6 col-md-6 col-sm-12">
				<h3 className="mt-5 py-2 text-bold " style={{ color: '#6dbe14' }}>
						Empowering Businesses Through Technology
					</h3>
					<p className=" mx-auto text-justify">
						DevDisruptors believes in excellence, innovation, and passion for
						creating the best software development solutions for our global
						client base.
					</p>
				<div
					className="abuot-box left row m-lr0 "
					style={{
						boxShadow: '#6dbe45 -2px 1px 10px 0px',
						textAlign: 'left',
					}}
				>
					<div className="col-lg-4">
						<h3 className="box-title m-tb0">
							About Us<span className="bg-primary"></span>
						</h3>
						<h5 className="text-gray-dark">Solutions that make a difference</h5>
					</div>
					<div
						className="col-lg-8"
						style={{ textAlign: 'justify', color: '#212529' }}
					>
						<p>
							DevDisruptors believes in excellence, innovation, and passion for
							creating the best software development solutions for our global
							client base.
						</p>
						<p>
							Our services include design and development for both mobile and
							web platforms, ERPs, CRMs, e-commerce solutions, QA testing, and
							user interface design.
						</p>
						<p>
							{' '}
							We developed many B2B and B2C apps with solutions based on high
							volumes of data and artificial intelligence in industries as
							diverse as financial services, telecommunications, e-commerce,
							healthcare, and retail.
						</p>
					</div>
				</div>
			</div>
			<div
				className="col-lg-6 col-md-6 col-sm-12 m-auto px-4 "
				style={{
					top: '1.5rem',
					right: '2rem',
					position: 'relative',
				}}
			>
				{/* <form
						className="inquiry-form dzForm  px-4 py-4 row mt-5"
						style={{
							borderRadius: '1rem',
							backgroundColor: 'transparent',
							border: '1px solid white',
						}}
						ref={form}
						onSubmit={sendEmail}
					>
						<h4 className="box-title col-12 px-4 py-4 text-center ">
							Let's Convert Your Idea into Reality{' '}
						</h4>

						<div className="row align-items-center mx-auto">
							<div className="row row-cols-6 g-1">
								<div className="col">
									<div className=" form-group">
										<div className="input-group">
											<span className="input-group-addon bg-transparent ">
												<i className="ti-user "></i>
											</span>
											<input
												name="Name"
												type="text"
												required
												className="form-control bg-transparent "
												placeholder="First Name"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className=" form-group">
										<div className="input-group">
											<span className="input-group-addon bg-transparent ">
												<i className="ti-mobile"></i>
											</span>
											<input
												name="Name"
												type="text"
												required
												className="form-control bg-transparent "
												placeholder="Phone"
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="row row-cols-6 g-1">
								<div className="col">
									<div className=" form-group">
										<div className="input-group">
											<span className="input-group-addon bg-transparent ">
												<i className="ti-email"></i>
											</span>
											<input
												name="Name"
												type="text"
												required
												className="form-control bg-transparent "
												placeholder="Your Email Id"
											/>
										</div>
									</div>
								</div>
								<div className="col">
									<div className=" form-group">
										<div className="input-group">
											<span className="input-group-addon bg-transparent ">
												<i className="ti-world"></i>
											</span>
											<input
												name="Name"
												type="text"
												required
												className="form-control bg-transparent "
												placeholder="Your Country"
											/>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-12 px-0">
								<div className=" form-group">
									<div className="input-group">
										<span className="input-group-addon bg-transparent">
											<i className="ti-agenda"></i>
										</span>
										<textarea
											name="Message"
											rows="2"
											className="form-control bg-transparent"
											required
											placeholder="Tell us about your project or idea"
										></textarea>
									</div>
								</div>
							</div>
							<div className="col-lg-2"></div>
							<div className="col-lg-8">
								{' '}
								<button
									name="submit"
									type="submit"
									value="Submit"
									className="site-button col"
									style={{ borderRadius: '10px' }}
								>
									{' '}
									<span className="text-lg">Get Quote!</span>{' '}
								</button>
							</div>
							<div className="col-lg-2"></div>
						</div>
					</form> */}
			{/* <div
					className="rounded"
					style={{
						height: '29rem',
						width: '100%',
						backgroundImage: `url(${props.aboutImg})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
					}}
				></div>
			</div>  */}
			{/* </div> */}
		</>
	)
}

export default HeroSection
