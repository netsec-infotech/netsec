import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Software and App Development" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Custom Software & Mobile <br /> Application Solutions
                </h2>
                <p>
                  We design and develop innovative software applications tailored to your business needs.
                  Our expert team delivers scalable, secure, and user-friendly solutions that drive growth.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src="assets/img/service/software-dev.jpg" alt="Software Development" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>Software and App Development Excellence</h4>
                  <p className="mt-3">
                    Our software development services span across web applications, mobile apps (iOS & Android),
                    and enterprise solutions. We use cutting-edge technologies and best practices to create
                    applications that are not only functional but also provide exceptional user experiences.
                    From concept to deployment, we manage every aspect of the development lifecycle.
                  </p>
                  <p className="mt-3">
                    We understand that every business is unique. That's why we develop custom solutions that
                    align with your specific requirements. Whether you need a startup MVP or a complex enterprise
                    application, our experienced team is ready to bring your vision to life.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="Development Process"
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
                            <h3>Key Features & Benefits</h3>
                            <p className="pt-4">
                              We deliver solutions that enhance productivity and user satisfaction.
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Cross-Platform Development</h6>
                              </div>
                              <p>
                                Reach users on web, iOS, and Android with seamless experiences.
                              </p>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Scalable Architecture</h6>
                              </div>
                              <p>
                                Build applications that grow with your business demands.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4>Our Development Services Include:</h4>
                    <ul className="mt-3" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#0066cc' }} />Custom Software Development</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#0066cc' }} />Mobile App Development (iOS & Android)</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#0066cc' }} />Web Application Development</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#0066cc' }} />Cloud-Native Applications</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#0066cc' }} />API Development & Integration</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#0066cc' }} />Application Maintenance & Support</li>
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
