import React from 'react'

const Card2 = ({ item }) => {

	return (
		<div className="section-full overlay-black-dark our-projects">
			<div className="container text-white">
				<div className="row m-lr0 d-flex align-items-stretch">
					{item?.map((itemm, index) => (
						<div
							className="col-lg-4 col-md-4 p-lr0 d-flex ind-ser-info-bx"
							key={index}
						>
							<div className="ind-service-info align-self-stretch">
								<span>01</span>

								<div className="ind-service-info-in">
									<h2>{itemm.title}</h2>
									<p>{itemm.desc}</p>
								</div>

								{/* <Link
								to={'#'}
								className="site-button btn-block d-flex justify-content-between white outline outline-2"
							>
								<span>Read More</span> <i className="ti-arrow-right"></i>
							</Link> */}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Card2
