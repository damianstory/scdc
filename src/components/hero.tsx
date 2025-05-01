"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  // Function to handle smooth scrolling to the video section
  const scrollToVideo = () => {
    // Find the element with ID "video-section"
    const videoSection = document.getElementById("video-section");
    
    if (videoSection) {
      const headerOffset = 130; // offset to account for fixed header
      const elementPosition = videoSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="container flex min-h-[calc(70vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 pt-6 pb-3 text-center md:pt-8 md:pb-4">
      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Career Education Curriculum
          <br />
          is Siloed
          <br />
          
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        <br />
        But it doesn&apos;t have to be. 
        <br />
        <br />Customized in collaboration with each school, 
        <br /> <strong className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-transparent"> myBlueprint&apos;s School Career Development Certificate</strong> 
        <br />will assist building leaders in developing an intentional scope and sequence full of career connected learning opportunities that encourage consistent, reflective career conversations throughout a student&apos;s high school journey.  
        </p>
      </div>
      <div className="flex justify-center">
        <Button variant="outline" size="lg" onClick={scrollToVideo}>
          How Does It Work?
        </Button>
      </div>
    </section>
  )
}
