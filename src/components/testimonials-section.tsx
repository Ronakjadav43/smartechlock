
// "use client"
// import { HomeData } from "@/types";
// import { useState, useEffect } from "react"


// type Props = {
//   homeData: HomeData[] | undefined;
// };




// export default function TestimonialsSection({ homeData = undefined }: Props) {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   // const testimonials = [
//   //   {
//   //     id: 1,
//   //     image: "assets/img/testimonial/test1.png",
//   //     text: "The circuit television, also known as video surveillance is the use of video CCTV",
//   //     name: "Humble Dowson",
//   //     position: "Head Of Idea",
//   //   },
//   //   {
//   //     id: 2,
//   //     image: "assets/img/testimonial/test2.png",
//   //     text: "CCTV stands for Closed Circuit Television It is a video system",
//   //     name: "Limbon Nelson",
//   //     position: "Founder, Romdon Co.",
//   //   },
//   //   {
//   //     id: 3,
//   //     image: "assets/img/testimonial/test3.png",
//   //     text: "That consists strategically placed video CCTV around an area that records",
//   //     name: "Jiksonax Xioma",
//   //     position: "CEO, Jikson Ltd.",
//   //   },
//   // ]

//   // if (!homeData) return null;




//   useEffect(() => {
//     if (isAutoPlaying) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % testimonials.length)
//       }, 4000)
//       return () => clearInterval(interval)
//     }
//   }, [isAutoPlaying, testimonials.length])

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   const extendedTestimonials = [
//     ...testimonials.slice(-3), // Last 3 items at beginning
//     ...testimonials,
//     ...testimonials,
//     ...testimonials.slice(0, 3), // First 3 items at end
//   ]

//   return (
//     <div className="testimonial-area pt-110 pb-120">


//       {homeData &&
//         homeData.map((data) =>
//           data.sections
//             .filter(
//               (section) => section.type.type === "Testimonials"
//             )
//             .map((section) =>
//               section.section_items.map((item, index) => (



//                 <div className="container">
//                   <div className="row align-items-center">
//                     <div className="col-lg-6">
//                       <div className="tp-section-box tp-section-box-2 p-relative mb-45">
//                         <span className="tp-section-subtitle d-inline-block right mb-10">{section.type.type}</span>
//                         <h2 className="tp-section-title">{item.title}</h2>
//                       </div>
//                     </div>
//                     <div className="col-lg-6">
//                       <div className="tp-test-arrow text-end mb-45">
//                         <button type="button" className="slick-prev slick-arrow" onClick={prevSlide}>
//                           <i className="far fa-long-arrow-alt-left" />
//                         </button>
//                         <button type="button" className="slick-next slick-arrow" onClick={nextSlide}>
//                           <i className="far fa-long-arrow-alt-right" />
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className="tp-testimonial-active tp-testimonial-white slider-space-30"
//                     onMouseEnter={() => setIsAutoPlaying(false)}
//                     onMouseLeave={() => setIsAutoPlaying(true)}
//                   >
//                     <div className="slick-slider slick-initialized" dir="ltr">
//                       <div className="slick-list">
//                         <div
//                           className="slick-track m-auto"
//                           style={{
//                             width: "766.6666666666667%",
//                             left: "-100%",
//                             transform: `translateX(${currentSlide * -23}%)`,
//                             transition: "transform 0.5s ease-in-out",
//                           }}
//                         >
//                           {item.sub_items.map((testimonial, index) => {
//                             const isActive = index >= 3 && index < 6 && index - 3 === currentSlide
//                             const isVisible = index >= currentSlide + 1 && index <= currentSlide + 5

//                             return (
//                               <div
//                                 key={`${testimonial.id}-${index}`}
//                                 data-index={index - 3}
//                                 tabIndex={isActive ? 0 : 1}
//                                 className={`slick-slide ${isActive ? "slick-active slick-current" : isVisible ? "slick-active" : ""} ${index < 3 || index >= extendedTestimonials.length - 3 ? "slick-cloned" : ""}`}
//                                 aria-hidden={!isVisible}
//                                 style={{
//                                   outline: "none",
//                                   width: "4.3478260869565215%",
//                                   display: "inline-block",
//                                 }}
//                               >
//                                 <div>
//                                   <div tabIndex={0} style={{ width: "100%", display: "inline-block" }}>
//                                     <div className="testi-item-list">
//                                       <div className="tp-testimonial-item text-center">
//                                         <div className="testi-img p-relative">
//                                           {/* <img
//                                   src={testimonial.image || "/placeholder.svg?height=80&width=80&query=testimonial"}
//                                   alt="theme-pure"
//                                 /> */}


//                                           <img
//                                             src={
//                                               testimonial?.image?.formats?.small?.url
//                                                 ? `${process.env.NEXT_PUBLIC_API_URL}${testimonial?.image?.formats?.small?.url}`
//                                                 : "/placeholder.svg"
//                                             }
//                                             alt="theme-pure"
//                                           />





//                                           <i className="fal fa-quote-right quote-style" />
//                                         </div>
//                                         <h4 className="testi-text">" {testimonial.title} "</h4>
//                                         <div className="testi-meta">
//                                           <h5 className="reviewer-name">{testimonial.subTitle}</h5>
//                                           <span className="reviewer-position">{testimonial.URL}</span>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </div>
//                             )
//                           })}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               ))
//             )
//         )}


//     </div>
//   )
// }



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
