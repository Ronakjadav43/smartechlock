"use client"
import { useState } from "react"

export default function FaqSection() {
  const [openAccordion, setOpenAccordion] = useState(0) // First item open by default

  const faqs = [
    {
      id: 1,
      question: "Coordinate movement with breath to flow?",
      answer:
        "Our fitness clubs offer a variety of yoga classes that range from beginner to advanced. With Zium access your favorite class or test out a PURE Yoga class anytime, anywhere.",
    },
    {
      id: 2,
      question: "What is the difference between a DVR and NVR?",
      answer:
        "DVR (Digital Video Recorder) records analog cameras and converts the signal to digital, while NVR (Network Video Recorder) records IP cameras that are already digital. NVR systems typically offer higher resolution and more advanced features.",
    },
    {
      id: 3,
      question: "The cameras, monitors and/or video recorders?",
      answer:
        "A complete CCTV system includes cameras for capturing footage, monitors for viewing live or recorded video, and video recorders (DVR/NVR) for storing the footage. Additional components may include cables, power supplies, and network equipment.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index)
  }

  return (
    <div className="tp-faq-area pt-115 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12 text-center text-xl-start col-12">
            <div className="tp-about-wapper3">
              <img src="assets/img/bg/faq-bg.jpg" alt="theme-pure" />
            </div>
          </div>
          <div className="col-xl-6 col-lg-12 col-12">
            <div className="tp-faq-wrapper pt-50 pl-60 mb-40 p1-40">
              <div className="tp-section-box tp-section-box-2 p-relative">
                <span className="tp-section-subtitle right d-inline-block">faq</span>
                <h2 className="tp-section-title mb-30">Have To Protect All Over The Globe.</h2>
              </div>
              <div className="tp-custom-accordio">
                <div className="accordion" id="accordionExample">
                  {faqs.map((faq, index) => (
                    <div key={faq.id} className="accordion-items">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-buttons ${openAccordion !== index ? "collapsed" : ""}`}
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={openAccordion === index}
                        >
                          {faq.question}
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${openAccordion === index ? "show" : ""}`}
                        style={{
                          maxHeight: openAccordion === index ? "200px" : "0",
                          overflow: "hidden",
                          transition: "max-height 0.3s ease-in-out",
                        }}
                      >
                        <div className="accordion-body">{faq.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
