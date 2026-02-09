import { Contact2 } from "@/components/Contact";
import CTA from "@/components/CTA";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout cta={false}>
      <Pagebanner pageName="Contact Us" />
      {/* Contact Info Section Start */}
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-telephone" />
                </div>
                <div className="title">
                  <span style={{ fontSize: '0.9rem' }}>Call Us</span>
                  <h4 style={{ fontSize: '1.1rem' }}>+91 81282 51172</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <div className="title">
                  <span style={{ fontSize: '0.9rem' }}>Our Location</span>
                  <h4 style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>FF/08, Krishna Complex, Opp. alembic nagar, Gorwa, Vadodara, Gujarat, India</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="title">
                  <span style={{ fontSize: '0.9rem' }}>Mail us</span>
                  <h4 style={{ fontSize: '1.05rem' }}>inquiry@netsecinfotech.com</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact-us Section Start */}
      <Contact2 />
      {/* Map Section Start */}
      <div className="office-google-map-wrapper wow fadeInUp">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.70010221681!2d73.17308625!3d22.32210265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1766948300652!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <CTA wrapperClass="cta-wrapper cta-2 style-3 section-bg" />
    </ZotechLayout>
  );
};
export default page;
