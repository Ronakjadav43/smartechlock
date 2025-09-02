import { HomeData } from "@/types";
import Img from "./img/img";

type Props = {
  homeData: HomeData[] | undefined;
};

export default function AboutSection({ homeData = undefined }: Props) {
  // Find the About section
  const aboutSection = homeData
    ?.flatMap((data) => data.sections)
    .find((section) => section.type.type === "About Us");

  if (!aboutSection) return null;

  // First item: main content, rest: features
  const [mainItem, ...featureItems] = aboutSection.section_items;

  return (
    <div className="tp-about-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          {/* Left Images */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-about-wapper3 mb-30">
              <div className="ab-main-img w-[500px] h-[500px]">
                <Img
                  className="ab-1st-img"
                  src={
                    mainItem?.multipleMedia?.[0]?.formats?.large?.url
                      ? `${process.env.NEXT_PUBLIC_API_URL}${mainItem.multipleMedia[0].formats.large.url}`
                      : ""
                  }
                  title="theme-pure"
                />
              </div>
              <div className="ab-sec-img w-[300px] h-[300px]">
                <Img
                  src={
                    mainItem?.multipleMedia?.[1]?.formats?.small?.url
                      ? `${process.env.NEXT_PUBLIC_API_URL}${mainItem.multipleMedia[1].formats.small.url}`
                      : ""
                  }
                  title="theme-pure"
                />
              </div>
              <div className="ab-third-img d-none d-md-block w-[100px] h-[100px]">
                <Img
                  src={
                    mainItem?.multipleMedia?.[2]?.formats?.thumbnail?.url
                      ? `${process.env.NEXT_PUBLIC_API_URL}${mainItem.multipleMedia[2].formats.thumbnail.url}`
                      : ""
                  }
                  title="theme-pure"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-ab-wrapper-3 pt-55 pl-50 mb-30">
              <div className="tp-section-box tp-section-box-2 mb-40  p-relative">
                <span className="tp-section-subtitle right d-inline-block">
                  {aboutSection.type.type}
                </span>
                <h2 className="tp-section-title mb-20">{mainItem?.title}</h2>
                <p className="p-text">{mainItem?.subTitle}</p>
              </div>

              <div className="tp-ab-fe-box mb-40">
                {featureItems.map((feature, idx) => (
                  <div
                    key={feature.id}
                    className="about-feature-list d-flex align-items-center mb-20"
                  >
                    <div className="about-icon mr-25">
                      <i className={feature.URL ?? undefined} />
                    </div>
                    <div className="about-feature-text">
                      <h5 className="m-0 mb-5">{feature.title}</h5>
                      <p className="m-0">{feature.subTitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* You can keep static signature/button or map from data if available */}
              <div className="tp-about-fea-signature d-flex align-items-center">
                <div className="mr-30 mb-10">
                  <a className="tp-btn-border" href="#">
                    Learn More <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
                <div className="about-signature d-flex align-items-center mb-10">
                  <img src="assets/img/about/ab-small3.png" alt="theme-pure" />
                  <div className="ab-meta-content ml-15">
                    <h6 className="m-0 ab-meta-title">Salim Rana</h6>
                    <span className="ab-meta-subtitle">Head Of Idea</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
