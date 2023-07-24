import Angular from '../../images/new-icons/Angular.svg'
import asp from '../../images/new-icons/Asp.svg'
import elementor from '../../images/new-icons/Elementor.svg'
import Next from '../../images/new-icons/Next.svg'
import Vue from '../../images/new-icons/Vue.svg'
import wix from '../../images/new-icons/Wix.svg'
import wooc from '../../images/new-icons/WooCommerce-Logo.wine.png'
import android from '../../images/new-icons/android.svg'
import ios from '../../images/new-icons/apple-icon.svg'
import bigcom from '../../images/new-icons/bigcommerce.svg'
import anal from '../../images/new-icons/data-analytics.png'
import weeb from '../../images/new-icons/data.png'
// import devops from '../../images/new-icons/devops.png'
import flutter from '../../images/new-icons/flutter.svg'
import ionic from '../../images/new-icons/ionic.svg'
import kotlin from '../../images/new-icons/kotlin.svg'
import laravel from '../../images/new-icons/laravel.svg'
import mob from '../../images/new-icons/mobile-phone.png'
import react from '../../images/new-icons/react-native.svg'
import doc from '../../images/new-icons/sheet.png'
import shopify from '../../images/new-icons/shopify.svg'
import tech from '../../images/new-icons/technical-support.png'
import ux from '../../images/new-icons/wireframe.png'
import wordpress from '../../images/new-icons/wordpress.svg'
import www from '../../images/new-icons/www.png'
// import cloudservice from '../../images/new-icons/cloud-service.png'
// import digitalmarketing1 from '../../images/new-icons/digitalmarketing1.png'
// import digitalmarketing2 from '../../images/new-icons/digitalmarketing2.png'
// import digitalmarketing3 from '../../images/new-icons/digitalmarketing3.png'
// import digitalmarketing4 from '../../images/new-icons/digitalmarketing4.png'
// import intelligence from '../../images/new-icons/intelligence.png'

const serviceData = [
	{
		name: 'Web Development',
		headicon: (
			<span
				style={{ lineHeight: '4.5rem', fontSize: '3.8rem', color: '#6db314' }}
			>
				{' '}
				<i className="flaticon-devices"></i>
			</span>
		),
		service: [
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
		],
	},
	{
		name: 'Ecommerce Development',
		headicon: (
			<span
				style={{ lineHeight: '4.5rem', fontSize: '3.8rem', color: '#6db314' }}
			>
				{' '}
				<i className="flaticon-shop"></i>
			</span>
		),
		service: [
			{
				icon: (
					<img
						src={wooc}
						className="mr-3"
						alt="react"
						width="25px"
						height="25px"
					/>
				),
				title: 'Woo Commerce',
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
						src={wix}
						className="mr-3"
						alt="react"
						width="23px"
						height="23px"
					/>
				),
				title: 'Wix',
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
			{
				icon: (
					<img
						src={bigcom}
						className="mr-3"
						alt="react"
						width="23px"
						height="23px"
					/>
				),
				title: 'Bigcommerce',
			},
			{
				icon: (
					<img
						src={elementor}
						className="mr-3"
						alt="react"
						width="23px"
						height="23px"
					/>
				),
				title: 'Elementor',
			},
		],
	},
	{
		name: 'Mobile App Development',
		headicon: (
			<span
				style={{ lineHeight: '4.5rem', fontSize: '3.8rem', color: '#6db314' }}
			>
				{' '}
				<i className="flaticon-smartphone"></i>
			</span>
		),
		service: [
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
		],
	},
]

