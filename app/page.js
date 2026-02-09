import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import BrandSlider from "@/components/slider/BrandSlider";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import { Fragment } from "react";
const page = () => {
  return (
    <Fragment>
      <ZotechLayout header={1} footer={1}>
        {/* Hero Section Start */}
        <section className="hero-wrapper hero-1 mx-xl-5">
          <div className="shape">
            <img className="shape-1" src="assets/img/world-3.jpg" alt />
          </div>
          <div
            className="hero-bg bg-cover"
            style={{
              backgroundImage: 'url("assets/img/hero/hero-1-1-bg.png")',
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-content text-center">
                  <h1>IT Solutions & Industrial Automation</h1>
                  <p>
                    Complete technology partner for software development, PLC automation, IoT, and electronics.
                  </p>
                  <div className="hero-button mt-4">
                    <Link href="causes" className="theme-btn">
                      Explore More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* features Section Start */}
        <section className="features-wrapper features-1">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-web-development" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      Custom Software Development
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Enterprise-grade solutions
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Cloud-based deployment
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Security & scalability
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-mobile-app" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      Web and Mobile Development
                    </Link>
                  </h4>
                   <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Responsive web design
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Native & hybrid apps
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Performance optimized
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-engineering" />
                  </div>
                  <h4>
                    <Link href="services-details">PLC & Industrial Automation</Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Siemens, Allen Bradley & more
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      SCADA & HMI systems
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Process automation
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="1000ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-connection" />
                  </div>
                  <h4>
                    <Link href="services-details">IoT & Smart Systems</Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Real-time monitoring
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Sensor networks & data analytics
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Cloud integration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section Start */}
        <section className="about-wrapper about-1 section-padding">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-xl-7 col-lg-12 col-md-12 col-12 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <div className="about-images">
                  
                  <div className="image-1">
                    <img src="assets/img/about/17.jpg" alt="img" />
                  </div>
                  <div className="image-2">
                    <img src="assets/img/about/18.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-12 col-md-12 col-12 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="about-content mt-4 ms-xxl-4">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>ABOUT NetSec InfoTech</span>
                    </div>
                    <h2 className="split-text right" style={{ fontSize: '1.8rem' }}>
                      Complete Technology Partner for Software, Automation &amp; Electronics
                    </h2>
                  </div>
                  <p style={{ fontSize: '0.95rem', lineHeight: '1.7' }}>
                    NetSec InfoTech delivers comprehensive IT solutions, industrial automation, and electronics engineering services. 
                  </p>
                  <ul style={{ fontSize: '0.9rem' }}>
                    <li>
                      <i className="fas fa-check-circle" />
                      Enterprise Software & Cloud Solutions
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      PLC Automation, SCADA & HMI Systems
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      IoT Integration & PCB Design
                    </li>
                  </ul>
                  <div className="about-infu">
                    <a href className="theme-btn black-btn">
                      More About Us
                    </a>
                    <div className="contact-us">
                      <img src="assets/img/about/03.png" alt />
                      <div className="text">
                        <span style={{ fontSize: '0.85rem' }}>Call to ask any question</span>
                        <h4 style={{ fontSize: '1.1rem' }}>+91 81282 51172</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service Section Start */}
        <section className="service-wrapper service-1 section-bg section-padding">
          <div className="shapes">
            <img className="shape-1" src="assets/img/shape/shape-1.png" alt />
            <img className="shape-2" src="assets/img/world.png" alt />
          </div>
          <div className="container">
            <div className="service-inner">
              <div className="row">
                <div
                  className="col-xl-12 col-lg-12 col-md-12 col-12  wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  <div className="section-title text-center mb-5">
                    <div className="sub-title">
                      <span>OUR EXPERTISE</span>
                    </div>
                    <h2 className="split-text center">
                      Our Services
                    </h2>
                    <p className="mt-3">
                      Software development, PLC automation, IoT solutions, and electronics design.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Services */}
              <div className="row mt-5">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="single-service-item ">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/15.jpg" alt />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-engineering" />
                      </div>
                      <h4>
                        <Link href="services-details">
                          Software & App Development
                        </Link>
                      </h4>
                      <p style={{ fontSize: '0.85rem' }}>
                        Custom software development • Web & mobile apps • Cloud solutions • System integration
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="single-service-item">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/20.jpg" alt />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-connection" />
                      </div>
                      <h4>
                        <Link href="services-details">Industrial Automation</Link>
                      </h4>
                      <p style={{ fontSize: '0.85rem' }}>
                        Networking and cyber Security • PLC programming (Siemens, Allen Bradley) • SCADA & HMI systems
                      </p>
                      
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div className="single-service-item">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/22.jpg" alt />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-maintenance" />
                      </div>
                      <h4>
                        <Link href="services-details">Electronics & IoT Systems</Link>
                      </h4>
                      <p style={{ fontSize: '0.85rem' }}>
                        IoT solutions & PCB design • Embedded systems development • Real-time monitoring systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section Start */}
        <section className="about-wrapper about-2 mx-xl-5 section-padding pt-0">
          <div
            className="bg-image bg-cover"
            style={{ backgroundImage: "url(assets/img/about/01-bg.png)" }}
          />
          <div className="container">
            <div className="about-content wow fadeInUp" data-wow-delay="300ms">
              <div className="section-title text-center">
                <div className="sub-title sub-title2">
                  <span className="text-white">ABOUT OUR COMPANY</span>
                </div>
                <h2 className="text-white split-text right">
                  Technology Solutions for Business Growth
                </h2>
              </div>
              <p className="text-center">
                Software development, industrial automation, PLC programming, IoT, and electronics design.
              </p>
              <div className="infu text-center d-flex align-items-center justify-content-center">
                <Link href="about" className="theme-btn">
                  Get Started Now
                </Link>
                <div className="contact-us d-flex ">
                  <a href>
                    <i className="fal fa-envelope" />
                  </a>
                  <div className="text text-start">
                    <span>Our Gmail</span>
                    <h4>enquiry@netsecinfotech.com</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Choose-us Section Start */}
        <section className="choose-us-wrapper choose-us-1 section-padding pb-xl-0">
          <div className="shape">
            <img src="assets/img/world.png" alt />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div
                  className="choose-us-images wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <img src="assets/img/why-choose/02-1.png" alt />
                  <div className="shape-img">
                    <img src="assets/img/shape/shape-2.png" alt />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-8 col-md-12 mt-5 pt-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="choose-us-content ms-xl-4 ps-xl-1">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>WHY CHOOSE US</span>
                    </div>
                    <h2 className="split-text right">
                      Why Choose NetSec
                    </h2>
                  </div>
                  <p className="mt-4 pe-xl-5 me-xl-3 text-center text-md-start">
                    End-to-end partner for software, PLC automation, IoT, and electronics with reliable delivery and support.
                  </p>
                  <ul className="mt-3 ps-0 text-center text-md-start">
                    <li className="d-flex align-items-start mb-2">
                      <i className="fas fa-check-circle me-2 text-primary" />
                      <span>Certified expertise across PLC/SCADA, cloud, and embedded systems</span>
                    </li>
                    <li className="d-flex align-items-start mb-2">
                      <i className="fas fa-check-circle me-2 text-primary" />
                      <span>Rapid project delivery with robust QA and cybersecurity practices</span>
                    </li>
                    <li className="d-flex align-items-start">
                      <i className="fas fa-check-circle me-2 text-primary" />
                      <span>24/7 support and maintenance for critical operations</span>
                    </li>
                  </ul>
                  {/* Service Expertise Items */}
                  <div className="row mt-4 pt-2">
                    <div className="col-md-6 mb-3">
                      <div className="service-expertise-item">
                        <div className="icon me-3">
                          <i className="flaticon-web-development" />
                        </div>
                        <div>
                          <h5>Software Development</h5>
                          <p style={{ fontSize: '0.85rem' }} className="mb-0">Enterprise solutions, cloud integration, API development</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="service-expertise-item">
                        <div className="icon me-3">
                          <i className="flaticon-mobile-app" />
                        </div>
                        <div>
                          <h5>Web & Mobile Apps</h5>
                          <p style={{ fontSize: '0.85rem' }} className="mb-0">Responsive web design, native & hybrid apps</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="service-expertise-item">
                        <div className="icon me-3">
                          <i className="flaticon-engineering" />
                        </div>
                        <div>
                          <h5>PLC Automation</h5>
                          <p style={{ fontSize: '0.85rem' }} className="mb-0">Siemens, Allen Bradley, SCADA & HMI systems</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="service-expertise-item">
                        <div className="icon me-3">
                          <i className="flaticon-connection" />
                        </div>
                        <div>
                          <h5>IoT & Electronics</h5>
                          <p style={{ fontSize: '0.85rem' }} className="mb-0">Sensor networks, PCB design, embedded systems</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Brand Section Start */}
        <section className="brand-wrapper brand-1 section-bg section-padding">
          <div className="container">
            <div className="brand-inner text-center text-lg-start">
              <h3>Our Global Partner</h3>
              <BrandSlider />
            </div>
          </div>
        </section>
        
        {/* Process Section Start */}
        <section
          className="process-wrapper process-1 section-padding bg-cover"
          style={{ backgroundImage: "url(assets/img/process/process-bg.jpg)" }}
        >
          <div className="shape">
            <img className="shape-1" src="assets/img/process/shape-1.png" alt />
            <img className="shape-2" src="assets/img/process/shape-2.png" alt />
            <img className="shape-3" src="assets/img/process/shape-3.png" alt />
            <img
              className="shape-4 d-none d-xxl-block"
              src="assets/img/process/shape-4.png"
              alt
            />
            <img
              className="shape-5 d-none d-xxl-block"
              src="assets/img/process/shape-5.png"
              alt
            />
          </div>
          <div className="container">
            <div className="section-title text-center">
              <div className="sub-title sub-title2">
                <span className="text-white">WORKING PROCESS</span>
              </div>
              <h2 className="text-white split-text left">
                Get your it solutions in 3 <br /> easy steps
              </h2>
            </div>
            <div className="process-items d-grid justify-content-between">
              <div
                className="single-process-item text-center mt-xxl-5 pt-xxl-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="icon">01</div>
                <div className="image">
                  <img src="assets/img/process/03.jpeg" alt />
                </div>
                <h4>Understanding Story</h4>
                <p>
                  We analyze your requirements and technical challenges to create a comprehensive solution roadmap.
                </p>
              </div>
              <div
                className="single-process-item text-center wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="icon">02</div>
                <div className="image">
                  <img src="assets/img/process/04.jpeg" alt />
                </div>
                <h4>Start Working</h4>
                <p>
                  Our expert team implements your solution with regular updates and transparent communication.
                </p>
              </div>
              <div
                className="single-process-item text-center mt-xxl-5 pt-xxl-4 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="icon">03</div>
                <div className="image">
                  <img src="assets/img/process/05.jpeg" alt />
                </div>
                <h4>Review &amp; Bug Fix</h4>
                <p>
                  Rigorous testing and quality assurance to ensure your solution meets the highest standards.
                </p>
              </div>
            </div>
          </div>
        </section>
       
        {/* Contact Section Start */}
        <Contact wrapperClass="contact-us-wrapper contact-us-1 section-padding" />
        
      </ZotechLayout>
    </Fragment>
  );
};
export default page;
