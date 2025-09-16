"use client";;
import React, { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import MobileSidebar from "@/components/mobile-sidebar";
import Footer from "@/components/footer";



const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);



  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //  const queryClient = new QueryClient();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleMobileMenuToggle = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const handleMobileSidebarClose = () => {
    setIsMobileSidebarOpen(false)
  }


  return (
    <QueryClientProvider client={queryClient}>
       <Header onMobileMenuToggle={handleMobileMenuToggle} />
           <MobileSidebar isOpen={isMobileSidebarOpen} onClose={handleMobileSidebarClose} />
      {children}
       <Footer />
      {isVisible && (
      <Button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 bg-[#b89e71] text-white p-2 w-[50px] h-[50px] flex items-center justify-center shadow-md  transition"
      >
       <ChevronUp size={28} color="#ffffff" strokeWidth={3} />
      </Button>
    )}
    </QueryClientProvider>
  );
};

export default MainLayout;
