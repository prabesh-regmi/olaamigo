"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText, Scale, AlertTriangle, Clock, CreditCard, Ban, RefreshCw, Gavel } from "lucide-react"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"

function TermsContent() {
  const { language } = useLanguage()
  
  const content = {
    pt: {
      title: "Termos de Servico",
      lastUpdated: "Ultima atualizacao: Janeiro 2025",
      intro: "Estes Termos de Servico (\"Termos\") regem a relacao entre a Three Stars Accounting, Lda. e os seus clientes relativamente a prestacao de servicos de contabilidade, fiscalidade, recursos humanos e consultoria. Ao contratar os nossos servicos, o cliente aceita integralmente estes Termos.",
      sections: [
        {
          icon: FileText,
          title: "1. Identificacao do Prestador",
          items: [
            "Denominacao: Three Stars Accounting, Lda.",
            "NIF: 516290797",
            "Sede Social: Lisboa, Portugal",
            "Inscricao na Ordem dos Contabilistas Certificados",
            "Capital Social: 5.000,00 EUR",
            "Email: geral@threestaraccounting.pt"
          ]
        },
        {
          icon: Scale,
          title: "2. Servicos Prestados",
          items: [
            "Contabilidade organizada e simplificada",
            "Elaboracao e submissao de declaracoes fiscais (IRS, IRC, IVA, etc.)",
            "Processamento de salarios e gestao de recursos humanos",
            "Consultoria fiscal e planeamento tributario",
            "Apoio na constituicao de empresas",
            "Relatorios de gestao e analise financeira",
            "Auditoria interna e revisao de contas",
            "Representacao perante a Autoridade Tributaria e Seguranca Social"
          ]
        },
        {
          icon: CreditCard,
          title: "3. Condicoes de Pagamento",
          items: [
            "Os honorarios sao acordados previamente em proposta comercial ou contrato",
            "Pagamento mensal ate ao dia 8 do mes seguinte, salvo acordo diferente",
            "Metodos aceites: transferencia bancaria, debito direto, MB Way",
            "IVA incluido a taxa legal em vigor (23%)",
            "Atraso no pagamento: juros de mora a taxa legal + despesas de cobranca",
            "Reservamo-nos o direito de suspender servicos apos 30 dias de incumprimento"
          ]
        },
        {
          icon: Clock,
          title: "4. Obrigacoes do Cliente",
          items: [
            "Fornecer toda a documentacao necessaria de forma completa e atempada",
            "Comunicar alteracoes relevantes na atividade empresarial",
            "Manter os dados cadastrais atualizados",
            "Responder a solicitacoes de informacao em prazo razoavel",
            "Cumprir pontualmente com os pagamentos acordados",
            "Nao utilizar os nossos servicos para fins ilicitos"
          ]
        },
        {
          icon: AlertTriangle,
          title: "5. Responsabilidade e Limitacoes",
          items: [
            "Prestamos servicos com diligencia e em conformidade com as normas profissionais",
            "Nao somos responsaveis por erros decorrentes de informacao incorreta ou incompleta fornecida pelo cliente",
            "A responsabilidade por coimas fiscais depende da comprovacao de negligencia nossa",
            "Mantemos seguro de responsabilidade civil profissional",
            "A responsabilidade esta limitada ao valor dos honorarios anuais, salvo dolo ou negligencia grave"
          ]
        },
        {
          icon: Ban,
          title: "6. Confidencialidade",
          items: [
            "Comprometemo-nos a manter sigilo sobre toda a informacao do cliente",
            "Vinculados ao segredo profissional nos termos do Estatuto da OCC",
            "Dados so partilhados quando legalmente exigido ou com consentimento",
            "Obrigacao de confidencialidade mantem-se apos cessacao do contrato",
            "Todos os colaboradores estao sujeitos a acordos de confidencialidade"
          ]
        },
        {
          icon: RefreshCw,
          title: "7. Duracao e Rescisao",
          items: [
            "Contratos com duracao minima de 12 meses, salvo acordo diferente",
            "Renovacao automatica por periodos iguais",
            "Rescisao com aviso previo de 60 dias por carta registada ou email",
            "Rescisao imediata por incumprimento grave de qualquer das partes",
            "Na cessacao, entregaremos toda a documentacao no prazo de 30 dias",
            "Honorarios devidos ate a data efetiva de cessacao"
          ]
        },
        {
          icon: Gavel,
          title: "8. Lei Aplicavel e Foro",
          items: [
            "Estes Termos regem-se pela lei portuguesa",
            "Resolucao de conflitos preferencialmente por negociacao amigavel",
            "Possibilidade de recurso a arbitragem (CAAD ou outro centro)",
            "Foro competente: Tribunais da Comarca de Lisboa",
            "Invalidade parcial nao afeta as restantes clausulas"
          ]
        }
      ],
      disclaimer: {
        title: "Aviso Importante",
        content: "Estes termos nao substituem o contrato individual de prestacao de servicos, que prevalece em caso de divergencia. Recomendamos a leitura integral antes da contratacao."
      },
      backHome: "Voltar ao Inicio"
    },
    en: {
      title: "Terms of Service",
      lastUpdated: "Last updated: January 2025",
      intro: "These Terms of Service (\"Terms\") govern the relationship between Three Stars Accounting, Lda. and its clients regarding the provision of accounting, tax, human resources and consulting services. By contracting our services, the client fully accepts these Terms.",
      sections: [
        {
          icon: FileText,
          title: "1. Service Provider Identification",
          items: [
            "Company Name: Three Stars Accounting, Lda.",
            "Tax ID (NIF): 516290797",
            "Registered Office: Lisboa, Portugal",
            "Registered with the Order of Certified Accountants",
            "Share Capital: EUR 5,000.00",
            "Email: geral@threestaraccounting.pt"
          ]
        },
        {
          icon: Scale,
          title: "2. Services Provided",
          items: [
            "Organized and simplified accounting",
            "Preparation and submission of tax returns (IRS, IRC, VAT, etc.)",
            "Payroll processing and human resources management",
            "Tax consulting and tax planning",
            "Support in company formation",
            "Management reports and financial analysis",
            "Internal audit and accounts review",
            "Representation before the Tax Authority and Social Security"
          ]
        },
        {
          icon: CreditCard,
          title: "3. Payment Terms",
          items: [
            "Fees are agreed in advance in commercial proposal or contract",
            "Monthly payment by the 8th of the following month, unless otherwise agreed",
            "Accepted methods: bank transfer, direct debit, MB Way",
            "VAT included at the legal rate in force (23%)",
            "Late payment: default interest at legal rate + collection costs",
            "We reserve the right to suspend services after 30 days of non-compliance"
          ]
        },
        {
          icon: Clock,
          title: "4. Client Obligations",
          items: [
            "Provide all necessary documentation completely and on time",
            "Communicate relevant changes in business activity",
            "Keep registration data updated",
            "Respond to information requests within a reasonable time",
            "Comply punctually with agreed payments",
            "Not use our services for illegal purposes"
          ]
        },
        {
          icon: AlertTriangle,
          title: "5. Liability and Limitations",
          items: [
            "We provide services with diligence and in accordance with professional standards",
            "We are not responsible for errors arising from incorrect or incomplete information provided by the client",
            "Responsibility for tax fines depends on proof of our negligence",
            "We maintain professional liability insurance",
            "Liability is limited to the value of annual fees, except in case of fraud or gross negligence"
          ]
        },
        {
          icon: Ban,
          title: "6. Confidentiality",
          items: [
            "We undertake to maintain secrecy about all client information",
            "Bound by professional secrecy under the OCC Statute",
            "Data only shared when legally required or with consent",
            "Confidentiality obligation remains after contract termination",
            "All employees are subject to confidentiality agreements"
          ]
        },
        {
          icon: RefreshCw,
          title: "7. Duration and Termination",
          items: [
            "Contracts with minimum duration of 12 months, unless otherwise agreed",
            "Automatic renewal for equal periods",
            "Termination with 60 days notice by registered letter or email",
            "Immediate termination for serious breach by either party",
            "Upon termination, we will deliver all documentation within 30 days",
            "Fees due until the effective date of termination"
          ]
        },
        {
          icon: Gavel,
          title: "8. Applicable Law and Jurisdiction",
          items: [
            "These Terms are governed by Portuguese law",
            "Conflict resolution preferably through amicable negotiation",
            "Possibility of recourse to arbitration (CAAD or other center)",
            "Competent jurisdiction: Lisbon District Courts",
            "Partial invalidity does not affect the remaining clauses"
          ]
        }
      ],
      disclaimer: {
        title: "Important Notice",
        content: "These terms do not replace the individual service provision contract, which prevails in case of divergence. We recommend reading them in full before contracting."
      },
      backHome: "Back to Home"
    }
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
            <Image src="/logo.png" alt="Three Stars Accounting" width={140} height={45} className="h-10 w-auto" />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <FileText className="w-8 h-8" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-muted-foreground">{t.lastUpdated}</p>
        </div>

        {/* Introduction */}
        <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-8 shadow-sm">
          <p className="text-foreground/80 leading-relaxed text-lg">{t.intro}</p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {t.sections.map((section, index) => (
            <div key={index} className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <section.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Disclaimer */}
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-900 p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-2">{t.disclaimer.title}</h2>
                <p className="text-foreground/70 leading-relaxed">{t.disclaimer.content}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to home */}
        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5" />
            {t.backHome}
          </Link>
        </div>
      </main>
    </div>
  )
}

export default function TermsPage() {
  return (
    <LanguageProvider>
      <TermsContent />
    </LanguageProvider>
  )
}
