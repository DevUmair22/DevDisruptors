import React, {Component} from 'react';
import Slider from "react-slick";


const contentBlog =[
	{icons: <i className="flaticon-notebook" />, title: 'Validation', para: 'Proper Validation is always on Priority.',},
	{icons: <i className="flaticon-file" />, title: 'Maintenance', para: 'We love to maintain it for you.',},
	{icons: <i className="flaticon-devices" />, title: 'Custom Development', para: 'Web Applications and Website.',},
	{icons: <i className="flaticon-rocket-ship" />, title: 'E-Commerce', para: 'Customized for you.',},
	{icons: <i className="flaticon-file" />, title: 'Dev Ops', para: 'Helping you with the Initial.',},
	{icons: <i className="flaticon-file" />, title: 'On-Time Deployement', para: 'We love to be on time.',},
	{icons: <i className="flaticon-file" />, title: 'Scalability and flexibility', para: 'Our apps love to be scaled and very reliable.',},

	
]

class ImgCarouselContent extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 4,	
			speed: 3000,
			navSpeed: 3000,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 1,
				  }
				}
			]
        };
		return(
			<>
				<Slider className="img-carousel-content owl-carousel text-center text-white owl-none " {...settings} >
				{contentBlog.map((item, index)=>(
					<div className="item p-3" key={index} >
						<div className="icon-bx-wraper bx-style-1 p-a20 radius-sm" style={{marginTop:"2em"}}>
							<div className="icon-content" style={{height:"10vh"}}>
								<h5 className="dlab-tilte">
									<span className="icon-sm">{item.icons}</span> 
									{item.title}
								</h5>
								<p>{item.para}</p>
							</div>
						</div>
					</div>
				))}	
				</Slider>
			</>
		)
	}
	
}

export default ImgCarouselContent;