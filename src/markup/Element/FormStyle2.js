import React,{Fragment, useRef} from 'react';
import emailjs from '@emailjs/browser';
// import {toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure()
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
const FormStyle2=()=>{
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		debugger
	
		emailjs.sendForm('service_1qj3vwd', 'template_igul9qr', form.current, 'ZLeR-68dSKjSqONrJ')
		  .then((result) => {
			  console.log(result.text);
            //   toast.success('successful',)
            NotificationManager.success('Email Send Successfully');
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	  };


		return(
			<Fragment>
				<div className="container">
					<div className="row">
					
						<div className="col-lg-12 col-md-12 m-b30">
							<form className="inquiry-form  dzForm" 
							//  action="script/contact.php"
							ref={form} onSubmit={sendEmail}
							 >
								<div className="dzFormMsg"></div>
								<h3 className="box-title m-t30 m-b40">Let's Convert Your Idea into Reality <span className="bg-primary"></span></h3>
								{/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p> */}
								<div className="row">
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-user text-primary"></i></span>
												<input name="Name" type="text" required className="form-control" placeholder="First Name" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-mobile text-primary"></i></span>
												<input name="Phone" type="text" required className="form-control" placeholder="Phone" />
											</div>
										</div>
									</div>
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-email text-primary"></i></span>
												<input name="Email" type="email" className="form-control" required placeholder="Your Email Id" />
											</div>
										</div>
									</div>
									{/* <div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-check-box text-primary"></i></span>
												<input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-file text-primary"></i></span>
												<input name="dzOther[Subject]" type="text" required className="form-control" placeholder="Upload File" />
											</div>
										</div>
									</div> */}
									<div className="col-lg-12">
										<div className="form-group">
											<div className="input-group">
												<span className="input-group-addon"><i className="ti-agenda text-primary"></i></span>
												<textarea name="Message" rows="4" className="form-control" required placeholder="Tell us about your project or idea"></textarea>
											</div>
										</div>
									</div>
									{/* <div className="col-lg-4">
										<div className="form-group">
											<div className="input-group">
												<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
												<input className="form-control d-none" data-recaptcha="true" required data-error="Please complete the Captcha" />
											</div>
										</div>
									</div> */}
									<div className="col-lg-5">
										<button name="submit" type="submit" value="Submit" className="site-button button-lg"  style={{borderRadius:"10px"}}> <span>Send Email</span> </button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Fragment>
		)
}
export default FormStyle2;