const services = [
	{
		title: 'Web Application Development',
		icon: (
			<img src={weeb} className="mr-3" alt="react" width="25px" height="25px" />
		),
		routes: 'webapplicationdevelopment',
	},
	{
		title: 'Mobile Application Development',
		icon: (
			<img src={mob} className="mr-3" alt="react" width="25px" height="25px" />
		),
		routes: 'mobileapplicationdevelopment',
	},
	{
		title: 'UI/UX Design',
		icon: (
			<img src={ux} className="mr-3" alt="react" width="25px" height="25px" />
		),
		routes: `ui-ux-design`,
	},
	{
		title: 'Technical Code Documentation',
		icon: (
			<img src={doc} className="mr-3" alt="react" width="25px" height="25px" />
		),
		routes: `technicaldocumentation`,
	},
	{
		title: 'Maintenance and Support',
		icon: (
			<img src={tech} className="mr-3" alt="react" width="25px" height="25px" />
		),
		routes: 'maintenanceandsupport',
	},
	{
		title: 'Digital Analytics and Marketing',
		icon: (
			<img src={anal} className="mr-3" alt="react" width="25px" height="25px" />

			// <FontAwesomeIcon icon="fa-sharp fa-light fa-chart-mixed-up-circle-dollar" />
		),
		routes: `digitalanalyticsandmarketing`,
	},
	{
		title: 'Web-scrapping and Automation',
		icon: (
			<img src={www} className="mr-3" alt="react" width="25px" height="25px" />
		),
		routes: `testautomation`,
	},
	// {
	// 	title: 'DEVOPS SERVICES',
	// 	icon: (
	// 		<img
	// 			src={devops}
	// 			className="mr-3"
	// 			alt="react"
	// 			width="25px"
	// 			height="25px"
	// 		/>
	// 	),
	// 	routes: `devOps`,
	// },
	// {
	// 	title: 'CLOUD SERVICES',
	// 	icon: (
	// 		<img
	// 			src={cloudservice}
	// 			className="mr-3"
	// 			alt="react"
	// 			width="25px"
	// 			height="25px"
	// 		/>
	// 	),
	// 	routes: `cloudservcies`,
	// },
	// {
	// 	title: 'DATA SCIENCE/AI SERVICES',
	// 	icon: (
	// 		<img
	// 			src={intelligence}
	// 			className="mr-3"
	// 			alt="react"
	// 			width="25px"
	// 			height="25px"
	// 		/>
	// 	),
	// 	routes: `datascience`,
	// },
]

