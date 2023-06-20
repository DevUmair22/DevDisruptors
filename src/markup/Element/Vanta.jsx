import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'

const Vanta = () => {
	const [vantaEffect, setVantaEffect] = useState(0)
	const vantaRef = useRef(null)

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					size: 1.2,
					color: 0x11b5eb,
					color2: 0x1b1313,
					backgroundColor: 0xe6e6e6,
				})
			)
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy()
		}
	}, [vantaEffect])
	return (
		<div
			className="container-fluid py-5"
			style={{ backgroundColor: '#e6e6e6' }}
		>
			<div className="container">
				{' '}
				<div
					ref={vantaRef}
					className="row align-items-center justify-content-center m-auto py-5"
					style={{ top: '17px' }}
				>
					<div className="col-lg-6 col-md-6 col-sm-12 px-4">
						<h3 className="mt-5 py-2 text-bold " style={{ color: '#6dbe14' }}>
							Empowering Businesses Through Technology
						</h3>
						<p className=" mx-auto text-justify text-black">
							DevDisruptors believes in excellence, innovation, and passion for
							creating the best software development solutions for our global
							client base.
						</p>
					</div>
					<div className="col-lg-6 col-md-6 col-sm-12 px-4"></div>
				</div>
			</div>
		</div>
	)
}

export default Vanta
