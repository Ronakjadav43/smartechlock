export default function Home() {
  return (
    <div id="__next">
      <header>
        <div className="header-notification-area notification-color grey-bg d-none d-lg-block pl-25 pr-25">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <div className="notification-text">
                  <p className="m-0">
                    <b>Limited Time Offer:</b> Shop online and get free no-contact delivery
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 d-flex justify-content-end">
                <div className="tp-top-menu">
                  <ul>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
                <div className="tp-top-menu header-lan-menu ml-30">
                  <ul>
                    <li>
                      <a href="#">
                        English <i className="fal fa-angle-down" />
                      </a>
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">Arabic</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-area-flat pl-25 pr-25">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-5 col-7">
                <div className="logo">
                  <a href="index.html">
                    <img src="assets/img/logo/logo-3.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-xl-7 d-none d-xl-block">
                <div className="tp-main-menu text-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li className="has-dropdown">
                        <a href="index.html">Home</a>
                        <ul className="submenu">
                          <li>
                            <a href="index.html">Home Style 01</a>
                          </li>
                          <li>
                            <a href="home-2">Home Style 02</a>
                          </li>
                          <li>
                            <a href="home-3">Home Style 03</a>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <a href="about">About</a>{" "}
                      </li>
                      <li className="has-dropdown">
                        <a href="service">Service</a>
                        <ul className="submenu">
                          <li>
                            <a href="service">Service</a>
                          </li>
                          <li>
                            <a href="service-details">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="team">Pages</a>
                        <ul className="submenu">
                          <li>
                            <a href="team">Team</a>
                          </li>
                          <li>
                            <a href="team-details">Team Details</a>
                          </li>
                          <li>
                            <a href="portfolio">Portfolio</a>
                          </li>
                          <li>
                            <a href="portfolio-details">Portfolio Details</a>
                          </li>
                          <li>
                            <a href="faq">FAQ Page</a>
                          </li>
                          <li>
                            <a href="shop">Shop</a>
                          </li>
                          <li>
                            <a href="shop-details">Shop Details</a>
                          </li>
                          <li>
                            <a href="cart">cart</a>
                          </li>
                          <li>
                            <a href="checkout">Checkout</a>
                          </li>
                          <li>
                            <a href="#">404</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="blog">Blog</a>
                        <ul className="submenu">
                          <li>
                            <a href="blog">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="">
                        <a href="contact">Contact</a>{" "}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-7 col-5">
                <div className="search-main p-relative">
                  <div className="tp-header-right">
                    <a href="#" className="tp-header-icon tp-h-search p-relative ">
                      <i className="fal fa-search" />
                      <i className="fal fa-times" />
                    </a>
                    <a className="tp-header-icon d-none d-xxl-inline-block" href="cart">
                      <i className="fal fa-shopping-cart" />
                    </a>
                    <a className="tp-btn-2 ml-20 d-none d-md-inline-block" href="contact">
                      Get In Touch
                    </a>
                    <button className="tp-menu-toggle tp-header-icon ml-20 d-xl-none">
                      <i className="far fa-bars" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="tp-sidebar-menu false">
        <button className="sidebar-close">
          <i className="fal fa-times" />
        </button>
        <div className="side-logo mb-20">
          <a href="index.html">
            <img src="assets/img/logo/logo.png" alt="logo" />
          </a>
        </div>
        <div className="mobile-menu mean-container">
          <nav className="mean-nav d-xl-none">
            <ul>
              <li className="has-dropdown">
                <a href="index.html">Home</a>
                <ul className="submenu" style={{ display: "none" }}>
                  <li>
                    <a href="index.html">Home Style 01</a>
                  </li>
                  <li>
                    <a href="home-2">Home Style 02</a>
                  </li>
                  <li>
                    <a href="home-3">Home Style 03</a>
                  </li>
                </ul>
                <a className="mean-expand " style={{ fontSize: 18, cursor: "pointer" }}>
                  <i className="fal fa-plus" />
                </a>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li className="has-dropdown">
                <a href="service">Service</a>
                <ul className="submenu" style={{ display: "none" }}>
                  <li>
                    <a href="service">Service</a>
                  </li>
                  <li>
                    <a href="service-details">Service Details</a>
                  </li>
                </ul>
                <a className="mean-expand " style={{ fontSize: 18, cursor: "pointer" }}>
                  <i className="fal fa-plus" />
                </a>
              </li>
              <li className="has-dropdown">
                <a href="team">Pages</a>
                <ul className="submenu" style={{ display: "none" }}>
                  <li>
                    <a href="team">Team</a>
                  </li>
                  <li>
                    <a href="team-details">Team Details</a>
                  </li>
                  <li>
                    <a href="portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="portfolio-details">Portfolio Details</a>
                  </li>
                  <li>
                    <a href="faq">FAQ Page</a>
                  </li>
                  <li>
                    <a href="shop">Shop</a>
                  </li>
                  <li>
                    <a href="shop-details">Shop Details</a>
                  </li>
                  <li>
                    <a href="cart">cart</a>
                  </li>
                  <li>
                    <a href="checkout">Checkout</a>
                  </li>
                  <li>
                    <a href="#">404</a>
                  </li>
                </ul>
                <a className="mean-expand " style={{ fontSize: 18, cursor: "pointer" }}>
                  <i className="fal fa-plus" />
                </a>
              </li>
              <li className="has-dropdown">
                <a href="blog">Blog</a>
                <ul className="submenu" style={{ display: "none" }}>
                  <li>
                    <a href="blog">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details">Blog Details</a>
                  </li>
                </ul>
                <a className="mean-expand " style={{ fontSize: 18, cursor: "pointer" }}>
                  <i className="fal fa-plus" />
                </a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="sidebar-title">
            <h3>CONTACT US</h3>
          </div>
          <ul className="sidebar-list">
            <li>27 Division St, New York</li>
            <li>+1 800 123 456 78</li>
            <li>sectox@mail.com</li>
          </ul>
          <div className="tp-sidebar-social">
            <a href="http://facebook.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="http://twitter.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter" />
            </a>
            <a href="https://www.behance.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-behance" />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-youtube" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
      <div className="body-overlay false" />
      <div className="tp-slider-area">
        <div className="slider-active slider-arrow-3-style p-relative">
          <button type="button" className="slick-prev slick-arrow">
            <i className="flaticon-left-arrow" />{" "}
          </button>
          <button type="button" className="slick-next slick-arrow">
            <i className="flaticon-right-arrow" />{" "}
          </button>
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="slick-list">
              <div className="slick-track" style={{ width: "500%", left: "-100%" }}>
                <div
                  data-index={0}
                  className="slick-slide slick-active slick-current"
                  tabIndex={-1}
                  aria-hidden="false"
                  style={{
                    outline: "none",
                    width: "20%",
                    position: "relative",
                    left: 0,
                    opacity: 1,
                    transition: "opacity 500ms ease, visibility 500ms ease",
                  }}
                >
                  <div>
                    <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                      <div
                        className="tp-slider-item p-relative tp-slider-height tp-slider-overlay-3 d-flex align-items-center"
                        style={{
                          backgroundImage: "url(assets/img/slider/slider3.jpg)",
                        }}
                      >
                        <div className="container">
                          <div className="row text-center">
                            <div className="col-xl-8 m-auto">
                              <div className="tp-slider-content tp-slider-content-two tp-slider-content-three">
                                <div className="tp-slider-big-text d-none d-xl-block">
                                  <h2>CCTV</h2>
                                </div>
                                <span className="tp-slider-sub-title p-0">Best cctv solution in us</span>
                                <h2 className="tp-slider-title">Secure Your Family From All Issues</h2>
                              </div>
                              <div className="tp-slide-btn-box-3 d-flex flex-wrap justify-content-center">
                                <div className="slider-btn">
                                  <a className="tp-btn-white" href="contact">
                                    Get In Touch
                                  </a>
                                </div>
                                <div className="slider-btn">
                                  <a className="tp-btn" href="404-2">
                                    Our Services
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-index={1}
                  className="slick-slide"
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{
                    outline: "none",
                    width: "20%",
                    position: "relative",
                    left: "-20px",
                    opacity: 0,
                    transition: "opacity 500ms ease, visibility 500ms ease",
                  }}
                >
                  <div>
                    <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                      <div
                        className="tp-slider-item p-relative tp-slider-height tp-slider-overlay-3 d-flex align-items-center"
                        style={{
                          backgroundImage: "url(assets/img/slider/slider4.jpg)",
                        }}
                      >
                        <div className="container">
                          <div className="row text-center">
                            <div className="col-xl-8 m-auto">
                              <div className="tp-slider-content tp-slider-content-two tp-slider-content-three">
                                <div className="tp-slider-big-text d-none d-xl-block">
                                  <h2>CCTV</h2>
                                </div>
                                <span className="tp-slider-sub-title p-0">Best cctv solution in us</span>
                                <h2 className="tp-slider-title">Secure Your Family From All Issues</h2>
                              </div>
                              <div className="tp-slide-btn-box-3 d-flex flex-wrap justify-content-center">
                                <div className="slider-btn">
                                  <a className="tp-btn-white" href="contact">
                                    Get In Touch
                                  </a>
                                </div>
                                <div className="slider-btn">
                                  <a className="tp-btn" href="404-2">
                                    Our Services
                                  </a>
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
          </div>
        </div>
      </div>
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
                    Bandwidth has historically been very unequally distributed worldwide, with increasing concentration
                    in the digital age.
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
      <div className="service-area">
        <div className="service-tab-bg pt-115" style={{ backgroundImage: "url(assets/img/services/tab-bg.jpg)" }}>
          <div className="container">
            <div className="tp-section-box tp-section-box-2 p-relative mb-45 text-center">
              <span className="tp-section-subtitle d-inline-block pre mb-10">services</span>
              <h2 className="tp-section-title">What We Provide</h2>
            </div>
            <div className="service-tab-info">
              <nav>
                <div className="nav tp-service-tab justify-content-center mb-35" id="nav-tab" role="tablist">
                  <button
                    className="nav-links active"
                    id="nav-camera-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-camera"
                    type="button"
                    role="tab"
                    aria-controls="nav-camera"
                    aria-selected="false"
                  >
                    IP Camera
                  </button>
                  <button
                    className="nav-links"
                    id="nav-cctv-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-cctv"
                    type="button"
                    role="tab"
                    aria-controls="nav-cctv"
                    aria-selected="false"
                  >
                    IP CCTV
                  </button>
                  <button
                    className="nav-links"
                    id="nav-security-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-security"
                    type="button"
                    role="tab"
                    aria-controls="nav-security"
                    aria-selected="false"
                  >
                    Duet Security
                  </button>
                  <button
                    className="nav-links"
                    id="nav-cyber-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-cyber"
                    type="button"
                    role="tab"
                    aria-controls="nav-cyber"
                    aria-selected="false"
                  >
                    Cyber Security
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-camera"
                  role="tabpanel"
                  aria-labelledby="nav-camera-tab"
                  tabIndex={0}
                >
                  <div className="slider-tab-main white-bg">
                    <div className="row">
                      <div className="col-lg-5 col-12 sv-tab-img">
                        <div className="tp-service-tab-img">
                          <img src="assets/img/services/sv-7.jpg" alt="theme-pure" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-12 sv-tab-content">
                        <div className="tp-service-tab-content pt-30 pl-25">
                          <div className="tab-circle">
                            <h4>
                              <span>$</span>59
                            </h4>
                            <h3 className="sv-tab-titile">Individual CCTV Solution</h3>
                            <p>
                              Stands for Closed Circuit Television. It is a video system that consists of strategically
                              placed video cameras around an area that records footage, and is then transmitted to a
                              display monitor(s) for real-time viewing as well as footage playback.
                            </p>
                          </div>
                          <div className="tp-sv-feature-list mb-40">
                            <ul>
                              <li>
                                <i className="fal fa-check" />
                                Departure of the expert
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Configure software
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                24/7 Support
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Remote Administration
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Special applicationt
                              </li>
                            </ul>
                          </div>
                          <div className="services-tab-btn">
                            <a className="tp-btn" href="404-2">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="nav-cctv"
                  role="tabpanel"
                  aria-labelledby="nav-cctv-tab"
                  tabIndex={0}
                >
                  <div className="slider-tab-main white-bg">
                    <div className="row">
                      <div className="col-lg-5 col-12 sv-tab-img">
                        <div className="tp-service-tab-img">
                          <img src="assets/img/services/sv-8.jpg" alt="theme-pure" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-12 sv-tab-content">
                        <div className="tp-service-tab-content pt-30 pl-25">
                          <div className="tab-circle">
                            <h4>
                              <span>$</span>35
                            </h4>
                            <h3 className="sv-tab-titile">Commercial CCTV System</h3>
                            <p>
                              Stands for Closed Circuit Television. It is a video system that consists of strategically
                              placed video cameras around an area that records footage, and is then transmitted to a
                              display monitor(s) for real-time viewing as well as footage playback.
                            </p>
                          </div>
                          <div className="tp-sv-feature-list mb-40">
                            <ul>
                              <li>
                                <i className="fal fa-check" />
                                Departure of the expert
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Configure software
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                24/7 Support
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Remote Administration
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Special applicationt
                              </li>
                            </ul>
                          </div>
                          <div className="services-tab-btn">
                            <a className="tp-btn" href="404-2">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="nav-security"
                  role="tabpanel"
                  aria-labelledby="nav-security-tab"
                  tabIndex={0}
                >
                  <div className="slider-tab-main white-bg">
                    <div className="row">
                      <div className="col-lg-5 col-12 sv-tab-img">
                        <div className="tp-service-tab-img">
                          <img src="assets/img/services/sv-9.jpg" alt="theme-pure" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-12 sv-tab-content">
                        <div className="tp-service-tab-content pt-30 pl-25">
                          <div className="tab-circle">
                            <h4>
                              <span>$</span>45
                            </h4>
                            <h3 className="sv-tab-titile">Office &amp; Industrial Security</h3>
                            <p>
                              Stands for Closed Circuit Television. It is a video system that consists of strategically
                              placed video cameras around an area that records footage, and is then transmitted to a
                              display monitor(s) for real-time viewing as well as footage playback.
                            </p>
                          </div>
                          <div className="tp-sv-feature-list mb-40">
                            <ul>
                              <li>
                                <i className="fal fa-check" />
                                Departure of the expert
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Configure software
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                24/7 Support
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Remote Administration
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Special applicationt
                              </li>
                            </ul>
                          </div>
                          <div className="services-tab-btn">
                            <a className="tp-btn" href="404-2">
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade "
                  id="nav-cyber"
                  role="tabpanel"
                  aria-labelledby="nav-cyber-tab"
                  tabIndex={0}
                >
                  <div className="slider-tab-main white-bg">
                    <div className="row">
                      <div className="col-lg-5 col-12 sv-tab-img">
                        <div className="tp-service-tab-img">
                          <img src="assets/img/services/sv-10.jpg" alt="theme-pure" />
                        </div>
                      </div>
                      <div className="col-lg-7 col-12 sv-tab-content">
                        <div className="tp-service-tab-content pt-30 pl-25">
                          <div className="tab-circle">
                            <h4>
                              <span>$</span>42
                            </h4>
                            <h3 className="sv-tab-titile">School &amp; Hospital Security</h3>
                            <p>
                              Stands for Closed Circuit Television. It is a video system that consists of strategically
                              placed video cameras around an area that records footage, and is then transmitted to a
                              display monitor(s) for real-time viewing as well as footage playback.
                            </p>
                          </div>
                          <div className="tp-sv-feature-list mb-40">
                            <ul>
                              <li>
                                <i className="fal fa-check" />
                                Departure of the expert
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Configure software
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                24/7 Support
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Remote Administration
                              </li>
                              <li>
                                <i className="fal fa-check" />
                                Special applicationt
                              </li>
                            </ul>
                          </div>
                          <div className="services-tab-btn">
                            <a className="tp-btn" href="404-2">
                              Read More
                            </a>
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
      <div className="testimonial-area pt-110 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                <span className="tp-section-subtitle d-inline-block right mb-10">testimonials</span>
                <h2 className="tp-section-title">User Feedbacks</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tp-test-arrow text-end mb-45">
                <button type="button" className="slick-prev slick-arrow">
                  <i className="far fa-long-arrow-alt-left" />
                </button>
                <button type="button" className="slick-next slick-arrow">
                  <i className="far fa-long-arrow-alt-right" />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="tp-testimonial-active tp-testimonial-white slider-space-30">
            <div className="slick-slider slick-initialized" dir="ltr">
              <div className="slick-list">
                <div className="slick-track" style={{ width: "766.6666666666667%", left: "-100%" }}>
                  <div
                    data-index={-3}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test3.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ That consists strategically placed video CCTV around an area that records ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Jiksonax Xioma</h5>
                              <span className="reviewer-position">CEO, Jikson Ltd.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={-2}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={-1}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={0}
                    className="slick-slide slick-active slick-current"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={1}
                    className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ CCTV stands for Closed Circuit Television It is a video system “
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Limbon Nelson</h5>
                              <span className="reviewer-position">Founder, Romdon Co.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={2}
                    className="slick-slide slick-active"
                    tabIndex={-1}
                    aria-hidden="false"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test3.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ That consists strategically placed video CCTV around an area that records ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Jiksonax Xioma</h5>
                              <span className="reviewer-position">CEO, Jikson Ltd.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={3}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={4}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={5}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={6}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ CCTV stands for Closed Circuit Television It is a video system “
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Limbon Nelson</h5>
                              <span className="reviewer-position">Founder, Romdon Co.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={7}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test3.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ That consists strategically placed video CCTV around an area that records ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Jiksonax Xioma</h5>
                              <span className="reviewer-position">CEO, Jikson Ltd.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={8}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={9}
                    className="slick-slide"
                    tabIndex={-1}
                    aria-hidden="true"
                    style={{ outline: "none", width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={10}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={11}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ CCTV stands for Closed Circuit Television It is a video system “
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Limbon Nelson</h5>
                              <span className="reviewer-position">Founder, Romdon Co.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={12}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test3.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ That consists strategically placed video CCTV around an area that records ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Jiksonax Xioma</h5>
                              <span className="reviewer-position">CEO, Jikson Ltd.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={13}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={14}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={15}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={16}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ CCTV stands for Closed Circuit Television It is a video system “
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Limbon Nelson</h5>
                              <span className="reviewer-position">Founder, Romdon Co.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={17}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test3.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ That consists strategically placed video CCTV around an area that records ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Jiksonax Xioma</h5>
                              <span className="reviewer-position">CEO, Jikson Ltd.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={18}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test1.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-index={19}
                    tabIndex={-1}
                    className="slick-slide slick-cloned"
                    aria-hidden="true"
                    style={{ width: "4.3478260869565215%" }}
                  >
                    <div>
                      <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                        <div className="testi-item-list">
                          <div className="tp-testimonial-item text-center">
                            <div className="testi-img p-relative">
                              <img src="assets/img/testimonial/test2.png" alt="theme-pure" />
                              <i className="fal fa-quote-right quote-style" />
                            </div>
                            <h4 className="testi-text">
                              “ The circuit television, also known as video surveillance is the use of video CCTV ”
                            </h4>
                            <div className="testi-meta">
                              <h5 className="reviewer-name">Humble Dowson</h5>
                              <span className="reviewer-position">Head Of Idea</span>
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
      </div>
      <div
        className="feature-third-area feature-bg-img pt-110 pb-110"
        style={{ backgroundImage: "url(assets/img/feature/feature-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-lg-end">
            <div className="col-xxl-6 col-xl-7 col-lg-8">
              <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                <span className="tp-section-subtitle d-inline-block right mb-10">features</span>
                <h2 className="tp-section-title">Opting For Security &amp; Making You Free</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="fea-list d-flex align-items-center mb-30">
                    <i className="flaticon-spy-camera" />
                    <div className="fea-ctn pl-20">
                      <h5 className="m-0">Full-Time Device Protection</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="fea-list d-flex align-items-center mb-30">
                    <i className="flaticon-secure" />
                    <div className="fea-ctn pl-20">
                      <h5 className="m-0">Live Footage Collection</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="fea-list d-flex align-items-center mb-30">
                    <i className="flaticon-global" />
                    <div className="fea-ctn pl-20">
                      <h5 className="m-0">Drone CCTV Discussion</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="fea-list d-flex align-items-center mb-30">
                    <i className="flaticon-database" />
                    <div className="fea-ctn pl-20">
                      <h5 className="m-0">Hacker &amp; Custom Solution</h5>
                    </div>
                  </div>
                </div>
                <div className="fea-button pt-20">
                  <a className="tp-btn mr-25" href="contact">
                    Get In Touch <i className="fal fa-long-arrow-right" />
                  </a>
                  <a className="tp-black-btn-2" href="contact">
                    7 Day Free Trail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-process-area pt-115 pb-110">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="tp-section-box tp-section-box-2 p-relative mb-50">
                <span className="tp-section-subtitle d-inline-block pre mb-10">process</span>
                <h2 className="tp-section-title">How We Work Here</h2>
              </div>
            </div>
          </div>
          <div className="row counter-row">
            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="tp-process-item-2 text-center mb-30">
                <div className="counter-content" />
                <h5>Drone CCTV Discussion</h5>
                <i className="flaticon-cloud" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="tp-process-item-2 text-center mb-30">
                <div className="counter-content" />
                <h5>Live Footage Collection</h5>
                <i className="flaticon-security-camera" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="tp-process-item-2 text-center mb-30">
                <div className="counter-content" />
                <h5>Monitor From Anywhere</h5>
                <i className="flaticon-settings" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="tp-process-item-2 text-center mb-30">
                <div className="counter-content" />
                <h5>Hacker &amp; Custom Solution</h5>
                <i className="flaticon-approved" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="tp-process-item-2 text-center mb-30">
                <div className="counter-content" />
                <h5>Desk &amp; HDD Solution</h5>
                <i className="flaticon-guard" />
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4">
              <div className="tp-process-item-2 text-center mb-30">
                <div className="counter-content" />
                <h5>Flight Mode Activated</h5>
                <i className="flaticon-drone-3" />
              </div>
            </div>
          </div>
          <div className="process-bottom-text text-center">
            <h3 className="tp-pro-text mt-50 mb-35">Providing Smart Security For The Smart Generation.</h3>
            <div className="process-btn">
              <a className="tp-btn" href="#">
                Commercial CCTV System <i className="fal fa-long-arrow-right" />
              </a>
              <a className="tp-black-btn-2 " href="#">
                Residential CCTV System
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-shop-area grey-bg pt-115 pb-90">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="tp-section-box tp-section-box-2 p-relative mb-50">
                <span className="tp-section-subtitle d-inline-block pre mb-10">shop</span>
                <h2 className="tp-section-title">Our Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="tp-porduct-item p-relative text-center mb-30">
                <img src="assets/img/shop/pic-1.jpg" alt="theme-pure" />
                <div className="tp-porduct-content">
                  <div className="tp-pro-rating mb-5">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <h5 className="tp-pro-title">
                    <a href="shop-details">Logitech 56V Web Cam Pro</a>
                  </h5>
                  <div className="tp-pro-price">
                    <span>${/* */}39.00</span>
                  </div>
                  <div className="shop-cart">
                    <a className="tp-btn" href="cart">
                      <i className="fal fa-shopping-cart" /> {/* */}Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="tp-porduct-item p-relative text-center mb-30">
                <img src="assets/img/shop/pic-2.jpg" alt="theme-pure" />
                <div className="tp-porduct-content">
                  <div className="tp-pro-rating mb-5">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <h5 className="tp-pro-title">
                    <a href="shop-details">Fighter Technology Cameras</a>
                  </h5>
                  <div className="tp-pro-price">
                    <span>${/* */}49.00</span>
                  </div>
                  <div className="shop-cart">
                    <a className="tp-btn" href="cart">
                      <i className="fal fa-shopping-cart" /> {/* */}Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="tp-porduct-item p-relative text-center mb-30">
                <img src="assets/img/shop/pic-3.jpg" alt="theme-pure" />
                <div className="tp-porduct-content">
                  <div className="tp-pro-rating mb-5">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <h5 className="tp-pro-title">
                    <a href="shop-details">Tilt &amp; Zoom Camera</a>
                  </h5>
                  <div className="tp-pro-price">
                    <span>${/* */}29.00</span>
                  </div>
                  <div className="shop-cart">
                    <a className="tp-btn" href="cart">
                      <i className="fal fa-shopping-cart" /> {/* */}Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6">
              <div className="tp-porduct-item p-relative text-center mb-30">
                <img src="assets/img/shop/pic-4.jpg" alt="theme-pure" />
                <div className="tp-porduct-content">
                  <div className="tp-pro-rating mb-5">
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                    <span>
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <h5 className="tp-pro-title">
                    <a href="shop-details">External Dome Camera</a>
                  </h5>
                  <div className="tp-pro-price">
                    <span>${/* */}19.00</span>
                  </div>
                  <div className="shop-cart">
                    <a className="tp-btn" href="cart">
                      <i className="fal fa-shopping-cart" /> {/* */}Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-faq-area pt-115 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 text-center text-xl-start col-12">
              <div className="tp-about-wapper3">
                <img src="assets/img/bg/faq-bg.jpg" alt="theme-pure" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-12">
              <div className="tp-faq-wrapper pt-50 pl-60 mb-40 p1-40">
                <div className="tp-section-box tp-section-box-2  p-relative">
                  <span className="tp-section-subtitle right d-inline-block">faq</span>
                  <h2 className="tp-section-title mb-30">Have To Protect All Over The Globe.</h2>
                </div>
                <div className="tp-custom-accordio">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-items">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Coordinate movement with breath to flow?
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Our fitness clubs offer a variety of yoga classes that range from beginner to advanced. With
                          Zium access your favorite class or test out a PURE Yoga class anytime, anywhere.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-items">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          What is the difference between a DVR and NVR?
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse "
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Our fitness clubs offer a variety of yoga classes that range from beginner to advanced. With
                          Zium access your favorite class or test out a PURE Yoga class anytime, anywhere.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-items">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-buttons collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="true"
                          aria-controls="collapseThree"
                        >
                          The cameras, monitors and/or video recorders?
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse "
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          Our fitness clubs offer a variety of yoga classes that range from beginner to advanced. With
                          Zium access your favorite class or test out a PURE Yoga class anytime, anywhere.
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
                  <div className="nice-select form-select-lg mb-3 false" role="button" tabIndex={0}>
                    <span className="current">02</span>
                    <ul className="list" role="menubar">
                      <li data-value="02" className="option selected focus" role="menuitem">
                        02
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
              <div className=" col-xl-4 col-lg-4 col-md-6">
                <div className="select-item">
                  <div className="nice-select form-select-lg mb-3 false" role="button" tabIndex={0}>
                    <span className="current">500TB</span>
                    <ul className="list" role="menubar">
                      <li data-value="500TB" className="option selected focus" role="menuitem">
                        500TB
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
                  <div className="nice-select form-select-lg mb-3 false" role="button" tabIndex={0}>
                    <span className="current">4K Video Capture</span>
                    <ul className="list" role="menubar">
                      <li data-value="4K Video Capture" className="option selected focus" role="menuitem">
                        4K Video Capture
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
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="select-button">
                  <a className="tp-btn w-100 mb-10" href="cart">
                    Total: $18,000
                  </a>
                  <a className="tp-black-btn-2 w-100" href="cart">
                    Make Order Now <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            <div className="select-text text-center pt-25 pb-25">
              <p>
                To Buy <span>CCTV Camera</span> Just Click Start To Buy Button &amp; Submit Required Details.
              </p>
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
      <div
        className="tp-support-area tp-support-area-2  p-relative"
        style={{ backgroundImage: "url(assets/img/bg/pic-bg.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10  m-auto">
              <div className="tpsupport__overlay-content text-center">
                <button className="popup-video mb-60">
                  <i className="fas fa-play" />
                </button>
                <div className="tp-section-box tp-section-box-2 white-text p-relative mb-45 text-center">
                  <span className="tp-section-subtitle d-inline-block pre mb-10">intro video</span>
                  <h2 className="tp-section-title">CCTV Security On The Way</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-blog-area pt-110 pb-90">
        <div className="container">
          <div className="row text-center">
            <div className="col-xl-12">
              <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                <span className="tp-section-subtitle d-inline-block pre mb-10">blog</span>
                <h2 className="tp-section-title">Company Blog &amp; Insight</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="tp-blog-main">
                <div className="tp-blog-item text-center p-relative">
                  <div className="blog-img">
                    <div className="fix">
                      {" "}
                      <a href="#">
                        <img src="assets/img/news-feed/feed-item.jpg" alt="theme-pure" />
                      </a>
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-news-meta">
                      <span className="user">
                        <a href="#">
                          <i className="fal fa-user" />
                          {/* */}Alex Dowson
                        </a>
                      </span>
                      <span className="user-2">
                        <a href="#">
                          <i className="fal fa-comments" /> {/* */}23{/* */} Comments
                        </a>
                      </span>
                    </div>
                    <h5 className="tp-blog-title">
                      <a href="#">Good name can make your company sound?</a>
                    </h5>
                    <p>
                      CCTV stands for Closed Circuit Television. It is a video system that consists of strategically
                      placed video cameras.
                    </p>
                    <div className="tp-feed-link d-flex align-items-center">
                      <a className="blog-link" href="blog-details">
                        Read More <i className="far fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="tp-blog-main">
                <div className="tp-blog-item text-center p-relative">
                  <div className="blog-img">
                    <div className="fix">
                      {" "}
                      <a href="#">
                        <img src="assets/img/news-feed/secblog-1.jpg" alt="theme-pure" />
                      </a>
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-news-meta">
                      <span className="user">
                        <a href="#">
                          <i className="fal fa-user" />
                          {/* */}Dowson Alex
                        </a>
                      </span>
                      <span className="user-2">
                        <a href="#">
                          <i className="fal fa-comments" /> {/* */}23{/* */} Comments
                        </a>
                      </span>
                    </div>
                    <h5 className="tp-blog-title">
                      <a href="#">While a bad name will give potential customers?</a>
                    </h5>
                    <p>
                      CCTV stands for Closed Circuit Television. It is a video system that consists of strategically
                      placed video cameras.
                    </p>
                    <div className="tp-feed-link d-flex align-items-center">
                      <a className="blog-link" href="blog-details">
                        Read More <i className="far fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="tp-blog-main">
                <div className="tp-blog-item text-center p-relative">
                  <div className="blog-img">
                    <div className="fix">
                      {" "}
                      <a href="#">
                        <img src="assets/img/news-feed/secblog-2.jpg" alt="theme-pure" />
                      </a>
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-news-meta">
                      <span className="user">
                        <a href="#">
                          <i className="fal fa-user" />
                          {/* */}Alex Dowson
                        </a>
                      </span>
                      <span className="user-2">
                        <a href="#">
                          <i className="fal fa-comments" /> {/* */}23{/* */} Comments
                        </a>
                      </span>
                    </div>
                    <h5 className="tp-blog-title">
                      <a href="#">Why should business payroll outsourcing?</a>
                    </h5>
                    <p>
                      CCTV stands for Closed Circuit Television. It is a video system that consists of strategically
                      placed video cameras.
                    </p>
                    <div className="tp-feed-link d-flex align-items-center">
                      <a className="blog-link" href="blog-details">
                        Read More <i className="far fa-long-arrow-alt-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-top-area">
        <div className="container">
          <div className="theme-white p-relative white-bg">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 text-center text-lg-start">
                <div className="tp-footer-logo">
                  <a href="#">
                    {" "}
                    <img src="assets/img/logo/logo-3.png" alt="theme-pure" />
                  </a>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12 text-center text-md-end">
                <div className="tp-footer-social">
                  <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="http://twitter.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.behance.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-behance" />
                  </a>
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube" />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-widget-area pt-90 pb-50 footer-bg ">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-col-1 mb-50">
                  <h3 className="footer-widget-title">About Us</h3>
                  <p>
                    A traditional CCTV system comprises: One or more cameras (analog digital), each with a lens equipped
                    with an image sensor.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-col-2 mb-50">
                  <h3 className="footer-widget-title">Get In Touch</h3>
                  <div className="footer-contact">
                    <div className="footer-contact-item">
                      <p>
                        27 Division St, New York, <br /> NY 10002, USA
                      </p>
                    </div>
                    <div className="footer-contact-item">
                      <p>
                        Mon – Fri: 7.00 – 22.00 <br /> St – Sun: 9.00 – 20.00
                      </p>
                    </div>
                    <div className="footer-contact-item">
                      <p>
                        +1 800 123 456 789 <br /> +1 800 987 654 321
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget  footer-col-3 mb-50">
                  <h3 className="footer-widget-title">Main Pages</h3>
                  <ul>
                    <li>
                      <a href="about">About Us</a>
                    </li>
                    <li>
                      <a href="#">Customer</a>
                    </li>
                    <li>
                      <a href="service">Service</a>
                    </li>
                    <li>
                      <a href="#">Collections</a>
                    </li>
                    <li>
                      <a href="#">Best Seller</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                    <li>
                      <a href="#">Location</a>
                    </li>
                    <li>
                      <a href="#">Our Expert</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-col-4 mb-50">
                  <h3 className="footer-widget-title">Get Newsletter</h3>
                  <p>Sign up today for hints, tips &amp; the latest product news</p>
                  <div className="footer-subscribe">
                    <form>
                      <input type="email" placeholder="Email address" />
                      <button type="submit">
                        {" "}
                        <i className="far fa-envelope-open" />
                      </button>
                    </form>
                  </div>
                  <div className="footer-social mt-20">
                    <a href="http://facebook.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="http://twitter.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="https://www.behance.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-behance" />
                    </a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-youtube" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area theme-bg pt-20 pb-20">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7 text-lg-start col-12 text-center ">
                <div className="copyright-text">
                  <p>
                    Copyright © {/* */}2023{/* */} Sectox by <a href="#">ThemePure</a>. All Rights Reserved.{/* */}{" "}
                  </p>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 text-lg-end col-12 text-center ">
                <div className="footer-menu">
                  <ul>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Terms of Use</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="progress-wrap false" role="button" tabIndex={-1}>
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  )
}
