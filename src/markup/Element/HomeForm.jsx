import emailjs from '@emailjs/browser'
import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import React, { useRef } from 'react'
import { NotificationManager } from 'react-notifications'

const HomeForm = () => {
	const theme = useTheme()
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'))
	const isMidScreen = useMediaQuery(theme.breakpoints.down('lg'))
	const isLargeScreen = useMediaQuery(theme.breakpoints.down('xl'))

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
			{isLargeScreen ? console.log('large') : console.log('notLarge')}
			<div
				className="container "
				style={{
					zIndex: 8,

					top: isSmallScreen
						? '0rem'
						: '50% ' || isMidScreen
						? '50%'
						: '5rem' || isLargeScreen
						? '50%'
						: '5rem',
					left: isSmallScreen
						? '0%'
						: '0rem ' || isMidScreen
						? '4%'
						: '0%' || isLargeScreen
						? '25%'
						: '0rem',
					position: 'absolute',
					// top: isSmallScreen
					// 	? '0rem'
					// 	: '0.5rem' || isLargeScreen
					// 	? '0.5rem'
					// 	: '0.5rem',
				}}

				// 	backgroundColor: 'black',
				//
				// 	left: isSmallScreen ? '1rem' : '3rem'|| isLargeScreen?'3rem' : '3rem',
				// }}
			>
				{/* <form className="row g-3">
					<div className="col-4">
						<div className="row">
							<label for="name" className="form-label">
								FullName
							</label>
							<input
								type="text"
								placeholder="Enter your name here.."
								className="form-control"
								id="name"
							/>
						</div>
					</div>
					<div className="col-5">
						<label for="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							placeholder="Enter your email here.."
						/>
					</div>
					<div className="col-3">
						<button type="submit" className="btn btn-primary mb-3">
							Send
						</button>
					</div>
				</form> */}
				<form
					className="inquiry-form dzForm row py-3 px-6"
					style={{
						borderRadius: '1rem',
						backgroundColor: 'white',
						border: '1px solid white',

						justifyContent: 'center',
						width: '80%',
						zIndex: '6',
						margin: '0 auto 0 auto',
						textAlign: 'center',
						alignItems: 'center',
					}}
					ref={form}
					onSubmit={sendEmail}
				>
					<h4 className="box-title col-12 p-0 text-center ">
						Let's Convert Your Idea into Reality{' '}
					</h4>

					<div className="row align-items-center mx-auto">
						<div className="row align-items-center mx-auto">
							<div className="col-lg-4">
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
							<div className="col-lg-4">
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
							<div className="col-lg-4">
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
											placeholder="Email"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-12 px-0 mx-auto">
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
				</form>
			</div>
		</>
	)
}

export default HomeForm
