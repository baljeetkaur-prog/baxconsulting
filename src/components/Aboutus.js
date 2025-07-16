import React from 'react';
import { Link } from 'react-router-dom';
import Whychooseus from './Whychooseus';
import Progresssection from './Progresssection';
import Testimonials from './Testimonials';

const About = () => {
  return (
    <>
      <section className="inner-banner py-5">
        <div className="w3l-breadcrumb py-lg-5">
          <div className="container pt-5 pb-sm-4">
            <h4 className="inner-text-title font-weight-bold pt-sm-5 pt-4">About Us</h4>
            <ul className="breadcrumbs-custom-path">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="active">
                <i className="fas fa-angle-right mx-2"></i>About
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w3l-about-2 py-5">
        <div className="container py-md-5 py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 about-2-secs-left">
              <h5 className="small-title mb-2">About Us</h5>
              <h3 className="title-style mb-2">Tailoring Strategic Growth for Future-Ready Businesses</h3>
              <p>
                At BAX Consulting Group, we don’t offer generic solutions—we build strategic frameworks that are
                engineered for your success. From digital evolution to financial agility, we help companies unlock
                their full potential in an ever-changing market landscape.
              </p>
              <ul className="list-about-2 mt-sm-4 mt-3">
                <li className="py-1">
                  <i className="far fa-check-square"></i> Customized strategies for sustainable scalability
                </li>
                <li className="py-2">
                  <i className="far fa-check-square"></i> Industry insight, digital expertise, and financial acumen
                </li>
              </ul>
              <Link className="btn btn-style mt-lg-5 mt-4" to="/services">
                View Our Services
              </Link>
            </div>
            <div className="col-lg-6 about-2-secs-right mt-lg-4 mt-5">
              <img src="/images/about2.jpg" alt="About" className="img-fluid radius-image" />
            </div>
          </div>
        </div>
      </section>

      <section className="w3l-grids-block pb-5 pt-4" id="features">
        <div className="container pb-lg-5 pb-md-4 pb-2">
          <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "600px" }}>
            <h5 className="small-title mb-2">Our Features</h5>
            <h3 className="title-style">Delivering What Modern Businesses Need</h3>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-10">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-business-time"></i>
                  <h3 className="mt-3 mb-2">Strategic Market Foresight</h3>
                  <p>We translate real-time data into actionable business intelligence for competitive advantage.</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-md-0 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fab fa-accusoft"></i>
                  <h3 className="mt-3 mb-2">Agile Startup Acceleration</h3>
                  <p>We design lean, tech-enabled startup launchpads for fast execution and stronger investor value.</p>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 mt-lg-0 mt-4">
              <div className="bottom-block">
                <a href="#features" className="d-block">
                  <i className="fas fa-chart-line"></i>
                  <h3 className="mt-3 mb-2">Sustainable Growth Systems</h3>
                  <p>From internal workflows to market positioning, we optimize for consistent long-term growth.</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ margin: '8px auto', display: 'block', textAlign: 'center' }}></div>
      <Whychooseus />
      <Progresssection />
      <Testimonials />

      <section className="w3l-team py-5" id="team">
  <div className="container py-lg-5 py-md-4 py-2">
    <div className="title-main text-center mx-auto mb-md-5 mb-4" style={{ maxWidth: "700px" }}>
      <h5 className="small-title mb-2">Expert People</h5>
      <h3 className="title-style">Our Team Members</h3>
    </div>
    <div className="row justify-content-center text-center">
      {[
        {
          name: "Gurbax Singh",
          role: "Managing Director",
          img: "teamgurbax.JPG",
          linkedin: "https://www.linkedin.com/company/106282831"
        },
        {
          name: "Gergana Stefanova",
          role: "Business Associate",
          img: "businessassociate1.jpeg",
          linkedin: "https://www.linkedin.com/in/gergana-stefanova-449887239"
        },
        {
          name: "Nadia V.",
          role: "Business Associate",
          img: "businessassociate2.jpeg",
          linkedin: "https://www.linkedin.com/in/nadia-v-a6402589"
        },
      ].map((member, index) => (
        <div key={index} className="team-info col-md-4 col-sm-6 mt-5">
          <div className="column position-relative">
            <a href="#url"><img src={`/images/${member.img}`} alt={member.name} className="img-fluid" /></a>
          </div>
          <h4><a href="#team">{member.name}</a></h4>
          <p>{member.role}</p>
          <div className="team-info">
            <div className="caption">
              <div className="social-icons-section text-center">
                <a className="linkedin" href={member.linkedin} target="_blank" rel="noreferrer">
                  <span className="fab fa-linkedin-in"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default About;
