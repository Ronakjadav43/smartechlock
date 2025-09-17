import type { HomeData } from "@/types"
import Image from "next/image"

type Props = {
  homeData: HomeData[] | undefined
}

const getImageUrl = (mediaItem: any): string => {
  if (!mediaItem) return "/about-us-image.jpg"

  const formats = mediaItem.formats
  if (!formats) return "/about-us-image.jpg"

  // Try different format sizes in order of preference
  const url = formats.medium?.url || formats.small?.url || formats.large?.url || formats.thumbnail?.url

  return url ? `${process.env.NEXT_PUBLIC_API_URL}${url}` : "/about-us-image.jpg"
}

export default function AboutSection({ homeData = undefined }: Props) {
  if (!homeData) return null
  return (
    <div className="tp-about-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          {/* Left Images */}
          <div className="col-xl-6 col-lg-6">
            {homeData &&
              homeData.map((data) =>
                data.sections
                  .filter((section) => section.type.type === "About Us")
                  .map((section) =>
                    section.section_items.map((item, index) => (
                      <div className="tp-about-wapper3 mb-30" key={index}>
                        <div className="ab-main-img w-[500px] h-[500px]">
                          <Image
                            className="ab-1st-img"
                            src={getImageUrl(item?.multipleMedia?.[0]) || "/placeholder.svg"}
                            title="theme-pure"
                            width={500}
                            height={500}
                            alt="theme-pure"
                          />
                        </div>
                        <div className="ab-sec-img w-[300px] h-[300px]">
                          <Image
                            src={getImageUrl(item?.multipleMedia?.[1]) || "/placeholder.svg"}
                            title="theme-pure"
                            width={300}
                            height={300}
                            alt="theme-pure"
                          />
                        </div>
                        <div className="ab-third-img d-none d-md-block w-[100px] h-[100px]">
                          <Image
                            src={getImageUrl(item?.multipleMedia?.[2]) || "/placeholder.svg"}
                            title="theme-pure"
                            width={100}
                            height={100}
                            alt="theme-pure"
                          />
                        </div>
                      </div>
                    )),
                  ),
              )}
          </div>
          {/* Right Content */}
          <div className="col-xl-6 col-lg-6">
            {homeData &&
              homeData.map((data) =>
                data.sections
                  .filter((section) => section.type.type === "About Us")
                  .map((section) =>
                    section.section_items.map((item, index) => (
                      <div className="tp-ab-wrapper-3 pt-55 pl-50 mb-30" key={index}>
                        <div className="tp-section-box tp-section-box-2 mb-40  p-relative">
                          <span className="tp-section-subtitle right d-inline-block">{section.type.type}</span>
                          <h2 className="tp-section-title mb-20">{item?.title}</h2>
                          <p className="p-text">{item?.subTitle}</p>
                        </div>

                        <div className="tp-ab-fe-box mb-40">
                          {item.sub_items.map((feature, index) => (
                            <div key={index} className="about-feature-list d-flex align-items-center mb-20">
                              <div className="about-icon mr-25">
                                <i className={feature.URL ?? undefined} />
                              </div>
                              <div className="about-feature-text">
                                <h5 className="m-0 mb-5">{feature.title}</h5>
                                <p className="m-0">{feature.subTitle}</p>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* You can keep static signature/button or map from data if available */}
                        <div className="tp-about-fea-signature d-flex align-items-center">
                          <div className="mr-30 mb-10">
                            <a className="tp-btn-border" href="#">
                              Learn More <i className="fal fa-long-arrow-right" />
                            </a>
                          </div>
                          <div className="about-signature d-flex align-items-center mb-10">
                            {/* <Image src="assets/img/about/ab-small3.png" alt="theme-pure" /> */}
                            <div className="ab-meta-content ml-15">
                              <h6 className="m-0 ab-meta-title">Salim Rana</h6>
                              <span className="ab-meta-subtitle">Head Of Idea</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )),
                  ),
              )}
          </div>
        </div>
      </div>
    </div>
  )
}
























// import { HomeData } from "@/types";
// import Img from "./img/img";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
// import Image from "next/image";

// type Props = {
//   homeData: HomeData[] | undefined;
// };
// export default function AboutSection({ homeData = undefined }: Props) {
//   if (!homeData) return null;
//   return (
//     <div className="tp-about-area pt-120 pb-90">
//       <div className="container">
//         <div className="row">
//           {/* Left Images */}
//           <div className="col-xl-6 col-lg-6">
//             {homeData &&
//               homeData.map((data) =>
//                 data.sections
//                   .filter(
//                     (section) => section.type.type === "About Us"
//                   )
//                   .map((section) =>
//                     section.section_items.map((item, index) => (

//                       <div className="tp-about-wapper3 mb-30" key={index}>
//                         <div className="ab-main-img w-[500px] h-[500px]">
//                           <Image
//                             className="ab-1st-img"
//                             // src={`${process.env.NEXT_PUBLIC_API_URL}${item?.multipleMedia?.[0].formats?.medium?.url}`}
//                             src={`${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[0] as any)?.formats?.medium?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[0] as any)?.formats?.small?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[0] as any)?.formats?.large?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[0] as any)?.formats?.thumbnail?.url}`}
//                             title="theme-pure"
//                             width={500}
//                             height={500}
//                             alt="theme-pure"
//                           />
//                         </div>
//                         <div className="ab-sec-img w-[300px] h-[300px]">
//                           <Image
//  src={`${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[0] as any)?.formats?.medium?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[1] as any)?.formats?.small?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[1] as any)?.formats?.large?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[1] as any)?.formats?.thumbnail?.url}`}
//                             title="theme-pure"
//                             width={300}
//                             height={300}
//                             alt="theme-pure"
//                           />
//                         </div>
//                         <div className="ab-third-img d-none d-md-block w-[100px] h-[100px]">
//                           <Image
//                             //  src={`${process.env.NEXT_PUBLIC_API_URL}${item?.multipleMedia?.[2]?.formats?.small?.url}`}
//                             // src={`${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[2] as any)?.formats?.small?.url}`}


//  src={`${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[2] as any)?.formats?.medium?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[2] as any)?.formats?.small?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[2] as any)?.formats?.large?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[2] as any)?.formats?.thumbnail?.url}`}


//                             title="theme-pure"
//                             width={100}
//                             height={100}
//                             alt="theme-pure"
//                           />
//                         </div>

//                       </div>
//                     ))
//                   )
//               )}
//           </div>
//           {/* Right Content */}
//           <div className="col-xl-6 col-lg-6">
//             {homeData &&
//               homeData.map((data) =>
//                 data.sections
//                   .filter(
//                     (section) => section.type.type === "About Us"
//                   )
//                   .map((section) =>
//                     section.section_items.map((item, index) => (
//                       <div className="tp-ab-wrapper-3 pt-55 pl-50 mb-30" key={index}>
//                         <div className="tp-section-box tp-section-box-2 mb-40  p-relative">
//                           <span className="tp-section-subtitle right d-inline-block">
//                             {section.type.type}
//                           </span>
//                           <h2 className="tp-section-title mb-20">{item?.title}</h2>
//                           <p className="p-text">{item?.subTitle}</p>
//                         </div>

//                         <div className="tp-ab-fe-box mb-40">
//                           {item.sub_items.map((feature, index) => (
//                             <div
//                               key={index}
//                               className="about-feature-list d-flex align-items-center mb-20"
//                             >
//                               <div className="about-icon mr-25">
//                                 <i className={feature.URL ?? undefined} />
//                               </div>
//                               <div className="about-feature-text">
//                                 <h5 className="m-0 mb-5">{feature.title}</h5>
//                                 <p className="m-0">{feature.subTitle}</p>
//                               </div>
//                             </div>
//                           ))}
//                         </div>

//                         {/* You can keep static signature/button or map from data if available */}
//                         <div className="tp-about-fea-signature d-flex align-items-center">
//                           <div className="mr-30 mb-10">
//                             <a className="tp-btn-border" href="#">
//                               Learn More <i className="fal fa-long-arrow-right" />
//                             </a>
//                           </div>
//                           <div className="about-signature d-flex align-items-center mb-10">
//                             {/* <Image src="assets/img/about/ab-small3.png" alt="theme-pure" /> */}
//                             <div className="ab-meta-content ml-15">
//                               <h6 className="m-0 ab-meta-title">Salim Rana</h6>
//                               <span className="ab-meta-subtitle">Head Of Idea</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   )
//               )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
