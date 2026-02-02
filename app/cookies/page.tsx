"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Cookie, Settings, BarChart, Target, Shield, Clock, ToggleLeft } from "lucide-react"
import { useLanguage, LanguageProvider } from "@/contexts/language-context"
import { useState } from "react"

function CookiesContent() {
  const { language } = useLanguage()
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  })
  
  const content = {
    pt: {
      title: "Politica de Cookies",
      lastUpdated: "Ultima atualizacao: Janeiro 2025",
      intro: "Este website utiliza cookies e tecnologias semelhantes para melhorar a sua experiencia de navegacao, analisar o trafego do site e personalizar conteudos. Esta politica explica o que sao cookies, que tipos utilizamos e como pode controla-los, em conformidade com a Lei n. 41/2004 (alterada pela Lei n. 46/2012) e o RGPD.",
      whatAreCookies: {
        title: "O que sao Cookies?",
        content: "Cookies sao pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Permitem que o site reconheca o seu dispositivo e memorize informacoes sobre a sua visita, como preferencias de idioma e outras configuracoes."
      },
      types: {
        title: "Tipos de Cookies que Utilizamos",
        categories: [
          {
            icon: Shield,
            name: "Cookies Estritamente Necessarios",
            key: "necessary",
            required: true,
            description: "Essenciais para o funcionamento do website. Sem estes cookies, servicos basicos como navegacao de paginas e acesso a areas seguras nao funcionariam.",
            examples: ["Sessao de utilizador", "Preferencias de cookies", "Seguranca do formulario (CSRF)", "Balanceamento de carga"],
            duration: "Sessao ou ate 1 ano"
          },
          {
            icon: BarChart,
            name: "Cookies de Analise/Desempenho",
            key: "analytics",
            required: false,
            description: "Permitem-nos contar visitas e fontes de trafego para medir e melhorar o desempenho do site. Ajudam-nos a saber quais paginas sao mais populares.",
            examples: ["Google Analytics", "Tempo de permanencia", "Paginas visitadas", "Taxa de rejeicao"],
            duration: "Ate 2 anos"
          },
          {
            icon: Target,
            name: "Cookies de Marketing/Publicidade",
            key: "marketing",
            required: false,
            description: "Utilizados para rastrear visitantes em websites. A intencao e exibir anuncios relevantes e envolventes para o utilizador.",
            examples: ["Facebook Pixel", "LinkedIn Insight", "Google Ads", "Remarketing"],
            duration: "Ate 2 anos"
          }
        ]
      },
      thirdParty: {
        title: "Cookies de Terceiros",
        content: "Alguns cookies sao colocados por servicos de terceiros que aparecem nas nossas paginas. Nao controlamos esses cookies. Consulte as politicas de privacidade desses terceiros:",
        services: [
          { name: "Google Analytics", url: "https://policies.google.com/privacy" },
          { name: "Facebook", url: "https://www.facebook.com/privacy/explanation" },
          { name: "LinkedIn", url: "https://www.linkedin.com/legal/privacy-policy" }
        ]
      },
      manage: {
        title: "Como Gerir Cookies",
        browser: "Pode configurar o seu navegador para recusar cookies ou alerta-lo quando cookies estao a ser enviados:",
        browsers: [
          { name: "Chrome", url: "chrome://settings/cookies" },
          { name: "Firefox", url: "about:preferences#privacy" },
          { name: "Safari", url: "Preferencias > Privacidade" },
          { name: "Edge", url: "edge://settings/privacy" }
        ],
        warning: "Nota: Se desativar cookies, algumas funcionalidades do website podem nao funcionar corretamente."
      },
      preferences: {
        title: "As Suas Preferencias de Cookies",
        description: "Utilize os controlos abaixo para gerir as suas preferencias de cookies neste website.",
        necessary: "Necessarios",
        analytics: "Analiticos",
        marketing: "Marketing",
        required: "(Obrigatorio)",
        save: "Guardar Preferencias"
      },
      contact: {
        title: "Questoes sobre Cookies?",
        content: "Se tiver duvidas sobre a nossa utilizacao de cookies, contacte-nos:"
      },
      backHome: "Voltar ao Inicio"
    },
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: January 2025",
      intro: "This website uses cookies and similar technologies to improve your browsing experience, analyze site traffic and personalize content. This policy explains what cookies are, what types we use and how you can control them, in compliance with Portuguese Law No. 41/2004 (amended by Law No. 46/2012) and the GDPR.",
      whatAreCookies: {
        title: "What are Cookies?",
        content: "Cookies are small text files stored on your device when you visit a website. They allow the site to recognize your device and remember information about your visit, such as language preferences and other settings."
      },
      types: {
        title: "Types of Cookies We Use",
        categories: [
          {
            icon: Shield,
            name: "Strictly Necessary Cookies",
            key: "necessary",
            required: true,
            description: "Essential for the website to function. Without these cookies, basic services like page navigation and access to secure areas would not work.",
            examples: ["User session", "Cookie preferences", "Form security (CSRF)", "Load balancing"],
            duration: "Session or up to 1 year"
          },
          {
            icon: BarChart,
            name: "Analytics/Performance Cookies",
            key: "analytics",
            required: false,
            description: "Allow us to count visits and traffic sources to measure and improve site performance. They help us know which pages are most popular.",
            examples: ["Google Analytics", "Time on site", "Pages visited", "Bounce rate"],
            duration: "Up to 2 years"
          },
          {
            icon: Target,
            name: "Marketing/Advertising Cookies",
            key: "marketing",
            required: false,
            description: "Used to track visitors across websites. The intention is to display relevant and engaging ads to the user.",
            examples: ["Facebook Pixel", "LinkedIn Insight", "Google Ads", "Remarketing"],
            duration: "Up to 2 years"
          }
        ]
      },
      thirdParty: {
        title: "Third-Party Cookies",
        content: "Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. Please consult the privacy policies of these third parties:",
        services: [
          { name: "Google Analytics", url: "https://policies.google.com/privacy" },
          { name: "Facebook", url: "https://www.facebook.com/privacy/explanation" },
          { name: "LinkedIn", url: "https://www.linkedin.com/legal/privacy-policy" }
        ]
      },
      manage: {
        title: "How to Manage Cookies",
        browser: "You can configure your browser to refuse cookies or alert you when cookies are being sent:",
        browsers: [
          { name: "Chrome", url: "chrome://settings/cookies" },
          { name: "Firefox", url: "about:preferences#privacy" },
          { name: "Safari", url: "Preferences > Privacy" },
          { name: "Edge", url: "edge://settings/privacy" }
        ],
        warning: "Note: If you disable cookies, some website features may not work properly."
      },
      preferences: {
        title: "Your Cookie Preferences",
        description: "Use the controls below to manage your cookie preferences on this website.",
        necessary: "Necessary",
        analytics: "Analytics",
        marketing: "Marketing",
        required: "(Required)",
        save: "Save Preferences"
      },
      contact: {
        title: "Questions about Cookies?",
        content: "If you have questions about our use of cookies, contact us:"
      },
      backHome: "Back to Home"
    }
  }

  const t = content[language]

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences))
    alert(language === 'pt' ? 'Preferencias guardadas!' : 'Preferences saved!')
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
        </div>
      </header>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Cookie className="w-8 h-8" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t.title}</h1>
          <p className="text-muted-foreground">{t.lastUpdated}</p>
        </div>

        {/* Introduction */}
        <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-8 shadow-sm">
          <p className="text-foreground/80 leading-relaxed text-lg">{t.intro}</p>
        </div>

        {/* What are cookies */}
        <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-4">{t.whatAreCookies.title}</h2>
          <p className="text-foreground/70 leading-relaxed">{t.whatAreCookies.content}</p>
        </div>

        {/* Cookie Types */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">{t.types.title}</h2>
          <div className="space-y-6">
            {t.types.categories.map((category, index) => (
              <div key={index} className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                    category.key === 'necessary' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400' :
                    category.key === 'analytics' ? 'bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400' :
                    'bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400'
                  }`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                      {category.required && (
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 rounded-full text-xs font-medium">
                          {t.preferences.required}
                        </span>
                      )}
                    </div>
                    <p className="text-foreground/70 mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {category.examples.map((example, i) => (
                        <span key={i} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                          {example}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{category.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cookie Preferences */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t.preferences.title}</h2>
          </div>
          <p className="text-foreground/70 mb-6">{t.preferences.description}</p>
          
          <div className="space-y-4 mb-6">
            {/* Necessary */}
            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">{t.preferences.necessary}</span>
                <span className="text-xs text-muted-foreground">{t.preferences.required}</span>
              </div>
              <div className="w-12 h-6 bg-emerald-500 rounded-full relative cursor-not-allowed">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl">
              <div className="flex items-center gap-3">
                <BarChart className="w-5 h-5 text-blue-600" />
                <span className="font-medium">{t.preferences.analytics}</span>
              </div>
              <button
                onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                className={`w-12 h-6 rounded-full relative transition-colors ${preferences.analytics ? 'bg-primary' : 'bg-muted'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.analytics ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

            {/* Marketing */}
            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-purple-600" />
                <span className="font-medium">{t.preferences.marketing}</span>
              </div>
              <button
                onClick={() => setPreferences({...preferences, marketing: !preferences.marketing})}
                className={`w-12 h-6 rounded-full relative transition-colors ${preferences.marketing ? 'bg-primary' : 'bg-muted'}`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${preferences.marketing ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
          </div>

          <button
            onClick={handleSavePreferences}
            className="w-full sm:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors"
          >
            {t.preferences.save}
          </button>
        </div>

        {/* Third party */}
        <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-foreground mb-4">{t.thirdParty.title}</h2>
          <p className="text-foreground/70 mb-4">{t.thirdParty.content}</p>
          <ul className="space-y-2">
            {t.thirdParty.services.map((service, i) => (
              <li key={i}>
                <a href={service.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {service.name} →
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* How to manage */}
        <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 mb-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <ToggleLeft className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t.manage.title}</h2>
          </div>
          <p className="text-foreground/70 mb-4">{t.manage.browser}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
            {t.manage.browsers.map((browser, i) => (
              <div key={i} className="p-3 bg-muted rounded-xl text-center">
                <div className="font-medium text-sm">{browser.name}</div>
                <div className="text-xs text-muted-foreground truncate">{browser.url}</div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900">
            <p className="text-sm text-amber-800 dark:text-amber-200">{t.manage.warning}</p>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-card rounded-2xl border border-border p-6 lg:p-8 shadow-sm text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">{t.contact.title}</h2>
          <p className="text-foreground/70 mb-4">{t.contact.content}</p>
          <a href="mailto:privacidade@threestaraccounting.pt" className="text-primary hover:underline font-medium">
            privacidade@threestaraccounting.pt
          </a>
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

export default function CookiesPage() {
  return (
    <LanguageProvider>
      <CookiesContent />
    </LanguageProvider>
  )
}
