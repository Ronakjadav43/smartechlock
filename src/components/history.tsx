"use client"
import { aboutUsData } from "@/types";
import Image from "next/image";
import { useState } from "react"
import { format } from "date-fns"


type Props = {
  aboutUsData: aboutUsData[] | undefined;
};


function getBackgroundImageUrl(item: any): string {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || ""

  // Try to get the image URL from nested media object
  const media = item?.image?.[0]
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


export default function History({ aboutUsData = undefined }: Props) {
  const [openAccordion, setOpenAccordion] = useState(0) // First item open by default

    const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleVideoClick = () => {
    setIsVideoOpen(true)
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
  }


  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index)
  }


  if (!aboutUsData) return null;


  return (
    // <div className="tp-faq-area pt-115 pb-90">
    //   <div className="container">
    //     {homeData &&
    //       homeData.map((data) =>
    //         data.sections
    //           .filter(
    //             (section) => section.type.type === "FAQ"
    //           )
    //           .map((section) =>
    //             section.section_items.map((item, index) => (


    //               <div className="row" key={index}>
    //                 <div className="col-xl-6 col-lg-12 text-center text-xl-start col-12">
    //                   <div className="tp-about-wapper3">
    //                     {/* <Image
    //             className="m-auto"
    //             src={`${process.env.NEXT_PUBLIC_API_URL}${(item as any).image[0].formats.small.url}`}
    //                width={100}
    //                         height={100}
    //                         alt="theme-pure"
    //           /> */}



    //                     <Image className="m-auto !w-full !h-full"
    //                       // style={{ width: "100px", height: "100px", objectFit: "cover" }}
    //                       src={
    //                         (item as any).image[0].formats?.large?.url
    //                           ? `${process.env.NEXT_PUBLIC_API_URL}${(item as any).image[0].formats.large.url}`
    //                           : (item as any).image[0]?.formats?.medium?.url
    //                             ? `${process.env.NEXT_PUBLIC_API_URL}${(item as any).image[0].formats.medium.url}`
    //                             : (item as any).image[0]?.formats?.small?.url
    //                               ? `${process.env.NEXT_PUBLIC_API_URL}${(item as any).image[0].formats.small.url}`
    //                               : (item as any).image[0]?.formats?.thumbnail?.url
    //                                 ? `${process.env.NEXT_PUBLIC_API_URL}${(item as any).image[0].formats.thumbnail.url}`
    //                                 : "/item-avatar.jpg"
    //                       }
    //                       width={100}
    //                       height={100}
    //                       alt="theme-pure"
    //                     />










    //                   </div>
    //                 </div>
    //                 <div className="col-xl-6 col-lg-12 col-12">
    //                   <div className="tp-faq-wrapper pt-50 pl-60 mb-40 p1-40">
    //                     <div className="tp-section-box tp-section-box-2 p-relative">
    //                       <span className="tp-section-subtitle right d-inline-block">{section.type.type}</span>
    //                       <h2 className="tp-section-title mb-30">{item.title}</h2>
    //                     </div>
    //                     <div className="tp-custom-accordio">
    //                       <div className="accordion" id="accordionExample">
    //                         {item.sub_items.map((faq, index) => (
    //                           <div key={index} className="accordion-items">
    //                             <h2 className="accordion-header">
    //                               <button
    //                                 className={`accordion-buttons ${openAccordion !== index ? "collapsed" : ""}`}
    //                                 type="button"
    //                                 onClick={() => toggleAccordion(index)}
    //                                 aria-expanded={openAccordion === index}
    //                               >
    //                                 {faq.title}
    //                               </button>
    //                             </h2>
    //                             <div
    //                               className={`accordion-collapse  ${openAccordion === index ? "show" : ""}`}
    //                               style={{
    //                                 maxHeight: openAccordion === index ? "200px" : "0",
    //                                 overflow: "hidden",
    //                                 transition: "max-height 0.3s ease-in-out",
    //                               }}
    //                             >
    //                               <div className="accordion-body">
    //                                 <span> {faq.subTitle} </span>
    //                               </div>
    //                             </div>
    //                           </div>
    //                         ))}
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>

    //             ))
    //           )
    //       )}


    //   </div>
    // </div>
<div>
 <div className="tp-history-area pb-85 fix">
            <div className="container">
  {aboutUsData &&
        aboutUsData.map((data) =>
          data.sections
            .filter(
              (section) => section.type.type === "History"
            )
            .map((section) =>
              section.section_items.map((item, index) => (
                <div className="row" key={index}>
                    <div className="col-xxl-6 col-xl-5 col-lg-8 ">
                        <div className="tp-about-wrapper about-page">
                            <div className="tp-section-box tp-section-box-2  p-relative"><span
                                    className="tp-section-subtitle right d-inline-block">{section.type.type}</span>
                                <h2 className="tp-section-title mb-20">{item.title}</h2>
                                <p>{item.subTitle}</p>
                            </div><a className="tp-btn mt-30" href="contact">Learn More <i
                                    className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-7 col-lg-12">
                       
                       {item.sub_items.map((subItem, index) => (
                       
                        <div className="tp-ab-4-right d-flex align-items-center" key={index}>
                            <h4>{format(new Date(subItem.date), "yyyy")}</h4>
                            <div className="ab-4-content">
                                <h3>{subItem.title}</h3>
                                <p>{subItem.subTitle}</p>
                            </div>
                        </div>
                          ))}



                       
                    </div>
                </div>
   ))
            )
        )} 
            </div>
        </div>
        {aboutUsData &&
        aboutUsData.map((data) =>
          data.sections
            .filter(
              (section) => section.type.type === "History2"
            )
            .map((section) =>
              section.section_items.map((item, index) => (
 <div className="feature-area-hm-4 mb-120 p-relative theme-bg" key={index}>
            <div className="fea-hm-4-item " style={{
                // backgroundImage: "url(assets/img/feature/fea-4-hm.jpg)"

                 backgroundImage: getBackgroundImageUrl(item),

                }}>
                <div className="tp-fea-4-icon"><button   onClick={handleVideoClick} className="popup-video"><i className="fas fa-play"></i></button></div>


  {isVideoOpen && (



        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeVideo}>
          <div className="relative w-full max-w-4xl mx-4">
            <button onClick={closeVideo} className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl">
              ✕
            </button>
            <div className="relative w-full h-[500px] pb-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={item.URL || ""}
                title="CCTV Security Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </div>




        </div>
        



        
      )}






            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-12">
                        <div className="tp-about-4-wrapper about-htm-page">
                            <div className="tp-section-box"><span className="tp-section-subtitle right-white p-0">{section.type.type}</span>
                                <h2 className="tp-section-title mb-15">{item.title}</h2>
                            </div>
                            <div className="fea-4-box mt-10 p-relative">
                                <p className="m-0">{item.subTitle}</p>
                                <h6>Mikdon S. Simbo <span>-Head Of Idea</span></h6><i
                                    className="flaticon-quote-1 flaticon-quote"></i>
                            </div>
                            <div className="tp-sv-feature-list tp-sv-feature-list-2 pt-35">
                                <ul>
{item.list && item.list.map((listItem, index) => (
                                    <li key={index}><i className="fal fa-check"></i>{listItem.text}</li>
)) }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         ))
            )
        )} 

</div>



  )
}
