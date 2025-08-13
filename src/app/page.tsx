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

export default function Home() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const handleMobileSidebarClose = () => {
    setIsMobileSidebarOpen(false)
  }

  return (
    <div id="__next">
      <Header onMobileMenuToggle={handleMobileMenuToggle} />
      <MobileSidebar isOpen={isMobileSidebarOpen} onClose={handleMobileSidebarClose} />
      <HeroSlider />
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
      <Footer />
    </div>
  )
}
