import React from "react";
import { Link } from "react-router-dom";
const Footer2 = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div
            className="col-lg-5 col-md-5 content-inner chosesus-content text-white"
            style={{ textAlign: "left" }}
          >
            <h2 className="box-title m-b15 ">Get In Touch</h2>
            <p className="font-16 op8">
              We would love to hear from you.
              <br /> Please contact us by email for any inquiries.
            </p>
            {/* <p className="font-16 op8">
              Please contact us by email for any inquiries.
            </p> */}
            <div className="widget_getintuch">
              <div className="row py-2 px-2">
                <div className="col-2 icon-md ">
                  <i className="ti-email"></i>
                </div>
                <div className="col-10 px-0">
                  <strong>email</strong>{" "}
                  <p
                    className="m-b0"
                    onClick={() =>
                      (window.location.href =
                        "mailto:contact@devdisruptors.com")
                    }
                    style={{ cursor: "pointer" }}
                  >
                    contact@devdisruptors.com
                  </p>{" "}
                </div>
              </div>
              <div className="row py-2 px-2">
                <div className="col-2 icon-md ">
                  <i className="ti-location-pin"></i>
                </div>
                <div className="col-10 px-0">
                  <strong>address</strong> <p>DevDisruptors LLC,
563 High Street
Suite B <br/>PMB 1137
Burlington, NJ 08016<br/>
USA</p>{" "}
                </div>
              </div>

              {/* <div className="row px-2">
                <Link
                  onClick={() => {
                    window.open("http://www.google.com");
                  }}
                  className="site-button google-plus circle mx-2"
                >
                  <i
                    className="fa fa-google-plus text-white"
                    style={{ position: "sticky" }}
                  ></i>
                </Link>

                <Link
                  onClick={() => {
                    window.open("  https://www.linkedin.com");
                  }}
                  className="site-button linkedin circle mx-2 "
                >
                  <i
                    className="fa fa-linkedin text-white"
                    style={{ position: "sticky" }}
                  ></i>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="col-2"></div>
          <div
            className="col-lg-5 col-md-5 content-inner chosesus-content text-white"
            style={{ textAlign: "left" }}
          >
            {" "}
            <h3 className="font-weight-500 m-b30 op6 ">
              Why Choose DevDisruptors?
            </h3>
            {/* <h4 className=""> What you will get:</h4> */}
            <ul className="list-checked primary ">
              <li>
                <span>Quality, Time & Price</span>
              </li>
              <li>
                <span>Excellent Track Record</span>
              </li>
              <li>
                <span>Dedication to Quality & Innovation</span>
              </li>
              <li>
                <span>Expert Team</span>
              </li>
              <li>
                <span>Tailored Solutions</span>
              </li>
            </ul>
            <div>
              <Link to={"/aboutus"}>
                <button
                  className="site-button col"
                  style={{
                    borderRadius: "10px",
                    cursor: "pointer",
                    width: "50%",
                  }}
                >
                  {" "}
                  <span className="text-lg">Learn More</span>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
