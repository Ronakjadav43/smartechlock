// "use client"
// import { useState, useEffect } from "react"

// export default function TestimonialsSection() {
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)

//   const testimonials = [
//     {
//       id: 1,
//       image: "assets/img/testimonial/test1.png",
//       text: "The circuit television, also known as video surveillance is the use of video CCTV systems that provide excellent security coverage.",
//       name: "Humble Dowson",
//       position: "Head Of Idea",
//     },
//     {
//       id: 2,
//       image: "assets/img/testimonial/test2.png",
//       text: "Outstanding CCTV installation service! The team was professional and the system works perfectly. Highly recommended for security solutions.",
//       name: "Sarah Johnson",
//       position: "Business Owner",
//     },
//     {
//       id: 3,
//       image: "assets/img/testimonial/test3.png",
//       text: "Excellent customer service and top-quality security equipment. The monitoring system has given us peace of mind for our property.",
//       name: "Michael Chen",
//       position: "Property Manager",
//     },
//     {
//       id: 4,
//       image: "assets/img/testimonial/test4.png",
//       text: "Professional installation and reliable 24/7 monitoring service. The best investment we made for our business security needs.",
//       name: "Emily Rodriguez",
//       position: "Store Manager",
//     },
//   ]

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

//   return (
// <>

//     <div className="testimonial-area pt-110 pb-120">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="tp-section-box tp-section-box-2 p-relative mb-45">
//               <span className="tp-section-subtitle d-inline-block right mb-10">testimonials</span>
//               <h2 className="tp-section-title">User Feedbacks</h2>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="tp-test-arrow text-end mb-45">
//               <button type="button" className="slick-prev slick-arrow" onClick={prevSlide}>
//                 <i className="far fa-long-arrow-alt-left" />
//               </button>
//               <button type="button" className="slick-next slick-arrow" onClick={nextSlide}>
//                 <i className="far fa-long-arrow-alt-right" />
//               </button>
//             </div>
//           </div>
//         </div>
//         <div
//           className="tp-testimonial-active tp-testimonial-white slider-space-30"
//           onMouseEnter={() => setIsAutoPlaying(false)}
//           onMouseLeave={() => setIsAutoPlaying(true)}
//         >
//           <div className="testimonial-slider" style={{ position: "relative", overflow: "hidden" }}>
//             <div
//               className="testimonial-track"
//               style={{
//                 display: "flex",
//                 transform: `translateX(-${currentSlide * 100}%)`,
//                 transition: "transform 0.5s ease-in-out",
//               }}
//             >
//               {testimonials.map((testimonial, index) => (
//                 <div key={testimonial.id} className="testimonial-slide" style={{ minWidth: "33.33%", flex: "0 0 33.33%" }}>
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img src={testimonial.image || "/placeholder.svg"} alt="theme-pure" />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">" {testimonial.text} "</h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">{testimonial.name}</h5>
//                         <span className="reviewer-position">{testimonial.position}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="testimonial-dots text-center mt-4">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 className={`dot ${index === currentSlide ? "active" : ""}`}
//                 onClick={() => setCurrentSlide(index)}
//                 style={{
//                   width: "12px",
//                   height: "12px",
//                   borderRadius: "50%",
//                   border: "none",
//                   margin: "0 5px",
//                   backgroundColor: index === currentSlide ? "#007bff" : "#ccc",
//                   cursor: "pointer",
//                   transition: "background-color 0.3s ease",
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>



