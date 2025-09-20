"use client"

import { useState } from "react"
import Header from "@/components/header"
import MobileSidebar from "@/components/mobile-sidebar"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProcessSection from "@/components/process-section"
import ProductsSection from "@/components/products-section"
import FaqSection from "@/components/faq-section"
import QuoteSection from "@/components/quote-section"
import VideoSection from "@/components/video-section"
import BlogSection from "@/components/blog-section"
// import Footer from "@/components/footer"
import { QueryClient, QueryClientProvider, useQueries, UseQueryResult } from "@tanstack/react-query"
import { getHome } from "@/actions/home"
import { HomeData } from "@/types"
import Breadcrumb from "@/components/breadcrumb"
import About from "@/components/about"
import Services from "@/components/services"
import Gallary from "@/components/gallary"
import History from "@/components/history"
import News from "@/components/news"
import ProductList from "@/components/productList"

export default function Products() {

   const queriess = useQueries({
    queries: [
      {
        queryKey: ["products"],
        queryFn:() => getHome("products"),
      },
    ],
  }) as [UseQueryResult<HomeData[], Error>, UseQueryResult<HomeData, Error>];

  const [products] = queriess;

  const productsData = products.data || undefined;

// console.log(productsData,"----------------------123");





  return (
      // <QueryClientProvider client={queryClient}>
    <div id="__next">
    
      <Breadcrumb BreadcrumbData={productsData} />

<ProductList productsData={productsData} />


      {/* <About aboutUsData={productsData} /> */}
      {/* <FeaturesSection homeData={homeData} /> */}
      {/* <Services aboutUsData={productsData} />
      <Gallary aboutUsData={productsData} />
      <History aboutUsData={productsData} /> */}
      {/* <ProductsSection homeData={homeData} />
      <FaqSection homeData={homeData} />
      <QuoteSection  />
      <VideoSection homeData={homeData} /> */}
      {/* <News aboutUsData={productsData} /> */}
    
    </div>
    // </QueryClientProvider>
  )
}
