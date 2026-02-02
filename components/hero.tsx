"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play, Sparkles, ChevronDown, Shield, Award, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

function AnimatedNumber({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    const interval = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div ref={ref} className="text-4xl lg:text-5xl font-bold text-primary tabular-nums">
      {prefix}{count}{suffix}
    </div>
  )
}

// Floating 3D cards around the main content
function FloatingCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <div 
      className={`absolute bg-card/90 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-4 animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}

// Animated grid background
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,139,34,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(34,139,34,0.03)_1.5px,transparent_1.5px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />
      
      {/* Animated dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
          style={{
            left: `${10 + (i % 4) * 25}%`,
            top: `${15 + Math.floor(i / 4) * 30}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${2 + Math.random()}s`,
          }}
        />
      ))}
    </div>
  )
}

// Morphing background shapes
function MorphingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-full blur-3xl animate-morph" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 via-accent/5 to-transparent rounded-full blur-3xl animate-morph" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl opacity-50" />
    </div>
  )
}

export function Hero() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 30,
        y: ((e.clientY - rect.top) / rect.height - 0.5) * 30,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const highlights = [
    { text: t("hero.highlight1"), icon: Shield },
    { text: t("hero.highlight2"), icon: Award },
    { text: t("hero.highlight3"), icon: Clock },
  ]

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center pt-24 lg:pt-32 pb-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <MorphingShapes />
      <AnimatedGrid />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Animated badge */}
            <div 
              className={`inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 text-primary px-5 py-2.5 rounded-full text-sm font-medium border border-primary/20 relative overflow-hidden transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" style={{ animationDuration: '3s' }} />
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="relative font-semibold">{t("hero.badge")}</span>
              <Sparkles className="w-4 h-4 relative animate-pulse" />
            </div>
            
            {/* Title with gradient text */}
            <div className="space-y-2">
              <h1 
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <span className="block">{t("hero.title1")}</span>
                <span className="relative inline-block mt-2">
                  <span className="bg-gradient-to-r from-primary via-emerald-500 to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                    {t("hero.title2")}
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                    <path 
                      d="M2 10C60 2 120 2 180 6C240 10 280 4 298 8" 
                      stroke="url(#gradient)" 
                      strokeWidth="4" 
                      strokeLinecap="round"
                      className="animate-draw-line"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                        <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="block mt-2">{t("hero.title3")}</span>
              </h1>
            </div>
            
            {/* Description */}
            <p 
              className={`text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {t("hero.description")}
            </p>

            {/* Highlights with icons */}
            <ul 
              className={`space-y-4 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              {highlights.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-primary/20">
                    <item.icon className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors font-medium">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground group shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 text-base px-8 h-14 rounded-xl"
              >
                {t("hero.cta1")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 text-foreground hover:bg-primary/5 bg-transparent group hover:-translate-y-1 transition-all duration-300 text-base px-8 h-14 rounded-xl"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-125 group-hover:text-primary transition-all" />
                {t("hero.cta2")}
              </Button>
            </div>
            
            {/* Trust badges */}
            <div 
              className={`flex flex-wrap items-center gap-6 pt-6 border-t border-border/50 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Right content - Stats card with 3D effect */}
          <div className="lg:col-span-5 relative">
            {/* Floating decorative cards */}
            <FloatingCard className="hidden lg:flex -top-8 -left-12 z-10 items-center gap-3" delay={0}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">{t("hero.trustedBy") || "Trusted by"}</div>
                <div className="font-semibold text-sm">900+ {t("hero.businesses") || "Businesses"}</div>
              </div>
            </FloatingCard>
            
            <FloatingCard className="hidden lg:flex -bottom-4 -left-8 z-10 items-center gap-3" delay={1}>
              <div className="flex -space-x-2">
                {['MS', 'JC', 'AR'].map((initials, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xs font-bold text-white border-2 border-card">
                    {initials}
                  </div>
                ))}
              </div>
              <div className="text-xs">
                <span className="font-semibold">+900</span> happy clients
              </div>
            </FloatingCard>
            
            <FloatingCard className="hidden lg:flex top-1/4 -right-8 z-10 flex-col items-center" delay={0.5}>
              <div className="text-2xl font-bold text-primary">99%</div>
              <div className="text-xs text-muted-foreground">Retention</div>
            </FloatingCard>

            {/* Main card with parallax */}
            <div 
              className={`relative transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${-mousePosition.y * 0.02}deg)`,
              }}
            >
              <div className="bg-card border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:shadow-3xl transition-shadow duration-500">
                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
                
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                  <div className="absolute top-0 right-0 w-64 h-64 border-2 border-primary rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 border-2 border-primary rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Logo */}
                <div className="flex justify-center mb-8 relative">
                  <div className="relative group/logo">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150 opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />
                    <Image 
                      src="/logo.png" 
                      alt="Three Stars Accounting" 
                      width={180} 
                      height={120}
                      className="object-contain relative z-10 group-hover/logo:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 relative">
                  {[
                    { value: 900, suffix: '+', label: t("hero.stat1"), color: 'from-emerald-500 to-green-600' },
                    { value: 15, suffix: '+', label: t("hero.stat2"), color: 'from-blue-500 to-cyan-600' },
                    { value: 4, suffix: '', label: t("hero.stat3"), color: 'from-amber-500 to-orange-600' },
                    { value: 99, suffix: '%', label: t("hero.stat4"), color: 'from-purple-500 to-pink-600' },
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="text-center p-5 bg-gradient-to-br from-secondary/80 to-secondary/40 rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group/stat cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover/stat:opacity-10 rounded-2xl transition-opacity duration-300`} />
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                      <div className="text-sm text-muted-foreground mt-1 group-hover/stat:text-foreground transition-colors">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom certified badge */}
                <div className="mt-6 pt-5 border-t border-border/50">
                  <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-full">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span>{t("hero.certified")}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 4 Years Experience badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary to-emerald-600 text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold shadow-lg animate-float z-20 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                4 {t("hero.yearsExp") || "Years Experience"}
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground font-medium">{t("hero.scroll") || "Scroll to explore"}</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-scroll-indicator" />
          </div>
        </div>
      </div>
    </section>
  )
}
