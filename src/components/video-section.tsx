import { Play } from "lucide-react"

export default function VideoSection() {
  return (
    <section className="container pt-8 pb-16 md:pt-12 md:pb-24">
      <div className="mx-auto max-w-screen-lg">
        <div className="aspect-video relative overflow-hidden rounded-2xl border border-zinc-800 bg-black shadow-xl">
          {/* Video thumbnail with play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Dark overlay for faces grid */}
            <div className="absolute inset-0 bg-black/50"></div>
            
            {/* Grid of faces - simulated with dark boxes for the demo */}
            <div className="absolute inset-0 grid grid-cols-7 grid-rows-4 gap-0.5 opacity-100">
              {Array(28).fill(0).map((_, i) => (
                <div 
                  key={i} 
                  className="bg-zinc-900 overflow-hidden"
                  style={{
                    backgroundImage: `radial-gradient(circle at ${50 + Math.random() * 50}% ${30 + Math.random() * 40}%, rgba(50,50,50,0.5) 0%, rgba(0,0,0,0) 70%)`,
                    opacity: 0.7 + Math.random() * 0.3
                  }}
                >
                </div>
              ))}
            </div>
            
            {/* Play button and text overlay */}
            <div className="relative z-10 text-center">
              <div className="flex flex-col items-center space-y-6">
                <button className="h-20 w-20 rounded-full bg-white/20 p-5 backdrop-blur-sm transition-all hover:bg-white/30 hover:scale-105">
                  <Play className="h-10 w-10 text-white fill-white" />
                </button>
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    Explainer Video Coming Soon
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 