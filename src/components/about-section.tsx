const aboutData = {
  section: {
    subtitle: "About Us",
    title: "Get Best CCTV Solutions For House",
    description:
      "Bandwidth has historically been very unequally distributed worldwide, with increasing concentration in the digital age.",
  },
  images: {
    main: "assets/img/about/about-main-2.jpg",
    secondary: "assets/img/about/about-main-img.jpg",
    third: "assets/img/about/ab-main-small.jpg",
  },
  features: [
    {
      icon: "flaticon-web-security",
      title: "Private & Personal Security",
      subtitle: "Bank & Institutions Solution",
    },
    {
      icon: "flaticon-school",
      title: "We believe the value that our functions add to abusiness.",
      subtitle: "We believe the value that our functions add to abusiness.",
    },
  ],
  button: {
    text: "Learn More",
    link: "about",
  },
  signature: {
    image: "assets/img/about/ab-small3.png",
    name: "Salim Rana",
    role: "Head Of Idea",
  },
}

export default function AboutSection() {
  return (
    <div className="tp-about-area pt-120 pb-90">
      <div className="container">
        <div className="row">
          {/* Left Images */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-about-wapper3 mb-30">
              <div className="ab-main-img">
                <img className="ab-1st-img" src={aboutData.images.main} alt="theme-pure" />
              </div>
              <div className="ab-sec-img">
                <img src={aboutData.images.secondary} alt="theme-pure" />
              </div>
              <div className="ab-third-img d-none d-md-block">
                <img src={aboutData.images.third} alt="theme-pure" />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-xl-6 col-lg-6">
            <div className="tp-ab-wrapper-3 pt-55 pl-50 mb-30">
              <div className="tp-section-box tp-section-box-2 mb-40  p-relative">
                <span className="tp-section-subtitle right d-inline-block">
                  {aboutData.section.subtitle}
                </span>
                <h2 className="tp-section-title mb-20">{aboutData.section.title}</h2>
                <p className="p-text">{aboutData.section.description}</p>
              </div>

              <div className="tp-ab-fe-box mb-40">
                {aboutData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="about-feature-list d-flex align-items-center mb-20"
                  >
                    <div className="about-icon mr-25">
                      <i className={feature.icon} />
                    </div>
                    <div className="about-feature-text">
                      <h5 className="m-0 mb-5">{feature.title}</h5>
                      <p className="m-0">{feature.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="tp-about-fea-signature d-flex align-items-center">
                <div className="mr-30 mb-10">
                  <a className="tp-btn-border" href={aboutData.button.link}>
                    {aboutData.button.text} <i className="fal fa-long-arrow-right" />
                  </a>
                </div>
                <div className="about-signature d-flex align-items-center mb-10">
                  <img src={aboutData.signature.image} alt="theme-pure" />
                  <div className="ab-meta-content ml-15">
                    <h6 className="m-0 ab-meta-title">{aboutData.signature.name}</h6>
                    <span className="ab-meta-subtitle">{aboutData.signature.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
