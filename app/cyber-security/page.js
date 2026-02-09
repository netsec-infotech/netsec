import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Network and Cyber Security" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Advanced Network & Cyber <br /> Security Solutions
                </h2>
                <p>
                  Protect your organization from evolving cyber threats with comprehensive security solutions.
                  We provide defense strategies, threat detection, and 24/7 monitoring to safeguard your assets.
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src="assets/img/service/cyber-security.jpg" alt="Cyber Security" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>Comprehensive Cybersecurity Framework</h4>
                  <p className="mt-3">
                    In today's digital landscape, cybersecurity is not an option—it's a necessity. Our team of
                    certified security experts implements multi-layered defense strategies to protect your network,
                    data, and systems from sophisticated threats. We conduct thorough vulnerability assessments,
                    penetration testing, and implement robust security controls tailored to your infrastructure.
                  </p>
                  <p className="mt-3">
                    We understand the critical nature of your business operations. Our 24/7 security monitoring
                    and threat detection systems ensure that potential threats are identified and neutralized before
                    they can cause harm. We also ensure your organization remains compliant with industry standards
                    and regulatory requirements.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="Security Monitoring"
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
                            <h3>Security Excellence</h3>
                            <p className="pt-4">
                              Multi-layered defense against emerging threats and vulnerabilities.
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Threat Detection</h6>
                              </div>
                              <p>
                                Advanced monitoring systems to detect and respond to threats in real-time.
                              </p>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>Compliance Management</h6>
                              </div>
                              <p>
                                Ensure compliance with GDPR, HIPAA, PCI-DSS and other standards.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <h4>Security Services We Offer:</h4>
                    <ul className="mt-3" style={{ listStyle: 'none', paddingLeft: '0' }}>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ff6b6b' }} />Network Security Design & Implementation</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ff6b6b' }} />Penetration Testing & Vulnerability Assessment</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ff6b6b' }} />Firewall Configuration & Management</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ff6b6b' }} />24/7 Security Monitoring & Threat Detection</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ff6b6b' }} />Incident Response & Recovery</li>
                      <li className="mb-2"><i className="fas fa-check-circle me-3" style={{ color: '#ff6b6b' }} />Security Awareness Training</li>
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
