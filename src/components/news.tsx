import { aboutUsData } from "@/types";
import Image from "next/image";
import { format } from "date-fns"

type Props = {
    aboutUsData: aboutUsData[] | undefined;
};

export default function News({ aboutUsData = undefined }: Props) {


    if (!aboutUsData) return null;



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


        <div className="tp-feed-area pb-90">



            {aboutUsData &&
                aboutUsData.map((data) =>
                    data.sections
                        .filter(
                            (section) => section.type.type === "News"
                        )
                        .map((section) =>
                            section.section_items.map((item, index) => (




                                <div className="container" key={index}>
                                    <div className="row text-center">
                                        <div className="col-xl-12">
                                            <div className="tp-section-box tp-section-box-2 p-relative mb-45"><span
                                                className="tp-section-subtitle d-inline-block pre mb-10">{section.type.type}</span>
                                                <h2 className="tp-section-title">{item.title}</h2>
                                            </div>
                                        </div>
                                    </div>




                                    <div className="row">


                                        {item.sub_items.map((news, index) => (


                                            <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                                <div className="tp-feed-item mb-30">
                                                    <div className="tp-feed-img p-relative">
                                                        <div className="fix"><a href="#">


                                                            {/* <img src="assets/img/blog/blog-big-1.jpg"
                                            alt="theme-pure" /> */}




                                                            <Image className="m-auto !w-auto !h-[200px]"
                                                                // style={{ width: "100px", height: "100px", objectFit: "cover" }}
                                                                src={
                                                                    news?.image?.formats?.large?.url
                                                                        ? `${process.env.NEXT_PUBLIC_API_URL}${news.image.formats.large.url}`
                                                                        : news?.image?.formats?.medium?.url
                                                                            ? `${process.env.NEXT_PUBLIC_API_URL}${news.image.formats.medium.url}`
                                                                            : news?.image?.formats?.small?.url
                                                                                ? `${process.env.NEXT_PUBLIC_API_URL}${news.image.formats.small.url}`
                                                                                : news?.image?.formats?.thumbnail?.url
                                                                                    ? `${process.env.NEXT_PUBLIC_API_URL}${news.image.formats.thumbnail.url}`
                                                                                    : "/news-avatar.jpg"
                                                                }
                                                                width={100}
                                                                height={100}
                                                                alt="theme-pure"
                                                            />





                                                        </a></div>
                                                        <div className="tp-meta-date">
                                                            <h3 className="meta-date-title"><a href="#">{format(new Date(news.date), "dd")}</a></h3>
                                                            <p>{format(new Date(news.date), "MMMM")}</p>
                                                        </div>
                                                    </div>
                                                    <div className="tp-feed-content">
                                                        <div className="tp-latest-blog-meta"><span>by</span><a href="#">admin</a><a href="#">{news.subTitle}</a></div>
                                                        <h5 className="tp-latest-title"><a href="blog-details">{news.title}</a></h5>
                                                        <div className="tp-feed-link d-flex align-items-center"><a href="#">Read More <i
                                                            className="far fa-long-arrow-alt-right"></i></a></div>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}




                                        {/* <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="tp-feed-item mb-30">
                            <div className="tp-feed-img p-relative">
                                <div className="fix"><a href="#"><img src="assets/img/blog/blog-big-3.jpg"
                                            alt="theme-pure" /></a></div>
                                <div className="tp-meta-date">
                                    <h3 className="meta-date-title"><a href="#">25</a></h3>
                                    <p>June</p>
                                </div>
                            </div>
                            <div className="tp-feed-content">
                                <div className="tp-latest-blog-meta"><span>by</span><a href="#">admin</a><a href="#">- cctv,
                                        security</a></div>
                                <h5 className="tp-latest-title"><a href="blog-details">While a bad name will give potential
                                        customers the wrong impression.</a></h5>
                                <div className="tp-feed-link d-flex align-items-center"><a href="#">Read More <i
                                            className="far fa-long-arrow-alt-right"></i></a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="tp-feed-item mb-30">
                            <div className="tp-feed-img p-relative">
                                <div className="fix"><a href="#"><img src="assets/img/blog/blog-big-2.jpg"
                                            alt="theme-pure" /></a></div>
                                <div className="tp-meta-date">
                                    <h3 className="meta-date-title"><a href="#">26</a></h3>
                                    <p>June</p>
                                </div>
                            </div>
                            <div className="tp-feed-content">
                                <div className="tp-latest-blog-meta"><span>by</span><a href="#">admin</a><a href="#">- cctv,
                                        security</a></div>
                                <h5 className="tp-latest-title"><a href="blog-details">A CCTV business name is one of the
                                        most important decisions</a></h5>
                                <div className="tp-feed-link d-flex align-items-center"><a href="#">Read More <i
                                            className="far fa-long-arrow-alt-right"></i></a></div>
                            </div>
                        </div>
                    </div> */}
                                    </div>






                                </div>


                            ))
                        )
                )}




        </div>



    )
}
