import { Camera, Shield, Globe, Database } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Camera,
      title: "Full-Time Device Protection",
    },
    {
      icon: Shield,
      title: "Live Footage Collection",
    },
    {
      icon: Globe,
      title: "Drone CCTV Discussion",
    },
    {
      icon: Database,
      title: "Hacker & Custom Solution",
    },
  ]

  return (
    <div className="feature-third-area feature-bg-img pt-110 pb-110"
            style={{ backgroundImage: "url(assets/img/feature/feature-bg.jpg)" }}>
            <div className="container">
                <div className="row justify-content-lg-end">
                    <div className="col-xxl-6 col-xl-7 col-lg-8">
                        <div className="tp-section-box tp-section-box-2 p-relative mb-45"><span
                                className="tp-section-subtitle d-inline-block right mb-10">features</span>
                            <h2 className="tp-section-title">Opting For Security &amp; Making You Free</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="fea-list d-flex align-items-center mb-30"><i
                                        className="flaticon-spy-camera"></i>
                                    <div className="fea-ctn pl-20">
                                        <h5 className="m-0">Full-Time Device Protection</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
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
                            </div>
                            <div className="fea-button pt-20"><a className="tp-btn mr-25" href="contact">Get In Touch <i
                                        className="fal fa-long-arrow-right"></i></a><a className="tp-black-btn-2"
                                    href="contact">7 Day Free Trail</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
