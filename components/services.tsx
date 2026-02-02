"use client"

import { useState, useRef, useEffect } from "react"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/language-context"

// Custom animated service icons
function CalculatorIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" className={isActive ? 'fill-primary/20' : ''} />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="8" y2="10.01" />
      <line x1="12" y1="10" x2="12" y2="10.01" />
      <line x1="16" y1="10" x2="16" y2="10.01" />
      <line x1="8" y1="14" x2="8" y2="14.01" />
      <line x1="12" y1="14" x2="12" y2="14.01" />
      <line x1="16" y1="14" x2="16" y2="14.01" />
      <line x1="8" y1="18" x2="8" y2="18.01" />
      <line x1="12" y1="18" x2="16" y2="18" />
    </svg>
  )
}

function FileTextIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" className={isActive ? 'fill-primary/20' : ''} />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <line x1="10" y1="9" x2="8" y2="9" />
    </svg>
  )
}

function UsersIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" className={isActive ? 'fill-primary/20' : ''} />
      <circle cx="9" cy="7" r="4" className={isActive ? 'fill-primary/20' : ''} />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ClipboardCheckIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" className={isActive ? 'fill-primary/20' : ''} />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" className={isActive ? 'fill-primary/10' : ''} />
      <path d="m9 14 2 2 4-4" />
    </svg>
  )
}

function TrendingUpIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
      {isActive && <path d="M2 17 L22 7" className="fill-primary/10" />}
    </svg>
  )
}

function BuildingIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" className={isActive ? 'fill-primary/20' : ''} />
      <path d="M9 22v-4h6v4" className={isActive ? 'fill-primary/10' : ''} />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  )
}

