export default function AboutSection() {
  return (
    <div className="tp-about-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-about-wapper3 mb-30">
              <div className="ab-main-img">
                <img className="ab-1st-img" src="assets/img/about/about-main-2.jpg" alt="theme-pure" />
              </div>
              <div className="ab-sec-img">
                <img className="" src="assets/img/about/about-main-img.jpg" alt="theme-pure" />
              </div>
              <div className="ab-third-img d-none d-md-block">
                <img className="" src="assets/img/about/ab-main-small.jpg" alt="theme-pure" />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-ab-wrapper-3 pt-55 pl-50 mb-30">
              <div className="tp-section-box tp-section-box-2 mb-40  p-relative">
                <span className="tp-section-subtitle right d-inline-block">About Us</span>
                <h2 className="tp-section-title mb-20">Get Best CCTV Solutions For House</h2>
                <p className="p-text">
                  Bandwidth has historically been very unequally distributed worldwide, with increasing concentration in
                  the digital age.
                </p>
              </div>
              <div className="tp-ab-fe-box mb-40">
                <div className="about-feature-list d-flex align-items-center mb-20">
                  <div className="about-icon mr-25">
                    <i className="flaticon-web-security" />
                  </div>
                  <div className="about-feature-text">
                    <h5 className="m-0 mb-5">Private &amp; Personal Security</h5>
                    <p className="m-0">Bank &amp; Institutions Solution</p>
                  </div>
                </div>
                <div className="about-feature-list d-flex align-items-center">
                  <div className="about-icon mr-25">
                    <i className="flaticon-school" />
                  </div>
                  <div className="about-feature-text">
                    <h5 className="m-0 mb-5">We believe the value that our functions add to abusiness.</h5>
                    <p className="m-0">We believe the value that our functions add to abusiness.</p>
                  </div>
                </div>
              </div>
              <div className="tp-about-fea-signature d-flex align-items-center">
                <div className="mr-30 mb-10">
                  <a className="tp-btn-border" href="about">
                    {" "}
                    Learn More <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
                <div className="about-signature d-flex align-items-center mb-10">
                  <img src="assets/img/about/ab-small3.png" alt="theme-pure" />
                  <div className="ab-meta-content ml-15">
                    <h6 className="m-0 ab-meta-title">Salim Rana</h6>
                    <span className="ab-meta-subtitle">Head Of Idea</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
