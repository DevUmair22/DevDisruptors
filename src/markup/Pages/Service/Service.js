import React from "react";
import { useParams } from 'react-router-dom';
import Footer2 from "../../Element/Footer";
import Footer from "./../../Layout/Footer1";
import Header from "./../../Layout/Header1";
import { data } from "./ServiceContent";
//Images
const iconBlog = [
  {
    icon: <i className="flaticon-diamond" />,
    title: "Passion",
    para: "Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.",
  },
  {
    icon: <i className="flaticon-pen" />,
    title: "Innovation",
    para: "Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.",
  },
  {
    icon: <i className="flaticon-diamond" />,
    title: "Collaboration",
    para: "Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.",
  },
  {
    icon: <i className="flaticon-devices" />,
    title: "Customization",
    para: "Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.",
  },
  {
    icon: <i className="flaticon-devices" />,
    title: "Customization",
    para: "Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.",
  },
  {
    icon: <i className="flaticon-devices" />,
    title: "Customization",
    para: "Passion is the driving force behind our impeccable IT services. Passion is the driving force behind our impeccable IT services.",
  },
];

const iconBox = [
  {
    icon: <i className="flaticon-devices" />,
    id: 1,
    title: "Our Python Development Services",
    description: <p> </p>,
    routes: `./services-details?id=1`,
  },
  {
    icon: <i className="flaticon-notebook" />,
    id: 2,
    title: "Our Node.JS Development Services",
    description: <p> </p>,
    routes: `./services-details?id=2`,
  },
  {
    icon: <i className="flaticon-pen" />,
    id: 3,
    title: "Our React.js Development Services",
    description: <p></p>,
    routes: `./services-details?id=3`,
  },
  {
    icon: <i className="flaticon-bar-chart" />,
    id: 4,
    title: "Our Vue.JS Development Services.",
    description: <p></p>,
    routes: `./services-details?id=4`,
  },
  {
    icon: <i className="flaticon-file" />,
    id: 5,
    title: "Our PHP Development Services.",
    description: <p> </p>,
    routes: `./services-details?id=5`,
  },

  {
    icon: <i className="flaticon-devices" />,
    id: 6,
    title: "Our Angular Development Services",
    description: <p></p>,
    routes: `./services-details?id=6`,
  },
];

// class Service extends Component {
const Service = () => {
  // ServiceData = data.filter((item) => item.title === products)[0];
  // console.log(ServiceData);

  // render() {
  const testing = window.location.search;
  // const urlparam = new URLSearchParams(testing);
  // const products = urlparam.get("id");
  const { serviceName } = useParams()

  return (
    <>
      <Header />

      <div className="page-content bg-white">

        <div className="content-block pt-1">

          <div className="section-full content-inner ">
            <div
              className="section-full content-inner-1 overlay-primary-dark about-service pb-5 pt-5 "
              style={{
                backgroundImage:
                  "linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)",
              }}
            >
              <div className="container">
                {data.map((item, i) => {
                  if (item.id && item.route === serviceName) {
                    const headingData = item.pageHeading;
                    return headingData.map((miniItem, i) => (
                      <div
                        className="section-head text-white text-center"
                        key={i}
                      >
                        <h2
                          className="box-title mx-auto max-w800 text-capitalize pt-4"
                          style={{ marginTop: "1rem" }}
                        >
                          {miniItem.mainTitle}
                          <p style={{ fontWeight: "400" }}>
                            {miniItem.mainDescription}
                          </p>
                        </h2>
                      </div>
                    ));
                  }
                  return null; // Return null if the condition doesn't match
                })}
              </div>

              <div className="container">
                <div className="row text-white">
                  {data.map((item, i) => (
                    <>


                      {item.id && item.route === serviceName ? (
                        <>
                          {item.data.length
                            ? item.data.map((itemm) => (
                              <div
                                className="col-lg-3 col-md-6 col-sm-6 mb-4"
                                key={i}
                              >
                                <div
                                  className="icon-bx-wraper bx-style-1 p-a30 center"
                                  style={{ minHeight: '22rem' }}
                                >

                                  <div className="icon-content">
                                    <h5
                                      className="dlab-tilte text-uppercase"
                                      style={{ color: "#6dbe14" }}
                                    >
                                      {itemm.title}
                                    </h5>
                                    <p>{itemm.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                            : item.data.map((itemm) => (
                              <div
                                className="col-lg-4 col-md-6 col-sm-6 "
                                key={i}
                              >
                                <div
                                  className="icon-bx-wraper bx-style-1 p-a30 center mb-sm-5 mb-sm-4 "
                                // style={{ minHeight: '29rem' }}
                                >

                                  <div className="icon-content">
                                    <h5
                                      className="dlab-tilte text-uppercase"
                                      style={{ color: "#6dbe14" }}
                                    >
                                      {itemm.title}
                                    </h5>
                                    <p>{itemm.description}</p>
                                  </div>
                                </div>
                              </div>
                            ))}{" "}
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>


          </div>




          <div
            className="section-full overlay-primary-dark bg-img-fix "
            style={{
              backgroundImage:
                "linear-gradient(140deg, #EADEDB 20%, #BC70A4 50%, #077F84 75%)",
              zIndex: 5,
              paddingTop: "10rem",
            }}
          >

            <Footer2 />
            <div className="row pt-4">
              <div
                className="col-lg-12 col-md-12 col-sm-12  "
                style={{ backgroundColor: "#6CC000", zIndex: 10 }}
              >
                {" "}
              </div>
            </div>
            <Footer />
          </div>

        </div>

      </div >
    </>
  );
  // }
}
export default Service;
