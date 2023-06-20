import React from 'react'
import android from '../../images/new-icons/android.svg'
import Angular from '../../images/new-icons/Angular.svg'
import ios from '../../images/new-icons/apple-icon.svg'
import asp from '../../images/new-icons/Asp.svg'
import bootstrap from '../../images/new-icons/Bootstrap.svg'
import elementor from '../../images/new-icons/Elementor.svg'
import flutter from '../../images/new-icons/flutter.svg'
import html from '../../images/new-icons/html.svg'
import ionic from '../../images/new-icons/ionic.svg'
import javascript from '../../images/new-icons/Javascript.svg'
import kotlin from '../../images/new-icons/kotlin.svg'
import laravel from '../../images/new-icons/laravel.svg'
import mongo from '../../images/new-icons/leaf.png'
import Next from '../../images/new-icons/Next.svg'
import django from '../../images/new-icons/Node.svg'
import php from '../../images/new-icons/php.svg'
import python from '../../images/new-icons/Python.svg'
import react from '../../images/new-icons/react-native.svg'
import redis from '../../images/new-icons/redis.png'
import shopify from '../../images/new-icons/S.png'
import stripe from '../../images/new-icons/Stripe.svg'
import ts from '../../images/new-icons/Typescript.svg'
import Vue from '../../images/new-icons/Vue.svg'
import wordpress from '../../images/new-icons/wordpress.svg'
// import sql from '../../images/new-icons/Sql.svg';
const Tech = () => {
	const serviceData = [
		{
			title: 'ReactJS',
			icon: <img src={react} className="image-fluid mx-auto" alt="icon" />,
		},
		{
			title: 'ASP.Net',
			icon: <img src={asp} className="image-fluid mx-auto" alt="icon" />,
		},
		{
			title: 'Laravel',
			icon: <img src={laravel} className="image-fluid mx-auto" alt="icon" />,
		},
		{
			title: 'Angular',
			icon: <img src={Angular} className="image-fluid mx-auto" alt="icon" />,
		},

		{
			icon: <img src={Vue} className="image-fluid mx-auto" alt="icon" />,
			title: 'VueJs',
		},
		{
			icon: <img src={Next} className="image-fluid mx-auto" alt="icon" />,
			title: 'NextJs',
		},
		{
			icon: (
				<img src={shopify} className="image-fluid py-1 mx-auto" alt="icon" />
			),
			title: 'Shopify',
		},
		{
			icon: <img src={php} className="image-fluid mx-auto" alt="icon" />,
			title: 'PHP',
		},
		{
			icon: <img src={android} className="image-fluid mx-auto" alt="icon" />,
			title: 'Android App',
		},
		{
			icon: <img src={ios} className="image-fluid mx-auto" alt="icon" />,
			title: 'iOS App',
		},
		{
			icon: <img src={flutter} className="image-fluid mx-auto" alt="icon" />,
			title: 'Flutter',
		},
		{
			icon: <img src={kotlin} className="image-fluid mx-auto" alt="icon" />,
			title: 'Kotlin',
		},

		{
			icon: <img src={ionic} className="image-fluid mx-auto" alt="icon" />,
			title: 'Ionic',
		},
		{
			icon: <img src={javascript} className="image-fluid mx-auto" alt="icon" />,

			title: 'JavaScript',
		},

		{
			icon: <img src={mongo} className="image-fluid  mx-auto" alt="icon" />,
			title: 'Mongo DB',
		},
		{
			icon: <img src={wordpress} className="image-fluid mx-auto" alt="icon" />,
			title: 'Wordpress',
		},
		{
			icon: <img src={redis} className="image-fluid mx-auto" alt="icon" />,
			title: 'Redis',
		},
		{
			title: 'HTML',
			icon: <img src={html} className="image-fluid mx-auto" alt="icon" />,
		},

		{
			title: 'TypeScript',
			icon: <img src={ts} className="image-fluid py-1 mx-auto" alt="icon" />,
		},
		{
			title: 'Bootstrap',
			icon: (
				<img src={bootstrap} className="image-fluid py-1 mx-auto" alt="icon" />
			),
		},
		// {
		// 	title: 'CSS',
		// 	icon: <img src={css} className="image-fluid" alt="icon" />,
		// },
		{
			title: 'NodeJs',
			icon: (
				<img className="image-fluid px-1 mx-auto" src={django} alt="icon" />
			),
		},
		{
			title: 'Python',
			icon: (
				<img
					src={python}
					className="image-fluid py-1 pl-1 mx-auto"
					alt="icon"
				/>
			),
		},
		{
			title: 'Stripe',
			icon: <img src={stripe} className="image-fluid mx-auto" alt="icon" />,
		},
		{
			title: 'Elementor',
			icon: <img className="image-fluid mx-auto" src={elementor} alt="icon" />,
		},
	]

	return (
		<>
			{' '}
			<div className="row justify-items-center">
				{serviceData.map((item, index) => (
					<div className="col col-6 col-lg-2 col-md-3 mx-auto my-1 py-2">
						<div
							className="d-flex flex-wrap align-items-center px-1 py-1"
							style={{
								height: '4.5rem',
							}}
						>
							<div
								className=" h-75 col-4 d-flex justify-items-center py-1 px-1"
								style={{
									border: '1px solid gray ',
									borderRadius: '10px',
									overflow: 'hidden',
								}}
							>
								{item.icon}
							</div>

							<h6 className="m-0 col-8 p-0 pl-1">{item.title}</h6>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Tech
