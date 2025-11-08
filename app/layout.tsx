import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import ClientLayout from "./ClientLayout" // Import the new client component

export const metadata: Metadata = {
  title: "Bolos Caseiros Lucrativos | TetelPontocom",
  description: "Aprenda a lucrar com bolos caseiros simples, bonitos e que vendem — um produto by TetelPontocom.",
  openGraph: {
    title: "Bolos Caseiros Lucrativos — simples, bonitos e que vendem",
    description: "Transforme receitas simples em renda real com o kit completo da TetelPontocom.",
    url: "https://boloscaseiros.tetel.online",
    siteName: "TetelPontocom",
    images: [
      {
        url: "/hero-bolo.png",
        width: 1200,
        height: 630,
        alt: "Bolo Caseiro Lucrativo — TetelPontocom",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolos Caseiros Lucrativos — simples, bonitos e que vendem",
    description: "Receitas práticas e didáticas para lucrar com bolos caseiros. Parte do Ecossistema Tetel.",
    images: ["/hero-bolo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}
