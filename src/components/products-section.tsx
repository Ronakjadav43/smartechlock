import { HomeData } from "@/types";

type Props = {
  homeData: HomeData[] | undefined;
};

export default function ProductsSection({ homeData = undefined }: Props) {


 if (!homeData) return null;


  return (
    <div className="tp-shop-area grey-bg pt-115 pb-90">

 {homeData &&
        homeData.map((data) =>
          data.sections
            .filter(
              (section) => section.type.type === "Shop"
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
        <div className="row">
          
           {item.sub_items.map((shop, index) => (
          
          <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
            <div className="tp-porduct-item p-relative text-center mb-30">
              {/* <img src="assets/img/shop/pic-1.jpg" alt="theme-pure" /> */}

 <img className="m-auto"
                                    src={
                                      shop?.image?.formats?.thumbnail?.url
                                        ? `${process.env.NEXT_PUBLIC_API_URL}${shop?.image?.formats?.thumbnail?.url}`
                                        : "/placeholder.svg"
                                    }
                                    alt="theme-pure"
                                  />


              <div className="tp-porduct-content">
                <div className="tp-pro-rating mb-5">
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                  <span>
                    <i className="fas fa-star" />
                  </span>
                </div>
                <h5 className="tp-pro-title">
                  <a href="shop-details">{shop.title}</a>
                </h5>
                <div className="tp-pro-price">
                  <span>${shop.price}</span>
                </div>
                <div className="shop-cart">
                  <a className="tp-btn" href="cart">
                    <i className="fal fa-shopping-cart" /> {/* */}Add To Cart
                  </a>
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
