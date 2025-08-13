"use client"

import { useState } from "react"

interface HeaderProps {
  onMobileMenuToggle: () => void
}

export default function Header({ onMobileMenuToggle }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
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
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="tp-header-icon tp-h-search p-relative"
                  >
                    <i className={isSearchOpen ? "fal fa-times" : "fal fa-search"} />
                  </button>
                  <a className="tp-header-icon d-none d-xxl-inline-block" href="cart">
                    <i className="fal fa-shopping-cart" />
                  </a>
                  <a className="tp-btn-2 ml-20 d-none d-md-inline-block" href="contact">
                    Get In Touch
                  </a>
                  <button onClick={onMobileMenuToggle} className="tp-menu-toggle tp-header-icon ml-20 d-xl-none">
                    <i className="far fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
