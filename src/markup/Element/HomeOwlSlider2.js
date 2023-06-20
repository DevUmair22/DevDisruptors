import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

/* function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next la la-angle-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
	<div className="owl-nav">
		<div className=" owl-prev la la-angle-left" onClick={onClick}/>
	</div>
  );
} */

class EventSlider extends Component{	
	
	render()
{
	// {
	// 	var settings = {		
	// 		arrows: false,
    //         slidesToShow: 4,	
	// 		speed:5,
	// 		navSpeed: 0,	
    //         infinite: false,
	// 		autoplay: false,
	// 		responsive: [
	// 			{
	// 			  breakpoint: 1200,
	// 			  settings: {
	// 				slidesToShow: 4,
	// 			  }
	// 			},
	// 			{
	// 			  breakpoint: 1024,
	// 			  settings: {
	// 				slidesToShow: 3,
	// 			  }
	// 			},
	// 			{
	// 			  breakpoint: 768,
	// 			  settings: {
	// 				slidesToShow: 2,
	// 			  }
	// 			},
	// 			{
	// 			  breakpoint: 576,
	// 			  settings: {
	// 				slidesToShow: 1,
	// 			  }
	// 			}
	// 		]
    //     };
	
	return(
	
				<div className="row">
				<div className="item p-1 col-lg-3 col-md-6 col-sm-12" >
				<div className="item-service-content"  onClick={()=>{
					window.location.href="/service"
				}}>	
				<div className="box-item-service text-center" style={{height:"15em"}}>
						<div style={{paddingBottom:"32px"}}>
							<b>Web and Mobile Apps Development</b>
							<p className="m-b0">Full-Stack static and dynamic websites and mobile apps development</p>
						</div>
						
						<div className="icon-bx-md radius border-1  "> 
							<span className="icon-cell"><i className="flaticon-devices"></i></span> 
						</div>
					</div>
				</div>
				</div>
				<div className="item p-1 col-lg-3 col-md-6 col-sm-12">
				<div className="item-service-content "  onClick={()=>{	window.location.href="/service"}}>
					<div className="box-item-service text-center" style={{height:"15em"}}>
						<div className="icon-bx-md radius border-1 m-b60 m-t0"> 
							<span className="icon-cell"><i class="flaticon-development"></i></span> 
						</div>
                        <div style={{paddingBottom:"30px"}}>
							<b>Digital Analytics and Marketing</b>
							<p className="m-b0">SEO, Social Media Marketing<br/>and Growth Strategies</p>
						</div>
					</div>
				</div>
				</div>
				<div className="item p-1 col-lg-3 col-md-6 col-sm-12">
					
						<div className="item-service-content "  onClick={()=>{
							window.location.href="/service"
						}}>
						<div className="box-item-service text-center" style={{height:"15em"}}>
						<div style={{paddingBottom:"30px"}}>
							<b>Maintenance & Support</b>
							<p >Providing support for modern and legacy applications</p>
						</div>
						
						<div className="icon-bx-md radius border-1  m-t5" style={{paddingTop:"10px"}}> 
							<span className="icon-cell"><i className="flaticon-smartphone"></i></span> 
						</div>
					</div>
				</div>
				</div>
				<div className="item p-1 col-lg-3 col-md-6 col-sm-12">
				<div className="item-service-content " onClick={()=>{
					window.location.href="/service"
				}}>
					<div className="box-item-service text-center" style={{height:"15em"}}>
						<div className="icon-bx-md radius border-1 m-b10 "> 
							<span className="icon-cell"><i className="flaticon-team"></i></span> 
						</div>
						
					<div className="m-b0">
							<b>Web Scrapping and Automation</b>
							<p>Automating time-consuming processes and collecting data from internet for business analytics</p>
						</div>
					</div>
				</div>
				</div>
				</div>
				
		)
		}

}
export default EventSlider;