const projects = [
	{
		name: 'Equestrian Digital Marketing Agency',
		shortDescription:
			'A robust digital marketing platform for an equestrian-focused agency.',
		industry: 'Equestrian Sports',
		// image1: digitalmarketing1,
		// image2: digitalmarketing2,
		// image3: digitalmarketing3,
		// image4: digitalmarketing4,
		projectDescription:
			'This project involved developing a robust digital marketing platform for an equestrian-focused agency. The company aimed to revolutionize the industry by offering both innovative and user-friendly tech solutions to help equestrians focus on their passion while the platform managed the digital landscape. The DevDisruptors team worked closely with the client to understand their requirements and deliver a comprehensive suite of services.',
		servicesProvided: [
			'Website Development',
			'E-signature Document Integration',
			'Automated Follow-up System',
			'Streamlined Onboarding Processes',
			'Social Media Integration',
			'Targeted Marketing Campaigns',
			'Third-Party APIs Integration',
			'Analytics and Reporting',
			'Ongoing Maintenance and Support',
		],
		technologiesUsed: [
			'WordPress (CMS)',
			'PHP',
			'HTML',
			'CSS',
			'JavaScript/jQuery',
			'SQL',
			'Google Analytics',
			'AWS (Hosting)',
			'Git (Version Control)',
		],
	},
	{
		name: 'Nonprofit Digital Marketing and Strategy Consulting',
		shortDescription:
			'A customized digital platform integrating various technology solutions to support fundraising, communications, and online infrastructure.',
		industry: 'Nonprofit, Associations, and Government Organizations',
		projectDescription:
			"DevDisruptors partnered with a leading digital marketing and strategy consulting firm specializing in serving nonprofits, associations, and government organizations. The team developed a fully customized digital platform integrating various technology solutions to support fundraising, communications, and online infrastructure. The goal was to create a unified, intuitive system that aligned with each client's specific goals and resources.",
		servicesProvided: [
			'Custom Website Development',
			'Plugin and Theme Customization',
			'SEO Optimization',
			'Security Enhancements',
			'Payment Gateway Integration',
			'Content Management System (CMS)',
			'Social Media Strategy',
			'Communications Plan',
		],
		technologiesUsed: [
			'WordPress (CMS)',
			'PHP',
			'HTML',
			'CSS',
			'JavaScript/jQuery',
			'SQL',
			'API Integration',
			'SSL Certificates',
		],
	},
	{
		name: 'Open-source Publishing and Application Platform Consulting',
		shortDescription:
			'Custom solutions for website development, content management systems, and application development, helping clients boost their online presence and achieve their business goals.',
		industry: 'Publishing and Technology',
		projectDescription:
			'The DevDisruptors team collaborated with a company specializing in consulting and project services for publishing and application platforms built on open-source technologies such as WordPress, Node.js, React, and more. They developed custom solutions for website development, content management systems, and application development, enabling the client to leverage cutting-edge open-source technologies to boost their online presence and achieve their business goals.',
		servicesProvided: [
			'Custom Website Development',
			'Content Management System (CMS) Integration',
			'Application Development',
			'Performance Optimization',
			'Security Enhancements',
			'User Experience Design',
			'Ongoing Maintenance and Support',
		],
		technologiesUsed: [
			'WordPress (CMS)',
			'PHP',
			'React',
			'Node.js',
			'HTML',
			'CSS',
			'JavaScript/jQuery',
			'SQL',
		],
	},
	{
		name: 'Logistics and Supply Chain Solution',
		shortDescription:
			'An advanced logistics and supply chain management system to streamline operations and ensure efficient and effective transportation practices.',
		industry: 'Logistics and Transportation',

		projectDescription:
			'DevDisruptors developed an advanced logistics and supply chain management system for a client to streamline their operations and ensure efficient and effective transportation practices. From domestic drayage to global shipments, distribution, storage, and everything in between, the solution provided end-to-end management and visibility of their processes.',
		servicesProvided: [
			'Web Application Development',
			'Real-time Tracking and Reporting',
			'Route Optimization',
			'Inventory Management',
			'Order Processing',
			'API Integration',
		],
		technologiesUsed: [
			'Python',
			'Django',
			'AWS',
			'Git',
			'Docker',
			'Kubernetes',
		],
	},
	{
		name: 'Social E-commerce Platform',
		shortDescription:
			'A social ecommerce platform combining Instagram-like features with seamless in-app purchasing.',
		industry: 'E-commerce, Social Media',
		projectDescription:
			'DevDisruptors worked with this client to create an innovative social ecommerce platform combining Instagram-like features with seamless in-app purchasing. Unlike other platforms that require users to leave the app to complete transactions, this app’s intuitive user experience enables users to make purchases within the app itself, creating a streamlined and engaging shopping experience.',
		servicesProvided: [
			'Web and Mobile Application Development',
			'Seamless Instagram Integration',
			'In-app Purchasing Experience',
			'E-commerce Platform Development',
			'User-friendly Interface Design',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'Node.js',
			'React.js',
			'React Native',
			'AWS',
			'Snowflake',
			'Figma',
			'Git',
		],
	},
	{
		name: 'Bakery Inventory Management System',
		shortDescription:
			'Online inventory management system allowing efficient tracking and management of transactions, storage, quantities, and locations of assets.',
		industry: 'Food and Beverage',
		projectDescription:
			'The DevDisruptors team developed an online inventory management system for a bakery with multiple branches. The system enabled the client to efficiently track and manage transactions, storage, quantities, and locations of assets across all their branches. The team also designed a React Native-based app for staff members to control inventory and verify the status of various assets at different locations.',
		servicesProvided: [
			'Web and Mobile Application Development',
			'Real-time Inventory Tracking and Management',
			'Staff Access and Control Mechanisms',
			'Multi-branch Support',
			'Integration with Existing Systems',
			'Customized Reporting and Analytics',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'Python',
			'Django (Web Framework)',
			'React.js',
			'React Native (Mobile App)',
			'PostgreSQL (Database)',
			'API Integration',
			'Git (Version Control)',
			'Jenkins (CI/CD)',
		],
	},
	{
		name: 'Travel Agency Subscription Management',
		shortDescription:
			'A subscription management system allowing users to subscribe, pay, update, and reschedule their plans according to company policies.',
		industry: 'Travel and Tourism',
		projectDescription:
			"DevDisruptors designed and implemented a subscription management system for a travel agency, allowing users to subscribe, pay, update, and reschedule their plans according to company policies. The solution automated daily data checks at 7 AM, ensuring staff members had access to the previous day's data for review and approval.",
		servicesProvided: [
			'Web Application Development',
			'Subscription Management System',
			'Payment Gateway Integration',
			'User Account Management',
			'Plan Rescheduling and Updates',
			'Automated Daily Data Checks',
			'Customized Reporting and Analytics',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'Python',
			'Django (Web Framework)',
			'HTML',
			'CSS',
			'PostgreSQL (Database)',
			'API Integration',
			'Git (Version Control)',
			'Jenkins (CI/CD)',
			'AWS (Hosting and Services)',
		],
	},
	{
		name: 'Social Media Application for US Voters',
		shortDescription:
			'A social media application that empowers citizens by providing them with easy access to contact information for public officials.',
		industry: 'Government and Politics',
		projectDescription:
			'DevDisruptors developed a social media application that empowers citizens by providing them with easy access to contact information for public officials such as the President, Vice President, local members, school authorities, lawmakers, councilors, and superintendents. The application allows only registered voters to rate and discuss the performance of their elected representatives. The primary focus was on developing APIs to access the data securely and efficiently while ensuring a seamless user experience through a responsive and user-friendly interface. We also implemented advanced technologies and the best practices for application development, including cloud services, Git, Docker, and CI/CD.',
		servicesProvided: [
			'Web Application Development',
			'Centralized Public Official Contact Information',
			'Secure Voter Authentication and Registration',
			'Real-time Discussion and Rating System',
			'Custom API Development for Data Access',
			'User-friendly Interface Design',
			'Integration with Third-party Services',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'Angular (Frontend)',
			'Node.js (Backend)',
			'MongoDB (Database)',
			'Express.js (Application Framework)',
			'API Integration',
			'Git (Version Control)',
			'Docker (Containerization)',
			'CI/CD (Continuous Integration and Deployment)',
			'Cloud Services (AWS, Google Cloud, or Azure)',
		],
	},
	{
		name: 'Shopify Store Warranty Application',
		shortDescription:
			'A custom application for Shopify store owners to offer extended warranties on their products.',
		industry: 'E-commerce & Retail',
		projectDescription:
			'The DevDisruptors team created a custom application for Shopify store owners to offer extended warranties on their products. The application enables sellers to provide additional warranty options with varying prices and durations for up to three years. Buyers can choose to purchase the extended warranty and receive automated notifications reminding them of their remaining warranty period. The development team ensured seamless integration with existing Shopify stores and designed a user-friendly interface to make the warranty extension process straightforward for bothsellers and buyers. They also utilized advanced technologies and the best practices such as Git, Docker, and CI/CD to ensure a scalable, secure, and efficient application.',

		servicesProvided: [
			'Custom Shopify Application Development',
			'Warranty Extension Feature Integration',
			'Seamless Integration with Existing Shopify Stores',
			'Customized Pricing and Duration Options',
			'Automated Warranty Notifications for Buyers',
			'User-friendly Interface Design',
			'Data Security and Privacy Implementation',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'React (Frontend)',
			'Node.js (Backend)',
			'Shopify Environment (Platform)',
			'API Integration',
			'Git (Version Control)',
			'Docker (Containerization)',
			'CI/CD (Continuous Integration and Deployment)',
			'Cloud Services (AWS, Google Cloud, or Azure)',
		],
	},
	{
		name: 'Agricultural Management System (CMS)',
		shortDescription:
			'Agricultural Management System automating the process of ingesting vendor prices, posting them, and getting customer-specific prices.',
		industry: 'Agriculture',
		projectDescription:
			'DevDisruptors developed an Agricultural Management System to automate the process of ingesting vendor prices, posting them to the SAP ERP system, and producing customer-specific prices. Previously, this process involved manual data entry, but our solution streamlined operations, saving the client significant time and resources.',
		servicesProvided: [
			'Web Application Development',
			'Vendor Price Ingestion Automation',
			'Integration with SAP ERP System',
			'Customer-Specific Pricing Generation',
			'Streamlined Data Management',
			'Customized Reporting and Analytics',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'Vue.js (Frontend)',
			'Node.js (Backend)',
			'Amazon Web Services (Hosting and Serverless Architecture)',
			'API Integration',
			'Git (Version Control)',
			'Docker (Containerization)',
			'CI/CD (Continuous Integration and Deployment)',
			'Serverless Framework',
		],
	},
	{
		name: 'Health Care Management System',
		shortDescription:
			'Health Care Management System integrating technology and therapy expertise to simplify a complex system for better patient outcomes.',
		industry: 'Health Care',
		projectDescription:
			'DevDisruptors built a Health Care Management System to seamlessly integrate technology and therapy expertise, simplifying a complex system for better patient outcomes. The platform connected all stakeholders involved in the enrollment process through technology-enabled workflows, accelerating patient onboarding and ensuring access to support services and e-consents.',
		servicesProvided: [
			'Web Application Development',
			'Patient Onboarding Automation',
			'Integration with Existing Systems',
			'e-Consent Management',
			'Customized Workflow Solutions',
			'Streamlined Patient Journey',
			'Real-time Data Access and Reporting',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'Angular (Frontend)',
			'.NET (Backend)',
			'Azure DevOps (Hosting and Services)',
			'API Integration',
			'Git (Version Control)',
			'Docker (Containerization)',
			'Kubernetes (Orchestration)',
			'CI/CD (Continuous Integration and Deployment)',
		],
	},
	{
		name: 'Addiction Treatment Center Directory',
		shortDescription:
			'A comprehensive online directory of high-quality addiction treatment centers, allowing users to effortlessly find personalized addiction treatment options.',
		industry: 'Health Care',
		projectDescription:
			'DevDisruptors developed a comprehensive online directory of high-quality addiction treatment centers, allowing users to find the perfect match for their needs. The platform offered free listings for centers that met specific criteria and were financially supported through clearly marked advertisements. This solution streamlined the search process for users seeking personalized addiction treatment options.',
		servicesProvided: [
			'Web Application Development',
			'Comprehensive Treatment Center Listings',
			'Customizable Search Filters',
			'User-friendly Interface Design',
			'Advertiser Management System',
			'Search and Filter Functionality',
			'Integration with Third-party Services',
			'Real-time Data Updates and Analytics',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'React (Frontend)',
			'Gatsby.js (Static Site Generation)',
			'Node.js (Backend)',
			'Firebase (Database)',
			'API Integration',
		],
	},
	{
		name: 'Petconomy - Pet Care Center Management',
		shortDescription:
			'An admin-side web application to automate the management of pet care centers across the country.',
		industry: 'Pet Care',
		projectDescription:
			'DevDisruptors created an admin-side web application to automate the management of pet care centers across the country. The application allowed administrators to view records of their centers, staff contact information, and the pet care services offered by each location. The tool also provided financial management features, making it a comprehensive solution for daily operations.',
		servicesProvided: [
			'Web Application Development',
			'Centralized Management of Pet Care Centers',
			'Staff and Service Management',
			'Customized Reporting and Analytics',
			'Financial Tracking and Reporting',
			'Contact Information and Hierarchy Management',
			'Integration with Existing Systems',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'Vue 3 (Frontend)',
			'Node.js (Backend)',
			'AWS (Hosting and Services)',
			'API Integration',
			'Git (Version Control)',
			'Docker (Containerization)',
			'CI/CD (Continuous Integration and Deployment)',
			'Serverless Framework',
		],
	},
	{
		name: 'Agricultural Order Management and Shipping System',
		shortDescription:
			'An order management and shipping system for agricultural products, streamlining the transportation and tracking of crops, nutrients, and seeds.',
		industry: 'Agriculture',
		projectDescription:
			'DevDisruptors developed an order management and shipping system for agricultural products, streamlining the transportation and tracking of crops, nutrients, and seeds. The admin-side web application facilitated the tracking of orders from their origin to the warehouse and final destination. The solution improved efficiency and visibility throughout the entire order and shipment process.',
		servicesProvided: [
			'Web Application Development',
			'Centralized Order Management',
			'Real-time Shipment Tracking',
			'Carrier Information Management',
			'Automated Purchase Order Generation',
			'Warehouse and Distribution Management',
			'Customized Reporting and Analytics',
			'Integration with Existing Systems',
			'Ongoing Maintenance and Support',
			'DevOps Implementation',
			'Cloud Migration and Optimization',
		],
		technologiesUsed: [
			'Vue.js (Frontend)',
			'Node.js (Backend)',
			'AWS (Hosting and Services)',
			'API Integration',
			'Git (Version Control)',
			'Docker (Containerization)',
			'CI/CD (Continuous Integration and Deployment)',
			'Serverless Framework',
		],
	},
]

export { projects, serviceData, services }
