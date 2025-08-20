"use client"

import { useState } from "react"
import Header from "@/components/header"
import MobileSidebar from "@/components/mobile-sidebar"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"
import ProductsSection from "@/components/products-section"
import FaqSection from "@/components/faq-section"
import QuoteSection from "@/components/quote-section"
import VideoSection from "@/components/video-section"
import BlogSection from "@/components/blog-section"
import Footer from "@/components/footer"

export default function About() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const handleMobileSidebarClose = () => {
    setIsMobileSidebarOpen(false)
  }

  return (
    <div id="__next">
      <Header onMobileMenuToggle={handleMobileMenuToggle} />
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={handleMobileSidebarClose} />
    



<div id="__next">
  
 
  <div className="body-overlay false" />
  <section
    className="breadcrumb__area include-bg pt-150 pb-150"
    style={{ backgroundImage: "url(assets/img/breadcrumb/ab-slider.jpg)" }}
  >
    <div className="container">
        
      <div className="row">
        <div className="col-xxl-12">
          <div className="breadcrumb__content p-relative z-index-1">
            <div className="breadcrumb__list">
              <span>
                <a href="index.html">Home </a>
              </span>
              <span className="dvdr">
                <i className="flaticon-arrow-right" />
              </span>
              <span>About</span>
            </div>
            <h3 className="breadcrumb__title">Blog Grid Classic</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="tp-about-area pt-120 pb-120">
    <div className="container">
      <div className="row">
        <div className="col-xl-6 col-lg-5">
          <div className="ab-wrapper-4 p-relative">
            <div className="ab-right-img">
              <img src="assets/img/about/ab-hm-4.jpg" alt="theme-pure" />
            </div>
            <div className="tp-ab-left-meta">
              <h3>
                Good Experience <br /> In Last
              </h3>
              <h4>30</h4>
              <h5>Years</h5>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-7">
          <div className="tp-about-info-wrapper pl-50">
            <div className="tp-section-box tp-section-box-2  p-relative">
              <span className="tp-section-subtitle right d-inline-block">
                About Us
              </span>
              <h2 className="tp-section-title mb-15">
                {" "}
                Magtnificient Quality Gives You an Edge
              </h2>
            </div>
            <hr className="mt-25 mb-30" />
            <div className="tp-ab-meta">
              <div className="about-meta-img d-flex">
                <img src="assets/img/about/ab-sm-4-4.jpg" alt="theme-pure" />
                <div className="tp-ab-meta-text pl-30">
                  <h4>
                    In 2014 only 3 countries host 50% of the globally installed
                    bandwidth potential.
                  </h4>
                  <span>
                    <b>Alonso D. Dowson</b> <i>-Head Of Idea</i>
                  </span>
                </div>
              </div>
            </div>
            <hr className="mt-30 mb-35" />
            <div className="tp-ab-4-list">
              <div className="tp-about-fea-item">
                <ul>
                  <li>
                    <i className="fal fa-check" />
                    New Business Ideas create
                  </li>
                  <li>
                    <i className="fal fa-check" />
                    Grow corporate financial system
                  </li>
                </ul>
              </div>
            </div>
            <a className="tp-btn-border" href="contact">
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tp-process-area grey-bg pt-115 pb-90 ">
    <div className="container">
      <div className="row text-center">
        <div className="col-xl-12">
          <div className="tp-section-box tp-section-box-2 p-relative mb-45">
            <span className="tp-section-subtitle d-inline-block pre mb-10">
              Services
            </span>
            <h2 className="tp-section-title">What We Provide</h2>
          </div>
        </div>
      </div>
      <div className="row counter-row">
        <div className=" col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-30">
          <div className="tpprocess-hm-4 p-relative">
            <div className="process-content" />
            <span className="flaticon-secure">
              <i className="flaticon-secure" />
            </span>
            <div className="tp-process-contnt-4">
              <h6>Smart Systems</h6>
              <p className="m-0">
                We believe the value that our functions add to a business.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-30">
          <div className="tpprocess-hm-4 p-relative">
            <div className="process-content" />
            <span className="flaticon-secure">
              <i className="flaticon-security-camera" />
            </span>
            <div className="tp-process-contnt-4">
              <h6>Video Intercoms</h6>
              <p className="m-0">
                We believe the value that our functions add to a business.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-30">
          <div className="tpprocess-hm-4 p-relative">
            <div className="process-content" />
            <span className="flaticon-secure">
              <i className="flaticon-settings" />
            </span>
            <div className="tp-process-contnt-4">
              <h6>Smart Systems</h6>
              <p className="m-0">
                We believe the value that our functions add to a business.
              </p>
            </div>
          </div>
        </div>
        <div className=" col-xxl-3 col-xl-3 col-lg-6 col-md-6 mb-30">
          <div className="tpprocess-hm-4 p-relative">
            <div className="process-content" />
            <span className="flaticon-secure">
              <i className="flaticon-star-1" />
            </span>
            <div className="tp-process-contnt-4">
              <h6>Camcorders Kits</h6>
              <p className="m-0">
                We believe the value that our functions add to a business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="gallary-area mb-115">
    <div className="container-fluid p-0">
      <div className="gallary-slider-active">
        <div className="slick-slider slick-initialized" dir="ltr">
          <div className="slick-list">
            <div
              className="slick-track"
              style={{ width: "350%", left: "-100%" }}
            >
              <div
                data-index={-4}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-1.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={-3}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-3.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={-2}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-1.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={-1}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-3.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={0}
                className="slick-slide slick-active slick-current"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={1}
                className="slick-slide slick-active"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-1.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={2}
                className="slick-slide slick-active"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-3.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={3}
                className="slick-slide slick-active"
                tabIndex={-1}
                aria-hidden="false"
                style={{ outline: "none", width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-1.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={4}
                className="slick-slide"
                tabIndex={-1}
                aria-hidden="true"
                style={{ outline: "none", width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-3.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={5}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={6}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-1.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={7}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-3.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={8}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-1.jpg"
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-index={9}
                tabIndex={-1}
                className="slick-slide slick-cloned"
                aria-hidden="true"
                style={{ width: "7.142857142857143%" }}
              >
                <div>
                  <div
                    className="gallary-item"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <a className="popup-image" href="#">
                      <img
                        src="assets/img/gallary/gallary-3.jpg"
                        alt="theme-pure"
                      />
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
  <div className="tp-history-area pb-85 fix">
    <div className="container">
      <div className="row">
        <div className="col-xxl-6 col-xl-5 col-lg-8 ">
          <div className="tp-about-wrapper about-page">
            <div className="tp-section-box tp-section-box-2  p-relative">
              <span className="tp-section-subtitle right d-inline-block">
                history
              </span>
              <h2 className="tp-section-title mb-20">
                Individual Discussions with Qualified Mates.
              </h2>
              <p>
                Bandwidth has historically been very unequally distributed
                worldwide, with increasing concentration in the digital age.
                Historically only 10 countries have hosted 70-75% of the global
                telecommunication capacity.
              </p>
            </div>
            <a className="tp-btn mt-30" href="contact">
              Learn More <i className="fal fa-long-arrow-right" />
            </a>
          </div>
        </div>
        <div className="col-xxl-6 col-xl-7 col-lg-12">
          <div className="tp-ab-4-right d-flex align-items-center">
            <h4>2000</h4>
            <div className="ab-4-content">
              <h3>Journey Was Started</h3>
              <p>
                We believe the value that our functions add to a business with
                right root.
              </p>
            </div>
          </div>
          <div className="tp-ab-4-right d-flex align-items-center">
            <h4>2010</h4>
            <div className="ab-4-content">
              <h3>Noman Design Award 2010</h3>
              <p>
                We believe the value that our functions add to a business with
                right root.
              </p>
            </div>
          </div>
          <div className="tp-ab-4-right d-flex align-items-center">
            <h4>2023</h4>
            <div className="ab-4-content">
              <h3>Best Agency In World 2023</h3>
              <p>
                We believe the value that our functions add to a business with
                right root.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="feature-area-hm-4 mb-120 p-relative theme-bg">
    <div
      className="fea-hm-4-item "
      style={{ backgroundImage: "url(assets/img/feature/fea-4-hm.jpg)" }}
    >
      <div className="tp-fea-4-icon">
        <button className="popup-video">
          <i className="fas fa-play" />
        </button>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-12">
          <div className="tp-about-4-wrapper about-htm-page">
            <div className="tp-section-box">
              <span className="tp-section-subtitle right-white p-0">
                history
              </span>
              <h2 className="tp-section-title mb-15">
                Industry Explicit Competence
              </h2>
            </div>
            <div className="fea-4-box mt-10 p-relative">
              <p className="m-0">
                2014 only 3 countries host 50% of the globally <br /> installed
                bandwidth potential.
              </p>
              <h6>
                Mikdon S. Simbo <span>-Head Of Idea</span>
              </h6>
              <i className="flaticon-quote-1 flaticon-quote" />
            </div>
            <div className="tp-sv-feature-list tp-sv-feature-list-2 pt-35">
              <ul>
                <li>
                  <i className="fal fa-check" />
                  New Business Ideas create
                </li>
                <li>
                  <i className="fal fa-check" />
                  Grow corporate financial
                </li>
                <li>
                  <i className="fal fa-check" />
                  Smart Security System
                </li>
                <li>
                  <i className="fal fa-check" />
                  24/7 Online Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="tp-feed-area pb-90">
    <div className="container">
      <div className="row text-center">
        <div className="col-xl-12">
          <div className="tp-section-box tp-section-box-2 p-relative mb-45">
            <span className="tp-section-subtitle d-inline-block pre mb-10">
              news
            </span>
            <h2 className="tp-section-title">Our News Feeds</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="tp-feed-item mb-30">
            <div className="tp-feed-img p-relative">
              <div className="fix">
                <a href="#">
                  <img src="assets/img/blog/blog-big-1.jpg" alt="theme-pure" />
                </a>
              </div>
              <div className="tp-meta-date">
                <h3 className="meta-date-title">
                  <a href="#">24</a>
                </h3>
                <p>June</p>
              </div>
            </div>
            <div className="tp-feed-content">
              <div className="tp-latest-blog-meta">
                <span>by</span>
                <a href="#">admin</a>
                <a href="#">- cctv, security</a>
              </div>
              <h5 className="tp-latest-title">
                <a href="blog-details">
                  Good name can make your company sound professional
                </a>
              </h5>
              <div className="tp-feed-link d-flex align-items-center">
                <a href="#">
                  Read More <i className="far fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="tp-feed-item mb-30">
            <div className="tp-feed-img p-relative">
              <div className="fix">
                <a href="#">
                  <img src="assets/img/blog/blog-big-3.jpg" alt="theme-pure" />
                </a>
              </div>
              <div className="tp-meta-date">
                <h3 className="meta-date-title">
                  <a href="#">25</a>
                </h3>
                <p>June</p>
              </div>
            </div>
            <div className="tp-feed-content">
              <div className="tp-latest-blog-meta">
                <span>by</span>
                <a href="#">admin</a>
                <a href="#">- cctv, security</a>
              </div>
              <h5 className="tp-latest-title">
                <a href="blog-details">
                  While a bad name will give potential customers the wrong
                  impression.
                </a>
              </h5>
              <div className="tp-feed-link d-flex align-items-center">
                <a href="#">
                  Read More <i className="far fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 col-md-6">
          <div className="tp-feed-item mb-30">
            <div className="tp-feed-img p-relative">
              <div className="fix">
                <a href="#">
                  <img src="assets/img/blog/blog-big-2.jpg" alt="theme-pure" />
                </a>
              </div>
              <div className="tp-meta-date">
                <h3 className="meta-date-title">
                  <a href="#">26</a>
                </h3>
                <p>June</p>
              </div>
            </div>
            <div className="tp-feed-content">
              <div className="tp-latest-blog-meta">
                <span>by</span>
                <a href="#">admin</a>
                <a href="#">- cctv, security</a>
              </div>
              <h5 className="tp-latest-title">
                <a href="blog-details">
                  A CCTV business name is one of the most important decisions
                </a>
              </h5>
              <div className="tp-feed-link d-flex align-items-center">
                <a href="#">
                  Read More <i className="far fa-long-arrow-alt-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <div className="progress-wrap false" role="button" tabIndex={-1}>
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
    </svg>
  </div>
</div>





      <Footer />
    </div>
  )
}
