"use client";

import { useState } from "react";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

// Sidebar data in constants
const SIDEBAR_DATA = {
  logo: {
    href: "index.html",
    src: "assets/img/logo/st.png",
    alt: "logo",
  },
  menu: [
    {
      label: "Home",
      href: "index.html",
      // submenu: [
      //   { label: "Home Style 01", href: "index.html" },
      //   { label: "Home Style 02", href: "home-2" },
      //   { label: "Home Style 03", href: "home-3" },
      // ],
    },
    { label: "About Us", href: "about" },
    {
      label: "Product",
      href: "team",
      submenu: [
        { label: "RFID Hotel Door Lock", href: "team" },
        { label: "Digital Hotel Lock", href: "team-details" },
        { label: "Keyless Hotel Door Lock", href: "portfolio" },
        { label: "TTlock Bluetooth Door Lock", href: "portfolio-details" },
        { label: "WIFI Smart Lock", href: "faq" },
        { label: "Fingerprint Door Lock", href: "shop" },
        { label: "RFID Cabinet Lock", href: "shop-details" },
        { label: "Fingerprint Cabinet Lock", href: "cart" },
        { label: "Digital Locker Lock", href: "checkout" },
        { label: "RFID Hotel Lock Accessary", href: "#" },
        { label: "TT Hotel Lock Accessary", href: "#" },
      ],
    },
    {
      label: "Solution",
      href: "solution",
      submenu: [
        { label: "Tuya Smart Door Lock", href: "blog" },
        { label: "TTlock Smart Lock", href: "blog" },
        { label: "Smart Lock for Airbnb", href: "blog" },
        { label: "Hotel Keyless Entry System", href: "blog" },
        { label: "RFID Hotel Door Lock System", href: "blog" },
        { label: "Keyless Cabinet Locking System", href: "blog" },
        { label: "Apartment Door Lock", href: "blog" },
        { label: "Door Lock for Rental Property", href: "blog" },
      ],
    },
    {
      label: "Support",
      href: "Support",
      submenu: [
        { label: "Become Distributor", href: "Become Distributor" },
        { label: "FAQ", href: "FAQ" },
        { label: "Sample Policy", href: "Sample Policy" },
        { label: "Warranty Policy", href: "Warranty Policy" },
        { label: "Document Download", href: "Document Download" },
      ],
    },
    { label: "Contact", href: "contact" },
  ],
  contact: [
    "27 Division St, New York",
    "+1 800 123 456 78",
    "sectox@mail.com",
  ],
  socials: [
    { icon: "fab fa-facebook-f", href: "http://facebook.com/" },
    { icon: "fab fa-twitter", href: "http://twitter.com/" },
    { icon: "fab fa-behance", href: "https://www.behance.com/" },
    { icon: "fab fa-youtube", href: "https://www.youtube.com/" },
    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/" },
  ],
};

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

  const toggleDropdown = (menuItem: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(menuItem)
        ? prev.filter((item) => item !== menuItem)
        : [...prev, menuItem]
    );
  };

  return (
    <>
      <div className={`tp-sidebar-menu ${isOpen ? "sidebar-opened" : ""}`}>
        <button className="sidebar-close" onClick={onClose}>
          <i className="fal fa-times" />
        </button>

        {/* Logo */}
        <div className="side-logo mb-20">
          <a href={SIDEBAR_DATA.logo.href}>
            <img
              src={SIDEBAR_DATA.logo.src}
              alt={SIDEBAR_DATA.logo.alt}
              className="w-[200px] h-auto"
            />
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu mean-container">
          <nav className="mean-nav d-xl-none">
            <ul>
              {SIDEBAR_DATA.menu.map((menuItem, index) => (
                <li
                  key={index}
                  className={menuItem.submenu ? "has-dropdown" : ""}
                >
                  <a href={menuItem.href}>{menuItem.label}</a>

                  {menuItem.submenu && (
                    <>
                      <ul
                        className="submenu"
                        style={{
                          display: openDropdowns.includes(menuItem.label)
                            ? "block"
                            : "none",
                        }}
                      >
                        {menuItem.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subItem.href} className="!text-sm">{subItem.label}</a>
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => toggleDropdown(menuItem.label)}
                        className="mean-expand absolute top-2 right-0 mean-expand mean-clicked"
                        style={{
                          fontSize: 18,
                          cursor: "pointer",
                          background: "none",
                          border: "none",
                        }}
                      >
                        <i
                          className={
                            openDropdowns.includes(menuItem.label)
                              ? "fal fa-minus"
                              : "fal fa-plus"
                          }
                        />
                      </button>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div className="sidebar-title">
            <h3>CONTACT US</h3>
          </div>
          <ul className="sidebar-list">
            {SIDEBAR_DATA.contact.map((info, idx) => (
              <li key={idx}>{info}</li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="tp-sidebar-social">
            {SIDEBAR_DATA.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`body-overlay ${isOpen ? "opened" : ""}`}
        onClick={onClose}
      />
    </>
  );
}
