import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Electronics and Embedded Systems" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Electronics & Embedded <br /> Systems Development
                </h2>
                <p>
                  Design and develop innovative embedded solutions for IoT devices, consumer electronics,
                  and industrial applications. From PCB design to firmware development, we create intelligent devices.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src="assets/img/service/embedded-systems.jpg" alt="Embedded Systems" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>Innovative Embedded Solutions for Smart Devices</h4>
                  <p className="mt-3">
                    Our electronics and embedded systems expertise enables us to develop cutting-edge solutions
                    that power the next generation of smart devices. We combine hardware design expertise with
                    firmware development to create efficient, reliable, and secure embedded systems. From concept
                    through production, we manage every aspect of embedded system development.
                  </p>
                  <p className="mt-3">
                    We work with various microcontroller platforms, real-time operating systems, and communication
                    protocols to build solutions tailored to your requirements. Whether you need IoT sensors, smart
                    home devices, or industrial control systems, our team has the expertise to bring your ideas to life
                    and ensure they perform reliably in real-world conditions.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="Embedded Development"
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
                            <h3>Smart Device Innovation</h3>
                            <p className="pt-4">
                              Complete embedded systems from concept to production-ready devices.
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Custom Hardware Design</h6>
                              </div>
                              <p>
                                PCB design and prototyping for your specific application requirements.
                              </p>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Firmware Excellence</h6>
                              </div>
                              <p>
                                Efficient and secure firmware optimized for performance and reliability.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4>Our Embedded Systems Services Include:</h4>
                    <ul className="mt-3" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#9b59b6' }} />PCB Design & Hardware Development</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#9b59b6' }} />Embedded Firmware Development</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#9b59b6' }} />Microcontroller Programming (ARM, AVR, etc.)</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#9b59b6' }} />Smart Device Development & Testing</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#9b59b6' }} />Real-time Operating Systems (RTOS)</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#9b59b6' }} />Prototyping & Production Support</li>
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
