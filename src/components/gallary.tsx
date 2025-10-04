"use client"
import type { aboutUsData, Media } from "@/types"
import Image from "next/image"
import { useState } from "react"

type Props = {
  aboutUsData: aboutUsData[] | undefined
}

export default function Gallery({ aboutUsData }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // helper
  const getImageUrl = (media: Media, size: "large" | "medium" | "small" = "small") => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || ""
    return (
      baseUrl +
        (media?.formats?.[size]?.url ||
         media?.url ||
         "/placeholder.svg")
    )
  }

  return (
    <div className="gallary-area mb-115">
      <div className="container-fluid p-0">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide justify-center">
          {aboutUsData?.map((data) =>
            data.sections
              .filter((section) => section.type.type === "Gallary")
              .flatMap((section) =>
                section.section_items.flatMap((item, index) =>
                  Array.isArray(item.multipleMedia)
                    ? item.multipleMedia.map((media: Media, i: number) => (
                        <div
                          key={`${index}-${i}`}
                          className="cursor-pointer flex-shrink-0"
                          onClick={() => setSelectedImage(getImageUrl(media, "large"))}
                        >
                          <Image
                            src={getImageUrl(media, "small")}
                            alt={item.title || "gallery"}
                            width={480}
                            height={570}
                            className="object-cover w-[480px] h-[570px] rounded-lg hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))
                    : [] // 👈 avoid string[] issue
                )
              )
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <Image
              src={selectedImage}
              alt="Zoomed"
              width={480}
              height={570}
              className="object-cover w-[480px] h-[570px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}





// "use client"
// import type { aboutUsData } from "@/types"
// import Image from "next/image"
// import { useState } from "react"

// type Props = {
//   aboutUsData: aboutUsData[] | undefined
// }

// export default function Gallary({ aboutUsData = undefined }: Props) {
//   const [selectedImage, setSelectedImage] = useState<string | null>(null)

//   return (
//     <div className="gallary-area mb-115">
//       <div className="container-fluid p-0">
//         {/* ✅ One row flex gallery */}
//         <div className="flex gap-4  scrollbar-hide justify-center">
//           {aboutUsData &&
//             aboutUsData.map((data) =>
//               data.sections
//                 .filter((section) => section.type.type === "Gallary")
//                 .map((section) =>
//                   section.section_items.map((item, index) =>
//                     item.multipleMedia?.map((media, i) => (
//                       <div
//                         key={`${index}-${i}`}
//                         className="cursor-pointer flex-shrink-0"
//                         onClick={() =>
//                           setSelectedImage(
//                             `${process.env.NEXT_PUBLIC_API_URL}${
//                               media.formats?.large?.url ||
//                               media.formats?.medium?.url ||
//                               media.formats?.small?.url
//                             }`
//                           )
//                         }
//                       >
//                         <Image
//                           src={`${process.env.NEXT_PUBLIC_API_URL}${media.formats?.small?.url}`}
//                           alt={item.title || "gallery"}
//                           width={480}
//                           height={570}
//                           className="object-cover w-[480px] h-[570px] rounded-lg hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>
//                     ))
//                   )
//                 )
//             )}
//         </div>
//       </div>

//       {/* ✅ Fullscreen Modal with animation */}
//       {selectedImage && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
//           onClick={() => setSelectedImage(null)}
//         >
//           <div className="relative animate-zoom-in">
//             {/* Close button */}
//             <button
//               className="absolute -top-10 right-0 text-white text-3xl font-bold"
//               onClick={() => setSelectedImage(null)}
//             >
//               ✕
//             </button>

//             <Image
//               src={selectedImage}
//               alt="Zoomed"
//               width={480}
//               height={570}
//               className="object-cover w-[480px] h-[570px] rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }







// "use client"
// import type { aboutUsData } from "@/types"
// import Image from "next/image"
// import { useState, useEffect } from "react"

// type Props = {
//   aboutUsData: aboutUsData[] | undefined
// }

// export default function Gallary({ aboutUsData = undefined }: Props) {

//   return (
//     // <div className="testimonial-area pt-110 pb-120">
//     //   {homeData &&
//     //     homeData.map((data) =>
//     //       data.sections
//     //         .filter((section) => section.type.type === "Testimonials")
//     //         .map((section) =>
//     //           section.section_items.map((item, index) => {
//     //             return (
//     //               <div key={index} className="container">
//     //                 <div className="row align-items-center">
//     //                   <div className="col-lg-6">
//     //                     <div className="tp-section-box tp-section-box-2 p-relative mb-45">
//     //                       <span className="tp-section-subtitle d-inline-block right mb-10">{section.type.type}</span>
//     //                       <h2 className="tp-section-title">{item.title}</h2>
//     //                     </div>
//     //                   </div>
//     //                   <div className="col-lg-6">
//     //                     <div className="tp-test-arrow text-end mb-45">
//     //                       <button type="button" className="slick-prev slick-arrow" onClick={prevSlide}>
//     //                         <i className="far fa-long-arrow-alt-left" />
//     //                       </button>
//     //                       <button type="button" className="slick-next slick-arrow" onClick={nextSlide}>
//     //                         <i className="far fa-long-arrow-alt-right" />
//     //                       </button>
//     //                     </div>
//     //                   </div>
//     //                 </div>
//     //                 <div
//     //                   className="tp-testimonial-active tp-testimonial-white slider-space-30"
//     //                   onMouseEnter={() => setIsAutoPlaying(false)}
//     //                   onMouseLeave={() => setIsAutoPlaying(true)}
//     //                 >
//     //                   <div className="slick-slider slick-initialized" dir="ltr">
//     //                     <div className="slick-list">
//     //                       <div
//     //                         className="slick-track m-auto"
//     //                         style={{
//     //                           width: "766.6666666666667%",
//     //                           left: "-100%",
//     //                           transform: `translateX(${currentSlide * -23}%)`,
//     //                           transition: "transform 0.5s ease-in-out",
//     //                         }}
//     //                       >
//     //                         {extendedTestimonials.map((testimonial, testimonialIndex) => {
//     //                           const isActive = testimonialIndex === currentSlide + 3

//     //                           return (
//     //                             <div
//     //                               key={`${testimonial.id}-${testimonialIndex}`}
//     //                               data-index={testimonialIndex}
//     //                               tabIndex={isActive ? 0 : -1}
//     //                               className={`slick-slide ${isActive ? "slick-active slick-current" : ""}`}
//     //                               aria-hidden={!isActive}
//     //                               style={{
//     //                                 outline: "none",
//     //                                 width: "4.3478260869565215%",
//     //                                 display: "inline-block",
//     //                               }}
//     //                             >
//     //                               <div>
//     //                                 <div tabIndex={0} style={{ width: "100%", display: "inline-block" }}>
//     //                                   <div className="testi-item-list">
//     //                                     <div className="tp-testimonial-item text-center">
//     //                                       <div className="testi-img p-relative">
//     //                                         {/* <Image
//     //                                           src={`${process.env.NEXT_PUBLIC_API_URL}${testimonial?.image?.formats?.large?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${testimonial?.image?.formats?.medium?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${testimonial?.image?.formats?.small?.url}` || `${process.env.NEXT_PUBLIC_API_URL}${testimonial?.image?.formats?.thumbnail?.url}`}
//     //                                            width={100}
//     //                         height={100}
//     //                         alt="theme-pure"
//     //                                         /> */}

//     //                                         <Image
//     //                                           style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover" }}
//     //                                           src={
//     //                                             testimonial?.image?.formats?.large?.url
//     //                                               ? `${process.env.NEXT_PUBLIC_API_URL}${testimonial.image.formats.large.url}`
//     //                                               : testimonial?.image?.formats?.medium?.url
//     //                                                 ? `${process.env.NEXT_PUBLIC_API_URL}${testimonial.image.formats.medium.url}`
//     //                                                 : testimonial?.image?.formats?.small?.url
//     //                                                   ? `${process.env.NEXT_PUBLIC_API_URL}${testimonial.image.formats.small.url}`
//     //                                                   : testimonial?.image?.formats?.thumbnail?.url
//     //                                                     ? `${process.env.NEXT_PUBLIC_API_URL}${testimonial.image.formats.thumbnail.url}`
//     //                                                     : "/testimonial-avatar.jpg"
//     //                                           }
//     //                                           width={100}
//     //                                           height={100}
//     //                                           alt="theme-pure"
//     //                                         />


//     //                                         <i className="fal fa-quote-right quote-style" />
//     //                                       </div>
//     //                                       <h4 className="testi-text">" {testimonial.title} "</h4>
//     //                                       <div className="testi-meta">
//     //                                         <h5 className="reviewer-name">{testimonial.subTitle}</h5>
//     //                                         <span className="reviewer-position">{testimonial.URL}</span>
//     //                                       </div>
//     //                                     </div>
//     //                                   </div>
//     //                                 </div>
//     //                               </div>
//     //                             </div>
//     //                           )
//     //                         })}
//     //                       </div>
//     //                     </div>
//     //                   </div>
//     //                 </div>
//     //               </div>
//     //             )
//     //           }),
//     //         ),
//     //     )}
//     // </div>


//  <div className="gallary-area mb-115">
//             <div className="container-fluid p-0">
//                 <div className="gallary-slider-active">
//                     <div className="slick-slider slick-initialized" dir="ltr">
//                         <div className="slick-list">
//                             <div className="slick-track" >
//                                 {/* <div data-index="-4" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-1.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="-3" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-3.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="-2" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-1.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="-1" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-3.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div> */}
                               
//                           {aboutUsData &&
//         aboutUsData.map((data) =>
//           data.sections
//             .filter(
//               (section) => section.type.type === "Gallary"
//             )
//             .map((section) =>
//               section.section_items.map((item, index) => (      
                               
//                                <h1>{item.title}</h1>
                               
// //                                 <div data-index={index} className="slick-slide slick-active slick-current" tabIndex={-1}
// //                                     aria-hidden="false" style={{outline:"none", width:"7.142857142857143%"}}>

// //                                         <h1>{item.title}</h1>
// //                                     <div>
// //                                         <div className="gallary-item" tabIndex={index} style={{width:"100%", display:"inline-block"}}>
// //                                             <a className="popup-image" href="#">
                                                
                                                
// //                                                 <img src="assets/img/gallary/gallary.jpg"
// //                                                     alt="theme-pure" />


// // {/* <Image
// //                                               style={{ borderRadius: "50%", width: "100px", height: "100px", objectFit: "cover" }}
// //                                               src={
// //                                                 item?.image?.formats?.large?.url
// //                                                   ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.formats.large.url}`
// //                                                   : item?.image?.formats?.medium?.url
// //                                                     ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.formats.medium.url}`
// //                                                     : item?.image?.formats?.small?.url
// //                                                       ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.formats.small.url}`
// //                                                       : item?.image?.formats?.thumbnail?.url
// //                                                         ? `${process.env.NEXT_PUBLIC_API_URL}${item.image.formats.thumbnail.url}`
// //                                                         : "/item-avatar.jpg"
// //                                               }
// //                                               width={100}
// //                                               height={100}
// //                                               alt="theme-pure"
// //                                             /> */}


                                                    
                                                    
                                                    
// //                                                     </a></div>
// //                                     </div>
// //                                 </div>


//             ))
//             )
//         )}



//                                 {/* <div data-index="1" className="slick-slide slick-active" tabIndex={-1} aria-hidden="false"
//                                     style={{outline:"none", width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-1.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="2" className="slick-slide slick-active" tabIndex={-1} aria-hidden="false"
//                                     style={{outline:"none", width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-3.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div> */}
//                                 {/* <div data-index="3" className="slick-slide slick-active" tabIndex={-1} aria-hidden="false"
//                                     style={{outline:"none", width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-1.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="4" className="slick-slide" tabIndex={-1} aria-hidden="true"
//                                     style={{outline:"none", width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-3.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="5" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="6" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-1.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="7" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-3.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="8" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-1.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div>
//                                 <div data-index="9" tabIndex={-1} className="slick-slide slick-cloned" aria-hidden="true"
//                                     style={{width:"7.142857142857143%"}}>
//                                     <div>
//                                         <div className="gallary-item" tabIndex={-1} style={{width:"100%", display:"inline-block"}}>
//                                             <a className="popup-image" href="#"><img src="assets/img/gallary/gallary-3.jpg"
//                                                     alt="theme-pure" /></a></div>
//                                     </div>
//                                 </div> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>




//   )
// }
