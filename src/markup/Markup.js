import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ThemeButton from './Element/ThemeButton/ThemeButton';
import Aboutus1 from './Pages/Aboutus/Aboutus1';
import Aboutus2 from './Pages/Aboutus/Aboutus2';
import ComingSoon1 from './Pages/ComingSoon/ComingSoon1';
import Contact from './Pages/Contact';
import Error403 from './Pages/Error/Error403';
import Error404 from './Pages/Error/Error404';
import Error405 from './Pages/Error/Error405';
import Expertise from './Pages/Expertise';
import Faqs from './Pages/Faqs';
import Homepage from './Pages/Homepage1';
import Index2 from './Pages/Index2';
import Index3 from './Pages/Index3';
import Index4 from './Pages/Index4';
import Index5 from './Pages/Index5';
import Index6 from './Pages/Index6';
import Index7 from './Pages/Index7';
import Login from './Pages/Login';
import OurProjects from './Pages/OurProjects';
import ProjectDetails from './Pages/ProjectDetails';
import ProjectManagement from './Pages/ProjectManagement';
import OurPortfolio from './Pages/Protfolio/OurPortfolio';
import Register from './Pages/Register';
import Service from './Pages/Service/Service';
import ServicesDetails from './Pages/Service/ServicesDetails';
import Team from './Pages/Team';
import UnderMaintenance from './Pages/UnderMaintenance';

import BlogClassicGrid from './Pages/BlogClassic/BlogClassicGrid';
import BlogClassicLeftSidebar from './Pages/BlogClassic/BlogClassicLeftSidebar';
import BlogClassicRightSidebar from './Pages/BlogClassic/BlogClassicRightSidebar';
import BlogDetails from './Pages/BlogDetail/BlogDetails';
import BlogListLeftSidebar from './Pages/BlogList/BlogListLeftSidebar';
import BlogListRightSidebar from './Pages/BlogList/BlogListRightSidebar';
import BlogStandard from './Pages/BlogStandard/BlogStandard';
import BlogStandardLeftSidebar from './Pages/BlogStandard/BlogStandardLeftSidebar';
import BlogStandardRightSidebar from './Pages/BlogStandard/BlogStandardRightSidebar';
import PortfolioGrid2 from './Pages/Protfolio/PortfolioGrid2';
import PortfolioGrid3 from './Pages/Protfolio/PortfolioGrid3';
import PortfolioGrid4 from './Pages/Protfolio/PortfolioGrid4';
import ProtfolioFullWidth from './Pages/Protfolio/ProtfolioFullWidth';
import ShopColumns from './Pages/Shop/ShopColumns';
import ShopColumnsSidebar from './Pages/Shop/ShopColumnsSidebar';

import ShopCart from './Pages/Shop/ShopCart';
import ShopCheckout from './Pages/Shop/ShopCheckout';
import ShopProductDetails from './Pages/Shop/ShopProductDetails';

import ShopLogin from './Pages/Shop/ShopLogin';
import ShopRegister from './Pages/Shop/ShopRegister';
import ShopWishlist from './Pages/Shop/ShopWishlist';

import ShortAccordions from './Pages/ShortCode/ShortAccordions';
import ShortCounter from './Pages/ShortCode/ShortCounter';
import ShortForm from './Pages/ShortCode/ShortForm';
import ShortIconBox from './Pages/ShortCode/ShortIconBox';
import ShortPortfolio from './Pages/ShortCode/ShortPortfolio';
import ShortTabs from './Pages/ShortCode/ShortTabs';
import ShortTeam from './Pages/ShortCode/ShortTeam';
import ShortTestimonial from './Pages/ShortCode/ShortTestimonial';

import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import ScrollToTop from './Element/ScrollToTop';




