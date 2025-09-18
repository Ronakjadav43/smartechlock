"use client"
import { HomeData } from "@/types";
import Image from "next/image";
import { useState } from "react"

type Props = {
  homeData: HomeData[] | undefined;
};


export default function History({ homeData = undefined }: Props) {
  const [openAccordion, setOpenAccordion] = useState(0) // First item open by default


  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index)
  }


  if (!homeData) return null;


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
                <div className="row">
                    <div className="col-xxl-6 col-xl-5 col-lg-8 ">
                        <div className="tp-about-wrapper about-page">
                            <div className="tp-section-box tp-section-box-2  p-relative"><span
                                    className="tp-section-subtitle right d-inline-block">history</span>
                                <h2 className="tp-section-title mb-20">Individual Discussions with Qualified Mates.</h2>
                                <p>Bandwidth has historically been very unequally distributed worldwide, with increasing
                                    concentration in the digital age. Historically only 10 countries have hosted 70-75%
                                    of the global telecommunication capacity.</p>
                            </div><a className="tp-btn mt-30" href="contact">Learn More <i
                                    className="fal fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-7 col-lg-12">
                        <div className="tp-ab-4-right d-flex align-items-center">
                            <h4>2000</h4>
                            <div className="ab-4-content">
                                <h3>Journey Was Started</h3>
                                <p>We believe the value that our functions add to a business with right root.</p>
                            </div>
                        </div>
                        <div className="tp-ab-4-right d-flex align-items-center">
                            <h4>2010</h4>
                            <div className="ab-4-content">
                                <h3>Noman Design Award 2010</h3>
                                <p>We believe the value that our functions add to a business with right root.</p>
                            </div>
                        </div>
                        <div className="tp-ab-4-right d-flex align-items-center">
                            <h4>2023</h4>
                            <div className="ab-4-content">
                                <h3>Best Agency In World 2023</h3>
                                <p>We believe the value that our functions add to a business with right root.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


 <div className="feature-area-hm-4 mb-120 p-relative theme-bg">
            <div className="fea-hm-4-item " style={{backgroundImage: "url(assets/img/feature/fea-4-hm.jpg)"}}>
                <div className="tp-fea-4-icon"><button className="popup-video"><i className="fas fa-play"></i></button></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 offset-xl-6 col-lg-6 offset-lg-6 col-12">
                        <div className="tp-about-4-wrapper about-htm-page">
                            <div className="tp-section-box"><span className="tp-section-subtitle right-white p-0">history</span>
                                <h2 className="tp-section-title mb-15">Industry Explicit Competence</h2>
                            </div>
                            <div className="fea-4-box mt-10 p-relative">
                                <p className="m-0">2014 only 3 countries host 50% of the globally <br /> installed bandwidth
                                    potential.</p>
                                <h6>Mikdon S. Simbo <span>-Head Of Idea</span></h6><i
                                    className="flaticon-quote-1 flaticon-quote"></i>
                            </div>
                            <div className="tp-sv-feature-list tp-sv-feature-list-2 pt-35">
                                <ul>
                                    <li><i className="fal fa-check"></i>New Business Ideas create</li>
                                    <li><i className="fal fa-check"></i>Grow corporate financial</li>
                                    <li><i className="fal fa-check"></i>Smart Security System</li>
                                    <li><i className="fal fa-check"></i>24/7 Online Support</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

</div>



  )
}
