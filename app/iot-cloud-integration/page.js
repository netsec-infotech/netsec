import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="IoT and Cloud Integration" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  IoT and Cloud <br /> Integration Solutions
                </h2>
                <p>
                  Connect your devices and leverage cloud computing to unlock real-time insights and scalability.
                  Our IoT and cloud integration services enable seamless connectivity and data-driven decision making.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src="assets/img/service/iot-cloud.jpg" alt="IoT and Cloud" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>Transforming Operations with IoT and Cloud</h4>
                  <p className="mt-3">
                    The Internet of Things combined with cloud computing creates powerful opportunities for
                    businesses to innovate and scale. We design and deploy comprehensive IoT solutions that connect
                    devices, collect real-time data, and provide actionable insights. Our cloud integration expertise
                    ensures your systems are secure, scalable, and cost-effective.
                  </p>
                  <p className="mt-3">
                    From sensor networks to edge computing and advanced analytics, we provide end-to-end solutions
                    that enable you to harness the power of connected devices and cloud infrastructure. Whether you're
                    monitoring equipment, tracking assets, or optimizing processes, our IoT platforms deliver the
                    reliability and performance your business demands.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="IoT Integration"
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
                            <h3>Connected Intelligence</h3>
                            <p className="pt-4">
                              Harness real-time data for smarter business decisions.
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Real-time Analytics</h6>
                              </div>
                              <p>
                                Process and analyze IoT data instantly for immediate insights.
                              </p>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Scalable Infrastructure</h6>
                              </div>
                              <p>
                                Cloud platforms that grow with your IoT deployments.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4>Our IoT & Cloud Services Include:</h4>
                    <ul className="mt-3" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#4ecdc4' }} />IoT Device Development & Integration</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#4ecdc4' }} />Cloud Infrastructure Setup (AWS, Azure, GCP)</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#4ecdc4' }} />Data Analytics & Real-time Processing</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#4ecdc4' }} />Edge Computing Solutions</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#4ecdc4' }} />Cloud Migration Services</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#4ecdc4' }} />IoT Platform & Ecosystem Management</li>
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
