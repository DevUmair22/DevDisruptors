import React from 'react'

const Service = () => {
	const serviceArray = [
		{
			title: 'Dedicated Development Team',
			para: 'We’ll integrate a dedicated team of ELEKS software experts, allowing you to rapidly scale your development capabilities and deliver your project.',
			icon: '',
		},
		{
			title: 'Application Development',
			para: 'We’ll help you bring your most complex software vision to life with our leading full-cycle custom application development service.',
			icon: '',
		},
		{
			title: 'Mobile Apps',
			para: 'Leveraging mobility to bring business stability and visibility for you, we make your product next gen ready with the best of technology.',
			icon: '',
		},
		{
			title: 'E-Commerce',
			para: 'Make your business online market ready with our distinctive ecommerce web and app development solutions.',
			icon: '',
		},
		{
			title: 'Custom Software Development',
			para: 'We’ll help you bring your most complex software vision to life with our leading full-cycle custom application development service. ',
			icon: '',
		},
		{
			title: 'Project Management',
			para: 'We understand the science of enhancing user experience with a combination of human-centric approach and development ingenuity.',
			icon: '',
		},
		{
			title: 'Dev Ops',
			para: 'We understand the science of enhancing user experience with a combination of human-centric approach and development ingenuity.',
			icon: '',
		},
		{
			title: 'Quality Assurance',
			para: 'ELEKS’ custom-built quality assurance and testing services help you deliver a robust and UX-optimised product to market, up to 80% faster and 20% cheaper.',
			icon: '',
		},
	]
	return (
		<div className="bg-black text-white container-fluid flex-column flex-wrap align-items-center justify-center">
			<div className="justify-center container">
				<div className="col-12 text-3xl font-weight-700">Our Services</div>
				<p className="text-xl col-12 font-weight-600">
					Web Development Services
				</p>
				<p className="col-sm-12 text-wrap text-center ">
					Our web application development services include design, development,
					testing, technical support, and maintenance. Along with that, our
					experienced web app developers and technology consultants also help
					you in modernizing legacy architectures and migrating to new web
					architectures.{' '}
				</p>
			</div>

			<div
				className="container d-flex flex-wrap justify-center "
				style={{ columnGap: '0.5rem' }}
			>
				{serviceArray.map((service, index) => {
					return (
						<div
							className="col-lg-3 rounded-xl text-wrap text-black py-4 px-4 "
							key={index}
							style={{
								height: '15rem',
								backgroundColor: '#e8edea',
								marginBottom: '1rem',
							}}
						>
							<h5
								className="underline "
								style={{
									color: 'black',
									textUnderlineOffset: '3px',
									textDecoration: 'underline',
									textDecorationColor: '#6dbe14',
									textDecorationThickness: '2px',
								}}
							>
								{service.title}
							</h5>
							<span className=" px-2 tracking-tight text-center text-wrap">
								{service.para}
							</span>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Service
