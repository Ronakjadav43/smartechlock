import { HomeData } from "@/types";


type Props = {
  homeData: HomeData[] | undefined;
};

export default function BlogSection({ homeData = undefined }: Props) {


  if (!homeData) return null;



  return (
    <div className="tp-blog-area pt-110 pb-90">

      {homeData &&
        homeData.map((data) =>
          data.sections
            .filter(
              (section) => section.type.type === "Blog"
            )
            .map((section) =>
              section.section_items.map((item, index) => (

                <div className="container" key={index}>
                  <div className="row text-center">
                    <div className="col-xl-12">
                      <div className="tp-section-box tp-section-box-2 p-relative mb-45">
                        <span className="tp-section-subtitle d-inline-block pre mb-10">{section.type.type}</span>
                        <h2 className="tp-section-title">{item.title}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row">

                    {item.sub_items.map((blog, index) => (


                      <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={index}>
                        <div className="tp-blog-main">
                          <div className="tp-blog-item text-center p-relative">
                            <div className="blog-img">
                              <div className="fix">
                                {" "}
                                <a href="#">
                                  {/* <img src="assets/img/news-feed/feed-item.jpg" alt="theme-pure" /> */}



                                  <img className="m-auto"
                                    src={
                                      blog?.image?.formats?.thumbnail?.url
                                        ? `${process.env.NEXT_PUBLIC_API_URL}${blog?.image?.formats?.thumbnail?.url}`
                                        : "/placeholder.svg"
                                    }
                                    alt="theme-pure"
                                  />



                                </a>
                              </div>
                            </div>
                            <div className="tp-blog-content">
                              {/* <div className="tp-news-meta">
                    <span className="user">
                      <a href="#">
                        <i className="fal fa-user" />
                       Alex Dowson
                      </a>
                    </span>
                    <span className="user-2">
                      <a href="#">
                        <i className="fal fa-comments" /> 23 Comments
                      </a>
                    </span>
                  </div> */}
                              <h5 className="tp-blog-title">
                                <a href="#">{blog.title}</a>
                              </h5>
                              <p>
                                {blog.subTitle}
                              </p>
                              <div className="tp-feed-link d-flex align-items-center">
                                <a className="blog-link" href={blog.URL}>
                                  Read More <i className="far fa-long-arrow-alt-right" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    ))}
                  </div>
                </div>

              ))
            )
        )}


    </div>
  )
}
