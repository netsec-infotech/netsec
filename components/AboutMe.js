const AboutMe = ({
  wrapperClass = "about-wrapper about-1 style-2 about-page section-padding",
  img1 = "assets/img/about/09.jpg",
  img2 = "assets/img/about/10.png",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="container">
        <div className="row g-5">
          <div
            className="col-xxl-7 col-xl-6 col-lg-12 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="about-images-2">
              <img
                className="shape-1"
                src="assets/img/about/shape-1.png"
                alt=""
              />
              <img
                className="shape-2"
                src="assets/img/shape/shape-1.png"
                alt=""
              />
              <div className="image-1">
                <img src={img1} alt="img" />
              </div>
              <div className="image-2">
                <img src={img2} alt="img" />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-6 col-lg-12 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="about-content mt-xxl-5 mt-xl-0 mt-5 ms-xxl-2">
              <div className="section-title">
                <div className="sub-title">
                  <span>ABOUT OUR COMPANY</span>
                </div>
                <h2 style={{ fontSize: '1.8rem' }}>
                  Accelerate Innovation with <br /> World-Class IT Solutions, Industrial Automation <br /> &amp; Electronics Solutions
                </h2>
              </div>
              <p>
                Our expertise covers software development, industrial automation, PLC programming, IoT solutions, and electronics design.
              </p>
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Website &amp; Mobile application design &amp; Development
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  PLC Automation &amp; Industrial Control Systems
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  IoT Solutions &amp; Industry 4.0 Integration
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Electronics Design &amp; Embedded Systems Development
                </li>
              </ul>
              
              <div className="about-infu">
                <a href="" className="theme-btn">
                  Get In Touch
                </a>
                <div className="contact-us">
                  <img src="assets/img/about/03.png" alt="" />
                  <div className="text">
                    <span className="text-white opacity-50">
                      Call to ask any question
                    </span>
                    <h4 className="text-white">+91 81282 51172</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
