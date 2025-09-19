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

export default function AboutUs() {

   const queriess = useQueries({
    queries: [
      {
        queryKey: ["about-us"],
        queryFn:() => getHome("aboutUs"),
      },
    ],
  }) as [UseQueryResult<HomeData[], Error>, UseQueryResult<HomeData, Error>];

  const [aboutUs] = queriess;

  const aboutUsData = aboutUs.data || undefined;

// console.log(aboutUsData,"----------------------123");





  return (
      // <QueryClientProvider client={queryClient}>
    <div id="__next">
    
      <Breadcrumb aboutUsData={aboutUsData} />
      <About aboutUsData={aboutUsData} />
      {/* <FeaturesSection homeData={homeData} /> */}
      <Services aboutUsData={aboutUsData} />
      <Gallary aboutUsData={aboutUsData} />
      <History aboutUsData={aboutUsData} />
      {/* <ProductsSection homeData={homeData} />
      <FaqSection homeData={homeData} />
      <QuoteSection  />
      <VideoSection homeData={homeData} /> */}
      <News aboutUsData={aboutUsData} />
    
    </div>
    // </QueryClientProvider>
  )
}
