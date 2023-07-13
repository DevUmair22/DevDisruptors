import React from 'react'
import pic4 from './../../images/about/pic4.jpg'

const About = () => {
	return (
		<div className="container py-5 d-flex flex-wrap">
			<div className="row">
				<div className="col-sm-12 col-lg-6 col-md-6">
					<img src={pic4} alt="" className="rounded" />
				</div>
				<div className="col-sm-12 col-lg-6 col-md-6">
					<div className="mx-auto">
						<h2 className="my-1 text-3xl">What We Do</h2>
						<h6 className="my-0 py-0">
							Customized solutions that provide value to your business
						</h6>
					</div>

					<div className="mx-auto text-justify py-3 text-medium">
						<p>
							We design and develop digital solutions for both mobile and web
							platforms, ERPs, CRMs, e-commerce, QA testing, and user interface
							design. Our team has developed B2B and B2C apps with solutions
							based on high volumes of data and artificial intelligence in
							industries as diverse as financial services, telecommunications,
							e-commerce, healthcare, and retail.
						</p>
						<p style={{ color: '#212529' }}>
							We are a team of experienced professionals committed to exceeding
							client expectations, streamlining operations, boosting
							productivity, and fostering business growth. This highly dedicated
							team welcomes new challenges everyday.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
