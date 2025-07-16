import React from 'react';

const Whychooseus = () => {
  return (
    <section className="w3l-servicesblock py-5" id="whychoose">
      <div className="container py-lg-5 py-md-4 py-2">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <h5 className="small-title mb-2">Why Choose Us</h5>
            <h3 className="title-style">Strategic Growth Starts with the Right Partner</h3>
            <p className="mt-3">
              With over 28 years of leadership across banking, digital transformation, and business strategy, 
              BAX Consulting Group empowers ambitious enterprises to scale beyond limitations. We design 
              frameworks tailored to your industry, align innovation with compliance, and ensure every 
              investment in AI or digital strategy is backed by measurable ROI and operational excellence.
            </p>

            <div className="row two-grids mt-5 pt-lg-4">
              <div className="col-sm-6 grids_info d-flex">
                <i className="fas fa-cogs"></i>
                <div className="detail ms-3">
                  <h4>Proven Transformation Expertise</h4>
                  <p>We help break through growth barriers with scalable systems and intelligent automation.</p>
                </div>
              </div>
              <div className="col-sm-6 grids_info d-flex mt-sm-0 mt-4">
                <i className="fas fa-shield-alt"></i>
                <div className="detail ms-3">
                  <h4>Risk-Aligned Strategy</h4>
                  <p>From ISO compliance to SIA certification, we integrate safety, ESG, and growth in one vision.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-5 offset-lg-1 text-end mt-lg-0 mt-5 position-relative">
            <img src="/images/gurbax.JPG" alt="Why Choose Us" className="img-fluid radius-image" />
            <div className="imginfo__box">
              <h6 className="imginfo__title">28+</h6>
              <p>Years of Cross-Sector Leadership</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
