'use client'
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Camp from "@/components/Camp/Camp";
import Testimonials from "@/components/Testimonials/Testimonials";
import Work from "@/components/Work/Work";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";

export default function Home() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100
    })
  })
  return (
    <>
     <Navbar/>
     <Hero/>
     <Camp/>
     <Work/>
     <Testimonials/>
     <Features/>
     <Footer/>
    </>
  );
}
