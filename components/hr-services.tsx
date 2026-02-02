"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef, useState } from "react"

// Custom HR icons styled to match the Three Stars logo aesthetic
function CreditCardIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  )
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}

function HeartHandshakeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
      <path d="m18 15-2-2" />
      <path d="m15 18-2-2" />
    </svg>
  )
}

function BarChart3Icon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
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

function AnimatedCounter({ end, suffix = "" }: { end: number | string; suffix?: string }) {
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
    if (!isVisible || typeof end === 'string') return

    const duration = 1500
    const steps = 40
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
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-2xl font-bold text-primary">
      {typeof end === 'string' ? end : `${count}${suffix}`}
    </div>
  )
}

export function HRServices() {
  const { t } = useLanguage()
  const { ref: sectionRef, isInView } = useInView()
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const hrServices = [
    { icon: CreditCardIcon, titleKey: "hr.payroll", descKey: "hr.payrollDesc" },
    { icon: FileTextIcon, titleKey: "hr.contracts", descKey: "hr.contractsDesc" },
    { icon: ShieldIcon, titleKey: "hr.social", descKey: "hr.socialDesc" },
    { icon: CalendarIcon, titleKey: "hr.absence", descKey: "hr.absenceDesc" },
    { icon: BookOpenIcon, titleKey: "hr.legal", descKey: "hr.legalDesc" },
    { icon: HeartHandshakeIcon, titleKey: "hr.relations", descKey: "hr.relationsDesc" },
    { icon: BarChart3Icon, titleKey: "hr.reporting", descKey: "hr.reportingDesc" },
    { icon: UsersIcon, titleKey: "hr.recruitment", descKey: "hr.recruitmentDesc" },
  ]

  const benefits = [
    t("hr.benefit1"),
    t("hr.benefit2"),
    t("hr.benefit3"),
    t("hr.benefit4"),
    t("hr.benefit5"),
    t("hr.benefit6"),
  ]

  return (
    <section className="py-24 bg-background overflow-hidden" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1 bg-primary/10 rounded-full">
            {t("hr.label")}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {t("hr.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t("hr.description")}
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {hrServices.map((service, index) => (
              <div
                key={service.titleKey}
                className={`bg-card border border-border rounded-xl p-5 transition-all duration-500 group cursor-pointer relative overflow-hidden
                  ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                  ${hoveredService === service.titleKey ? 'shadow-xl border-primary/50 -translate-y-2' : 'hover:border-primary/30 hover:shadow-lg hover:-translate-y-1'}`}
                style={{ transitionDelay: `${index * 75}ms` }}
                onMouseEnter={() => setHoveredService(service.titleKey)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background shimmer */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full transition-transform duration-700 ${hoveredService === service.titleKey ? 'translate-x-full' : ''}`} />
                
                <div className="relative">
                  <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredService === service.titleKey ? 'bg-primary scale-110 rotate-6' : 'group-hover:bg-primary group-hover:scale-105'
                  }`}>
                    <service.icon className={`w-5 h-5 transition-colors duration-300 ${
                      hoveredService === service.titleKey ? 'text-primary-foreground' : 'text-primary group-hover:text-primary-foreground'
                    }`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{t(service.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Benefits sidebar */}
          <div className={`bg-primary/5 border border-primary/20 rounded-2xl p-8 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-xl font-semibold text-foreground mb-6">
              {t("hr.benefits")}
            </h3>
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 group"
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <span className="text-xs font-bold text-primary group-hover:text-primary-foreground transition-colors">{index + 1}</span>
                  </div>
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <div className="bg-card rounded-xl p-6 mb-6 group hover:shadow-lg transition-all duration-300">
              <AnimatedCounter end={350} suffix="+" />
              <div className="text-sm text-muted-foreground">
                {t("hr.outsourcedCompanies")}
              </div>
            </div>

            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300">
              {t("hr.requestQuote")}
            </Button>
          </div>
        </div>

        {/* Bottom info */}
        <div className={`mt-16 grid md:grid-cols-3 gap-6 transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: "5.000+", label: t("hr.receiptsProcessed") },
            { value: "100%", label: t("hr.compliance") },
            { value: "24h", label: t("hr.responseTime") },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <AnimatedCounter end={stat.value} />
              <div className="text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
