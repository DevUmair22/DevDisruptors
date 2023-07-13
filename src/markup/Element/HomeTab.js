import classnames from "classnames";
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { TabContent, TabPane } from "reactstrap";

//Images
import pic5 from "./../../images/about/pic5.svg";
import pic6 from "./../../images/about/pic6.svg";
import pic7 from "./../../images/about/pic7.svg";
import pic8 from "./../../images/about/pic8.svg";
import pic9 from "./../../images/about/pic9.svg";

function Para(index) {

  return (
    <>
      <div className="abuot-box p-lr30 " style={{ backgroundColor: "#292929" }}>
        {index.tabIndex == "1" ? (
          <>
            <p>
              Our developers use innovation, automation, and proven project workflow methodologies to build cost-effective high-quality solutions.
              We adjust the complete lifecycle of the project based on the clients' finalized resources and cost and use the latest technologies and
              techniques in DevOps and automated testing to effectively deliver a complete cost-efficient product.{" "}
            </p>
            <p>
              We also deploy effective communication along with smart requirements gathering to build robust systems and processes based on agile
              methodologies to expedite the development process allowing the clients to get a rapid return on their investment.{" "}
            </p>
            <p>
              With both hourly-based and fixed rate models, clients can easily choose the model that fits best with their needs and use our
              latest productivity tracking tools to have a transparent oversight of the work they're paying for.{" "}
            </p>
          </>
        ) : index.tabIndex == "2" ? (
          <>
            <p>
              Our developers are experts in all the major technologies and platforms and have extensive multi-year experience
              working on and completing complex projects on time and within the budget.


              {" "}
            </p>
            <p>
              We have an intensively thorough selection process and grading method that we use to hire and retain the best talent
              in their field. We also provide access to various resources and learning material for our talent to assess and improve
              their expertise and help them upkeep with the continuously changing technological landscape.
              {" "}
            </p>
            <p>
              Throughout these years, we have accumulated domain-level expertise in designing technical solutions for companies
              of various sizes and businesses including healthcare, finance, e-commerce, entertainment, telecommunication, manufacturing, transport, and retail.
              {" "}
            </p>
          </>
        ) : index.tabIndex == "3" ? (
          <>
            <p>
              We have mastered the implementation and integration of standardized processes to steer our development work.
              Our expertise in CI/CD and code workflow helps us in building robust automated mechanisms that prove valuable
              throughout the development and production lifecycles.
              {" "}
            </p>
            <p>
              We believe that there's no one size fits all methodology and we need to modify our processes based on the unique
              needs of each client. We use Agile, Waterfall, and a hybrid respectively as per the requirements of the clients and projects.
              {" "}
            </p>
            <p>
              With continuous tracking and feedback provisioning, the client has real-time control over the processes and could
              ask for modifications to further align the processes with the client's needs.
              {" "}
            </p>
          </>
        ) : index.tabIndex == "4" ? (
          <>
            <p>
              With daily standups and real-time communication channels established, clients could always check in to see the progress of the development underway.
              We use communication tools like Slack, Teams, Zoom, and Google Meet to enable the smoothest communication experience for our clients and teams.

              {" "}
            </p>
            <p>
              Progress of tasks and issues is tracked over Jira and clients can create new issues and tasks or reprioritize the old ones.
              Our developers responsively complete the tasks and keep the clients in the loop on the progress.
              {" "}
            </p>
            <p>
              Any hindrance or issue faced by the client in these processes would be catered to immediately by utilizing the client's feedback to modify the process accordingly.
              {" "}
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

const HomeTab = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="dlab-tabs choseus-tabs">
          <ul
            className="nav row justify-content-center"
            id="myTab"
            role="tablist"
          >
            {/* <li>
							<a className= {classnames({ active : activeTab === '1' }) + ' className if avialble'}  onClick={() => { toggle('1'); }}	
							><span className="title-head">Cost Effectiveness</span></a>
						</li> */}
            <li>
              <Link
                to={"#"}
                className={classnames({ active: activeTab === "1" }) + ""}
                onClick={() => {
                  toggle("1");
                }}
              >
                <span className="title-head">Cost Effectiveness</span>
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className={classnames({ active: activeTab === "2" }) + ""}
                onClick={() => {
                  toggle("2");
                }}
              >
                <span className="title-head">Technology Expertise</span>
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className={classnames({ active: activeTab === "3" }) + ""}
                onClick={() => {
                  toggle("3");
                }}
              >
                <span className="title-head">Working Methodology</span>
              </Link>
            </li>
            <li>
              <Link
                to={"#"}
                className={classnames({ active: activeTab === "4" }) + ""}
                onClick={() => {
                  toggle("4");
                }}
              >
                <span className="title-head">Responsiveness</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="tab-content chosesus-content">
          <div id="cost" className="tab-pane active">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="row p-tb50">
                  <div className="col-lg-6 m-b10 col-md-4 about1-img ">
                    <img src={pic5} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30 " style={{ textAlign: "left" }}>
                      <h4 className="font-weight-500">Cost Effectiveness</h4>
                      <ul className="list-checked primary">
                        <li>
                          <span>Fix and Hourly Based</span>
                        </li>
                        <li>
                          <span>No extra hours will be charged</span>
                        </li>
                        <li>
                          <span>Cost compromised not Quality</span>
                        </li>
                      </ul>
                    </div>
                    <Para tabIndex={activeTab} />
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="row p-tb50">
                  <div className="col-lg-6 col-md-4 about1-img">
                    <img src={pic6} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30" style={{ textAlign: "left" }}>
                      <h4 className="font-weight-500">Technology Expertise</h4>
                      <ul className="list-checked primary">
                        <li>
                          <span>50+ Expert Resources</span>
                        </li>
                        <li>
                          <span>Collaborative Team</span>
                        </li>
                        <li>
                          <span>Efficient Time Management</span>
                        </li>
                      </ul>
                    </div>
                    <Para tabIndex={activeTab} />
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="row p-tb50">
                  <div className="col-lg-6 col-md-4 about1-img">
                    <img src={pic7} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30" style={{ textAlign: "left" }}>
                      <h4 className="font-weight-500">Working Methodology</h4>
                      <ul className="list-checked primary">
                        <li>
                          <span>Dedicated Team Collaboration</span>
                        </li>
                        <li>
                          <span>Daily Scheduled Scrum</span>
                        </li>
                        <li>
                          <span>On-Record Progress Tracking</span>
                        </li>
                      </ul>
                    </div>
                    <Para tabIndex={activeTab} />
                  </div>
                </div>
              </TabPane>
              <TabPane tabId="4">
                <div className="row p-tb50">
                  <div className="col-lg-6 col-md-4 about1-img">
                    <img src={pic8} alt="" />
                  </div>
                  <div className="col-lg-6 col-md-8 text-white">
                    <div className="p-l30" style={{ textAlign: "left" }}>
                      <h4 className="font-weight-500">Responsiveness</h4>
                      <ul className="list-checked primary">
                        <li>
                          <span>Work Efficiency</span>
                        </li>
                        <li>
                          <span>Seamless Integrity</span>
                        </li>
                        <li>
                          <span>Quality on-time</span>
                        </li>
                      </ul>
                    </div>
                    <Para tabIndex={activeTab} />
                  </div>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HomeTab;
