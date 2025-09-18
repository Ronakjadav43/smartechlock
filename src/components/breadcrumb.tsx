import { HomeData } from "@/types";
import Image from "next/image";


type Props = {
  homeData: HomeData[] | undefined;
};

export default function Breadcrumb({ homeData = undefined }: Props) {


  if (!homeData) return null;



  return (
    // <div className="tp-blog-area pt-110 pb-90">

    //   {homeData &&
    //     homeData.map((data) =>
    //       data.sections
    //         .filter(
    //           (section) => section.type.type === "Blog"
    //         )
    //         .map((section) =>
    //           section.section_items.map((item, index) => (

    //             <div className="container" key={index}>
    //               <div className="row text-center">
    //                 <div className="col-xl-12">
    //                   <div className="tp-section-box tp-section-box-2 p-relative mb-45">
    //                     <span className="tp-section-subtitle d-inline-block pre mb-10">{section.type.type}</span>
    //                     <h2 className="tp-section-title">{item.title}</h2>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="row">

    //                 {item.sub_items.map((blog, index) => (


    //                   <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={index}>
    //                     <div className="tp-blog-main">
    //                       <div className="tp-blog-item text-center p-relative">
    //                         <div className="blog-img">
    //                           <div className="fix">
    //                             {" "}
    //                             <a href="#">
    //                               {/* <Image src="assets/img/news-feed/feed-item.jpg" alt="theme-pure" /> */}



    //                               {/* <Image className="m-auto"
    //                                 src={
    //                                   blog?.image?.formats?.thumbnail?.url
    //                                     ? `${process.env.NEXT_PUBLIC_API_URL}${blog?.image?.formats?.thumbnail?.url}`
    //                                     : "/placeholder.svg"
    //                                 }
    //                                     width={100}
    //                         height={100}
    //                         alt="theme-pure"
    //                               />
                                  
                                  
    //                               */}




    //                               <Image className="m-auto !w-auto !h-[200px]"
    //                                 // style={{ width: "100px", height: "100px", objectFit: "cover" }}
    //                                 src={
    //                                   blog?.image?.formats?.large?.url
    //                                     ? `${process.env.NEXT_PUBLIC_API_URL}${blog.image.formats.large.url}`
    //                                     : blog?.image?.formats?.medium?.url
    //                                       ? `${process.env.NEXT_PUBLIC_API_URL}${blog.image.formats.medium.url}`
    //                                       : blog?.image?.formats?.small?.url
    //                                         ? `${process.env.NEXT_PUBLIC_API_URL}${blog.image.formats.small.url}`
    //                                         : blog?.image?.formats?.thumbnail?.url
    //                                           ? `${process.env.NEXT_PUBLIC_API_URL}${blog.image.formats.thumbnail.url}`
    //                                           : "/blog-avatar.jpg"
    //                                 }
    //                                 width={100}
    //                                 height={100}
    //                                 alt="theme-pure"
    //                               />






    //                             </a>
    //                           </div>
    //                         </div>
    //                         <div className="tp-blog-content">
    //                           {/* <div className="tp-news-meta">
    //                 <span className="user">
    //                   <a href="#">
    //                     <i className="fal fa-user" />
    //                    Alex Dowson
    //                   </a>
    //                 </span>
    //                 <span className="user-2">
    //                   <a href="#">
    //                     <i className="fal fa-comments" /> 23 Comments
    //                   </a>
    //                 </span>
    //               </div> */}
    //                           <h5 className="tp-blog-title">
    //                             <a href="#">{blog.title}</a>
    //                           </h5>
    //                           <p>
    //                             {blog.subTitle}
    //                           </p>
    //                           <div className="tp-feed-link d-flex align-items-center">
    //                             <a className="blog-link" href="#">
    //                               Read More <i className="far fa-long-arrow-alt-right" />
    //                             </a>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>

    //                 ))}
    //               </div>
    //             </div>

    //           ))
    //         )
    //     )}


    // </div>


     <section className="breadcrumb__area include-bg pt-150 pb-150"
            style={{ backgroundImage: `url(assets/img/breadcrumb/ab-slider.jpg)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="breadcrumb__content p-relative z-index-1">
                            <div className="breadcrumb__list"><span><a href="index.html">Home </a></span><span
                                    className="dvdr"><i className="flaticon-arrow-right"></i></span><span>About</span></div>
                            <h3 className="breadcrumb__title">Blog Grid Classic</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>


  )
}
