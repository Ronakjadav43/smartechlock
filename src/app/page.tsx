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
import Footer from "@/components/footer"
import { QueryClient, QueryClientProvider, useQueries, UseQueryResult } from "@tanstack/react-query"
import { getHome } from "@/actions/home"
import { HomeData } from "@/types"

export default function Home() {

   const queriess = useQueries({
    queries: [
      {
        queryKey: ["home"],
        queryFn:() => getHome("home"),
      },
    ],
  }) as [UseQueryResult<HomeData[], Error>, UseQueryResult<HomeData, Error>];

  const [home] = queriess;

  const homeData = home.data || undefined;

console.log(homeData,"----------------------123");





  return (
      // <QueryClientProvider client={queryClient}>
    <div id="__next">
    
      <HeroSlider homeData={homeData} />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProcessSection />
      <ProductsSection />
      <FaqSection />
      <QuoteSection />
      <VideoSection />
      <BlogSection />
    
    </div>
    // </QueryClientProvider>
  )
}
