import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox';

//Images
import pic1 from './../../images/project/pic1.jpg';
import pic2 from './../../images/project/pic2.jpg';
import pic3 from './../../images/project/pic3.jpg';
import pic4 from './../../images/project/pic4.jpg';
import pic5 from './../../images/project/pic5.jpg';

import pic6 from './../../images/project/pic6.jpg';
import pic7 from './../../images/project/pic7.jpg';
import pic8 from './../../images/project/pic8.jpg';

import pic9 from './../../images/project/pic9.jpg';
import pic10 from './../../images/project/pic10.jpg';
import pic11 from './../../images/project/pic11.jpg';
import pic12 from './../../images/project/pic12.jpg';
import pic13 from './../../images/project/pic13.jpg';
import pic14 from './../../images/project/pic14.jpg';
import pic15 from './../../images/project/pic15.jpg';

const contentBlog =[
	{images: pic1, },
	{images: pic2, },
	{images: pic3, },
	{images: pic4, },
	{images: pic5, },
	{images: pic6, },
	{images: pic7, },
	{images: pic8, },
	{images: pic9, },
	{images: pic10, },
	{images: pic11, },
	{images: pic12, },
	{images: pic13, },
	{images: pic14, },
	{images: pic15, },
]
//Light Gallery on icon click 
const Iconimage = props => {
	const { openLightbox } = useLightbox()
	return (
    <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link" title="Title Come Here">
      <i className="ti-fullscreen icon-bx-xs"></i>
    </Link>
  )
}


class PortfolioCarousel extends Component{
	render(){
		var settings = {		
			arrows: false,
            slidesToShow: 6,	
			speed: 9000,
			navSpeed: 9000,	
            infinite: true,
			autoplay: true,
			responsive: [
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 5,
				  }
				},
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 480,
				  settings: {
					slidesToShow: 2,
				  }
				}
			]
        };
		return(
			<>
				<SimpleReactLightbox>
					<SRLWrapper >
						<Slider className="img-carousel-content owl-carousel text-center text-white owl-none " {...settings}>
							{contentBlog.map((item, index)=>(
								<div className="item p-3" key={index}>
									<div style={{ boxShadow: "#32a852 -2px 1px 10px 0px"}} className=" portfolio-box">
										<div style={{pointerEvents:"none"}}> 
										<img src={item.images} alt="" />
											{/* <div className="dlab-info-has p-a15 bg-primary"> */}
												{/* <Link to={"#"} className="site-button outline radius-xl white pull-left">Wordpress</Link>
												<Link to={"#"} className="site-button outline radius-xl white pull-right">Vist Site</Link> */}
											</div>
											{/* <div className="overlay-bx">
												<div className="overlay-icon text-white"> 
													<h5>Website Name</h5>
													<p className="m-b10">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots</p> */}
													{/* <a href={item.images} className="mfp-link" title="Title Come Here"> <i className="ti-fullscreen icon-bx-xs"></i> </a> */ }
													{/* <Iconimage /> */}
													{/* <a href="https://www.google.com/" target="bank"><i className="ti-arrow-top-right icon-bx-xs"></i></a> */}
												{/* </div>
											</div> */}
										{/* </div> */}
									</div>
								</div>
							))}	
						</Slider>
					</SRLWrapper >
				</SimpleReactLightbox>
			</>
		)
	}
	
}

export default PortfolioCarousel;