"use client"
import { HomeData } from "@/types";
import { useState } from "react"

type Props = {
  homeData: HomeData[] | undefined;
};


export default function FaqSection({ homeData = undefined }: Props) {
  const [openAccordion, setOpenAccordion] = useState(0) // First item open by default


  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index)
  }


 if (!homeData) return null;


  return (
    <div className="tp-faq-area pt-115 pb-90">
      <div className="container">
{homeData &&
        homeData.map((data) =>
          data.sections
            .filter(
              (section) => section.type.type === "FAQ"
            )
            .map((section) =>
              section.section_items.map((item, index) => (


        <div className="row" key={index}>
          <div className="col-xl-6 col-lg-12 text-center text-xl-start col-12">
            <div className="tp-about-wapper3">
              <img
                className="m-auto"
                src={
                  item?.image?.[0]?.formats?.small?.url
                    ? `${process.env.NEXT_PUBLIC_API_URL}${item.image[0].formats.small.url}`
                    : "/placeholder.svg"
                }
                alt="theme-pure"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-12">
            <div className="tp-faq-wrapper pt-50 pl-60 mb-40 p1-40">
              <div className="tp-section-box tp-section-box-2 p-relative">
                <span className="tp-section-subtitle right d-inline-block">{section.type.type}</span>
                <h2 className="tp-section-title mb-30">{item.title}</h2>
              </div>
              <div className="tp-custom-accordio">
                <div className="accordion" id="accordionExample">
                  {item.sub_items.map((faq, index) => (
                    <div key={index} className="accordion-items">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-buttons ${openAccordion !== index ? "collapsed" : ""}`}
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={openAccordion === index}
                        >
                          {faq.title}
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse  ${openAccordion === index ? "show" : ""}`}
                        style={{
                          maxHeight: openAccordion === index ? "200px" : "0",
                          overflow: "hidden",
                          transition: "max-height 0.3s ease-in-out",
                        }}
                      >
                        <div className="accordion-body">
                         <span> {faq.subTitle} </span>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

  ))
            )
        )}


      </div>
    </div>
  )
}
