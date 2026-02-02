"use client"

import { useLanguage } from "@/contexts/language-context"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface TeamMember {
  id: string
  name: string
  role: { pt: string; en: string }
  bio: { pt: string; en: string }
  image: string
  linkedin?: string
  expertise: string[]
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Maria Santos",
    role: { pt: "CEO e Fundadora", en: "CEO & Founder" },
    bio: { 
      pt: "Com mais de 15 anos de experiencia em contabilidade e auditoria, Maria fundou a Three Stars com a visao de transformar servicos financeiros em Portugal.",
      en: "With over 15 years of experience in accounting and auditing, Maria founded Three Stars with the vision of transforming financial services in Portugal."
    },
    image: "/team/maria.jpg",
    linkedin: "https://linkedin.com/in/",
    expertise: ["Auditoria", "Estrategia", "Lideranca"]
  },
  {
    id: "2", 
    name: "Joao Silva",
    role: { pt: "Diretor Financeiro", en: "Chief Financial Officer" },
    bio: {
      pt: "Especialista em planeamento fiscal e consultoria financeira, Joao lidera a equipa de consultoria com foco em otimizacao fiscal.",
      en: "Specialist in tax planning and financial consulting, Joao leads the advisory team with a focus on tax optimization."
    },
    image: "/team/joao.jpg",
    linkedin: "https://linkedin.com/in/",
    expertise: ["Fiscalidade", "Consultoria", "Planeamento"]
  },
  {
    id: "3",
    name: "Ana Costa",
    role: { pt: "Diretora de Recursos Humanos", en: "HR Director" },
    bio: {
      pt: "Ana traz 10 anos de experiencia em gestao de RH e processamento salarial, garantindo excelencia nos servicos de recursos humanos.",
      en: "Ana brings 10 years of experience in HR management and payroll processing, ensuring excellence in human resources services."
    },
    image: "/team/ana.jpg",
    linkedin: "https://linkedin.com/in/",
    expertise: ["RH", "Payroll", "Compliance"]
  },
  {
    id: "4",
    name: "Pedro Oliveira",
    role: { pt: "Gestor de Contabilidade Senior", en: "Senior Accounting Manager" },
    bio: {
      pt: "Pedro supervisiona as operacoes contabilisticas diarias e assegura a precisao e conformidade de todos os relatorios financeiros.",
      en: "Pedro oversees daily accounting operations and ensures accuracy and compliance of all financial reports."
    },
    image: "/team/pedro.jpg",
    linkedin: "https://linkedin.com/in/",
    expertise: ["Contabilidade", "Relatorios", "SNC"]
  },
  {
    id: "5",
    name: "Sofia Ferreira",
    role: { pt: "Especialista em Auditoria", en: "Audit Specialist" },
    bio: {
      pt: "Sofia e responsavel por auditorias internas e externas, assegurando transparencia e integridade nos processos dos clientes.",
      en: "Sofia is responsible for internal and external audits, ensuring transparency and integrity in client processes."
    },
    image: "/team/sofia.jpg",
    linkedin: "https://linkedin.com/in/",
    expertise: ["Auditoria", "Compliance", "Analise"]
  },
  {
    id: "6",
    name: "Miguel Rodrigues",
    role: { pt: "Consultor de Negocios", en: "Business Consultant" },
    bio: {
      pt: "Miguel ajuda empresas a crescer atraves de estrategias financeiras personalizadas e analise de mercado.",
      en: "Miguel helps businesses grow through personalized financial strategies and market analysis."
    },
    image: "/team/miguel.jpg",
    linkedin: "https://linkedin.com/in/",
    expertise: ["Consultoria", "Estrategia", "Crescimento"]
  }
]

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const { language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 100)
        }
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [index])

  const initials = member.name.split(' ').map(n => n[0]).join('')

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${isHovered ? 'shadow-2xl scale-[1.02]' : ''}`}>
        {/* Card glow effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : ''}`} />
        
        {/* Photo container */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-muted to-secondary">
          {!imageError ? (
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              fill
              className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className={`w-28 h-28 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-primary-foreground transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
                {initials}
              </div>
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'}`} />
          
          {/* LinkedIn button */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
          )}
          
          {/* Floating expertise tags */}
          <div className={`absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {member.expertise.map((skill, i) => (
              <span 
                key={skill}
                className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-primary mb-3">
            {member.role[language]}
          </p>
          <p className={`text-sm text-muted-foreground leading-relaxed transition-all duration-500 ${isHovered ? 'opacity-100 max-h-32' : 'opacity-70 max-h-12 overflow-hidden'}`}>
            {member.bio[language]}
          </p>
          
          {/* Connect button on hover */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0077B5] hover:underline transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
            >
              <LinkedInIcon className="w-4 h-4" />
              {language === 'pt' ? 'Conectar no LinkedIn' : 'Connect on LinkedIn'}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function Team() {
  const { language, t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="py-24 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {t('team.label')}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-gradient">{t('team.title')}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {t('team.description')}
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* Join our team CTA */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block p-8 bg-card rounded-2xl shadow-xl border border-border/50 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {t('team.joinTitle')}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {t('team.joinDescription')}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                {t('team.joinCta')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
