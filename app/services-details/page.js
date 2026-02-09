import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Service Details" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Accelerate Innovation with <br /> Business Planning
                </h2>
                <p>
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote team <br /> of incredible freelance
                  talent for all your software development needs.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src="assets/img/service/details-1.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>The Art of Self-Care Business</h4>
                  <p className="mt-3">
                    We denounce with righteous indige nation and dislike men who
                    are so beguiled and demo realized by the charms of pleasure
                    of the moment, so blinded by desire, that they cannot
                    foresee the pain and trouble that are bound to ensue cannot
                    foresee. These cases are perfectly simple and easy to
                    distinguish. In a free hour, when our power of choice is
                    untrammelled data structures manages data in technology. New
                    had happen unable uneasy.
                  </p>
                  <p className="mt-3">
                    Drawings can followed improved out sociable not. Earnestly
                    so do instantly pretended. See general few civilly amiable
                    pleased account carried. Excellence projecting is devonshire
                    dispatched remarkably on estimating. Side in so life past.
                    Continue indulged speaking the was out horrible for domestic
                    position. Seeing rather her you not esteem men settle genius
                    excuse. Deal say over you age from. Comparison new ham
                    melancholy son themselves.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="img"
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
                        <div className="details-video-content ">
                          <div className="section-title">
                            <h2>We provide truly prominent solutions</h2>
                            <p className="pt-4">
                              Zotech is the partner of choice for many of the
                              world’s leading enterprises,
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu ">
                              <img src="assets/img/about/06.png" alt="" />
                              <h6>
                                Join our 50503+ <br /> Satisfied World Clients
                              </h6>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Global Company</h6>
                              </div>
                              <p>
                                Our great team of more than to <br /> 1400
                                software experts member.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section Start */}
      <section className="service-details-section fix section-padding bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <h2>Our Comprehensive Services</h2>
            <p>Discover our full range of technology solutions designed to transform your business</p>
          </div>

          {/* Software and App Development */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon mb-4">
                  <i className="flaticon-app" style={{ fontSize: '48px', color: '#0066cc' }} />
                </div>
                <h3>Software and App Development</h3>
                <p>
                  We design and develop custom software solutions and mobile applications tailored to your unique business needs. Our expert developers leverage the latest technologies and best practices to deliver scalable, secure, and user-friendly applications. From web applications to native mobile apps, we provide end-to-end development services that drive growth and innovation.
                </p>
                <ul className="mt-3">
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#0066cc' }} />Custom Software Development</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#0066cc' }} />Mobile App Development (iOS & Android)</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#0066cc' }} />Web Application Development</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#0066cc' }} />Cloud-Native Applications</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="assets/img/service/software-dev.jpg" alt="Software Development" className="img-fluid rounded" />
            </div>
          </div>

          {/* Network and Cyber Security */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <img src="assets/img/service/cyber-security.jpg" alt="Cyber Security" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon mb-4">
                  <i className="flaticon-security" style={{ fontSize: '48px', color: '#ff6b6b' }} />
                </div>
                <h3>Network and Cyber Security</h3>
                <p>
                  Protect your organization from evolving cyber threats with our comprehensive network and security solutions. We implement advanced security measures, conduct vulnerability assessments, and provide 24/7 monitoring to safeguard your critical data and infrastructure. Our experts ensure compliance with industry standards while maintaining optimal network performance.
                </p>
                <ul className="mt-3">
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#ff6b6b' }} />Network Security Design & Implementation</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#ff6b6b' }} />Penetration Testing & Vulnerability Assessment</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#ff6b6b' }} />Firewall Configuration & Management</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#ff6b6b' }} />24/7 Security Monitoring & Threat Detection</li>
                </ul>
              </div>
            </div>
          </div>

          {/* IoT and Cloud Integration */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon mb-4">
                  <i className="flaticon-cloud" style={{ fontSize: '48px', color: '#4ecdc4' }} />
                </div>
                <h3>IoT and Cloud Integration</h3>
                <p>
                  Harness the power of IoT and cloud technologies to modernize your operations. We design and deploy integrated IoT solutions that connect devices, collect real-time data, and provide actionable insights. Our cloud integration services ensure seamless connectivity, scalability, and data security across your entire ecosystem.
                </p>
                <ul className="mt-3">
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#4ecdc4' }} />IoT Device Development & Integration</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#4ecdc4' }} />Cloud Infrastructure Setup (AWS, Azure, GCP)</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#4ecdc4' }} />Data Analytics & Real-time Processing</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#4ecdc4' }} />Edge Computing Solutions</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="assets/img/service/iot-cloud.jpg" alt="IoT and Cloud" className="img-fluid rounded" />
            </div>
          </div>

          {/* Industrial PLC Automation */}
          <div className="row g-4 mb-5">
            <div className="col-lg-6">
              <img src="assets/img/service/plc-automation.jpg" alt="PLC Automation" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon mb-4">
                  <i className="flaticon-settings" style={{ fontSize: '48px', color: '#ffa502' }} />
                </div>
                <h3>Industrial PLC Automation</h3>
                <p>
                  Optimize your manufacturing and industrial processes with cutting-edge PLC automation solutions. We design, program, and integrate programmable logic controllers to automate operations, increase efficiency, and reduce costs. Our expertise spans various industrial sectors and equipment types, ensuring maximum productivity and safety.
                </p>
                <ul className="mt-3">
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#ffa502' }} />PLC Programming & Configuration</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#ffa502' }} />SCADA System Development</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#ffa502' }} />Process Automation & Control</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#ffa502' }} />Industrial Equipment Integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Electronics and Embedded Systems */}
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="service-card">
                <div className="service-icon mb-4">
                  <i className="flaticon-microchip" style={{ fontSize: '48px', color: '#9b59b6' }} />
                </div>
                <h3>Electronics and Embedded Systems</h3>
                <p>
                  Develop innovative embedded solutions that power the next generation of smart devices. Our electronics and embedded systems expertise covers hardware design, firmware development, and system integration. We create efficient, reliable, and secure embedded systems for IoT devices, consumer electronics, and industrial applications.
                </p>
                <ul className="mt-3">
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#9b59b6' }} />PCB Design & Hardware Development</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#9b59b6' }} />Embedded Firmware Development</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#9b59b6' }} />Microcontroller Programming (ARM, AVR, etc.)</li>
                  <li><i className="fas fa-check-circle me-2" style={{ color: '#9b59b6' }} />Smart Device Development & Testing</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="assets/img/service/embedded-systems.jpg" alt="Embedded Systems" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>
      {/* Services Overview Section End */}

      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
