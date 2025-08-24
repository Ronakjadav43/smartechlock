"use client";

import { getMenu } from "@/actions/home";
import { Menutype } from "@/types";
import { useQueries, UseQueryResult } from "@tanstack/react-query";
import { useState } from "react";

// Header data in constants
const HEADER_DATA = {
  notification: {
    text: "Limited Time Offer: Shop online and get free no-contact delivery",
  },
  topMenu: [
    { label: "FAQ", href: "#" },
    { label: "Careers", href: "#" },
  ],
  languages: {
    current: "English",
    options: ["English", "Arabic", "Spanish"],
  },
  logo: {
    href: "index.html",
    src: "assets/img/logo/st.png",
    alt: "logo",
  },
  navMenu: [
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
};


interface HeaderProps {
  onMobileMenuToggle: () => void;


 




}




export default function Header({ onMobileMenuToggle }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);


 const queries = useQueries({
    queries: [
      {
        queryKey: ["menu"],
        queryFn: getMenu,
      },
    ],
  }) as [
    UseQueryResult<Menutype[], Error> // getNews/getSortedNews returns an array of News
  ];

  // Destructuring results for each query
  const [menu] = queries;

  const menuData = menu.data ?? undefined;

console.log(menuData,"1111111111111111111");


  return (
    <header>
      {/* Notification Bar */}
      <div className="header-notification-area notification-color grey-bg d-none d-lg-block pl-25 pr-25">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7">
              <div className="notification-text">
                <p className="m-0">
                  <b>Limited Time Offer:</b> {HEADER_DATA.notification.text}
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-5 d-flex justify-content-end">
              {/* Top Menu */}
              <div className="tp-top-menu">
                <ul>
                  {HEADER_DATA.topMenu.map((item, index) => (
                    <li key={index}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Language Menu */}
              <div className="tp-top-menu header-lan-menu ml-30">
                <ul>
                  <li>
                    <a href="#">
                      {HEADER_DATA.languages.current}{" "}
                      <i className="fal fa-angle-down" />
                    </a>
                    <ul>
                      {HEADER_DATA.languages.options.map((lang, idx) => (
                        <li key={idx}>
                          <a href="#">{lang}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-area-flat pl-25 pr-25">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-2 col-lg-6 col-md-5 col-7">
              <div className="logo">
                <a href={HEADER_DATA.logo.href}>
                  <img
                    src={HEADER_DATA.logo.src}
                    alt={HEADER_DATA.logo.alt}
                    className="w-[200px] h-auto"
                  />
                </a>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="col-xl-7 d-none d-xl-block">
              <div className="tp-main-menu text-center">
                <nav id="mobile-menu">
                  <ul>
                    {menuData && menuData.map((menu, idx) => (
                      <li
                        key={idx}
                        className={menu.sub_menus ? "has-dropdown" : ""}
                      >
                        <a href={menu.slug}>{menu.title}</a>

                        
                         {menu.sub_menus && menu.sub_menus && (
                          <ul className="submenu">
                            {menu.sub_menus.map((sub, subIdx) => (
                              <li key={subIdx}>
                                <a href={sub.slug}>{sub.title}</a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="col-xl-3 col-lg-6 col-md-7 col-5">
              <div className="search-main p-relative">
                <div className="tp-header-right">
                  <button
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                    className="tp-header-icon tp-h-search p-relative"
                  >
                    <i
                      className={
                        isSearchOpen ? "fal fa-times" : "fal fa-search"
                      }
                    />
                  </button>
                  <a
                    className="tp-header-icon d-none d-xxl-inline-block"
                    href="cart"
                  >
                    <i className="fal fa-shopping-cart" />
                  </a>
                  <a
                    className="tp-btn-2 ml-20 d-none d-md-inline-block"
                    href="contact"
                  >
                    Request a Quote
                  </a>
                  <button
                    onClick={onMobileMenuToggle}
                    className="tp-menu-toggle tp-header-icon ml-20 d-xl-none"
                  >
                    <i className="far fa-bars" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
