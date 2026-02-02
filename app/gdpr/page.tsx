"use client"

import React from "react"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, UserCheck, FileText, AlertCircle, Download, Trash2, Clock, Send, CheckCircle2 } from "lucide-react"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"
import { useState } from "react"

function GDPRContent() {
  const { language } = useLanguage()
  const [requestType, setRequestType] = useState("")
  const [submitted, setSubmitted] = useState(false)
  
  const content = {
    pt: {
      title: "RGPD - Protecao de Dados",
      subtitle: "Os Seus Direitos ao abrigo do Regulamento Geral sobre a Protecao de Dados",
      lastUpdated: "Ultima atualizacao: Janeiro 2025",
      intro: "O Regulamento (UE) 2016/679 (RGPD) e a Lei n. 58/2019 conferem-lhe direitos especificos sobre os seus dados pessoais. A Three Stars Accounting, Lda. compromete-se a respeitar e facilitar o exercicio destes direitos.",
      commitment: {
        title: "O Nosso Compromisso RGPD",
        items: [
          "Tratamos os seus dados de forma licita, leal e transparente",
          "Recolhemos dados apenas para finalidades determinadas e legitimas",
          "Limitamos os dados ao estritamente necessario",
          "Mantemos os dados exatos e atualizados",
          "Conservamos os dados apenas pelo tempo necessario",
          "Garantimos a seguranca atraves de medidas tecnicas e organizativas"
        ]
      },
      rights: {
        title: "Os Seus Direitos",
        list: [
          {
            icon: FileText,
            title: "Direito de Acesso",
            code: "Art. 15 RGPD",
            description: "Tem direito a obter confirmacao de que os seus dados estao a ser tratados e a aceder a uma copia dos mesmos, bem como a informacoes sobre as finalidades, categorias de dados, destinatarios e prazos de conservacao.",
            action: "Solicitar copia dos dados"
          },
          {
            icon: UserCheck,
            title: "Direito de Retificacao",
            code: "Art. 16 RGPD",
            description: "Pode solicitar a correcao de dados pessoais inexatos ou o completamento de dados incompletos que lhe digam respeito.",
            action: "Corrigir dados"
          },
          {
            icon: Trash2,
            title: "Direito ao Apagamento",
            code: "Art. 17 RGPD",
            description: "Pode solicitar o apagamento dos seus dados pessoais quando ja nao sejam necessarios, retire o consentimento, se oponha ao tratamento, ou os dados tenham sido tratados ilicitamente.",
            action: "Apagar dados"
          },
          {
            icon: Clock,
            title: "Direito a Limitacao",
            code: "Art. 18 RGPD",
            description: "Pode solicitar a limitacao do tratamento enquanto se verifica a exatidao dos dados, a licitude do tratamento, ou se os dados forem necessarios para exercicio de direitos.",
            action: "Limitar tratamento"
          },
          {
            icon: Download,
            title: "Direito a Portabilidade",
            code: "Art. 20 RGPD",
            description: "Tem direito a receber os seus dados num formato estruturado e de leitura automatica, e a transmiti-los a outro responsavel pelo tratamento.",
            action: "Exportar dados"
          },
          {
            icon: Shield,
            title: "Direito de Oposicao",
            code: "Art. 21 RGPD",
            description: "Pode opor-se ao tratamento dos seus dados a qualquer momento, por motivos relacionados com a sua situacao particular, incluindo definicao de perfis.",
            action: "Opor-se ao tratamento"
          }
        ]
      },
      process: {
        title: "Como Exercer os Seus Direitos",
        steps: [
          {
            number: "1",
            title: "Submeta o Pedido",
            description: "Utilize o formulario abaixo ou envie email para dpo@threestaraccounting.pt"
          },
          {
            number: "2",
            title: "Verificacao de Identidade",
            description: "Podemos solicitar informacoes adicionais para confirmar a sua identidade"
          },
          {
            number: "3",
            title: "Analise do Pedido",
            description: "Analisamos o pedido e verificamos se existem excecoes aplicaveis"
          },
          {
            number: "4",
            title: "Resposta",
            description: "Respondemos no prazo de 30 dias (prorrogavel por mais 60 dias em casos complexos)"
          }
        ]
      },
      form: {
        title: "Formulario de Exercicio de Direitos",
        description: "Selecione o tipo de pedido e forneca os dados necessarios. Responderemos no prazo legal.",
        selectType: "Selecione o tipo de pedido",
        types: [
          { value: "access", label: "Acesso aos meus dados" },
          { value: "rectification", label: "Retificacao de dados" },
          { value: "erasure", label: "Apagamento de dados" },
          { value: "restriction", label: "Limitacao do tratamento" },
          { value: "portability", label: "Portabilidade de dados" },
          { value: "objection", label: "Oposicao ao tratamento" }
        ],
        name: "Nome Completo",
        email: "Email",
        nif: "NIF (opcional)",
        details: "Detalhes do Pedido",
        detailsPlaceholder: "Descreva o seu pedido com o maximo detalhe possivel...",
        submit: "Submeter Pedido",
        success: "Pedido submetido com sucesso! Responderemos em breve."
      },
      exceptions: {
        title: "Excecoes e Limitacoes",
        content: "Os seus direitos podem ser limitados em determinadas circunstancias, nomeadamente:",
        items: [
          "Obrigacoes legais de conservacao (ex: documentos fiscais por 10 anos)",
          "Exercicio de direitos em processo judicial",
          "Razoes de interesse publico importante",
          "Investigacao de infracoes penais"
        ]
      },
      dpo: {
        title: "Encarregado de Protecao de Dados",
        content: "Para questoes relacionadas com protecao de dados, contacte o nosso DPO:",
        email: "dpo@threestaraccounting.pt",
        phone: "+351 21 123 4567",
        address: "Lisboa, Portugal"
      },
      cnpd: {
        title: "Autoridade de Controlo",
        content: "Se considerar que os seus direitos nao foram respeitados, pode apresentar reclamacao junto da:",
        name: "Comissao Nacional de Protecao de Dados (CNPD)",
        address: "Av. D. Carlos I, 134 - 1. | 1200-651 Lisboa",
        phone: "+351 213 928 400",
        website: "www.cnpd.pt"
      },
      backHome: "Voltar ao Inicio"
    },
    en: {
      title: "GDPR - Data Protection",
      subtitle: "Your Rights under the General Data Protection Regulation",
      lastUpdated: "Last updated: January 2025",
      intro: "Regulation (EU) 2016/679 (GDPR) and Portuguese Law No. 58/2019 grant you specific rights over your personal data. Three Stars Accounting, Lda. is committed to respecting and facilitating the exercise of these rights.",
      commitment: {
        title: "Our GDPR Commitment",
        items: [
          "We process your data lawfully, fairly and transparently",
          "We collect data only for specified and legitimate purposes",
          "We limit data to what is strictly necessary",
          "We keep data accurate and up to date",
          "We retain data only for as long as necessary",
          "We ensure security through technical and organizational measures"
        ]
      },
      rights: {
        title: "Your Rights",
        list: [
          {
            icon: FileText,
            title: "Right of Access",
            code: "Art. 15 GDPR",
            description: "You have the right to obtain confirmation that your data is being processed and to access a copy of it, as well as information about purposes, data categories, recipients and retention periods.",
            action: "Request data copy"
          },
          {
            icon: UserCheck,
            title: "Right to Rectification",
            code: "Art. 16 GDPR",
            description: "You can request the correction of inaccurate personal data or the completion of incomplete data concerning you.",
            action: "Correct data"
          },
          {
            icon: Trash2,
            title: "Right to Erasure",
            code: "Art. 17 GDPR",
            description: "You can request the deletion of your personal data when no longer necessary, you withdraw consent, you object to processing, or data was processed unlawfully.",
            action: "Delete data"
          },
          {
            icon: Clock,
            title: "Right to Restriction",
            code: "Art. 18 GDPR",
            description: "You can request restriction of processing while verifying data accuracy, processing lawfulness, or if data is needed for exercising legal rights.",
            action: "Restrict processing"
          },
          {
            icon: Download,
            title: "Right to Portability",
            code: "Art. 20 GDPR",
            description: "You have the right to receive your data in a structured, machine-readable format and to transmit it to another controller.",
            action: "Export data"
          },
          {
            icon: Shield,
            title: "Right to Object",
            code: "Art. 21 GDPR",
            description: "You can object to the processing of your data at any time, on grounds relating to your particular situation, including profiling.",
            action: "Object to processing"
          }
        ]
      },
      process: {
        title: "How to Exercise Your Rights",
        steps: [
          {
            number: "1",
            title: "Submit Request",
            description: "Use the form below or email dpo@threestaraccounting.pt"
          },
          {
            number: "2",
            title: "Identity Verification",
            description: "We may request additional information to confirm your identity"
          },
          {
            number: "3",
            title: "Request Analysis",
            description: "We analyze the request and verify if any exceptions apply"
          },
          {
            number: "4",
            title: "Response",
            description: "We respond within 30 days (extendable by 60 days for complex cases)"
          }
        ]
      },
      form: {
        title: "Rights Exercise Form",
        description: "Select the request type and provide the necessary information. We will respond within the legal timeframe.",
        selectType: "Select request type",
        types: [
          { value: "access", label: "Access to my data" },
          { value: "rectification", label: "Data rectification" },
          { value: "erasure", label: "Data erasure" },
          { value: "restriction", label: "Processing restriction" },
          { value: "portability", label: "Data portability" },
          { value: "objection", label: "Object to processing" }
        ],
        name: "Full Name",
        email: "Email",
        nif: "Tax ID (optional)",
        details: "Request Details",
        detailsPlaceholder: "Describe your request in as much detail as possible...",
        submit: "Submit Request",
        success: "Request submitted successfully! We will respond shortly."
      },
      exceptions: {
        title: "Exceptions and Limitations",
        content: "Your rights may be limited in certain circumstances, namely:",
        items: [
          "Legal retention obligations (e.g., tax documents for 10 years)",
          "Exercise of rights in legal proceedings",
          "Important public interest reasons",
          "Criminal offense investigations"
        ]
      },
      dpo: {
        title: "Data Protection Officer",
        content: "For data protection related questions, contact our DPO:",
        email: "dpo@threestaraccounting.pt",
        phone: "+351 21 123 4567",
        address: "Lisboa, Portugal"
      },
      cnpd: {
        title: "Supervisory Authority",
        content: "If you believe your rights have not been respected, you can lodge a complaint with the:",
        name: "National Data Protection Commission (CNPD)",
        address: "Av. D. Carlos I, 134 - 1st | 1200-651 Lisboa",
        phone: "+351 213 928 400",
        website: "www.cnpd.pt"
      },
      backHome: "Back to Home"
    }
  }

  const t = content[language]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all" />
            <Image src="/logo.png" alt="Three Stars Accounting" width={140} height={45} className="h-10 w-auto" />
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">GDPR Compliant</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-3">{t.title}</h1>
          <p className="text-xl text-muted-foreground mb-2">{t.subtitle}</p>
          <p className="text-sm text-muted-foreground">{t.lastUpdated}</p>
        </div>

        {/* Introduction */}
        <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-8 shadow-sm">
          <p className="text-foreground/80 leading-relaxed text-lg">{t.intro}</p>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 lg:p-8 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary" />
            {t.commitment.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {t.commitment.items.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-background/50 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">{t.rights.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.rights.list.map((right, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <right.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-foreground">{right.title}</h3>
                      <span className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs">{right.code}</span>
                    </div>
                    <p className="text-foreground/70 text-sm leading-relaxed mb-3">{right.description}</p>
                    <button 
                      onClick={() => setRequestType(right.action)}
                      className="text-primary text-sm font-medium hover:underline"
                    >
                      {right.action} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6">{t.process.title}</h2>
          <div className="grid sm:grid-cols-4 gap-4">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl border border-border p-6 text-center h-full">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-foreground/70 text-sm">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden sm:block absolute top-1/2 -right-2 w-4 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-2">{t.form.title}</h2>
          <p className="text-foreground/70 mb-6">{t.form.description}</p>
          
          {submitted ? (
            <div className="flex items-center gap-3 p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-xl border border-emerald-200 dark:border-emerald-900">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <span className="text-emerald-800 dark:text-emerald-200 font-medium">{t.form.success}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.form.selectType}</label>
                <select 
                  value={requestType}
                  onChange={(e) => setRequestType(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">{t.form.selectType}...</option>
                  {t.form.types.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.form.name}</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t.form.email}</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.form.nif}</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t.form.details}</label>
                <textarea 
                  rows={4} 
                  required
                  placeholder={t.form.detailsPlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>
              
              <button type="submit" className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors">
                <Send className="w-5 h-5" />
                {t.form.submit}
              </button>
            </form>
          )}
        </div>

        {/* Exceptions */}
        <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-900 p-6 lg:p-8 mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-2">{t.exceptions.title}</h2>
              <p className="text-foreground/70 mb-4">{t.exceptions.content}</p>
              <ul className="space-y-2">
                {t.exceptions.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* DPO Contact */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">{t.dpo.title}</h2>
            <p className="text-foreground/70 mb-4">{t.dpo.content}</p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> <a href={`mailto:${t.dpo.email}`} className="text-primary hover:underline">{t.dpo.email}</a></p>
              <p><strong>Tel:</strong> {t.dpo.phone}</p>
              <p><strong>Address:</strong> {t.dpo.address}</p>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">{t.cnpd.title}</h2>
            <p className="text-foreground/70 mb-4">{t.cnpd.content}</p>
            <div className="space-y-2 text-sm">
              <p><strong>{t.cnpd.name}</strong></p>
              <p>{t.cnpd.address}</p>
              <p><strong>Tel:</strong> {t.cnpd.phone}</p>
              <p><strong>Web:</strong> <a href={`https://${t.cnpd.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{t.cnpd.website}</a></p>
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

export default function GDPRPage() {
  return (
    <LanguageProvider>
      <GDPRContent />
    </LanguageProvider>
  )
}
