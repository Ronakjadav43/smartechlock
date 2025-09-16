"use client"
import type { HomeData } from "@/types"
import { useState, useEffect } from "react"

type Props = {
  homeData: HomeData[] | undefined
}

export default function TestimonialsSection({ homeData = undefined }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials =
    homeData?.flatMap((data) =>
      data.sections
        .filter((section) => section.type.type === "Testimonials")
        .flatMap((section) => section.section_items.flatMap((item) => item.sub_items || [])),
    ) || []

  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const extendedTestimonials =
    testimonials.length >= 3
      ? [...testimonials.slice(-3), ...testimonials, ...testimonials, ...testimonials.slice(0, 3)]
      : [...testimonials, ...testimonials, ...testimonials]

  return (
    <div className="testimonial-area pt-110 pb-120">
      {homeData &&
        homeData.map((data) =>
          data.sections
            .filter((section) => section.type.type === "Testimonials")
            .map((section) =>
              section.section_items.map((item, index) => {
                return (
                  <div key={index} className="container">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                          <span className="tp-section-subtitle d-inline-block right mb-10">{section.type.type}</span>
                          <h2 className="tp-section-title">{item.title}</h2>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="tp-test-arrow text-end mb-45">
                          <button type="button" className="slick-prev slick-arrow" onClick={prevSlide}>
                            <i className="far fa-long-arrow-alt-left" />
                          </button>
                          <button type="button" className="slick-next slick-arrow" onClick={nextSlide}>
                            <i className="far fa-long-arrow-alt-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tp-testimonial-active tp-testimonial-white slider-space-30"
                      onMouseEnter={() => setIsAutoPlaying(false)}
                      onMouseLeave={() => setIsAutoPlaying(true)}
                    >
                      <div className="slick-slider slick-initialized" dir="ltr">
                        <div className="slick-list">
                          <div
                            className="slick-track m-auto"
                            style={{
                  width: "766.6666666666667%",
                  left: "-100%",
                  transform: `translateX(${currentSlide * -23}%)`,
                              transition: "transform 0.5s ease-in-out",
                            }}
                          >
                            {extendedTestimonials.map((testimonial, testimonialIndex) => {
                              const isActive = testimonialIndex === currentSlide + 3

                              return (
                                <div
                                  key={`${testimonial.id}-${testimonialIndex}`}
                                  data-index={testimonialIndex}
                                  tabIndex={isActive ? 0 : -1}
                                  className={`slick-slide ${isActive ? "slick-active slick-current" : ""}`}
                                  aria-hidden={!isActive}
                                  style={{
                                    outline: "none",
                        width: "4.3478260869565215%",
                                    display: "inline-block",
                                  }}
                                >
                                  <div>
                                    <div tabIndex={0} style={{ width: "100%", display: "inline-block" }}>
                                      <div className="testi-item-list">
                                        <div className="tp-testimonial-item text-center">
                                          <div className="testi-img p-relative">
                                            <img
                                              src={
                                                testimonial?.image?.url
                                                  ? `${process.env.NEXT_PUBLIC_API_URL}${testimonial?.image?.url}`
                                                  : "/placeholder.svg"
                                              }
                                              alt="theme-pure"
                                            />
                                            <i className="fal fa-quote-right quote-style" />
                                          </div>
                                          <h4 className="testi-text">" {testimonial.title} "</h4>
                                          <div className="testi-meta">
                                            <h5 className="reviewer-name">{testimonial.subTitle}</h5>
                                            <span className="reviewer-position">{testimonial.URL}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
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
