import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section id="video-section" className="container pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-screen-lg">
        <div className="aspect-video relative overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-xl">
          <iframe 
            src="https://www.youtube.com/embed/z28cKWIf0NI" 
            title="School Career Development Overview Explainer" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
} 