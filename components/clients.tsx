"use client"

import { Quote, TrendingUp, Users, Star, ThumbsUp } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { StarIcon } from "@/components/star-icon"
import { ClientMarquee } from "@/components/client-marquee"
import { useEffect, useState, useRef } from "react"

function AnimatedCounter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
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

    const steps = 60
    const increment = end / steps
    const interval = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl font-bold">
      {count}{suffix}
    </div>
  )
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null)
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

export function Clients() {
  const { t, language } = useLanguage()
  const { ref: sectionRef, isInView } = useInView()
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = language === "pt" ? [
    {
      quote: "A Three Stars Accounting transformou a gestao financeira da nossa empresa. Profissionalismo e atencao ao detalhe impecaveis.",
      author: "Maria Santos",
      role: "CEO, AgroVerde Lda",
      rating: 5,
      image: "MS"
    },
    {
      quote: "Parceiros de confianca ha 3 anos. O apoio em recursos humanos e processamento salarial e excepcional.",
      author: "Joao Silva",
      role: "Diretor, TransLisboa SA",
      rating: 5,
      image: "JS"
    },
    {
      quote: "Recomendo vivamente. A equipa esta sempre disponivel e as solucoes fiscais apresentadas pouparam-nos milhares de euros.",
      author: "Ana Ferreira",
      role: "Fundadora, TechShop Online",
      rating: 5,
      image: "AF"
    },
  ] : [
    {
      quote: "Three Stars Accounting transformed our company's financial management. Impeccable professionalism and attention to detail.",
      author: "Maria Santos",
      role: "CEO, AgroVerde Lda",
      rating: 5,
      image: "MS"
    },
    {
      quote: "Trusted partners for 3 years. The human resources and payroll support is exceptional.",
      author: "Joao Silva",
      role: "Director, TransLisboa SA",
      rating: 5,
      image: "JS"
    },
    {
      quote: "Highly recommend. The team is always available and the tax solutions presented saved us thousands of euros.",
      author: "Ana Ferreira",
      role: "Founder, TechShop Online",
      rating: 5,
      image: "AF"
    },
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section id="clients" className="py-24 bg-background overflow-hidden" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1 bg-primary/10 rounded-full">
            {t("clients.label")}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {t("clients.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t("clients.description")}
          </p>
        </div>

        {/* Animated Client Logos Marquee */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-semibold text-foreground text-center mb-6">
            {t("clients.supported")}
          </h3>
          <ClientMarquee />
        </div>

        {/* Stats banner with animated counters */}
        <div className={`bg-gradient-to-r from-primary via-accent to-primary rounded-2xl p-8 text-primary-foreground mb-16 relative overflow-hidden transition-all duration-700 delay-300 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Animated background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
            <div className="absolute inset-0 animate-shimmer" />
          </div>
          
          <div className="relative grid sm:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center group">
              <Users className="w-8 h-8 mb-2 opacity-80 group-hover:scale-125 transition-transform duration-300" />
              <AnimatedCounter end={900} suffix="+" />
              <div className="text-primary-foreground/80 mt-1 text-sm">{t("clients.activeClients")}</div>
            </div>
            <div className="flex flex-col items-center group">
              <TrendingUp className="w-8 h-8 mb-2 opacity-80 group-hover:scale-125 transition-transform duration-300" />
              <AnimatedCounter end={15} suffix="+" />
              <div className="text-primary-foreground/80 mt-1 text-sm">{t("clients.sectorsServed")}</div>
            </div>
            <div className="flex flex-col items-center group">
              <ThumbsUp className="w-8 h-8 mb-2 opacity-80 group-hover:scale-125 transition-transform duration-300" />
              <AnimatedCounter end={99} suffix="%" />
              <div className="text-primary-foreground/80 mt-1 text-sm">{t("clients.retention")}</div>
            </div>
            <div className="flex flex-col items-center group">
              <Star className="w-8 h-8 mb-2 opacity-80 group-hover:scale-125 transition-transform duration-300" />
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-primary-foreground/80 mt-1 text-sm">{t("clients.avgRating")}</div>
            </div>
          </div>
        </div>

        {/* Testimonials with carousel */}
        <div className={`transition-all duration-700 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-lg font-semibold text-foreground text-center mb-8">
            {t("clients.testimonials")}
          </h3>
          
          {/* Desktop: Show all */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-card border border-border rounded-2xl p-6 relative transition-all duration-500 group cursor-pointer
                  ${activeTestimonial === index ? 'shadow-2xl border-primary/50 scale-[1.02]' : 'hover:shadow-xl hover:border-primary/30 hover:-translate-y-1'}`}
                onMouseEnter={() => setActiveTestimonial(index)}
              >
                <Quote className={`absolute top-6 right-6 w-8 h-8 transition-all duration-300 ${activeTestimonial === index ? 'text-primary/40 scale-110' : 'text-primary/20 group-hover:text-primary/30'}`} />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 text-primary transition-transform duration-300 ${activeTestimonial === index ? 'scale-110' : ''}`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                      filled
                    />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold transition-all duration-300 ${activeTestimonial === index ? 'bg-primary text-primary-foreground scale-110' : ''}`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile: Carousel */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-card border border-border rounded-2xl p-6 relative">
                      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <StarIcon key={i} className="w-4 h-4 text-primary" filled />
                        ))}
                      </div>
                      <p className="text-foreground/80 mb-6 leading-relaxed italic">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="border-t border-border pt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                          {testimonial.image}
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === index ? 'bg-primary w-6' : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
