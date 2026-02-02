"use client"

import { useLanguage } from "@/contexts/language-context"
import { useEffect, useRef, useState } from "react"

function useInView(threshold = 0.1) {
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

export function Sectors() {
  const { t } = useLanguage()
  const { ref: sectionRef, isInView } = useInView()
  const [hoveredSector, setHoveredSector] = useState<string | null>(null)

  const sectors = [
    { emoji: "🌾", nameKey: "sectors.agriculture", descKey: "sectors.agricultureDesc", clients: "85+", color: "from-green-500 to-emerald-600", bgEmoji: "🚜" },
    { emoji: "🚚", nameKey: "sectors.transport", descKey: "sectors.transportDesc", clients: "120+", color: "from-blue-500 to-cyan-600", bgEmoji: "📦" },
    { emoji: "🛍️", nameKey: "sectors.retail", descKey: "sectors.retailDesc", clients: "150+", color: "from-purple-500 to-pink-600", bgEmoji: "🏪" },
    { emoji: "🛒", nameKey: "sectors.ecommerce", descKey: "sectors.ecommerceDesc", clients: "95+", color: "from-orange-500 to-red-600", bgEmoji: "💻" },
    { emoji: "🏢", nameKey: "sectors.realestate", descKey: "sectors.realestateDesc", clients: "70+", color: "from-slate-500 to-gray-600", bgEmoji: "🔑" },
    { emoji: "🍽️", nameKey: "sectors.restaurant", descKey: "sectors.restaurantDesc", clients: "110+", color: "from-amber-500 to-yellow-600", bgEmoji: "👨‍🍳" },
    { emoji: "🏥", nameKey: "sectors.health", descKey: "sectors.healthDesc", clients: "45+", color: "from-rose-500 to-red-600", bgEmoji: "💊" },
    { emoji: "🏗️", nameKey: "sectors.construction", descKey: "sectors.constructionDesc", clients: "80+", color: "from-stone-500 to-zinc-600", bgEmoji: "🧱" },
    { emoji: "🏭", nameKey: "sectors.industry", descKey: "sectors.industryDesc", clients: "55+", color: "from-indigo-500 to-violet-600", bgEmoji: "⚙️" },
    { emoji: "🎓", nameKey: "sectors.education", descKey: "sectors.educationDesc", clients: "30+", color: "from-sky-500 to-blue-600", bgEmoji: "📚" },
    { emoji: "✈️", nameKey: "sectors.tourism", descKey: "sectors.tourismDesc", clients: "40+", color: "from-teal-500 to-cyan-600", bgEmoji: "🏨" },
    { emoji: "⚡", nameKey: "sectors.services", descKey: "sectors.servicesDesc", clients: "60+", color: "from-fuchsia-500 to-purple-600", bgEmoji: "💼" },
  ]

  return (
    <section id="sectors" className="py-24 bg-secondary/30 overflow-hidden" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider px-4 py-1 bg-primary/10 rounded-full">
            {t("sectors.label")}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {t("sectors.title")}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t("sectors.description")}
          </p>
        </div>

        {/* Sectors grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <div
              key={sector.nameKey}
              className={`group bg-card border border-border rounded-2xl p-6 cursor-pointer relative overflow-hidden transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${hoveredSector === sector.nameKey ? 'shadow-2xl scale-[1.02] border-primary/50 -translate-y-2' : 'hover:shadow-xl hover:border-primary/30 hover:-translate-y-1'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredSector(sector.nameKey)}
              onMouseLeave={() => setHoveredSector(null)}
            >
              {/* Background emoji that appears on hover */}
              <div className={`absolute -right-4 -bottom-4 text-8xl opacity-0 transition-all duration-500 select-none pointer-events-none ${
                hoveredSector === sector.nameKey ? 'opacity-10 scale-110 rotate-12' : 'group-hover:opacity-5'
              }`}>
                {sector.bgEmoji}
              </div>
              
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  {/* Emoji icon with animated container */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sector.color} bg-opacity-20 flex items-center justify-center transition-all duration-500 ${
                    hoveredSector === sector.nameKey ? 'scale-110 rotate-6 shadow-lg' : 'group-hover:scale-105'
                  }`}
                  style={{
                    background: hoveredSector === sector.nameKey 
                      ? `linear-gradient(135deg, var(--tw-gradient-stops))` 
                      : 'rgba(var(--primary), 0.1)'
                  }}
                  >
                    <span className={`text-3xl transition-transform duration-500 ${
                      hoveredSector === sector.nameKey ? 'scale-125 animate-bounce' : ''
                    }`}>
                      {sector.emoji}
                    </span>
                  </div>
                  
                  {/* Client count badge */}
                  <span className={`text-sm font-bold px-3 py-1.5 rounded-full transition-all duration-300 ${
                    hoveredSector === sector.nameKey 
                      ? 'bg-primary text-primary-foreground scale-110 shadow-md' 
                      : 'text-primary bg-primary/10'
                  }`}>
                    {sector.clients}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {t(sector.nameKey)}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 line-clamp-2">
                  {t(sector.descKey)}
                </p>
                
                {/* Animated progress bar */}
                <div className="mt-4 h-1.5 bg-border rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${sector.color} transition-all duration-700 ease-out rounded-full`}
                    style={{ 
                      width: hoveredSector === sector.nameKey ? '100%' : '0%',
                    }}
                  />
                </div>
                
                {/* Hover indicator arrow */}
                <div className={`mt-4 flex items-center gap-2 text-sm font-medium transition-all duration-300 ${
                  hoveredSector === sector.nameKey ? 'opacity-100 translate-x-0 text-primary' : 'opacity-0 -translate-x-4'
                }`}>
                  <span>{t("sectors.learnMore") || "Learn more"}</span>
                  <span className="animate-pulse">&rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emoji parade animation */}
        <div className={`mt-12 overflow-hidden transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex animate-marquee whitespace-nowrap">
            {[...sectors, ...sectors].map((sector, index) => (
              <span key={index} className="text-4xl mx-4 opacity-20 hover:opacity-60 transition-opacity cursor-pointer">
                {sector.emoji}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-muted-foreground mb-4">
            {t("sectors.notFound")}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300 group px-6 py-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground"
          >
            {t("sectors.cta")}
            <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}
