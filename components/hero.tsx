"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Users, Zap, Sparkles } from "lucide-react"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add floating shapes dynamically
    const container = heroRef.current?.querySelector('.floating-shapes')
    if (!container) return

    const colors = [
      'rgba(124, 58, 237, 0.7)',
      'rgba(139, 92, 246, 0.7)',
      'rgba(168, 85, 247, 0.7)',
      'rgba(192, 132, 252, 0.7)',
    ]

    const createShape = () => {
      const shape = document.createElement('div')
      const size = Math.random() * 200 + 100
      const posX = Math.random() * 100
      const posY = Math.random() * 100
      const delay = Math.random() * 5
      const duration = 15 + Math.random() * 20
      const color = colors[Math.floor(Math.random() * colors.length)]

      shape.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        filter: blur(40px);
        opacity: 0.4;
        left: ${posX}%;
        top: ${posY}%;
        animation: float ${duration}s ease-in-out ${delay}s infinite;
      `

      container.appendChild(shape)
    }

    // Create initial shapes
    for (let i = 0; i < 5; i++) {
      createShape()
    }

    return () => {
      // Cleanup
      if (container) {
        container.innerHTML = ''
      }
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>

      {/* Floating Shapes */}
      <div className="floating-shapes"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="space-y-8">
          {/* Animated Sparkles */}
          <div className="relative inline-block">
            <Sparkles className="absolute -top-6 -left-6 w-12 h-12 text-yellow-300 animate-pulse" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight hero-title animate-fade-in">
              The Future of
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Survey Intelligence
              </span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
                is Here
              </span>
            </h1>
            <Sparkles className="absolute -bottom-6 -right-6 w-12 h-12 text-yellow-300 animate-pulse" />
          </div>

          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From simple polls to complex research - one platform to rule all your data collection needs
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link href="/register" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="btn-hover bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/feedback" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="btn-hover border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 px-8 py-6 text-lg font-semibold rounded-xl backdrop-blur-sm hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
              >
                Give Feedback
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 px-4">
            {[
              {
                icon: <BarChart3 className="h-12 w-12 text-white mx-auto mb-6" />,
                title: "Smart Analytics",
                description: "Get detailed insights with beautiful charts and reports"
              },
              {
                icon: <Users className="h-12 w-12 text-white mx-auto mb-6" />,
                title: "Easy Sharing",
                description: "Share surveys with unique links, no login required"
              },
              {
                icon: <Zap className="h-12 w-12 text-white mx-auto mb-6" />,
                title: "Real-time Results",
                description: "See responses as they come in with live updates"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass rounded-2xl p-8 card-hover hover:border-purple-400/30 transition-all duration-300 border border-white/10 hover:shadow-lg hover:shadow-purple-500/10"
                style={{ animation: `fadeIn 0.5s ease-out ${0.6 + index * 0.1}s forwards`, opacity: 0 }}
              >
                <div className="bg-gradient-to-br from-purple-600 to-pink-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
