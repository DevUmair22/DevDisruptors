import React, { useEffect, useState } from 'react';
import 'react-modal-video/css/modal-video.min.css';
import useScrollPosition from "use-scroll-position";

import './css/plugins.css';
import './css/skin/skin-1.css';
import './css/style.css';
import './css/templete.css';
import Markup from './markup/Markup';
import './plugins/slick/slick-theme.min.css';
import './plugins/slick/slick.min.css';
// import ' three.r134.min.js';
// import 'vanta.globe.min.js'

// VANTA.GLOBE({
// 	el: "#your-element-selector",
// 	mouseControls: true,
// 	touchControls: true,
// 	gyroControls: false,
// 	minHeight: 200.00,
// 	minWidth: 200.00,
// 	scale: 1.00,
// 	scaleMobile: 1.00,
// 	size: 1.20
// })

function App() {
	const [body_, setbody_] = useState();
	const [header, setHeader] = useState("fixed");
	const [header_, setHeader_] = useState();
	let scrollPosition = useScrollPosition();

	useEffect(() => {
		setbody_(document.querySelector("body"));
		setHeader_(document.getElementsByClassName("main-bar-wraper"));
	}, []);


	var element = document.getElementById("fix-header");

	if (typeof (element) != 'undefined' && element != null) {
		header === "fixed" && scrollPosition > 10
			? header_ && header_[0].classList.add("is-fixed")
			: header_ && header_[0].classList.remove("is-fixed");
	}
	return (
		<div className="App">
			<Markup />
		</div>
	);
}

export default App;
