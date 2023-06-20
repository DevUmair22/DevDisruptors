import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import android from '../../images/new-icons/android.svg';
import Angular from '../../images/new-icons/Angular.svg';
import ios from '../../images/new-icons/apple-icon.svg';
import asp from '../../images/new-icons/Asp.svg';
import bootstrap from '../../images/new-icons/Bootstrap.svg';
import css from '../../images/new-icons/CSS.svg';
import flutter from '../../images/new-icons/flutter.svg';
import html from '../../images/new-icons/html.svg';
import ionic from '../../images/new-icons/ionic.svg';
import javascript from '../../images/new-icons/Javascript.svg';
import kotlin from '../../images/new-icons/kotlin.svg';
import laravel from '../../images/new-icons/laravel.svg';
import mongo from '../../images/new-icons/Mongo.svg';
import Next from '../../images/new-icons/Next.svg';
import react from '../../images/new-icons/react-native.svg';
import redis from '../../images/new-icons/redis.svg';
import shopify from '../../images/new-icons/shopify.svg';
import wordpress from '../../images/new-icons/wordpress.svg';
// import sql from '../../images/new-icons/Sql.svg';
import ts from '../../images/new-icons/Typescript.svg';

import { services } from './../Element/data';

import Vue from '../../images/new-icons/Vue.svg';

const serviceData = [{
	id: [

		{
			icon: (
				<img
					src={react}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'ReactJS',
		},
		{
			icon: (
				<img
					src={asp}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'ASP.Net',
		},
		{
			icon: (
				<img
					src={laravel}
					className="mr-3"
					alt="laravel"
					width="23px"
					height="23px"
				/>
			),
			title: 'Laravel',
		},
		{
			icon: (
				<img
					src={Angular}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Angular',
		},
		{
			icon: (
				<img
					src={Vue}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'VueJs',
		},
		{
			icon: (
				<img
					src={Next}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'NextJs',
		},
		{
			icon: (
				<img
					src={shopify}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Shopify',
		},

	]
}, {
	id: [
		{
			icon: (
				<img
					src={android}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Android App',
		},
		{
			icon: (
				<img
					src={ios}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'iOS App',
		},
		{
			icon: (
				<img
					src={flutter}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Flutter',
		},
		{
			icon: (
				<img
					src={kotlin}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Kotlin',
		},
		{
			icon: (
				<img
					src={react}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'React Native',
		},
		{
			icon: (
				<img
					src={ionic}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Ionic',
		},
		{
			icon: (
				<img
					src={javascript}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'JavaScript',
		},

	]
}, {
	id: [
		{
			icon: (
				<img
					src={mongo}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Mongo DB',
		},
		{
			icon: (
				<img
					src={wordpress}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Wordpress',
		},
		{
			icon: (
				<img
					src={redis}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Redis',
		},
		{
			icon: (
				<img
					src={html}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'HTML',
		},

		{
			icon: (
				<img
					src={ts}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'TypeScript',
		},
		{
			icon: (
				<img
					src={bootstrap}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'Bootstrap',
		},
		{
			icon: (
				<img
					src={css}
					className="mr-3"
					alt="react"
					width="23px"
					height="23px"
				/>
			),
			title: 'CSS',
		},
	]
}
]
class HeaderMenu extends Component {



	render() {
		return (
			<>
				<ul className="nav navbar-nav text-white">
					<li className="active " >
						<Link to={'/'}>
							<span id='home-icon' className="ti-home"></span>
						</Link>
					</li>
					<li><Link to={'#'}>Company <i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu">
							<li><Link to={'/aboutus'} style={{ fontWeight: "600" }} className="dez-page">About Us</Link></li>
							<li><Link to={'/contact'} style={{ fontWeight: "600" }} className="dez-page">Contact</Link></li>
						</ul>
					</li>
					{/* <li class=" nav-item dropdown ">
						<Link >Company<i className="fa fa-caret-down" style={{ fontSize: "1rem " }}></i></Link>
						<div class="  custom-nav rounded shadow-lg " style={{ width: "7.71rem" }}>
							<ul className='list-group '>
								<li className='list-group-item  '>
									<Link to={'/aboutus'} style={{ fontWeight: "600" }}>About Us </Link>
								</li>
								<li className='list-group-item  '>
									<Link to={'/contact'} style={{ fontWeight: "600" }}>Contact</Link></li>

							</ul>
						</div>

					</li> */}
					<li><Link to={'#'} >Services<i className="fa fa-chevron-down"></i></Link>
						<ul className="sub-menu" id="tech">
							{
								services.map((item) => (
									<li>
										<Link to={item.routes} style={{ fontWeight: "600" }} className="dez-page">
											<div className='d-flex w-100 align-items-center' >
												<div className=' flex-shrink-0 w-auto'>{item.icon}</div>
												<div className='flex-column flex-grow-1 text-capitalize w-100'>
													{item.title}
													{/* <br /><i>lorem ipsum text here</i> */}
												</div>
											</div></Link>
									</li>
								))
							}
						</ul>
					</li>
					{/* <li class=" nav-item dropdown ">
						<Link >Services<i className="fa fa-caret-down" style={{ fontSize: "1rem " }}></i></Link>
						<div class=" d-none position-absolute overflow-x-hidden rounded shadow-lg " style={{
							width: "22rem"
						}}>
							<ul className='list-group w-100'>
							
										<li className='list-group-item d-flex '>
											<Link to={item.routes} style={{ fontWeight: "600" }}>
												<div className='d-flex w-100 align-items-center' >
													<div className=' flex-shrink-0 w-auto'>{item.icon}</div>
													<div className='flex-column flex-grow-1 text-capitalize w-100'>
														{item.title}
													
													</div>
												</div>
											</Link>
										</li>
								



							</ul>
						</div>

					</li > */}




					<li><Link style={{ fontWeight: "600" }} to={'/portfolioo'} className="dez-page">Our Portfolio</Link></li>




					{/* <li className=" nav-item dropdown ">
						<Link >Experience<i className="fa fa-caret-down" style={{ fontSize: "1rem " }}></i></Link>
						<div className="  d-none position-absolute overflow-x-hidden rounded shadow-lg " style={{ width: "9.6rem" }}>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item '>
									<Link to={'/portfolioo'} style={{ fontWeight: "600" }}>Portfolio </Link>
								</li>
								<li className='list-group-item  '>
									<Link to={'/portfolio'} style={{ fontWeight: "600" }}>Case Studies</Link></li>

							</ul>
						</div>

					</li> */}
					{/* <li><Link to={'/contact'} >Contact Us</Link></li> */}


				</ul >
			</>
		)
	}
}
export default HeaderMenu;
