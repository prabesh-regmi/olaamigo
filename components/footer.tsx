'use client';

import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect } from "react"

export function Footer() {
  const { t } = useLanguage()
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    servicos: [
      { name: t("footer.accounting"), href: "#services" },
      { name: t("footer.taxConsulting"), href: "#services" },
      { name: t("footer.hr"), href: "#services" },
      { name: t("footer.audit"), href: "#services" },
      { name: t("footer.consulting"), href: "#services" },
    ],
    empresa: [
      { name: t("footer.aboutUs"), href: "#about" },
      { name: t("footer.team"), href: "#team" },
      { name: t("footer.careers"), href: "#contact" },
      { name: t("footer.news"), href: "#" },
    ],
    setores: [
      { name: t("footer.agriculture"), href: "#sectors" },
      { name: t("footer.transport"), href: "#sectors" },
      { name: t("footer.retail"), href: "#sectors" },
      { name: t("footer.ecommerce"), href: "#sectors" },
      { name: t("footer.construction"), href: "#sectors" },
    ],
    legal: [
      { name: t("footer.privacy"), href: "/privacy" },
      { name: t("footer.terms"), href: "/terms" },
      { name: t("footer.cookies"), href: "/cookies" },
      { name: t("footer.gdpr"), href: "/gdpr" },
    ],
  }

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:bg-[#1877F2]" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:bg-[#0A66C2]" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737]" },
  ]

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-background/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-background/5 rounded-full" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-16 border-b border-background/10">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20 rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">Ready to get started?</h3>
                <p className="text-background/70 max-w-md">Join over 900 companies that trust Three Stars Accounting for their financial success.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-primary/30"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Link>
                <Link
                  href="tel:+351211234567"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background/10 text-background font-semibold rounded-xl hover:bg-background/20 transition-all duration-300 backdrop-blur-sm"
                >
                  <Phone className="w-5 h-5" />
                  +351 21 123 4567
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="col-span-2">
            <Image
              src="/logo.png"
              alt="Three Stars Accounting"
              width={180}
              height={60}
              className="h-14 w-auto brightness-0 invert mb-6 hover:scale-105 transition-transform"
            />
            <p className="text-background/60 mb-6 max-w-xs leading-relaxed">
              {t("footer.description")}
            </p>
            
            {/* Contact quick info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Lisboa, Portugal</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                <span>+351 21 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@threestaraccounting.pt</span>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 ${social.color} hover:text-white`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {t("footer.services")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {t("footer.company")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {t("footer.sectors")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.setores.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full" />
              {t("footer.legal")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/60 hover:text-primary hover:translate-x-2 transition-all duration-300 text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-3 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-background/50 flex items-center gap-1">
              <span>&copy; {currentYear} Three Star Accounting, Lda.</span>
              <span>{t("footer.rights")}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-background/50">
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" /> in Lisboa
              </span>
              <span className="hidden sm:inline text-background/20">|</span>
              <span>NIF: 516290797</span>
              <span className="hidden sm:inline text-background/20">|</span>
              <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">OCC Certified</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-2xl shadow-xl shadow-primary/30 flex items-center justify-center hover:scale-110 hover:-translate-y-1 transition-all duration-300 z-50 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  )
}