class Markup extends Component {
    render() {
        return (
            <BrowserRouter >
                <div className="page-wraper">
                    <NotificationContainer />
                    <Switch>
                        <Route path='/' exact component={Homepage} />
                        <Route path='/index-2' exact component={Index2} />
                        <Route path='/index-3' exact component={Index3} />
                        <Route path='/index-4' exact component={Index4} />
                        <Route path='/index-5' exact component={Index5} />
                        <Route path='/index-6' exact component={Index6} />
                        <Route path='/index-7' exact component={Index7} />
                        <Route path='/aboutus' exact component={Aboutus1} />
                        <Route path='/about-2' exact component={Aboutus2} />
                        <Route path='/error-403' exact component={Error403} />
                        <Route path='/error-404' exact component={Error404} />
                        <Route path='/error-405' exact component={Error405} />
                        <Route path='/coming-soon-1' exact component={ComingSoon1} />
                        <Route path='/under-maintenance' exact component={UnderMaintenance} />
                        <Route path='/expertise' exact component={Expertise} />
                        <Route path='/project-management' exact component={ProjectManagement} />
                        <Route path='/our-projects' exact component={OurProjects} />
                        <Route path='/project-details' exact component={ProjectDetails} />
                        <Route path='/team' exact component={Team} />
                        <Route path='/faqs' exact component={Faqs} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/register' exact component={Register} />
                        <Route path='/contact' exact component={Contact} />
                        <Route path='/services/:serviceName' exact component={Service} />
                        <Route path='/services-details' exact component={ServicesDetails} />






                        <Route path='/blog-standard' exact component={BlogStandard} />
                        <Route path='/blog-standard-left-sidebar' exact component={BlogStandardLeftSidebar} />
                        <Route path='/blog-standard-right-sidebar' exact component={BlogStandardRightSidebar} />
                        <Route path='/blog-classic-grid' exact component={BlogClassicGrid} />
                        <Route path='/blog-classic-left-sidebar' exact component={BlogClassicLeftSidebar} />
                        <Route path='/blog-classic-right-sidebar' exact component={BlogClassicRightSidebar} />
                        <Route path='/blog-list-left-sidebar' exact component={BlogListLeftSidebar} />
                        <Route path='/blog-list-right-sidebar' exact component={BlogListRightSidebar} />
                        <Route path='/blog-details' exact component={BlogDetails} />
                        <Route path='/portfolio-full-width' exact component={ProtfolioFullWidth} />
                        <Route path='/portfolio' exact component={OurPortfolio} />
                        <Route path='/portfolio' exact component={PortfolioGrid2} />
                        
                        <Route path='/portfolio-grid-3' exact component={PortfolioGrid3} />
                        <Route path='/portfolio-grid-4' exact component={PortfolioGrid4} />
                        <Route path='/shop-columns' exact component={ShopColumns} />
                        <Route path='/shop-columns-sidebar' exact component={ShopColumnsSidebar} />

                        <Route path='/shop-cart' exact component={ShopCart} />
                        <Route path='/shop-checkout' exact component={ShopCheckout} />
                        <Route path='/shop-product-details' exact component={ShopProductDetails} />
                        <Route path='/shop-wishlist' exact component={ShopWishlist} />
                        <Route path='/shop-login' exact component={ShopLogin} />
                        <Route path='/shop-register' exact component={ShopRegister} />

                        <Route path='/short-icon-box' exact component={ShortIconBox} />
                        <Route path='/short-counter' exact component={ShortCounter} />
                        <Route path='/short-portfolio' exact component={ShortPortfolio} />
                        <Route path='/short-tabs' exact component={ShortTabs} />
                        <Route path='/short-team' exact component={ShortTeam} />
                        <Route path='/short-testimonial' exact component={ShortTestimonial} />
                        <Route path='/short-form' exact component={ShortForm} />
                        <Route path='/short-accordions' exact component={ShortAccordions} />
                    </Switch>
                </div>
                <ScrollToTop />
                <ThemeButton />
            </BrowserRouter>
        )
    }

}

export default Markup;