import { HomeData } from "@/types";
import { Fragment, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react";

type Props = {
  homeData: HomeData[] | undefined;
};



export default function FeaturesSection({ homeData = undefined }: Props) {

  if (!homeData) return null;

  
  return (

<Fragment>
  {homeData &&
                  homeData.map((data) =>
                    data.sections
                      .filter(
                        (section) => section.type.type === "Features"
                      )
                      .map((section) =>
                        section.section_items.map((item, index) => (

    <div
    key={index}
      className="feature-third-area feature-bg-img pt-110 pb-110"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_API_URL}${item?.multipleMedia?.[0]?.formats?.large?.url})`,
      }}
    >
            <div className="container">
                <div className="row justify-content-lg-end">
                    <div className="col-xxl-6 col-xl-7 col-lg-8">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45"><span
                                className="tp-section-subtitle d-inline-block right mb-10">{section?.type.type}</span>
                            <h2 className="tp-section-title">{item?.title}</h2>
                            <h1>{item?.image?.formats?.large?.url}</h1>
                        </div>
                        <div className="row">
                           
                           
                            {item.sub_items.map((feature: { URL: any; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }, idx: Key | null | undefined) => (

                            <div className="col-lg-6 col-md-6" key={idx}>
                                <div className="fea-list d-flex align-items-center mb-30">
                                     <i className={feature.URL ?? undefined} />
                                    <div className="fea-ctn pl-20">
                                        <h5 className="m-0">{feature.title}</h5>
                                    </div>
                                </div>
                            </div>

 ))}

                            {/* <div className="col-lg-6 col-md-6">
                                <div className="fea-list d-flex align-items-center mb-30"><i className="flaticon-secure"></i>
                                    <div className="fea-ctn pl-20">
                                        <h5 className="m-0">Live Footage Collection</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="fea-list d-flex align-items-center mb-30"><i className="flaticon-global"></i>
                                    <div className="fea-ctn pl-20">
                                        <h5 className="m-0">Drone CCTV Discussion</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="fea-list d-flex align-items-center mb-30"><i className="flaticon-database"></i>
                                    <div className="fea-ctn pl-20">
                                        <h5 className="m-0">Hacker &amp; Custom Solution</h5>
                                    </div>
                                </div>
                            </div> */}
                            <div className="fea-button pt-20"><a className="tp-btn mr-25" href="contact">Get In Touch <i
                                        className="fal fa-long-arrow-right"></i></a><a className="tp-black-btn-2"
                                    href="contact">7 Day Free Trail</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  ))
                      )
                  )}


        </Fragment>
  )
}
