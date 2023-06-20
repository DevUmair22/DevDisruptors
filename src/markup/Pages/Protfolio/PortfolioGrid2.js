import React, {Component,useState,useEffect,Fragment } from 'react';
import { Link } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';
import {SRLWrapper, useLightbox} from 'simple-react-lightbox'; 
import Header from '../../Layout/Header1';
import Footer from '../../Layout/Footer1';
import PageTitle from '../../Layout/PageTitle';
import Masonry from 'react-masonry-component';

//images

import {bnr1} from './ProtfolioFullWidth';
import {imageBlog} from './ProtfolioFullWidth'; 

import Service2 from "../Service/Service2";


//Light Gallery on icon click 
// const Iconimage = props => {
// 	const { openLightbox } = useLightbox()
	
// 	return (
//     <Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="mfp-link portfolio-fullscreen" >
//       <i className="ti-fullscreen icon-bx-xs"></i>
//     </Link>
//   )
// }

// Masonry section
const masonryOptions = {                                          
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }
// Masonry section end

const TagLi = ({name, handlesettag, tagActive}) => {                                                               
	return ( 
			
		<li className={` tag ${tagActive ? 'btn active' : 'btn'}` } onClick={() => handlesettag(name)} >
			<input type="radio" />
			<Link to={"#"} className="site-button-secondry radius-sm" ><span>{name} {''}</span> </Link>
		</li> 
	);
};


class PortfolioGrid2 extends Component{
	render(){
		return(
			<Fragment>	
			{/* <Header />
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr dlab-bnr-inr-sm overlay-primary bg-pt" >
					<PageTitle motherMenu="Our Portfolio "  activeMenu="Portfolio"  />
				</div>
				<PortfolioItem />
				
			</div>	
			<Footer /> */}
			<Service2/>
			</Fragment>			
		)
	}
} 
function PortfolioItem(){
	const [tag, setTag] = useState('All');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All' ? setFilterdImages(imageBlog) : setFilterdImages(imageBlog.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
		<>
			<div className="section-full content-inner-2 portfolio text-uppercase">	
				<div className="container">
					{/* <div className="site-filters clearfix center  m-b40">
						<ul className="filters" data-toggle="buttons">
							<TagLi name="All"  handlesettag={setTag} tagActive={ tag === 'All' ? true : false }	/>
							<TagLi name="Web"  handlesettag={setTag} tagActive={ tag === 'Web' ? true : false }	/>
							<TagLi name="Advertising" handlesettag={setTag} tagActive={ tag === 'Advertising' ? true : false }	 />
							<TagLi name="Branding"  handlesettag={setTag} tagActive={ tag === 'Branding' ? true : false }	/>
							<TagLi name="Design"  handlesettag={setTag} tagActive={ tag === 'Design' ? true : false }	/>
							<TagLi name="Photography"  handlesettag={setTag} tagActive={ tag === 'Photography' ? true : false }	/>
						</ul>
					</div> */}
					<SimpleReactLightbox>
						<SRLWrapper >
							<div className="clearfix">
								<ul id="masonry" className="dlab-gallery-listing gallery-grid-4 gallery mfp-gallery port-style1">
									<Masonry
										className={'my-gallery-class'} // default ''
										options={masonryOptions} // default {}
										disableImagesLoaded={false} // default false
										updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
										imagesLoadedOptions={imagesLoadedOptions} // default {}
									>
										{filteredImages.map((item, index)=>(
											<>
											<li className="web design card-container col-lg-12 col-md-12 col-sm-12 p-a0" style={{border: "2px solid #6dbe45"}}  key={index}>
												<div className="dlab-box dlab-gallery-box" >
													<div className="dlab-media   dlab-img-effect" > 
													{/* <div style={{height:"500px" }}> */}
<span>
														<img src={item.Large} alt="" style={{height : "100%", width:"100%"}} />
														</span></div>
														<div className="overlay-bx">
															<div className="overlay-icon align-b text-white text-left">
																<div  style={{backgroundColor:"black", opacity:"0.6", width:"360px"}}>
																	<div className="text-white text-left port-box"><h5>{item.para}</h5>
																	<p>{item.des}</p></div>
																	{/* <Iconimage /> */}
																</div>
															</div>
														</div>
													{/* </div> */}
												</div>
											</li>
											
											</>
										))}	
									</Masonry>	
								</ul>
							</div>
						</SRLWrapper>
					</SimpleReactLightbox>	
				</div>
			</div>
		</>
	);
}
export{bnr1};
export default PortfolioGrid2;
