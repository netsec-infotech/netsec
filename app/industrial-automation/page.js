import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Industrial PLC Automation" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Industrial PLC <br /> Automation Solutions
                </h2>
                <p>
                  Optimize manufacturing and industrial processes with advanced PLC automation.
                  Increase efficiency, reduce costs, and enhance safety with cutting-edge control systems.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src="assets/img/service/plc-automation.jpg" alt="PLC Automation" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>Advanced PLC Automation for Modern Manufacturing</h4>
                  <p className="mt-3">
                    We design and implement comprehensive PLC automation solutions that streamline your industrial
                    operations. Our expertise spans programming, system integration, and process optimization across
                    various manufacturing sectors. From assembly lines to process control systems, we deliver solutions
                    that maximize productivity while maintaining the highest safety standards.
                  </p>
                  <p className="mt-3">
                    Our engineers work closely with your team to understand your specific operational challenges and
                    design automation solutions that fit seamlessly into your existing infrastructure. We leverage
                    industry-leading PLC platforms and control systems to ensure reliability, scalability, and
                    long-term support for your automation investments.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="Automation Process"
                          />
                          <div className="video-box">
                            <a
                              href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                              className="video-button video-popup"
                            >
                              <i className="fas fa-play" />
                              <i className="video-button-ripple" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="details-video-content">
                          <div className="section-title">
                            <h3>Industrial Excellence</h3>
                            <p className="pt-4">
                              Proven automation solutions for manufacturing and industrial control.
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Process Optimization</h6>
                              </div>
                              <p>
                                Maximize efficiency and reduce production costs through intelligent automation.
                              </p>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Safety Compliance</h6>
                              </div>
                              <p>
                                Ensure operator safety and regulatory compliance with robust control systems.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4>Our Industrial Automation Services Include:</h4>
                    <ul className="mt-3" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ffa502' }} />PLC Programming & Configuration</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ffa502' }} />SCADA System Development</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ffa502' }} />Process Automation & Control</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ffa502' }} />Industrial Equipment Integration</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ffa502' }} />HMI/SCADA Interface Design</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ffa502' }} />System Maintenance & Technical Support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
