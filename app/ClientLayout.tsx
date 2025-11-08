"use client"

import type React from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="antialiased bg-[#FFF8F3] text-gray-900 font-[Inter,sans-serif] min-h-screen flex flex-col">
      <header className="w-full bg-[#FFF8F3] backdrop-blur sticky top-0 z-50 border-b border-black/5">
        <div className="w-full px-4 sm:px-6 py-3 flex flex-col items-center justify-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Log_Tetelpontocom-wmLNs1o1yMQuoQekkSKWwB0thoOL6D.png"
              alt="TetelPontocom"
              className="w-7 h-7 rounded-sm"
            />
            <span className="text-[15px] font-semibold tracking-tight text-gray-900">TetelPontocom</span>
          </div>
        </div>
      </header>

      {children}
    </div>
  )
}
