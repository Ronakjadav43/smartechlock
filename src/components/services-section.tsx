"use client"
import { HomeData } from "@/types";
import Link from "next/link";
import { useState } from "react"



type Props = {
  homeData: HomeData[] | undefined;
};



export default function ServicesSection({ homeData = undefined }: Props) {
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: number }>({});

  // const services = {
  //   camera: {
  //     title: "School & Hospital Security",
  //     price: 42,
  //     image: "assets/img/services/sv-8.jpg",
  //     description:
  //       "Stands for Closed Circuit Television. It is a video system that consists of strategically placed video cameras around an area that records footage, and is then transmitted to a display monitor(s) for real-time viewing as well as footage playback.",
  //     features: [
  //       "Departure of the expert",
  //       "Configure software",
  //       "24/7 Support",
  //       "Remote Administration",
  //       "Special application",
  //     ],
  //   },
  //   cctv: {
  //     title: "IP CCTV Solutions",
  //     price: 65,
  //     image: "assets/img/services/sv-9.jpg",
  //     description:
  //       "Advanced IP CCTV systems that provide high-definition video surveillance with remote monitoring capabilities and intelligent analytics for enhanced security.",
  //     features: ["HD Video Quality", "Remote Monitoring", "Motion Detection", "Cloud Storage", "Mobile App Access"],
  //   },
  //   security: {
  //     title: "Duet Security Systems",
  //     price: 89,
  //     image: "assets/img/services/sv-10.jpg",
  //     description:
  //       "Comprehensive security solutions combining multiple technologies for complete protection of your premises with integrated alarm and monitoring systems.",
  //     features: [
  //       "Integrated Alarms",
  //       "Access Control",
  //       "Perimeter Security",
  //       "Emergency Response",
  //       "Professional Installation",
  //     ],
  //   },
  //   cyber: {
  //     title: "Cyber Security Protection",
  //     price: 120,
  //     image: "assets/img/services/sv-11.jpg",
  //     description:
  //       "Advanced cybersecurity solutions to protect your digital infrastructure from threats, including network security, data protection, and threat monitoring.",
  //     features: ["Network Protection", "Data Encryption", "Threat Detection", "Security Audits", "Incident Response"],
  //   },
  // }

  if (!homeData) return null;


  return (
<div className="service-area">

  {homeData &&
    homeData.map((data) =>
      data.sections
        .filter(
          (section) => section.type.type === "Services"
        )
        .map((section) =>
          section.section_items.map((item) => {
            // Use a unique key for each section item, e.g., item.id or item.title
            const tabKey = item.title;
            const activeTab = activeTabs[tabKey] ?? 0;

            return (
              <div
                className="service-tab-bg pt-115 "
                // style={{ backgroundSize: "cover", backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${item?.multipleMedia?.[0]?.formats?.large?.url})` }}
                key={item.title}
              >
                <div className="container">
                  <div className="tp-section-box tp-section-box-2 p-relative mb-45 text-center">
                    <span className="tp-section-subtitle d-inline-block pre mb-10">{section.type.type}</span>
                    <h2 className="tp-section-title">{item.title}</h2>
                  </div>
                  <div className="service-tab-info">
                    <nav>
                       <div className="nav tp-service-tab justify-content-center mb-35" id="nav-tab" role="tablist">
                      {item.sub_items.map((Services, idx) => (
                        <button
                          className={`nav-links ${activeTab === idx ? "active" : ""}`}
                          onClick={() => setActiveTabs((prev) => ({ ...prev, [tabKey]: idx }))}
                          type="button"
                          role="tab"
                          key={idx}
                        >
                          {Services.title}
                        </button>
                      ))}
                      </div>
                    </nav>
                    {item.sub_items.map((Services, idx) =>
                      activeTab === idx ? (
                        <div className="tab-pane fade show active" role="tabpanel" key={idx}>
                          <div className="slider-tab-main white-bg">
                            <div className="row">
                              <div className="col-lg-5 col-12 sv-tab-img">
                                <div className="tp-service-tab-img">
                                  <img
                                    src={
                                      Services?.image?.formats?.small?.url
                                        ? `${process.env.NEXT_PUBLIC_API_URL}${Services?.image?.formats?.small?.url}`
                                        : "/placeholder.svg"
                                    }
                                    alt="theme-pure"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-7 col-12 sv-tab-content">
                                <div className="tp-service-tab-content pt-30 pl-25">
                                  <div className="tab-circle">
                                    <h4>
                                      <span>$</span>
                                      {Services.price}
                                    </h4>
                                    <h3 className="sv-tab-titile">{Services.title}</h3>
                                    <p>{Services.subTitle}</p>
                                  </div>
                                  {/* <div className="tp-sv-feature-list mb-40">
                                    <ul>
                                      {services[activeTab].features.map((feature, index) => (
                                        <li key={index}>
                                          <i className="fal fa-check" />
                                          {feature}
                                        </li>
                                      ))}
                                    </ul>
                                  </div> */}
                                  <div className="services-tab-btn">
                                    <Link className="tp-btn" href="/services">
                                      Read More
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )
    )}

</div>
  )
}