//     <div className="testimonial-area pt-110 pb-120">
//   <div className="container">
//     <div className="row align-items-center">
//       <div className="col-lg-6">
//         <div className="tp-section-box tp-section-box-2 p-relative mb-45">
//           <span className="tp-section-subtitle d-inline-block right mb-10">
//             testimonials
//           </span>
//           <h2 className="tp-section-title">User Feedbacks</h2>
//         </div>
//       </div>
//       <div className="col-lg-6">
//         <div className="tp-test-arrow text-end mb-45">
//           <button type="button" className="slick-prev slick-arrow">
//             <i className="far fa-long-arrow-alt-left" />
//           </button>
//           <button type="button" className="slick-next slick-arrow">
//             <i className="far fa-long-arrow-alt-right" />{" "}
//           </button>
//         </div>
//       </div>
//     </div>
//     <div className="tp-testimonial-active tp-testimonial-white slider-space-30">
//       <div className="slick-slider slick-initialized" dir="ltr">
//         <div className="slick-list">
//           <div
//             className="slick-track"
//             style={{ width: "766.6666666666667%", left: "-100%" }}
//           >
//             <div
//               data-index={-3}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test3.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ That consists strategically placed video CCTV around
//                         an area that records ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Jiksonax Xioma</h5>
//                         <span className="reviewer-position">
//                           CEO, Jikson Ltd.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={-2}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={-1}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={0}
//               className="slick-slide slick-active slick-current"
//               tabIndex={-1}
//               aria-hidden="false"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={1}
//               className="slick-slide slick-active"
//               tabIndex={-1}
//               aria-hidden="false"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ CCTV stands for Closed Circuit Television It is a
//                         video system “
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Limbon Nelson</h5>
//                         <span className="reviewer-position">
//                           Founder, Romdon Co.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={2}
//               className="slick-slide slick-active"
//               tabIndex={-1}
//               aria-hidden="false"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test3.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ That consists strategically placed video CCTV around
//                         an area that records ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Jiksonax Xioma</h5>
//                         <span className="reviewer-position">
//                           CEO, Jikson Ltd.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={3}
//               className="slick-slide"
//               tabIndex={-1}
//               aria-hidden="true"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={4}
//               className="slick-slide"
//               tabIndex={-1}
//               aria-hidden="true"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={5}
//               className="slick-slide"
//               tabIndex={-1}
//               aria-hidden="true"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={6}
//               className="slick-slide"
//               tabIndex={-1}
//               aria-hidden="true"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ CCTV stands for Closed Circuit Television It is a
//                         video system “
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Limbon Nelson</h5>
//                         <span className="reviewer-position">
//                           Founder, Romdon Co.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={7}
//               className="slick-slide"
//               tabIndex={-1}
//               aria-hidden="true"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test3.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ That consists strategically placed video CCTV around
//                         an area that records ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Jiksonax Xioma</h5>
//                         <span className="reviewer-position">
//                           CEO, Jikson Ltd.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={8}
//               className="slick-slide"
//               tabIndex={-1}
//               aria-hidden="true"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={9}
//               className="slick-slide"
//               tabIndex={-1}
//               aria-hidden="true"
//               style={{ outline: "none", width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={10}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={11}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ CCTV stands for Closed Circuit Television It is a
//                         video system “
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Limbon Nelson</h5>
//                         <span className="reviewer-position">
//                           Founder, Romdon Co.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={12}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test3.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ That consists strategically placed video CCTV around
//                         an area that records ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Jiksonax Xioma</h5>
//                         <span className="reviewer-position">
//                           CEO, Jikson Ltd.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={13}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={14}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={15}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={16}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ CCTV stands for Closed Circuit Television It is a
//                         video system “
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Limbon Nelson</h5>
//                         <span className="reviewer-position">
//                           Founder, Romdon Co.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={17}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test3.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ That consists strategically placed video CCTV around
//                         an area that records ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Jiksonax Xioma</h5>
//                         <span className="reviewer-position">
//                           CEO, Jikson Ltd.
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={18}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test1.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div
//               data-index={19}
//               tabIndex={-1}
//               className="slick-slide slick-cloned"
//               aria-hidden="true"
//               style={{ width: "4.3478260869565215%" }}
//             >
//               <div>
//                 <div
//                   tabIndex={-1}
//                   style={{ width: "100%", display: "inline-block" }}
//                 >
//                   <div className="testi-item-list">
//                     <div className="tp-testimonial-item text-center">
//                       <div className="testi-img p-relative">
//                         <img
//                           src="assets/img/testimonial/test2.png"
//                           alt="theme-pure"
//                         />
//                         <i className="fal fa-quote-right quote-style" />
//                       </div>
//                       <h4 className="testi-text">
//                         “ The circuit television, also known as video
//                         surveillance is the use of video CCTV ”
//                       </h4>
//                       <div className="testi-meta">
//                         <h5 className="reviewer-name">Humble Dowson</h5>
//                         <span className="reviewer-position">Head Of Idea</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


// </>

//   )
// }
"use client"
import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const testimonials = [
    {
      id: 1,
      image: "assets/img/testimonial/test1.png",
      text: "The circuit television, also known as video surveillance is the use of video CCTV",
      name: "Humble Dowson",
      position: "Head Of Idea",
    },
    {
      id: 2,
      image: "assets/img/testimonial/test2.png",
      text: "CCTV stands for Closed Circuit Television It is a video system",
      name: "Limbon Nelson",
      position: "Founder, Romdon Co.",
    },
    {
      id: 3,
      image: "assets/img/testimonial/test3.png",
      text: "That consists strategically placed video CCTV around an area that records",
      name: "Jiksonax Xioma",
      position: "CEO, Jikson Ltd.",
    },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
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

  const extendedTestimonials = [
    ...testimonials.slice(-3), // Last 3 items at beginning
    ...testimonials,
    ...testimonials,
    ...testimonials.slice(0, 3), // First 3 items at end
  ]

  return (
    <div className="testimonial-area pt-110 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="tp-section-box tp-section-box-2 p-relative mb-45">
              <span className="tp-section-subtitle d-inline-block right mb-10">testimonials</span>
              <h2 className="tp-section-title">User Feedbacks</h2>
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
                {extendedTestimonials.map((testimonial, index) => {
                  const isActive = index >= 3 && index < 6 && index - 3 === currentSlide
                  const isVisible = index >= currentSlide + 1 && index <= currentSlide + 5

                  return (
                    <div
                      key={`${testimonial.id}-${index}`}
                      data-index={index - 3}
                      tabIndex={isActive ? 0 : 1}
                      className={`slick-slide ${isActive ? "slick-active slick-current" : isVisible ? "slick-active" : ""} ${index < 3 || index >= extendedTestimonials.length - 3 ? "slick-cloned" : ""}`}
                      aria-hidden={!isVisible}
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
                                  src={testimonial.image || "/placeholder.svg?height=80&width=80&query=testimonial"}
                                  alt="theme-pure"
                                />
                                <i className="fal fa-quote-right quote-style" />
                              </div>
                              <h4 className="testi-text">" {testimonial.text} "</h4>
                              <div className="testi-meta">
                                <h5 className="reviewer-name">{testimonial.name}</h5>
                                <span className="reviewer-position">{testimonial.position}</span>
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
    </div>
  )
}
