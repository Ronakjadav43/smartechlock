"use client"
import type { HomeData } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

type Props = {
  homeData: HomeData[] | undefined
}

const getImageUrl = (image: any): string => {
  if (!image) return "/service-placeholder.jpg"

  const formats = image.formats
  if (!formats) return "/service-placeholder.jpg"

  // Try different formats in order of preference
  if (formats.large?.url) return `${process.env.NEXT_PUBLIC_API_URL}${formats.large.url}`
  if (formats.medium?.url) return `${process.env.NEXT_PUBLIC_API_URL}${formats.medium.url}`
  if (formats.small?.url) return `${process.env.NEXT_PUBLIC_API_URL}${formats.small.url}`
  if (formats.thumbnail?.url) return `${process.env.NEXT_PUBLIC_API_URL}${formats.thumbnail.url}`

  // Fallback to original image URL if no formats available
  if (image.url) return `${process.env.NEXT_PUBLIC_API_URL}${image.url}`

  // Final fallback to placeholder
  return "/service-placeholder.jpg"
}

export default function ServicesSection({ homeData = undefined }: Props) {
  const [activeTabs, setActiveTabs] = useState<{ [key: string]: number }>({})

  if (!homeData) return null

  return (
    <div className="service-area">
      {homeData &&
        homeData.map((data) =>
          data.sections
            .filter((section) => section.type.type === "Services")
            .map((section) =>
              section.section_items.map((item) => {
                // Use a unique key for each section item, e.g., item.id or item.title
                const tabKey = item.title
                const activeTab = activeTabs[tabKey] ?? 0

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
                                      <Image
                                        src={getImageUrl(Services?.image) || "/placeholder.svg"}
                                        width={500}
                                        height={400}
                                        alt={Services?.title || "Service image"}
                                        className="w-full h-auto object-cover"
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
                          ) : null,
                        )}
                      </div>
                    </div>
                  </div>
                )
              }),
            ),
        )}
    </div>
  )
}





// "use client"
// import { HomeData } from "@/types";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react"



// type Props = {
//   homeData: HomeData[] | undefined;
// };



// export default function ServicesSection({ homeData = undefined }: Props) {
//   const [activeTabs, setActiveTabs] = useState<{ [key: string]: number }>({});

 

//   if (!homeData) return null;


//   return (
// <div className="service-area">

//   {homeData &&
//     homeData.map((data) =>
//       data.sections
//         .filter(
//           (section) => section.type.type === "Services"
//         )
//         .map((section) =>
//           section.section_items.map((item) => {
//             // Use a unique key for each section item, e.g., item.id or item.title
//             const tabKey = item.title;
//             const activeTab = activeTabs[tabKey] ?? 0;

//             return (
//               <div
//                 className="service-tab-bg pt-115 "
//                 // style={{ backgroundSize: "cover", backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${item?.multipleMedia?.[0]?.formats?.large?.url})` }}
//                 key={item.title}
//               >
//                 <div className="container">
//                   <div className="tp-section-box tp-section-box-2 p-relative mb-45 text-center">
//                     <span className="tp-section-subtitle d-inline-block pre mb-10">{section.type.type}</span>
//                     <h2 className="tp-section-title">{item.title}</h2>
//                   </div>
//                   <div className="service-tab-info">
//                     <nav>
//                        <div className="nav tp-service-tab justify-content-center mb-35" id="nav-tab" role="tablist">
//                       {item.sub_items.map((Services, idx) => (
//                         <button
//                           className={`nav-links ${activeTab === idx ? "active" : ""}`}
//                           onClick={() => setActiveTabs((prev) => ({ ...prev, [tabKey]: idx }))}
//                           type="button"
//                           role="tab"
//                           key={idx}
//                         >
//                           {Services.title}
//                         </button>
//                       ))}
//                       </div>
//                     </nav>
//                     {item.sub_items.map((Services, idx) =>
//                       activeTab === idx ? (
//                         <div className="tab-pane fade show active" role="tabpanel" key={idx}>
//                           <div className="slider-tab-main white-bg">
//                             <div className="row">
//                               <div className="col-lg-5 col-12 sv-tab-img">
//                                 <div className="tp-service-tab-img">
//                                   <Image
//                                     src={`${process.env.NEXT_PUBLIC_API_URL}${Services?.image?.formats?.small?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${Services?.image?.formats?.medium?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${Services?.image?.formats?.large?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${Services?.image?.formats?.thumbnail?.url}`}
//                                      width={100}
//                             height={100}
//                             alt="theme-pure"
//                                   />
//                                 </div>
//                               </div>
//                               <div className="col-lg-7 col-12 sv-tab-content">
//                                 <div className="tp-service-tab-content pt-30 pl-25">
//                                   <div className="tab-circle">
//                                     <h4>
//                                       <span>$</span>
//                                       {Services.price}
//                                     </h4>
//                                     <h3 className="sv-tab-titile">{Services.title}</h3>
//                                     <p>{Services.subTitle}</p>
//                                   </div>
//                                   {/* <div className="tp-sv-feature-list mb-40">
//                                     <ul>
//                                       {services[activeTab].features.map((feature, index) => (
//                                         <li key={index}>
//                                           <i className="fal fa-check" />
//                                           {feature}
//                                         </li>
//                                       ))}
//                                     </ul>
//                                   </div> */}
//                                   <div className="services-tab-btn">
//                                     <Link className="tp-btn" href="/services">
//                                       Read More
//                                     </Link>
//                                   </div>
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ) : null
//                     )}
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         )
//     )}

// </div>
//   )
// }