function BriefcaseIcon({ className, isActive }: { className?: string; isActive?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" className={isActive ? 'fill-primary/20' : ''} />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" className={isActive ? 'fill-primary/10' : ''} />
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

export function Services() {
  const { t, language } = useLanguage()
  const { ref: sectionRef, isInView } = useInView()

  const services = [
    {
      id: "contabilidade",
      icon: CalculatorIcon,
      titleKey: "services.accounting",
      shortDescKey: "services.accountingShort",
      color: "from-emerald-500 to-green-600",
      bgColor: "bg-emerald-500/10",
      description: language === "pt" 
        ? "Servicos completos de contabilidade geral e analitica, incluindo processamento de documentos, reconciliacoes bancarias, fechos de contas e preparacao de demonstracoes financeiras."
        : "Complete general and analytical accounting services, including document processing, bank reconciliations, account closings and preparation of financial statements.",
      features: language === "pt" 
        ? ["Processamento contabilistico mensal", "Reconciliacoes bancarias", "Preparacao de balancetes e balancos", "Demonstracoes de resultados", "Relatorios de gestao personalizados", "Arquivo digital de documentos"]
        : ["Monthly accounting processing", "Bank reconciliations", "Balance sheet preparation", "Income statements", "Customized management reports", "Digital document archiving"],
    },
    {
      id: "fiscal",
      icon: FileTextIcon,
      titleKey: "services.tax",
      shortDescKey: "services.taxShort",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-500/10",
      description: language === "pt"
        ? "Assessoria fiscal especializada para otimizacao da carga tributaria da sua empresa, cumprimento de todas as obrigacoes fiscais e representacao perante a Autoridade Tributaria."
        : "Specialized tax advisory for optimizing your company's tax burden, compliance with all tax obligations and representation before the Tax Authority.",
      features: language === "pt"
        ? ["Planeamento fiscal estrategico", "Declaracoes periodicas (IVA, IRC, IRS)", "Modelo 22 e IES", "Representacao fiscal", "Apoio em inspecoes tributarias", "Consultoria em beneficios fiscais"]
        : ["Strategic tax planning", "Periodic declarations (VAT, IRC, IRS)", "Model 22 and IES", "Tax representation", "Support in tax inspections", "Tax benefits consulting"],
    },
    {
      id: "rh",
      icon: UsersIcon,
      titleKey: "services.hr",
      shortDescKey: "services.hrShort",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-500/10",
      description: language === "pt"
        ? "Solucoes integradas de gestao de recursos humanos, desde o processamento salarial ate a gestao de contratos e cumprimento de todas as obrigacoes laborais."
        : "Integrated human resources management solutions, from payroll processing to contract management and compliance with all labor obligations.",
      features: language === "pt"
        ? ["Processamento salarial", "Gestao de contratos de trabalho", "Comunicacoes a Seguranca Social", "DMR e outras declaracoes", "Gestao de ferias e ausencias", "Apoio em processos disciplinares"]
        : ["Payroll processing", "Employment contract management", "Social Security communications", "DMR and other declarations", "Vacation and absence management", "Disciplinary process support"],
    },
    {
      id: "auditoria",
      icon: ClipboardCheckIcon,
      titleKey: "services.audit",
      shortDescKey: "services.auditShort",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-500/10",
      description: language === "pt"
        ? "Servicos de auditoria financeira e revisao de contas, garantindo a fiabilidade e transparencia da informacao financeira da sua empresa."
        : "Financial audit and account review services, ensuring the reliability and transparency of your company's financial information.",
      features: language === "pt"
        ? ["Auditoria as contas anuais", "Revisao legal de contas", "Auditorias internas", "Due diligence financeira", "Certificacao de projetos", "Relatorios de auditoria"]
        : ["Annual accounts audit", "Legal account review", "Internal audits", "Financial due diligence", "Project certification", "Audit reports"],
    },
    {
      id: "consultoria",
      icon: TrendingUpIcon,
      titleKey: "services.consulting",
      shortDescKey: "services.consultingShort",
      color: "from-rose-500 to-pink-600",
      bgColor: "bg-rose-500/10",
      description: language === "pt"
        ? "Consultoria especializada para apoiar a tomada de decisao, elaboracao de planos de negocio e analise de viabilidade de projetos de investimento."
        : "Specialized consulting to support decision making, business plan preparation and investment project feasibility analysis.",
      features: language === "pt"
        ? ["Planos de negocio", "Estudos de viabilidade economica", "Analise de investimentos", "Reestruturacoes empresariais", "Apoio a candidaturas a incentivos", "Relatorios de gestao"]
        : ["Business plans", "Economic feasibility studies", "Investment analysis", "Corporate restructuring", "Incentive application support", "Management reports"],
    },
    {
      id: "criacao",
      icon: BuildingIcon,
      titleKey: "services.company",
      shortDescKey: "services.companyShort",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-500/10",
      description: language === "pt"
        ? "Acompanhamento completo no processo de criacao da sua empresa, desde a escolha da forma juridica ate ao inicio da atividade."
        : "Complete support in your company creation process, from choosing the legal form to starting operations.",
      features: language === "pt"
        ? ["Escolha da forma juridica", "Reserva de denominacao social", "Constituicao da sociedade", "Registo comercial", "Pacto social e estatutos", "Licenciamento de atividade"]
        : ["Legal form selection", "Company name reservation", "Company incorporation", "Commercial registration", "Articles of association", "Activity licensing"],
    },
    {
      id: "outsourcing",
      icon: BriefcaseIcon,
      titleKey: "services.outsourcing",
      shortDescKey: "services.outsourcingShort",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-500/10",
      description: language === "pt"
        ? "Externalizacao de processos administrativos e financeiros, permitindo que se foque no core business da sua empresa."
        : "Outsourcing of administrative and financial processes, allowing you to focus on your company's core business.",
      features: language === "pt"
        ? ["Gestao de contas a pagar", "Gestao de contas a receber", "Controlo de tesouraria", "Reporting financeiro", "Gestao de faturacao", "Apoio administrativo"]
        : ["Accounts payable management", "Accounts receivable management", "Treasury control", "Financial reporting", "Invoicing management", "Administrative support"],
    },
  ]

  const [activeService, setActiveService] = useState(services[0])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider px-5 py-2 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {t("services.label")}
          </span>
          <h2 className="mt-8 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            <span className="text-balance">{t("services.title")}</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        {/* Services grid - Desktop */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Service tabs */}
          <div className="col-span-4 space-y-3">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "w-full flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-500 relative overflow-hidden group",
                  activeService.id === service.id
                    ? "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-xl shadow-primary/30"
                    : "bg-card border border-border hover:border-primary/30 hover:shadow-lg",
                  isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Hover shimmer */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700",
                  hoveredIndex === index && "translate-x-full"
                )} />
                
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 relative",
                  activeService.id === service.id 
                    ? "bg-white/20" 
                    : `${service.bgColor} group-hover:scale-110`
                )}>
                  <service.icon
                    className={cn(
                      "w-6 h-6 transition-all duration-300",
                      activeService.id === service.id ? "text-white" : "text-primary"
                    )}
                    isActive={activeService.id === service.id}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-base truncate">{t(service.titleKey)}</div>
                  <div
                    className={cn(
                      "text-sm truncate transition-colors",
                      activeService.id === service.id
                        ? "text-white/80"
                        : "text-muted-foreground"
                    )}
                  >
                    {t(service.shortDescKey)}
                  </div>
                </div>
                <ChevronRight className={cn(
                  "w-5 h-5 transition-all duration-300",
                  activeService.id === service.id 
                    ? "text-white/80 translate-x-0" 
                    : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                )} />
              </button>
            ))}
          </div>

          {/* Service details */}
          <div className={cn(
            "col-span-8 bg-card border border-border rounded-3xl p-10 relative overflow-hidden transition-all duration-500",
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          )} style={{ transitionDelay: '300ms' }}>
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${activeService.color} opacity-5 blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-500`} />
            
            <div className="relative">
              <div className="flex items-start gap-6 mb-8">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${activeService.color} flex items-center justify-center shadow-lg`}>
                  <activeService.icon className="w-10 h-10 text-white" isActive />
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">{t(activeService.titleKey)}</h3>
                  <p className="text-muted-foreground text-lg">{t(activeService.shortDescKey)}</p>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-10 leading-relaxed text-lg">{activeService.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {activeService.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300 group cursor-pointer"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${activeService.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className={`bg-gradient-to-r ${activeService.color} hover:opacity-90 text-white group shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-12 px-8 text-base`}>
                {t("services.learnMore")}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Services grid - Mobile */}
        <div className="lg:hidden grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "bg-card border border-border rounded-2xl p-6 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-2 transition-all duration-500 group cursor-pointer relative overflow-hidden",
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <service.icon className="w-7 h-7 text-white" isActive />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{t(service.titleKey)}</h3>
              <p className="text-sm text-muted-foreground mb-5">{t(service.shortDescKey)}</p>
              <ul className="space-y-2">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
