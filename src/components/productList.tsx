import { productsData } from "@/types";
import Image from "next/image";

type Props = {
  productsData: productsData[] | undefined;
};

export default function ProductList({ productsData = undefined }: Props) {


 if (!productsData) return null;


  return (
//     <div className="tp-shop-area grey-bg pt-115 pb-90">

//  {productsData &&
//         productsData.map((data) =>
//           data.sections
//             .filter(
//               (section) => section.type.type === "ProductList"
//             )
//             .map((section) =>
//               section.section_items.map((item, index) => (
      
//       <div className="container" key={index}>
//         <div className="row text-center">
//           <div className="col-xl-12">
//             <div className="tp-section-box tp-section-box-2 p-relative mb-50">
//               <span className="tp-section-subtitle d-inline-block pre mb-10">{section.type.type}</span>
//               <h2 className="tp-section-title">{item.title}</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row">
          
//            {item.sub_items.map((shop, index) => (
          
//           <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
//             <div className="tp-porduct-item p-relative text-center mb-30">
//               {/* <Image src="assets/img/shop/pic-1.jpg" alt="theme-pure" /> */}

//  {/* <Image className="m-auto"
//                                     src={
//                                       shop?.image?.formats?.thumbnail?.url
//                                         ? `${process.env.NEXT_PUBLIC_API_URL}${shop?.image?.formats?.thumbnail?.url}`
//                                         : "/placeholder.svg"
//                                     }
//                                     width={100}
//                             height={100}
//                             alt="theme-pure"
//                                   /> */}


//  <Image className="m-auto !w-auto !h-[200px]"
//                                               // style={{ width: "100px", height: "100px", objectFit: "cover" }}
//                                               src={
//                                                 shop?.image?.formats?.large?.url
//                                                   ? `${process.env.NEXT_PUBLIC_API_URL}${shop.image.formats.large.url}`
//                                                   : shop?.image?.formats?.medium?.url
//                                                     ? `${process.env.NEXT_PUBLIC_API_URL}${shop.image.formats.medium.url}`
//                                                     : shop?.image?.formats?.small?.url
//                                                       ? `${process.env.NEXT_PUBLIC_API_URL}${shop.image.formats.small.url}`
//                                                       : shop?.image?.formats?.thumbnail?.url
//                                                         ? `${process.env.NEXT_PUBLIC_API_URL}${shop.image.formats.thumbnail.url}`
//                                                         : "/shop-avatar.jpg"
//                                               }
//                                               width={100}
//                                               height={100}
//                                               alt="theme-pure"
//                                             />






//               <div className="tp-porduct-content">
//                 <div className="tp-pro-rating mb-5">
//                   <span>
//                     <i className="fas fa-star" />
//                   </span>
//                   <span>
//                     <i className="fas fa-star" />
//                   </span>
//                   <span>
//                     <i className="fas fa-star" />
//                   </span>
//                   <span>
//                     <i className="fas fa-star" />
//                   </span>
//                   <span>
//                     <i className="fas fa-star" />
//                   </span>
//                 </div>
//                 <h5 className="tp-pro-title">
//                   <a href="shop-details">{shop.title}</a>
//                 </h5>
//                 <div className="tp-pro-price">
//                   <span>${shop.price}</span>
//                 </div>
//                 <div className="shop-cart">
//                   <a className="tp-btn" href="cart">
//                     <i className="fal fa-shopping-cart" /> {/* */}Add To Cart
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//   ))}


         
//         </div>
//       </div>

//   ))
//             )
//         )}



//     </div>


 <section className="product__area pt-120 pb-100">

{productsData &&
        productsData.map((data) =>
          data.sections
            .filter(
              (section) => section.type.type === "ProductList"
            )
            .map((section) =>
              section.section_items.map((item, index) => (

            <div className="container" key={index}>



                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                        <div className="product__result">
                            <p><span>{item.sub_items.length}</span> {item.title}</p>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
                        <div className="product__filter-wrapper d-flex align-items-center justify-content-md-end">
                            <div className="product__filter-count d-flex align-items-center"><span>Show</span>
                                <div className="nice-select form-select-lg mb-3 false" role="button" >
                                  {/* tabindex="0" */}
                                  <span
                                        className="current">12</span>
                                    <ul className="list" role="menubar">
                                        <li data-value="12" className="option selected focus" role="menuitem">12</li>
                                        <li data-value="16" className="option false" role="menuitem">16</li>
                                        <li data-value="20" className="option false" role="menuitem">20</li>
                                        <li data-value="24" className="option false" role="menuitem">24</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="product__filter-style nav nav-tabs" role="tablist"></div>
                        </div>
                    </div>
                </div>
               
               
               
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="product__filter-tab">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-grid-tab" role="tabpanel"
                                    aria-labelledby="nav-grid-tab">
                                    <div className="row">

  {item.sub_items.map((products, index) => (


                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6" key={index}>
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details">
                                                          
                                                          
                                                          {/* <img src="assets/img/shop/shop-1.jpg"
                                                            alt="theme-pure" /> */}




<Image className="m-auto !w-[300px] !h-[350px]"
                                              //  style={{ width: "300px !important", height: "350px !important", objectFit: "cover" }}
                                              src={

                                                 products?.image?.url
                                                  ? `${process.env.NEXT_PUBLIC_API_URL}${products.image.url}`

                                                : products?.image?.formats?.large?.url
                                                  ? `${process.env.NEXT_PUBLIC_API_URL}${products.image.formats.large.url}`
                                                  : products?.image?.formats?.medium?.url
                                                    ? `${process.env.NEXT_PUBLIC_API_URL}${products.image.formats.medium.url}`
                                                    : products?.image?.formats?.small?.url
                                                      ? `${process.env.NEXT_PUBLIC_API_URL}${products.image.formats.small.url}`
                                                      : products?.image?.formats?.thumbnail?.url
                                                        ? `${process.env.NEXT_PUBLIC_API_URL}${products.image.formats.thumbnail.url}`
                                                        : "/products-avatar.jpg"
                                              }
                                              width={300}
                                              height={350}
                                              alt="theme-pure"
                                            />





                                                            
                                                            
                                                            </a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">{products.title}</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£{products.price}</span></div>
                                                </div>
                                            </div>
                                        </div>

  ))}


                                        {/* <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-2.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Fighter Technology
                                                            Camera</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£19.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-3.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">External Dome
                                                            Camera</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£27.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-5.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Bullet CC
                                                            Camera</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£59.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-4.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Mount Camera</a>
                                                    </h4>
                                                    <div className="product__price"><span
                                                            className="price">£39.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-6.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Day Night
                                                            Camera</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£69.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-7.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Tilt &amp; Zoom
                                                            Camera</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£92.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-4.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Discreet CCTV</a>
                                                    </h4>
                                                    <div className="product__price"><span
                                                            className="price">£35.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-8.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Varifocal
                                                            Cameras</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£11.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-9.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Network
                                                            Cameras</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£87.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-10.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Definition
                                                            Cameras</a></h4>
                                                    <div className="product__price"><span
                                                            className="price">£38.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
                                            <div className="product__item mb-30 text-center transition-3">
                                                <div className="product__thumb p-relative mb-30 w-img fix"><a
                                                        href="shop-details"><img src="assets/img/shop/shop-12.jpg"
                                                            alt="theme-pure" /></a>
                                                    <div className="product__icon"><a href="#"><i
                                                                className="fal fa-eye"></i></a><a href="#"><i
                                                                className="fal fa-shopping-cart"></i></a><a href="#"><i
                                                                className="fal fa-heart"></i></a></div>
                                                </div>
                                                <div className="product__content">
                                                    <h4 className="product__title"><a href="shop-details">Action Cameras</a>
                                                    </h4>
                                                    <div className="product__price"><span
                                                            className="price">£15.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="basic-pagination pt-40">
                                            <nav>
                                                <ul>
                                                    <li><a href="blog"><i className="far fa-angle-left"></i></a></li>
                                                    <li><a href="blog">1</a></li>
                                                    <li><span className="current">2</span></li>
                                                    <li><a href="blog">3</a></li>
                                                    <li><a href="blog"><i className="far fa-angle-right"></i></a></li>
                                                </ul>
                                            </nav>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

  ))
            )
        )}

        </section>





  )
}
