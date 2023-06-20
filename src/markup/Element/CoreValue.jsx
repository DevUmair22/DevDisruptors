const iconBlog = [
	{
		icon: <i className="flaticon-diamond" />,
		title: 'Passion',
		para: 'Passion is the driving force behind our impeccable IT services. Our team of highly skilled and passionate developers take pride in their work and strive for long-term success.',
	},
	{
		icon: <i className="flaticon-pen" />,
		title: 'Innovation',
		para: 'Innovation encourages ideas, challenges the norm, and causes disruption. We unite the best creative minds with experience from a wide range of business industries to develop first-rate solutions.',
	},
	{
		icon: <i className="flaticon-diamond" />,
		title: 'Collaboration',
		para: 'Collaboration is key to reaching a collective goal and sustaining healthy partnerships. We strive to create strong collaboration and understanding within team and extend this value to our global client base.',
	},
	{
		icon: <i className="flaticon-devices" />,
		title: 'Customization',
		para: 'Customization enables solutions that fit the needs of our diverse client base. We use modern mock-up and planning tools to create a blueprint that allows for maximum agility, efficiency, and productivity.',
	},
]

const CoreValue = (props) => {
	return (
		<>
			<div
				className="section-full content-inner-1 overlay-primary-dark about-service "
				style={{
					backgroundImage:
						'linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)',
				}}
			>
				<div className="container">
					<div className="section-head text-white text-center">
						<h2 className="box-title mx-auto max-w800 text-capitalize pt-4">
							{props.title}
						</h2>
						<p>{props.para}</p>
					</div>
				</div>
				<div className="container">
					<div className="row text-white">
						{iconBlog.map((item, index) => (
							<div className="col-lg-3 col-md-6 col-sm-6 my-1" key={index}>
								<div
									className="icon-bx-wraper bx-style-1 p-a30 center mb-sm-5 mb-sm-4 "
									// style={{ minHeight: '29rem' }}
								>
									<div className="icon-lg text-white ">{item.icon}</div>
									<div className="icon-content">
										<h5
											className="dlab-tilte text-uppercase"
											style={{ color: '#6dbe14' }}
										>
											{item.title}
										</h5>
										<p>{item.para}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	)
}

export default CoreValue
