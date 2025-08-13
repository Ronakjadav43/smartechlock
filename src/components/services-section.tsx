"use client"
import { useState } from "react"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("camera")

  const services = {
    camera: {
      title: "School & Hospital Security",
      price: 42,
      image: "assets/img/services/sv-8.jpg",
      description:
        "Stands for Closed Circuit Television. It is a video system that consists of strategically placed video cameras around an area that records footage, and is then transmitted to a display monitor(s) for real-time viewing as well as footage playback.",
      features: [
        "Departure of the expert",
        "Configure software",
        "24/7 Support",
        "Remote Administration",
        "Special application",
      ],
    },
    cctv: {
      title: "IP CCTV Solutions",
      price: 65,
      image: "assets/img/services/sv-9.jpg",
      description:
        "Advanced IP CCTV systems that provide high-definition video surveillance with remote monitoring capabilities and intelligent analytics for enhanced security.",
      features: ["HD Video Quality", "Remote Monitoring", "Motion Detection", "Cloud Storage", "Mobile App Access"],
    },
    security: {
      title: "Duet Security Systems",
      price: 89,
      image: "assets/img/services/sv-10.jpg",
      description:
        "Comprehensive security solutions combining multiple technologies for complete protection of your premises with integrated alarm and monitoring systems.",
      features: [
        "Integrated Alarms",
        "Access Control",
        "Perimeter Security",
        "Emergency Response",
        "Professional Installation",
      ],
    },
    cyber: {
      title: "Cyber Security Protection",
      price: 120,
      image: "assets/img/services/sv-11.jpg",
      description:
        "Advanced cybersecurity solutions to protect your digital infrastructure from threats, including network security, data protection, and threat monitoring.",
      features: ["Network Protection", "Data Encryption", "Threat Detection", "Security Audits", "Incident Response"],
    },
  }

  return (
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
                  className={`nav-links ${activeTab === "camera" ? "active" : ""}`}
                  onClick={() => setActiveTab("camera")}
                  type="button"
                  role="tab"
                >
                  IP Camera
                </button>
                <button
                  className={`nav-links ${activeTab === "cctv" ? "active" : ""}`}
                  onClick={() => setActiveTab("cctv")}
                  type="button"
                  role="tab"
                >
                  IP CCTV
                </button>
                <button
                  className={`nav-links ${activeTab === "security" ? "active" : ""}`}
                  onClick={() => setActiveTab("security")}
                  type="button"
                  role="tab"
                >
                  Duet Security
                </button>
                <button
                  className={`nav-links ${activeTab === "cyber" ? "active" : ""}`}
                  onClick={() => setActiveTab("cyber")}
                  type="button"
                  role="tab"
                >
                  Cyber Security
                </button>
              </div>
            </nav>
            {/* <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" role="tabpanel">
                <div className="slider-tab-main white-bg">
                  <div className="row">
                    <div className="col-lg-5 col-12 sv-tab-img">
                      <div className="tp-service-tab-img">
                        <img src={services[activeTab].image || "/placeholder.svg"} alt="theme-pure" />
                      </div>
                    </div>
                    <div className="col-lg-7 col-12 sv-tab-content">
                      <div className="tp-service-tab-content pt-30 pl-25">
                        <div className="tab-circle">
                          <h4>
                            <span>$</span>
                            {services[activeTab].price}
                          </h4>
                          <h3 className="sv-tab-titile">{services[activeTab].title}</h3>
                          <p>{services[activeTab].description}</p>
                        </div>
                        <div className="tp-sv-feature-list mb-40">
                          <ul>
                            {services[activeTab].features.map((feature, index) => (
                              <li key={index}>
                                <i className="fal fa-check" />
                                {feature}
                              </li>
                            ))}
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
