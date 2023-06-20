import React from 'react'
const Card = () => {
	const allCards = [
		{
			icon: <i className="fa flaticon-devices" aria-hidden="true"></i>,
			title: 'Hello there!',
			desc: 'Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.',
		},
		{
			icon: <i className="fa flaticon-smartphone" aria-hidden="true"></i>,
			title: 'Hello there!',
			desc: 'Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.',
		},
		{
			icon: <i className="fa flaticon-shop" aria-hidden="true"></i>,
			title: 'Hello there!',
			desc: 'Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.',
		},
		{
			icon: <i className="fa flaticon-devices" aria-hidden="true"></i>,
			title: 'Hello there!',
			desc: 'Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.',
		},
		{
			icon: <i className="fa flaticon-shop" aria-hidden="true"></i>,
			title: 'Hello there!',
			desc: 'Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.',
		},
		{
			icon: <i className="fa flaticon-smartphone" aria-hidden="true"></i>,
			title: 'Hello there!',
			desc: 'Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.Trust yourself and keep going.',
		},
	]

	return (
		<>
			<div className="pt-0 container mx-auto row">
				{allCards.map((item, index) => (
					<div>
						<div className="ccontainer col-4" key={index}>
							<div className="ccard">
								<div className="slide slide1">
									<div className="content">
										<div className="icon">
											{item.icon}
											<h3>{item.title}</h3>
										</div>
									</div>
								</div>

								<div className="slide slide2">
									<div className="content">
										{/* <h3>{item.title}</h3> */}

										<p>{item.desc}</p>
									</div>
								</div>
							</div>
						</div>
						{/* <Card2 item={item} /> */}
					</div>
				))}
			</div>
		</>
	)
}

export default Card
