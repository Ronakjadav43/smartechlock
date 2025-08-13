export default function QuoteSection() {
  return (
    <>
      <div className="container">
        <hr className="bdr-color" />
      </div>
      <div className="tp-quote-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 m-auto">
              <div className="tp-section-box tp-section-box-2 p-relative text-center mb-45">
                <span className="tp-section-subtitle d-inline-block pre mb-10">get a quote</span>
                <h2 className="tp-section-title"> Meet Our Best Program For Your Best Results</h2>
              </div>
            </div>
          </div>
          <div className="select-main">
            <div className="row">
              <div className=" col-xl-4 col-lg-4 col-md-6">
                <div className="select-item">
                  <div className="nice-select form-select-lg mb-3 false" role="button" tabIndex={0}>
                    <span className="current">CCTV Camera</span>
                    <ul className="list" role="menubar">
                      <li data-value="CCTV Camera" className="option selected focus" role="menuitem">
                        CCTV Camera
                      </li>
                      <li data-value="One" className="option false" role="menuitem">
                        One
                      </li>
                      <li data-value="Two" className="option false" role="menuitem">
                        Two
                      </li>
                      <li data-value="Three" className="option false" role="menuitem">
                        Three
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="select-icon-main">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="tp-header-contact-icon select-text-size d-flex align-items-center mb-20">
                  <div>
                    <a href="#">
                      <i className="fas fa-alarm-clock" />
                    </a>
                  </div>
                  <div className="tp-header-icon-info">
                    <label>Free Quote</label>
                    <a href="tel:Within24/7Hours">{/* */}Within 24/7 Hours</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="tp-header-contact-icon select-text-size d-flex align-items-center mb-20">
                  <div>
                    <a href="#">
                      <i className="fas fa-calendar-alt" />
                    </a>
                  </div>
                  <div className="tp-header-icon-info">
                    <label>Same Day</label>
                    <a href="tel:ServiceAvailable">{/* */}Service Available</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="tp-header-contact-icon select-text-size d-flex align-items-center mb-20">
                  <div>
                    <a href="#">
                      <i className="far fa-envelope-open-text" />
                    </a>
                  </div>
                  <div className="tp-header-icon-info">
                    <label>Support Email</label>
                    <a href="tel:info@webmail.com"> {/* */}info@webmail.com</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="tp-header-contact-icon select-text-size d-flex align-items-center mb-20">
                  <div>
                    <a href="#">
                      <i className="fas fa-phone" />
                    </a>
                  </div>
                  <div className="tp-header-icon-info">
                    <label>Friendly Advice</label>
                    <a href="tel:55589633333"> {/* */}555 896 333 33</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
