"use client"

import React from "react"

import { useLanguage } from "@/contexts/language-context"
import { GrowthChart } from "@/components/growth-chart"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

function IntegrityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="8" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" />
      <path d="M20 24l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CompetenceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4l4 8 8 1-6 5 2 8-8-4-8 4 2-8-6-5 8-1z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" strokeLinejoin="round" />
      <circle cx="24" cy="36" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M21 36h6M24 33v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function ProximityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <circle cx="16" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <circle cx="32" cy="20" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M16 28c-6 0-10 4-10 8v4h20v-4c0-4-4-8-10-8z" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M32 28c-2 0-4 0.5-5.5 1.5M42 40v-4c0-4-4-8-10-8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M22 18c2 1.5 2 3.5 0 5M26 18c-2 1.5-2 3.5 0 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function InnovationIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M24 4v4M24 40v4M4 24h4M40 24h4M10.3 10.3l2.8 2.8M34.9 34.9l2.8 2.8M10.3 37.7l2.8-2.8M34.9 13.1l2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      <path d="M20 24l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 14v-2M24 36v2M14 24h-2M36 24h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function About() {
  const { t, language } = useLanguage()
  const { ref: sectionRef, isInView } = useInView()
  const [activeValue, setActiveValue] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const values = [
    { 
      titleKey: "about.value1.title", 
      descKey: "about.value1.desc", 
      icon: IntegrityIcon,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      features: language === "pt" 
        ? ["Transparencia total", "Etica profissional", "Confidencialidade", "Relatorios claros"]
        : ["Full transparency", "Professional ethics", "Confidentiality", "Clear reports"]
    },
    { 
      titleKey: "about.value2.title", 
      descKey: "about.value2.desc", 
      icon: CompetenceIcon,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      features: language === "pt"
        ? ["Equipa certificada", "Formacao continua", "Especializacao setorial", "Atualizacao legal"]
        : ["Certified team", "Continuous training", "Sector specialization", "Legal updates"]
    },
    { 
      titleKey: "about.value3.title", 
      descKey: "about.value3.desc", 
      icon: ProximityIcon,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500/10",
      borderColor: "border-amber-500/30",
      features: language === "pt"
        ? ["Atendimento dedicado", "Comunicacao rapida", "Visitas presenciais", "Suporte 24/7"]
        : ["Dedicated service", "Fast communication", "On-site visits", "24/7 support"]
    },
    { 
      titleKey: "about.value4.title", 
      descKey: "about.value4.desc", 
      icon: InnovationIcon,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-500/10",
      borderColor: "border-violet-500/30",
      features: language === "pt"
        ? ["Tecnologia avancada", "Processos digitais", "Automacao inteligente", "Analise preditiva"]
        : ["Advanced technology", "Digital processes", "Smart automation", "Predictive analysis"]
    },
  ]

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {t("about.label")}
          </span>
          <h2 className="mt-8 text-4xl sm:text-5xl font-bold text-foreground text-balance leading-tight">
            {t("about.title")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        {/* Values Section - Large Feature Cards */}
        <div className={`mb-24 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            {t("about.values")}
          </h3>
          
          <div 
            className="grid md:grid-cols-2 gap-6"
            onMouseMove={handleMouseMove}
          >
            {values.map((value, index) => {
              const isActive = activeValue === index
              const IconComponent = value.icon
              
              return (
                <div
                  key={value.titleKey}
                  className={`relative group cursor-pointer rounded-3xl border-2 transition-all duration-500 overflow-hidden ${
                    isActive ? `${value.borderColor} shadow-2xl scale-[1.02]` : 'border-border hover:border-primary/30'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    background: isActive 
                      ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(var(--primary), 0.1) 0%, transparent 50%)`
                      : undefined
                  }}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  
                  <div className="relative p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon */}
                      <div className={`flex-shrink-0 w-20 h-20 rounded-2xl ${value.bgColor} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <IconComponent className={`w-12 h-12 text-primary transition-all duration-500 ${isActive ? 'scale-110' : ''}`} />
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                          {t(value.titleKey)}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {t(value.descKey)}
                        </p>
                        
                        {/* Feature tags */}
                        <div className="flex flex-wrap gap-2">
                          {value.features.map((feature, i) => (
                            <span
                              key={feature}
                              className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                                isActive 
                                  ? `${value.bgColor} ${value.borderColor} text-foreground` 
                                  : 'bg-secondary/50 border-border text-muted-foreground'
                              }`}
                              style={{ 
                                transitionDelay: `${i * 50}ms`,
                                transform: isActive ? 'translateY(0)' : 'translateY(4px)',
                                opacity: isActive ? 1 : 0.7
                              }}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full mr-2 ${isActive ? 'bg-current' : 'bg-muted-foreground/50'}`} />
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Decorative corner */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className={`mb-24 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl border border-primary/20 p-12 overflow-hidden group hover:border-primary/40 transition-all duration-500">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary),0.1)_0%,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(var(--accent),0.1)_0%,transparent_50%)]" />
            </div>
            
            {/* Floating shapes */}
            <div className="absolute top-8 right-8 w-16 h-16 border-2 border-primary/20 rounded-full animate-float opacity-50" />
            <div className="absolute bottom-8 left-8 w-12 h-12 border-2 border-accent/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
            
            <div className="relative text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {t("about.mission")}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.missionDesc")}
              </p>
              <Button className="mt-8 group/btn" size="lg">
                {language === "pt" ? "Conhecer a Equipa" : "Meet the Team"}
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Growth Section */}
        <div className={`transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t("about.growth")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "pt" 
                ? "Desde 2021, crescemos de forma consistente, conquistando a confianca de centenas de empresas em Portugal."
                : "Since 2021, we have grown consistently, earning the trust of hundreds of companies in Portugal."}
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <GrowthChart />
          </div>
        </div>
      </div>
    </section>
  )
}
