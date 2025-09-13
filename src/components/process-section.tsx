import { HomeData } from "@/types";


type Props = {
  homeData: HomeData[] | undefined;
};

export default function ProcessSection({ homeData = undefined }: Props) {


  if (!homeData) return null;


  return (
    <div className="tp-process-area pt-115 pb-110">
      {homeData &&
        homeData.map((data) =>
          data.sections
            .filter(
              (section) => section.type.type === "Process"
            )
            .map((section) =>
              section.section_items.map((item, index) => (
                <div className="container" key={index}>
                  <div className="row text-center">
                    <div className="col-xl-12">
                      <div className="tp-section-box tp-section-box-2 p-relative mb-50">
                        <span className="tp-section-subtitle d-inline-block pre mb-10">{section.type.type}</span>
                        <h2 className="tp-section-title">{item.title}</h2>
                      </div>
                    </div>
                  </div>
                  <div className="row counter-row">
                    {item.sub_items.map((process, index) => (
                      <div className="col-xl-2 col-lg-4 col-md-4" key={index}>
                        <div className="tp-process-item-2 text-center mb-30">
                          <div className="counter-content" />
                          <h5>{process.subTitle}</h5>
                          <i className={process.URL ?? ""} />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="process-bottom-text text-center">
                    <h3 className="tp-pro-text mt-50 mb-35">{item.subTitle}</h3>
                    <div className="process-btn">
                      <a className="tp-btn" href="#">
                        Commercial CCTV System <i className="fal fa-long-arrow-right" />
                      </a>
                      <a className="tp-black-btn-2 " href="#">
                        Residential CCTV System
                      </a>
                    </div>
                  </div>
                </div>
              ))
            )
        )}
    </div>
  )
}
