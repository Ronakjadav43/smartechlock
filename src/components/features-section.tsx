import type { HomeData } from "@/types"
import { Fragment } from "react"

type Props = {
  homeData: HomeData[] | undefined
}

function getBackgroundImageUrl(item: any): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""

  // Try to get the image URL from nested media object
  const media = item?.multipleMedia?.[0]
  if (media?.formats) {
    // Try different format sizes in order of preference
    const formats = media.formats
    const imageUrl = formats.large?.url || formats.medium?.url || formats.small?.url || formats.thumbnail?.url

    if (imageUrl) {
      return `url(${apiUrl}${imageUrl})`
    }
  }

  // Fallback to a placeholder image
  return `url(/placeholder.svg?height=600&width=1200&query=features-background)`
}

export default function FeaturesSection({ homeData = undefined }: Props) {
  if (!homeData) return null

  return (
    <Fragment>
      {homeData &&
        homeData.map((data) =>
          data.sections
            .filter((section) => section.type.type === "Features")
            .map((section) =>
              section.section_items.map((item, index) => (
                <div
                  key={index}
                  className="feature-third-area feature-bg-img pt-110 pb-110"
                  style={{
                    backgroundImage: getBackgroundImageUrl(item),
                  }}
                >
                  <div className="container">
                    <div className="row justify-content-lg-end">
                      <div className="col-xxl-6 col-xl-7 col-lg-8">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                          <span className="tp-section-subtitle d-inline-block right mb-10">{section?.type.type}</span>
                          <h2 className="tp-section-title">{item?.title}</h2>
                        </div>
                        <div className="row">
                          {item.sub_items.map((feature, index) => (
                            <div className="col-lg-6 col-md-6" key={index}>
                              <div className="fea-list d-flex align-items-center mb-30">
                                <i className={feature.URL ?? undefined} />
                                <div className="fea-ctn pl-20">
                                  <h5 className="m-0">{feature.title}</h5>
                                </div>
                              </div>
                            </div>
                          ))}

                          <div className="fea-button pt-20">
                            <a className="tp-btn mr-25" href="contact">
                              Get In Touch <i className="fal fa-long-arrow-right"></i>
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
              )),
            ),
        )}
    </Fragment>
  )
}












// import { HomeData } from "@/types";
// import { Fragment, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

// type Props = {
//     homeData: HomeData[] | undefined;
// };



// export default function FeaturesSection({ homeData = undefined }: Props) {

//     if (!homeData) return null;


//     return (

//         <Fragment>
//             {homeData &&
//                 homeData.map((data) =>
//                     data.sections
//                         .filter(
//                             (section) => section.type.type === "Features"
//                         )
//                         .map((section) =>
//                             section.section_items.map((item, index) => (

//                                 <div
//                                     key={index}
//                                     className="feature-third-area feature-bg-img pt-110 pb-110"
//                                     style={{
//                                         backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${(item?.multipleMedia?.[0] as any).formats?.large?.url})`,
//                                     }}
//                                 >
//                                     <div className="container">
//                                         <div className="row justify-content-lg-end">
//                                             <div className="col-xxl-6 col-xl-7 col-lg-8">
//                                                 <div className="tp-section-box tp-section-box-2 p-relative mb-45"><span
//                                                     className="tp-section-subtitle d-inline-block right mb-10">{section?.type.type}</span>
//                                                     <h2 className="tp-section-title">{item?.title}</h2>
//                                                 </div>
//                                                 <div className="row">


//                                                     {item.sub_items.map((feature, index) => (

//                                                         <div className="col-lg-6 col-md-6" key={index}>
//                                                             <div className="fea-list d-flex align-items-center mb-30">
//                                                                 <i className={feature.URL ?? undefined} />
//                                                                 <div className="fea-ctn pl-20">
//                                                                     <h5 className="m-0">{feature.title}</h5>
//                                                                 </div>
//                                                             </div>
//                                                         </div>

//                                                     ))}

//                                                     {/* <div className="col-lg-6 col-md-6">
//                                 <div className="fea-list d-flex align-items-center mb-30"><i className="flaticon-secure"></i>
//                                     <div className="fea-ctn pl-20">
//                                         <h5 className="m-0">Live Footage Collection</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-6">
//                                 <div className="fea-list d-flex align-items-center mb-30"><i className="flaticon-global"></i>
//                                     <div className="fea-ctn pl-20">
//                                         <h5 className="m-0">Drone CCTV Discussion</h5>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-lg-6 col-md-6">
//                                 <div className="fea-list d-flex align-items-center mb-30"><i className="flaticon-database"></i>
//                                     <div className="fea-ctn pl-20">
//                                         <h5 className="m-0">Hacker &amp; Custom Solution</h5>
//                                     </div>
//                                 </div>
//                             </div> */}
//                                                     <div className="fea-button pt-20"><a className="tp-btn mr-25" href="contact">Get In Touch <i
//                                                         className="fal fa-long-arrow-right"></i></a><a className="tp-black-btn-2"
//                                                             href="contact">7 Day Free Trail</a></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>

//                             ))
//                         )
//                 )}


//         </Fragment>
//     )
// }
