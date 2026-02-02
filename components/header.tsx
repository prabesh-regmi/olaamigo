"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, Mail, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

// Flag components
function PortugalFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={className}>
      <rect fill="#006600" width="14" height="24" />
      <rect fill="#FF0000" x="14" width="22" height="24" />
      <circle fill="#FFCC00" cx="14" cy="12" r="5" />
      <circle fill="#FF0000" cx="14" cy="12" r="4" />
      <path fill="#FFFFFF" d="M12,9 L16,9 L16,15 L12,15 Z" />
    </svg>
  )
}

function UKFlag({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" className={className}>
      <rect fill="#012169" width="36" height="24" />
      <path fill="#FFFFFF" d="M0,0 L36,24 M36,0 L0,24" strokeWidth="2.4" stroke="#FFFFFF" />
      <path fill="#C8102E" d="M0,0 L36,24 M36,0 L0,24" strokeWidth="1.6" stroke="#C8102E" />
      <path fill="#FFFFFF" d="M18,0 L18,24 M0,12 L36,12" strokeWidth="4" stroke="#FFFFFF" />
      <path fill="#C8102E" d="M18,0 L18,24 M0,12 L36,12" strokeWidth="2.4" stroke="#C8102E" />
    </svg>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: t("nav.home"), href: "#" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.sectors"), href: "#sectors" },
    { name: t("nav.team"), href: "#team" },
    { name: t("nav.clients"), href: "#clients" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/98 backdrop-blur-md shadow-lg" : "bg-background/95 backdrop-blur-sm"} border-b border-border`}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-4 md:gap-6">
              <a href="tel:+351211234567" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Phone className="h-3.5 w-3.5" />
                <span className="hidden sm:inline text-xs md:text-sm">+351 21 123 4567</span>
              </a>
              <a href="mailto:info@threestaraccounting.pt" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Mail className="h-3.5 w-3.5" />
                <span className="hidden md:inline text-xs md:text-sm">info@threestaraccounting.pt</span>
              </a>
              <div className="hidden lg:flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-xs md:text-sm">Lisboa, Portugal</span>
              </div>
            </div>
            
            {/* Language Toggle with Flags */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-primary-foreground/10 rounded-full p-0.5">
                <button
                  onClick={() => setLanguage("en")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    language === "en" 
                      ? "bg-primary-foreground text-primary shadow-sm" 
                      : "hover:bg-primary-foreground/10"
                  }`}
                  aria-label="English"
                >
                  <UKFlag className="w-4 h-3 rounded-sm" />
                  <span>EN</span>
                </button>
                <button
                  onClick={() => setLanguage("pt")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    language === "pt" 
                      ? "bg-primary-foreground text-primary shadow-sm" 
                      : "hover:bg-primary-foreground/10"
                  }`}
                  aria-label="Portugues"
                >
                  <PortugalFlag className="w-4 h-3 rounded-sm" />
                  <span>PT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Three Stars Accounting Logo"
              width={180}
              height={60}
              className="h-11 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-2/3 rounded-full" />
              </Link>
            ))}
            <Button className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground group shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all">
              {t("nav.schedule")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">{language === "pt" ? "Abrir menu" : "Open menu"}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-1">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-base font-medium text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group">
                  {t("nav.schedule")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
