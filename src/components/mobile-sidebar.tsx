"use client"

import { useState } from "react"

interface MobileSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])

  const toggleDropdown = (menuItem: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(menuItem) ? prev.filter((item) => item !== menuItem) : [...prev, menuItem],
    )
  }

  return (
    <>
      <div className={`tp-sidebar-menu ${isOpen ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={onClose}>
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
                <ul className="submenu" style={{ display: openDropdowns.includes("home") ? "block" : "none" }}>
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
                <button
                  onClick={() => toggleDropdown("home")}
                  className="mean-expand"
                  style={{ fontSize: 18, cursor: "pointer", background: "none", border: "none" }}
                >
                  <i className={openDropdowns.includes("home") ? "fal fa-minus" : "fal fa-plus"} />
                </button>
              </li>
              <li>
                <a href="about">About</a>
              </li>
              <li className="has-dropdown">
                <a href="service">Service</a>
                <ul className="submenu" style={{ display: openDropdowns.includes("service") ? "block" : "none" }}>
                  <li>
                    <a href="service">Service</a>
                  </li>
                  <li>
                    <a href="service-details">Service Details</a>
                  </li>
                </ul>
                <button
                  onClick={() => toggleDropdown("service")}
                  className="mean-expand"
                  style={{ fontSize: 18, cursor: "pointer", background: "none", border: "none" }}
                >
                  <i className={openDropdowns.includes("service") ? "fal fa-minus" : "fal fa-plus"} />
                </button>
              </li>
              <li className="has-dropdown">
                <a href="team">Pages</a>
                <ul className="submenu" style={{ display: openDropdowns.includes("pages") ? "block" : "none" }}>
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
                <button
                  onClick={() => toggleDropdown("pages")}
                  className="mean-expand"
                  style={{ fontSize: 18, cursor: "pointer", background: "none", border: "none" }}
                >
                  <i className={openDropdowns.includes("pages") ? "fal fa-minus" : "fal fa-plus"} />
                </button>
              </li>
              <li className="has-dropdown">
                <a href="blog">Blog</a>
                <ul className="submenu" style={{ display: openDropdowns.includes("blog") ? "block" : "none" }}>
                  <li>
                    <a href="blog">Blog</a>
                  </li>
                  <li>
                    <a href="blog-details">Blog Details</a>
                  </li>
                </ul>
                <button
                  onClick={() => toggleDropdown("blog")}
                  className="mean-expand"
                  style={{ fontSize: 18, cursor: "pointer", background: "none", border: "none" }}
                >
                  <i className={openDropdowns.includes("blog") ? "fal fa-minus" : "fal fa-plus"} />
                </button>
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
      <div className={`body-overlay ${isOpen ? "opened" : ""}`} onClick={onClose} />
    </>
  )
}
