"use client"

import { useLanguage } from "@/contexts/language-context"

interface Client {
  name: string
  sector: { pt: string; en: string }
  initials: string
  color: string
}

const clients: Client[] = [
  { name: "AgroVerde Lda", sector: { pt: "Agricultura", en: "Agriculture" }, initials: "AV", color: "bg-emerald-500" },
  { name: "TransLisboa SA", sector: { pt: "Transportes", en: "Transport" }, initials: "TL", color: "bg-blue-500" },
  { name: "ModaStyle", sector: { pt: "Retalho", en: "Retail" }, initials: "MS", color: "bg-pink-500" },
  { name: "TechShop Online", sector: { pt: "E-commerce", en: "E-commerce" }, initials: "TS", color: "bg-violet-500" },
  { name: "Construtora Tejo", sector: { pt: "Construcao", en: "Construction" }, initials: "CT", color: "bg-orange-500" },
  { name: "Restaurante Solar", sector: { pt: "Restauracao", en: "Restaurant" }, initials: "RS", color: "bg-amber-500" },
  { name: "Clinica Saude+", sector: { pt: "Saude", en: "Healthcare" }, initials: "CS", color: "bg-red-500" },
  { name: "Hotel Atlantico", sector: { pt: "Turismo", en: "Tourism" }, initials: "HA", color: "bg-cyan-500" },
  { name: "Industria Metalo", sector: { pt: "Industria", en: "Industry" }, initials: "IM", color: "bg-slate-500" },
  { name: "Escola Futuro", sector: { pt: "Educacao", en: "Education" }, initials: "EF", color: "bg-indigo-500" },
  { name: "Imobiliaria Prime", sector: { pt: "Imobiliario", en: "Real Estate" }, initials: "IP", color: "bg-teal-500" },
  { name: "Consultores Pro", sector: { pt: "Servicos", en: "Services" }, initials: "CP", color: "bg-purple-500" },
  { name: "Farmacia Central", sector: { pt: "Saude", en: "Healthcare" }, initials: "FC", color: "bg-green-500" },
  { name: "LogiTrans Express", sector: { pt: "Transportes", en: "Transport" }, initials: "LE", color: "bg-sky-500" },
  { name: "BioAgro Portugal", sector: { pt: "Agricultura", en: "Agriculture" }, initials: "BA", color: "bg-lime-500" },
  { name: "DigitalMart", sector: { pt: "E-commerce", en: "E-commerce" }, initials: "DM", color: "bg-fuchsia-500" },
]

function ClientCard({ client, language }: { client: Client; language: "pt" | "en" }) {
  return (
    <div className="flex-shrink-0 w-48 bg-card border border-border rounded-xl p-4 mx-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 ${client.color} rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-110 transition-transform`}>
          {client.initials}
        </div>
        <div className="min-w-0">
          <div className="font-medium text-foreground text-sm truncate">{client.name}</div>
          <div className="text-xs text-muted-foreground">{client.sector[language]}</div>
        </div>
      </div>
    </div>
  )
}

export function ClientMarquee() {
  const { language } = useLanguage()
  
  // Double the clients for seamless loop
  const doubledClients = [...clients, ...clients]

  return (
    <div className="relative overflow-hidden py-4">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      {/* First row - moving left */}
      <div className="flex animate-marquee mb-4">
        {doubledClients.map((client, index) => (
          <ClientCard key={`row1-${index}`} client={client} language={language} />
        ))}
      </div>
      
      {/* Second row - moving right */}
      <div className="flex animate-marquee-reverse">
        {doubledClients.reverse().map((client, index) => (
          <ClientCard key={`row2-${index}`} client={client} language={language} />
        ))}
      </div>
    </div>
  )
}
