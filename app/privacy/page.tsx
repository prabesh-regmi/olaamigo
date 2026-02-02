"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, Globe, Mail, Phone } from "lucide-react"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"

function PrivacyContent() {
  const { language } = useLanguage()
  
  const content = {
    pt: {
      title: "Politica de Privacidade",
      lastUpdated: "Ultima atualizacao: Janeiro 2025",
      intro: "A Three Stars Accounting, Lda. (\"nos\", \"nosso\" ou \"Empresa\") compromete-se a proteger a privacidade e os dados pessoais dos seus clientes, parceiros e utilizadores do nosso website, em conformidade com o Regulamento Geral sobre a Protecao de Dados (RGPD) - Regulamento (UE) 2016/679 e a Lei n. 58/2019 de 8 de agosto (Lei de Execucao Nacional do RGPD).",
      sections: [
        {
          icon: Database,
          title: "1. Responsavel pelo Tratamento de Dados",
          content: [
            "Denominacao Social: Three Stars Accounting, Lda.",
            "NIF: 516290797",
            "Sede: Lisboa, Portugal",
            "Email: privacidade@threestaraccounting.pt",
            "Telefone: +351 21 123 4567",
            "Encarregado de Protecao de Dados (DPO): dpo@threestaraccounting.pt"
          ]
        },
        {
          icon: Eye,
          title: "2. Dados Pessoais Recolhidos",
          content: [
            "Dados de identificacao: nome completo, NIF, numero de identificacao civil, data de nascimento",
            "Dados de contacto: endereco postal, email, telefone",
            "Dados profissionais: profissao, entidade empregadora, cargo",
            "Dados financeiros: informacoes bancarias, rendimentos, patrimonio (necessarios para os servicos contabilisticos)",
            "Dados de navegacao: endereco IP, cookies, dados de utilizacao do website",
            "Dados de comunicacao: registos de correspondencia, chamadas telefonicas"
          ]
        },
        {
          icon: Shield,
          title: "3. Finalidades do Tratamento",
          content: [
            "Prestacao de servicos de contabilidade, fiscalidade e consultoria",
            "Cumprimento de obrigacoes legais e fiscais",
            "Gestao da relacao contratual com clientes",
            "Envio de comunicacoes relativas aos servicos contratados",
            "Marketing direto (apenas com consentimento expresso)",
            "Melhoria dos nossos servicos e website",
            "Prevencao de fraude e seguranca"
          ]
        },
        {
          icon: Lock,
          title: "4. Base Legal para o Tratamento",
          content: [
            "Execucao de contrato: tratamento necessario para a prestacao dos nossos servicos",
            "Obrigacao legal: cumprimento de obrigacoes fiscais, contabilisticas e de branqueamento de capitais",
            "Consentimento: para comunicacoes de marketing e cookies nao essenciais",
            "Interesse legitimo: para melhoria dos servicos e seguranca, sempre que nao prevalecem os direitos do titular"
          ]
        },
        {
          icon: UserCheck,
          title: "5. Direitos dos Titulares dos Dados",
          content: [
            "Direito de acesso: obter confirmacao e copia dos seus dados pessoais",
            "Direito de retificacao: corrigir dados inexatos ou incompletos",
            "Direito ao apagamento: solicitar a eliminacao dos dados (\"direito a ser esquecido\")",
            "Direito a limitacao: restringir o tratamento em determinadas circunstancias",
            "Direito de portabilidade: receber os dados num formato estruturado",
            "Direito de oposicao: opor-se ao tratamento, incluindo profiling",
            "Direito de retirar o consentimento: a qualquer momento, sem afetar a licitude do tratamento anterior",
            "Para exercer estes direitos, contacte-nos atraves de privacidade@threestaraccounting.pt"
          ]
        },
        {
          icon: Globe,
          title: "6. Partilha e Transferencia de Dados",
          content: [
            "Autoridade Tributaria e Aduaneira: cumprimento de obrigacoes fiscais",
            "Seguranca Social: obrigacoes contributivas",
            "Entidades bancarias: quando necessario para os servicos",
            "Subcontratantes: prestadores de servicos de TI, com acordos de protecao de dados",
            "Nao transferimos dados para fora do Espaco Economico Europeu sem garantias adequadas"
          ]
        }
      ],
      retention: {
        title: "7. Prazos de Conservacao",
        content: "Os dados pessoais sao conservados durante o periodo necessario para as finalidades para as quais foram recolhidos, nomeadamente: documentos contabilisticos e fiscais - 10 anos (conforme legislacao portuguesa); dados contratuais - 20 anos apos o termo da relacao contratual; dados de marketing - ate retirada do consentimento."
      },
      security: {
        title: "8. Medidas de Seguranca",
        content: "Implementamos medidas tecnicas e organizativas adequadas para proteger os dados pessoais contra acesso nao autorizado, perda, destruicao ou alteracao, incluindo: encriptacao de dados, controlo de acessos, backups regulares, formacao de colaboradores e auditorias periodicas de seguranca."
      },
      complaints: {
        title: "9. Reclamacoes",
        content: "Se considerar que o tratamento dos seus dados pessoais viola a legislacao de protecao de dados, tem o direito de apresentar reclamacao junto da Comissao Nacional de Protecao de Dados (CNPD): www.cnpd.pt | Av. D. Carlos I, 134 - 1. | 1200-651 Lisboa | Tel: +351 213 928 400"
      },
      changes: {
        title: "10. Alteracoes a Politica",
        content: "Esta politica pode ser atualizada periodicamente. Quaisquer alteracoes significativas serao comunicadas atraves do nosso website ou por email."
      },
      backHome: "Voltar ao Inicio"
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: January 2025",
      intro: "Three Stars Accounting, Lda. (\"we\", \"our\" or \"Company\") is committed to protecting the privacy and personal data of our clients, partners and users of our website, in compliance with the General Data Protection Regulation (GDPR) - Regulation (EU) 2016/679 and Portuguese Law No. 58/2019 of August 8 (National GDPR Implementation Law).",
      sections: [
        {
          icon: Database,
          title: "1. Data Controller",
          content: [
            "Company Name: Three Stars Accounting, Lda.",
            "Tax ID (NIF): 516290797",
            "Address: Lisboa, Portugal",
            "Email: privacy@threestaraccounting.pt",
            "Phone: +351 21 123 4567",
            "Data Protection Officer (DPO): dpo@threestaraccounting.pt"
          ]
        },
        {
          icon: Eye,
          title: "2. Personal Data Collected",
          content: [
            "Identification data: full name, tax ID, ID card number, date of birth",
            "Contact data: postal address, email, phone number",
            "Professional data: profession, employer, position",
            "Financial data: banking information, income, assets (necessary for accounting services)",
            "Browsing data: IP address, cookies, website usage data",
            "Communication data: correspondence records, phone calls"
          ]
        },
        {
          icon: Shield,
          title: "3. Purposes of Processing",
          content: [
            "Provision of accounting, tax and consulting services",
            "Compliance with legal and tax obligations",
            "Management of contractual relationship with clients",
            "Sending communications related to contracted services",
            "Direct marketing (only with express consent)",
            "Improvement of our services and website",
            "Fraud prevention and security"
          ]
        },
        {
          icon: Lock,
          title: "4. Legal Basis for Processing",
          content: [
            "Contract performance: processing necessary for the provision of our services",
            "Legal obligation: compliance with tax, accounting and anti-money laundering obligations",
            "Consent: for marketing communications and non-essential cookies",
            "Legitimate interest: for service improvement and security, where data subject rights do not prevail"
          ]
        },
        {
          icon: UserCheck,
          title: "5. Data Subject Rights",
          content: [
            "Right of access: obtain confirmation and copy of your personal data",
            "Right to rectification: correct inaccurate or incomplete data",
            "Right to erasure: request deletion of data (\"right to be forgotten\")",
            "Right to restriction: restrict processing in certain circumstances",
            "Right to portability: receive data in a structured format",
            "Right to object: object to processing, including profiling",
            "Right to withdraw consent: at any time, without affecting the lawfulness of prior processing",
            "To exercise these rights, contact us at privacy@threestaraccounting.pt"
          ]
        },
        {
          icon: Globe,
          title: "6. Data Sharing and Transfer",
          content: [
            "Tax Authority: compliance with tax obligations",
            "Social Security: contribution obligations",
            "Banking entities: when necessary for services",
            "Subcontractors: IT service providers, with data protection agreements",
            "We do not transfer data outside the European Economic Area without adequate safeguards"
          ]
        }
      ],
      retention: {
        title: "7. Retention Periods",
        content: "Personal data is retained for the period necessary for the purposes for which it was collected, namely: accounting and tax documents - 10 years (as per Portuguese law); contractual data - 20 years after the end of the contractual relationship; marketing data - until consent is withdrawn."
      },
      security: {
        title: "8. Security Measures",
        content: "We implement appropriate technical and organizational measures to protect personal data against unauthorized access, loss, destruction or alteration, including: data encryption, access controls, regular backups, employee training and periodic security audits."
      },
      complaints: {
        title: "9. Complaints",
        content: "If you believe that the processing of your personal data violates data protection legislation, you have the right to lodge a complaint with the National Data Protection Commission (CNPD): www.cnpd.pt | Av. D. Carlos I, 134 - 1st | 1200-651 Lisboa | Tel: +351 213 928 400"
      },
      changes: {
        title: "10. Policy Changes",
        content: "This policy may be updated periodically. Any significant changes will be communicated through our website or by email."
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
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-primary" />
            <span>GDPR Compliant</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Lock className="w-8 h-8" />
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
                    {section.content.map((item, i) => (
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

          {/* Retention */}
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t.retention.title}</h2>
            <p className="text-foreground/70 leading-relaxed">{t.retention.content}</p>
          </div>

          {/* Security */}
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t.security.title}</h2>
            <p className="text-foreground/70 leading-relaxed">{t.security.content}</p>
          </div>

          {/* Complaints */}
          <div className="bg-amber-50 dark:bg-amber-950/20 rounded-2xl border border-amber-200 dark:border-amber-900 p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t.complaints.title}</h2>
            <p className="text-foreground/70 leading-relaxed">{t.complaints.content}</p>
          </div>

          {/* Changes */}
          <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-4">{t.changes.title}</h2>
            <p className="text-foreground/70 leading-relaxed">{t.changes.content}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Questions about your privacy?</h3>
          <p className="text-muted-foreground mb-6">Contact our Data Protection Officer</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:dpo@threestaraccounting.pt" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors">
              <Mail className="w-5 h-5" />
              dpo@threestaraccounting.pt
            </a>
            <a href="tel:+351211234567" className="inline-flex items-center gap-2 px-6 py-3 bg-foreground/10 text-foreground rounded-xl hover:bg-foreground/20 transition-colors">
              <Phone className="w-5 h-5" />
              +351 21 123 4567
            </a>
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

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  )
}
