"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Sectors } from "@/components/sectors"
import { HRServices } from "@/components/hr-services"
import { Team } from "@/components/team"
import { Clients } from "@/components/clients"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Sectors />
          <HRServices />
          <Team />
          <Clients />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
