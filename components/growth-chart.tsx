"use client"

import { useEffect, useState, useRef } from "react"
import { useLanguage } from "@/contexts/language-context"

interface DataPoint {
  year: string
  clients: number
  label: string
  growth: string
  description: string
}

export function GrowthChart() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0])
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const chartRef = useRef<HTMLDivElement>(null)

  const data: DataPoint[] = [
    { 
      year: "2021", 
      clients: 100, 
      label: language === "pt" ? "Fundacao" : "Foundation", 
      growth: "+100%",
      description: language === "pt" ? "Inicio das operacoes em Lisboa" : "Started operations in Lisbon"
    },
    { 
      year: "2022", 
      clients: 300, 
      label: language === "pt" ? "Crescimento" : "Growth", 
      growth: "+200%",
      description: language === "pt" ? "Expansao para novos setores" : "Expansion to new sectors"
    },
    { 
      year: "2024", 
      clients: 700, 
      label: language === "pt" ? "Expansao" : "Expansion", 
      growth: "+133%",
      description: language === "pt" ? "Lideranca em consultoria" : "Leadership in consulting"
    },
    { 
      year: "2025", 
      clients: 900, 
      label: language === "pt" ? "Excelencia" : "Excellence", 
      growth: "+29%",
      description: language === "pt" ? "Referencia no mercado" : "Market reference"
    },
  ]

  const maxClients = 1000
  const barColors = [
    { main: "#10b981", light: "#34d399", dark: "#059669" },
    { main: "#0ea5e9", light: "#38bdf8", dark: "#0284c7" },
    { main: "#8b5cf6", light: "#a78bfa", dark: "#7c3aed" },
    { main: "#f59e0b", light: "#fbbf24", dark: "#d97706" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (chartRef.current) {
      observer.observe(chartRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = Math.min(step / steps, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      setAnimatedValues(data.map(d => Math.round(d.clients * easeOut)))

      if (step >= steps) {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <div ref={chartRef} className="w-full">
      <div className="relative bg-card border border-border rounded-3xl p-8 overflow-hidden shadow-xl">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Animated background glow */}
        <div 
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: hoveredBar !== null 
              ? `radial-gradient(circle at ${25 + hoveredBar * 25}% 50%, ${barColors[hoveredBar].main}15 0%, transparent 50%)`
              : 'none',
            opacity: hoveredBar !== null ? 1 : 0
          }}
        />

        {/* Y-axis labels */}
        <div className="absolute left-4 top-20 bottom-32 flex flex-col justify-between text-xs text-muted-foreground">
          {[1000, 750, 500, 250, 0].map((val) => (
            <span key={val} className="tabular-nums">{val}</span>
          ))}
        </div>

        {/* Main chart area */}
        <div className="relative ml-12 mr-4">
          {/* Horizontal grid lines */}
          <div className="absolute inset-x-0 top-0 h-64 flex flex-col justify-between pointer-events-none">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="w-full h-px bg-border" />
            ))}
          </div>

          {/* Bars */}
          <div className="relative h-64 flex items-end justify-around gap-4 md:gap-8 pt-4">
            {data.map((item, index) => {
              const height = (animatedValues[index] / maxClients) * 100
              const isHovered = hoveredBar === index
              const color = barColors[index]
              
              return (
                <div 
                  key={item.year} 
                  className="flex-1 max-w-24 flex flex-col items-center group relative"
                  onMouseEnter={() => {
                    setHoveredBar(index)
                    setActiveIndex(index)
                  }}
                  onMouseLeave={() => {
                    setHoveredBar(null)
                    setActiveIndex(null)
                  }}
                >
                  {/* Tooltip */}
                  <div 
                    className={`absolute -top-20 left-1/2 -translate-x-1/2 bg-foreground text-background px-4 py-3 rounded-xl text-center whitespace-nowrap z-20 transition-all duration-300 ${
                      isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="text-2xl font-bold">{animatedValues[index]}+</div>
                    <div className="text-xs opacity-80">{item.description}</div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-foreground rotate-45" />
                  </div>

                  {/* Growth badge */}
                  <div 
                    className={`mb-3 px-2 py-1 rounded-full text-xs font-bold transition-all duration-500 ${
                      isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`}
                    style={{ 
                      backgroundColor: `${color.main}20`,
                      color: color.main
                    }}
                  >
                    {item.growth}
                  </div>
                  
                  {/* Bar container */}
                  <div 
                    className="w-full h-52 flex items-end justify-center cursor-pointer relative"
                    style={{ perspective: '500px' }}
                  >
                    {/* Bar shadow */}
                    <div 
                      className="absolute bottom-0 w-full rounded-full blur-xl transition-all duration-500"
                      style={{
                        height: `${Math.max(height * 0.15, 8)}px`,
                        backgroundColor: color.main,
                        opacity: isHovered ? 0.4 : 0.2,
                        transform: `scaleX(${isHovered ? 1.2 : 1})`
                      }}
                    />

                    {/* Main bar */}
                    <div
                      className="relative w-full rounded-t-2xl overflow-hidden transition-all duration-500"
                      style={{ 
                        height: `${height}%`,
                        minHeight: '20px',
                        transform: `
                          perspective(500px) 
                          rotateX(${isHovered ? -5 : 0}deg) 
                          scaleX(${isHovered ? 1.05 : 1})
                          translateY(${isHovered ? -4 : 0}px)
                        `,
                        transformOrigin: 'bottom center',
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {/* Gradient fill */}
                      <div 
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: `linear-gradient(180deg, ${color.light} 0%, ${color.main} 50%, ${color.dark} 100%)`
                        }}
                      />
                      
                      {/* Glass reflection */}
                      <div 
                        className="absolute inset-0 transition-opacity duration-300"
                        style={{
                          background: 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)',
                          opacity: isHovered ? 1 : 0.7
                        }}
                      />
                      
                      {/* Shine animation */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.5) 50%, transparent 60%)',
                          transform: isVisible ? 'translateX(200%)' : 'translateX(-100%)',
                          transition: `transform 1s ease-out ${index * 200 + 500}ms`
                        }}
                      />
                      
                      {/* Top cap */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-6 rounded-t-2xl"
                        style={{
                          background: `linear-gradient(180deg, ${color.light} 0%, transparent 100%)`
                        }}
                      />
                      
                      {/* Side highlight */}
                      <div 
                        className="absolute right-0 top-0 bottom-0 w-2"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${color.dark}40)`
                        }}
                      />

                      {/* Value inside bar */}
                      <div 
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          opacity: height > 20 ? 1 : 0,
                          transition: 'opacity 0.3s ease-out'
                        }}
                      >
                        <span className="text-white font-bold text-lg drop-shadow-lg">
                          {animatedValues[index]}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Year label */}
                  <div className="mt-4 text-center">
                    <div 
                      className={`text-lg font-bold transition-all duration-300 ${
                        isHovered ? 'scale-110' : ''
                      }`}
                      style={{ color: isHovered ? color.main : 'inherit' }}
                    >
                      {item.year}
                    </div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </div>
                </div>
              )
            })}
          </div>

          
        </div>

        {/* Stats summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
          {[
            { value: "800%", label: language === "pt" ? "Crescimento Total" : "Total Growth", color: barColors[0].main },
            { value: "4", label: language === "pt" ? "Anos" : "Years", color: barColors[1].main },
            { value: "15+", label: language === "pt" ? "Setores" : "Sectors", color: barColors[2].main },
            { value: "98%", label: language === "pt" ? "Retencao" : "Retention", color: barColors[3].main },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 cursor-pointer group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : 20}px)`,
                transition: `all 0.5s ease-out ${index * 100 + 800}ms`
              }}
            >
              <div 
                className="text-3xl font-bold mb-1 transition-transform duration-300 group-hover:scale-110"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
