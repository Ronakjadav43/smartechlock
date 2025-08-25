"use client"

import { HomeData } from "@/types"
import Image from "next/image"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    image: "assets/img/slider/slider3.jpg",
    subtitle: "Best cctv solution in us",
    title: "Secure Your Family From All Issues",
    bigText: "CCTV",
  },
  {
    id: 2,
    image: "assets/img/slider/slider4.jpg",
    subtitle: "Professional Security Systems",
    title: "Advanced Protection Technology",
    bigText: "CCTV",
  },
  {
    id: 3,
    image: "assets/img/slider/slider3.jpg",
    subtitle: "24/7 Monitoring Service",
    title: "Complete Peace of Mind",
    bigText: "CCTV",
  },
]




type Props = {
    homeData: HomeData[] | undefined
  }



export default function HeroSlider({homeData = undefined} : Props) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }


console.log(homeData,"----------------------hero");


  if (!homeData) {
    return (
     <h1>Loading...</h1>
    )
  }




  return (
    <div className="tp-slider-area">
      <div
        className="slider-active slider-arrow-3-style p-relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <button type="button" className="slick-prev slick-arrow" onClick={goToPrevSlide}>
          <i className="flaticon-left-arrow" />
        </button>
        <button type="button" className="slick-next slick-arrow" onClick={goToNextSlide}>
          <i className="flaticon-right-arrow" />
        </button>

        <div className="slick-slider slick-initialized" dir="ltr">
          <div className="slick-list">
            <div
              className="slick-track"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
                transition: "transform 0.5s ease",
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  data-index={index}
                  className={`slick-slide ${index === currentSlide ? "slick-active slick-current" : ""}`}
                  tabIndex={-1}
                  aria-hidden={index !== currentSlide}
                  style={{
                    outline: "none",
                    width: `${100 / slides.length}%`,
                    position: "relative",
                    left: 0,
                    opacity: index === currentSlide ? 1 : 0.7,
                    transition: "opacity 500ms ease, visibility 500ms ease",
                  }}
                >
                  <div>
                    <div tabIndex={-1} style={{ width: "100%", display: "inline-block" }}>
                      <div
                        className="tp-slider-item p-relative tp-slider-height tp-slider-overlay-3 d-flex align-items-center"
                        style={{
                          backgroundImage: `url(${slide.image})`,
                        }}
                      >
                        <div className="container">
                          <div className="row text-center">
                            <div className="col-xl-8 m-auto">
                              <div className="tp-slider-content tp-slider-content-two tp-slider-content-three">
                                <div className="tp-slider-big-text d-none d-xl-block">
                                  <h2>{slide.bigText}</h2>
                                </div>
                                <span className="tp-slider-sub-title p-0">{slide.subtitle}</span>
                                <h2 className="tp-slider-title">{slide.title}</h2>
                              </div>
                              <div className="tp-slide-btn-box-3 d-flex flex-wrap justify-content-center">
                                <div className="slider-btn">
                                  <a className="tp-btn-white" href="contact">
                                    Get In Touch
                                  </a>
                                </div>
                                <div className="slider-btn">
                                  <a className="tp-btn" href="404-2">
                                    Our Services
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="slider-dots"
          style={{
            position: "absolute",
            bottom: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "10px",
          }}
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "none",
                backgroundColor: index === currentSlide ? "#fff" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </div>






  )
}
