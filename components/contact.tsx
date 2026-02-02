"use client"

import React from "react"
import { useState, useRef, useEffect } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowRight, MessageSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/contexts/language-context"

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

export function Contact() {
  const { t } = useLanguage()
  const { ref: sectionRef, isInView } = useInView()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: MapPin,
      titleKey: "contact.address",
      details: ["Rua Maria Andrade, N 39-B, A", "1170-215 Lisboa, Portugal"],
      color: "from-blue-500 to-cyan-500",
      hoverBg: "group-hover:bg-blue-500"
    },
    {
      icon: Phone,
      titleKey: "contact.phone",
      details: ["+351 21 123 4567", "+351 91 234 5678"],
      color: "from-emerald-500 to-green-500",
      hoverBg: "group-hover:bg-emerald-500"
    },
    {
      icon: Mail,
      titleKey: "contact.email",
      details: ["info@threestaraccounting.pt", "rh@threestaraccounting.pt"],
      color: "from-violet-500 to-purple-500",
      hoverBg: "group-hover:bg-violet-500"
    },
    {
      icon: Clock,
      titleKey: "contact.hours",
      details: [t("contact.weekdays"), t("contact.saturday")],
      color: "from-amber-500 to-orange-500",
      hoverBg: "group-hover:bg-amber-500"
    },
  ]

  const services = [
    t("contact.generalAccounting"),
    t("contact.taxConsulting"),
    t("contact.humanResources"),
    t("contact.auditing"),
    t("contact.companyCreation"),
    t("contact.other"),
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 5000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-secondary/30 via-background to-secondary/30 overflow-hidden relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider px-5 py-2 bg-primary/10 rounded-full border border-primary/20">
            <MessageSquare className="w-4 h-4" />
            {t("contact.label")}
          </span>
          <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            <span className="text-balance">{t("contact.title")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map((item, index) => (
              <div
                key={item.titleKey}
                className={`bg-card border border-border rounded-2xl p-5 flex items-start gap-4 group hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-500 cursor-pointer relative overflow-hidden
                  ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Hover gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="relative">
                  <h3 className="font-semibold text-foreground mb-1.5 group-hover:text-primary transition-colors text-lg">{t(item.titleKey)}</h3>
                  {item.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground group-hover:text-foreground/70 transition-colors">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className={`bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 group
              ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.2!2d-9.13!3d38.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQzJzQ4LjAiTiA5wrAwNyc0OC4wIlc!5e0!3m2!1spt-PT!2spt!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localizacao Three Stars Accounting"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
              <div className="p-4 border-t border-border">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Lisboa, Portugal
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className={`lg:col-span-3 bg-card border border-border rounded-3xl p-8 lg:p-10 hover:shadow-2xl transition-all duration-500 relative overflow-hidden
            ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{t("contact.sendMessage")}</h3>
                  <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
                </div>
              </div>

              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-bounce-in">
                    <CheckCircle2 className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3">
                    {t("contact.messageSent")}
                  </h4>
                  <p className="text-muted-foreground max-w-md">
                    {t("contact.thankYou")}
                  </p>
                  <div className="flex items-center gap-2 mt-6 text-sm text-primary">
                    <Sparkles className="w-4 h-4" />
                    <span>We will contact you soon!</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={`font-medium transition-colors ${focusedField === 'name' ? 'text-primary' : ''}`}>
                        {t("contact.fullName")} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        placeholder={t("contact.fullName")}
                        className="bg-background h-12 rounded-xl border-border focus:border-primary transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={`font-medium transition-colors ${focusedField === 'email' ? 'text-primary' : ''}`}>
                        {t("contact.email")} <span className="text-destructive">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="exemplo@email.com"
                        className="bg-background h-12 rounded-xl border-border focus:border-primary transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className={`font-medium transition-colors ${focusedField === 'phone' ? 'text-primary' : ''}`}>
                        {t("contact.phone")}
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="+351 xxx xxx xxx"
                        className="bg-background h-12 rounded-xl border-border focus:border-primary transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className={`font-medium transition-colors ${focusedField === 'company' ? 'text-primary' : ''}`}>
                        {t("contact.company")}
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder={t("contact.company")}
                        className="bg-background h-12 rounded-xl border-border focus:border-primary transition-all duration-300 focus:shadow-lg focus:shadow-primary/10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className={`font-medium transition-colors ${focusedField === 'service' ? 'text-primary' : ''}`}>
                      {t("contact.serviceInterest")}
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className="flex h-12 w-full rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 focus:shadow-lg focus:shadow-primary/10 focus:border-primary"
                    >
                      <option value="">{t("contact.selectService")}</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className={`font-medium transition-colors ${focusedField === 'message' ? 'text-primary' : ''}`}>
                      {t("contact.message")} <span className="text-destructive">*</span>
                    </Label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      placeholder={t("contact.messagePlaceholder")}
                      className="flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none transition-all duration-300 focus:shadow-lg focus:shadow-primary/10 focus:border-primary"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4">
                    <p className="text-xs text-muted-foreground">
                      {t("contact.required")}
                    </p>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 group disabled:opacity-70 h-12 px-8 rounded-xl text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                          {t("contact.submit")}
                          <ArrowRight className="w-5 h-5 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
