// import { useState } from "react"

// export default function VideoSection() {
//   const [isVideoOpen, setIsVideoOpen] = useState(false)

//   const handleVideoClick = () => {
//     setIsVideoOpen(true)
//   }

//   const closeVideo = () => {
//     setIsVideoOpen(false)
//   }

//   return (
//     <>
//       <div
//         className="tp-support-area tp-support-area-2 p-relative"
//         style={{ backgroundImage: "url(/assets/img/bg/pic-bg.jpg)" }}
//       >
//         {/* Overlay for the teal effect */}
//         <div className="absolute inset-0 bg-teal-600/70"></div>

//         <div className="container relative z-10">
//           <div className="row">
//             <div className="col-xl-8 col-lg-10 m-auto">
//               <div className="tpsupport__overlay-content text-center">
//                 <button
//                   className="popup-video mb-60 relative inline-flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full hover:bg-teal-600 transition-colors duration-300 group"
//                   onClick={handleVideoClick}
//                 >
//                   <i className="fas fa-play text-white text-xl ml-1" />
//                   {/* Pulse animation rings */}
//                   <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20"></div>
//                   <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-10 animation-delay-200"></div>
//                 </button>
//                 <div className="tp-section-box tp-section-box-2 white-text p-relative mb-45 text-center">
//                   <span className="tp-section-subtitle d-inline-block pre mb-10 text-white/90 uppercase tracking-wider text-sm font-medium">
//                     intro video
//                   </span>
//                   <h2 className="tp-section-title text-white text-4xl md:text-5xl font-bold leading-tight">
//                     CCTV Security On The Way
//                   </h2>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Video Modal */}
//       {isVideoOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeVideo}>
//           <div className="relative w-full max-w-4xl mx-4">
//             <button onClick={closeVideo} className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl">
//               ✕
//             </button>
//             <div className="relative w-full h-[500px] pb-[56.25%]">
//               <iframe
//                 className="absolute inset-0 w-full h-full"
//                 src="https://youtu.be/bukN2P7WpwE?si=Ks3SfhwLY--C62A0"
//                 title="CCTV Security Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .animation-delay-200 {
//           animation-delay: 200ms;
//         }
//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 15px;
//         }
//         .row {
//           display: flex;
//           flex-wrap: wrap;
//           margin: 0 -15px;
//         }
//         .col-xl-8 {
//           flex: 0 0 66.666667%;
//           max-width: 66.666667%;
//           padding: 0 15px;
//         }
//         .col-lg-10 {
//           flex: 0 0 83.333333%;
//           max-width: 83.333333%;
//         }
//         .m-auto {
//           margin: auto;
//         }
//         .tp-support-area {
//           padding: 120px 0;
//           background-size: cover;
//           background-position: center;
//           background-repeat: no-repeat;
//         }
//         .p-relative {
//           position: relative;
//         }
//         .mb-60 {
//           margin-bottom: 60px;
//         }
//         .mb-45 {
//           margin-bottom: 45px;
//         }
//         .mb-10 {
//           margin-bottom: 10px;
//         }
//         .text-center {
//           text-align: center;
//         }
//         .d-inline-block {
//           display: inline-block;
//         }
//         .pre {
//           font-family: monospace;
//         }
//         @media (max-width: 768px) {
//           .col-xl-8, .col-lg-10 {
//             flex: 0 0 100%;
//             max-width: 100%;
//           }
//           .tp-support-area {
//             padding: 80px 0;
//           }
//         }
//       `}</style>
//     </>
//   )
// }




import { HomeData } from "@/types";
import { useState } from "react"


type Props = {
  homeData: HomeData[] | undefined;
};

export default function VideoSection({ homeData = undefined }: Props) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const handleVideoClick = () => {
    setIsVideoOpen(true)
  }

  const closeVideo = () => {
    setIsVideoOpen(false)
  }


 if (!homeData) return null;


  return (
    <>
{homeData &&
        homeData.map((data) =>
          data.sections
            .filter(
              (section) => section.type.type === "Video"
            )
            .map((section) =>
              section.section_items.map((item, index) => (

    <div key={index}>
      <div
        className="tp-support-area tp-support-area-2 p-relative"
        style={{ backgroundImage: "url(/assets/img/bg/pic-bg.jpg)" }}
      >
        {/* Overlay for the teal effect */}
        <div className="absolute inset-0 bg-teal-600/70"></div>

        <div className="container relative z-10">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto">
              <div className="tpsupport__overlay-content text-center">
                <button
                  className="popup-video mb-60 relative inline-flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full hover:bg-teal-600 transition-colors duration-300 group"
                  onClick={handleVideoClick}
                >
                  <i className="fas fa-play text-white text-xl ml-1" />
                  {/* Pulse animation rings */}
                  <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-20"></div>
                  <div className="absolute inset-0 rounded-full bg-teal-500 animate-ping opacity-10 animation-delay-200"></div>
                </button>
                <div className="tp-section-box tp-section-box-2 white-text p-relative mb-45 text-center">
                  <span className="tp-section-subtitle d-inline-block pre mb-10 text-white/90 uppercase tracking-wider text-sm font-medium">
                   {section.type.type}
                  </span>
                  <h2 className="tp-section-title text-white text-4xl md:text-5xl font-bold leading-tight">
                   {item.title}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
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

  ))
            )
        )}



      <style jsx>{`
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 15px;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }
        .col-xl-8 {
          flex: 0 0 66.666667%;
          max-width: 66.666667%;
          padding: 0 15px;
        }
        .col-lg-10 {
          flex: 0 0 83.333333%;
          max-width: 83.333333%;
        }
        .m-auto {
          margin: auto;
        }
        .tp-support-area {
          padding: 120px 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .p-relative {
          position: relative;
        }
        .mb-60 {
          margin-bottom: 60px;
        }
        .mb-45 {
          margin-bottom: 45px;
        }
        .mb-10 {
          margin-bottom: 10px;
        }
        .text-center {
          text-align: center;
        }
        .d-inline-block {
          display: inline-block;
        }
        .pre {
          font-family: monospace;
        }
        @media (max-width: 768px) {
          .col-xl-8, .col-lg-10 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .tp-support-area {
            padding: 80px 0;
          }
        }
      `}</style>
    </>
  )
}














// export default function VideoSection() {
//   return (
//     <div
//       className="tp-support-area tp-support-area-2  p-relative"
//       style={{ backgroundImage: "url(assets/img/bg/pic-bg.jpg)" }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-xl-8 col-lg-10  m-auto">
//             <div className="tpsupport__overlay-content text-center">
//               <button className="popup-video mb-60">
//                 <i className="fas fa-play" />
//               </button>
//               <div className="tp-section-box tp-section-box-2 white-text p-relative mb-45 text-center">
//                 <span className="tp-section-subtitle d-inline-block pre mb-10">intro video</span>
//                 <h2 className="tp-section-title">CCTV Security On The Way</h2>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
