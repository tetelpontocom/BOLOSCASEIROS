"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { ArrowRight, CheckCircle, Home, Star, HelpCircle } from "lucide-react"

/**
 * LP Bolos Caseiros – v1.1 Final (V0 Free Safe Mode)
 * - Ajuste de tom humano (sem termos técnicos)
 * - Gancho de vídeo destacado (hero, aprendizado, CTA)
 * - Protocolo de origem integrado (?origem=...)
 * - Compatível 100% com V0 Free
 *
 * Upgrade path (V0 Pro):
 * - Integrar tracking FB/GA via <Script strategy="afterInteractive">
 * - Carregar depoimentos e FAQ de JSON externo
 */

const LINK_MAIN = "https://chk.eduzz.com/Q9NDEKXK01"
const LINK_COMBO = "https://chk.eduzz.com/KW83Y2VB01"

export default function BolosCaseirosLP() {
  const [mounted, setMounted] = useState(false)
  const [origem, setOrigem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    try {
      const url = new URL(window.location.href)
      const q = url.searchParams.get("origem")
      if (q) {
        sessionStorage.setItem("tetel_origem", q)
        setOrigem(q)
      } else {
        const saved = sessionStorage.getItem("tetel_origem")
        if (saved) setOrigem(saved)
      }
    } catch {
      /* ignore */
    }
  }, [])

  const withOrigin = (base: string) => (origem ? `${base}?origem=${encodeURIComponent(origem)}` : base)

  const hero = useMemo(
    () => ({
      title: "Bolos Caseiros Lucrativos — simples, bonitos e que vendem",
      subtitle:
        "Aprenda receitas fáceis, apresentação irresistível e um passo a passo direto para lucrar no seu bairro ou online.",
      bullets: [
        "Receitas testadas com ingredientes acessíveis",
        "Acabamentos e embalagens que valorizam o produto",
        "Precificação clara + planilha de custos",
      ],
      cta: "Quero aprender agora",
    }),
    [],
  )

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-[#FFF8F1] text-[#1F1A17]">
      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-[#FFF8F1]/90 backdrop-blur border-b border-[#F0E1D2]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/bolos/logo-bolos.jpg"
              alt="Bolos Caseiros – TetelPontocom"
              width={28}
              height={28}
              className="rounded-sm ring-1 ring-[#EEDFD2]"
            />
            <span className="text-sm font-semibold tracking-tight">Bolos Caseiros by TetelPontocom</span>
          </div>
          <nav className="hidden sm:flex items-center gap-5 text-sm">
            <a href="#aprende" className="hover:opacity-80">
              O que você aprende
            </a>
            <a href="#depo" className="hover:opacity-80">
              Depoimentos
            </a>
            <a href="#faq" className="hover:opacity-80">
              Dúvidas
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">{hero.title}</h1>
            <p className="mt-3 text-[#4B423C]">
              {hero.subtitle}
              <br />
              <span className="text-[#FF6B00] font-medium">
                Aulas 100% em vídeo com acompanhamento em PDF — simples, didático e pronto pra aplicar.
              </span>
            </p>
            <ul className="mt-5 space-y-2 text-sm text-[#4B423C]">
              {hero.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 mt-0.5 text-[#FF6B00]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={withOrigin(LINK_MAIN)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F1A17] text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90"
              >
                {hero.cta} <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#combo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-[#EEDFD2] text-[#1F1A17] px-5 py-3 text-sm hover:bg-[#FFF2E6]"
              >
                Ver oferta combo R$27
              </a>
            </div>
            <div className="mt-2 text-[11px] text-[#816e62]">Pagamento seguro pela Eduzz • 7 dias de garantia</div>
          </div>

          <div className="relative">
            <div className="relative h-[280px] sm:h-[360px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/bolos/hero-bolo-real.jpg"
                alt="Bolo caseiro apetitoso"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-4 sm:-left-6">
              <Image
                src="/images/bolos/mockup-ebook-bolos.png"
                alt="Ebook Bolos Caseiros Lucrativos"
                width={220}
                height={280}
                className="rounded-xl shadow-lg ring-1 ring-[#EEDFD2]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI APRENDER */}
      <section id="aprende" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">O que você vai aprender</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ul className="space-y-3 text-sm text-[#4B423C]">
            {[
              "Receitas base + variações (chocolate, fubá, laranja…)",
              "Textura perfeita: fofinho, úmido e padronizado",
              "Coberturas e finalizações que encantam",
              "Embalagem de baixo custo com aparência premium",
              "Treinamento 100% em vídeo com linguagem leve e prática",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-[#FF6B00]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-3 text-sm text-[#4B423C]">
            {[
              "Precificação + planilha de custos incluída",
              "Estrutura simples de pedidos e entregas",
              "Como tirar fotos que vendem (com o celular)",
              "Ideias de ofertas para datas especiais",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 mt-0.5 text-[#FF6B00]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depo" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Quem já aplicou, aprovou</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "/images/bolos/depo-1.png",
            "/images/bolos/depo-2.png",
            "/images/bolos/depo-3.png",
            "/images/bolos/depo-4.png",
          ].map((src, i) => (
            <figure key={src} className="rounded-2xl bg-white border border-[#EEDFD2] p-4">
              <div className="flex items-center gap-1 text-[#E5A100] mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <Image
                src={src || "/placeholder.svg"}
                alt={`Depoimento ${i + 1}`}
                width={320}
                height={220}
                className="rounded-lg ring-1 ring-[#F0E1D2]"
              />
            </figure>
          ))}
        </div>
      </section>

      {/* OFERTA COMBO */}
      <section id="combo" className="border-y border-[#F0E1D2] bg-[#FFF2E6]">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-2">Oferta Combo R$27</h3>
            <p className="text-[#4B423C]">
              Tenha o pacote completo para acelerar seus resultados — conteúdo + atalhos práticos. Upgrades e bônus
              opcionais aparecem direto na Eduzz.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a
                href={withOrigin(LINK_COMBO)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F1A17] text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90"
              >
                Garantir o combo agora <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={withOrigin(LINK_MAIN)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-[#EEDFD2] text-[#1F1A17] px-5 py-3 text-sm hover:bg-[#FFF2E6]"
              >
                Prefiro começar por R$10
              </a>
            </div>
            <div className="mt-2 text-[11px] text-[#816e62]">
              💡 Você ainda pode incluir materiais complementares por apenas R$7,90 e R$8,90 durante a compra — são
              recursos que aceleram seus resultados.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              "/images/bolos/bonus-1.jpg",
              "/images/bolos/bonus-2.jpg",
              "/images/bolos/bonus-3.jpg",
              "/images/bolos/bonus-4.jpg",
            ].map((src) => (
              <div key={src} className="relative h-28 w-full rounded-xl overflow-hidden ring-1 ring-[#EEDFD2]">
                <Image src={src || "/placeholder.svg"} alt="Conteúdo do combo" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold tracking-tight mb-6">Dúvidas frequentes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "É difícil fazer e vender?",
              a: "Não. As receitas são simples e há um passo a passo prático para produzir e oferecer no seu bairro, trabalho ou redes.",
            },
            {
              q: "Preciso de curso caro de confeitaria?",
              a: "Não. O foco é início rápido com qualidade e visual caprichado. Você evolui aos poucos.",
            },
            {
              q: "Em quanto tempo consigo vender?",
              a: "Depende do seu ritmo, mas muita gente faz as primeiras vendas já na primeira semana.",
            },
            {
              q: "Recebo o material como?",
              a: "Acesso imediato pela Eduzz. Conteúdo principal + materiais de apoio em PDF. Aulas em vídeo incluídas.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="rounded-2xl bg-white border border-[#EEDFD2] p-5">
              <div className="flex items-start gap-3">
                <HelpCircle className="h-5 w-5 mt-0.5 text-[#FF6B00]" />
                <div>
                  <h4 className="font-semibold">{q}</h4>
                  <p className="mt-1 text-sm text-[#4B423C]">{a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="text-center mt-10">
          <p className="mb-3 text-sm text-[#4B423C]">
            Acesse agora e assista às aulas em vídeo ainda hoje — comece a produzir seus primeiros bolos com confiança.
          </p>
          <a
            href={withOrigin(LINK_MAIN)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F1A17] text-white px-6 py-3 text-sm font-medium shadow-sm hover:opacity-90"
          >
            Começar por R$10 agora <ArrowRight className="h-4 w-4" />
          </a>
          <div className="mt-2 text-[11px] text-[#816e62]">Compra segura pela Eduzz • 7 dias de garantia</div>
        </div>

        {origem?.toLowerCase() === "tetelpontocom" && (
          <div className="mt-14 text-center">
            <a
              href="https://tetelpontocom.tetel.online"
              className="inline-flex items-center gap-2 rounded-xl bg-[#EEDFD2] text-[#1F1A17] px-5 py-3 text-sm font-medium hover:bg-[#EBD2BF] transition"
            >
              <Home className="h-4 w-4" /> Voltar à TetelPontocom
            </a>
          </div>
        )}
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-[#F0E1D2] bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-[#6D5F56]">
          Produzido por <b>TetelPontocom</b> — parte do Ecossistema Tetel.
          <br className="sm:hidden" />
          <span className="text-[#9a877a]">Conteúdo original licenciado com direito de revenda.</span>
        </div>
      </footer>
    </main>
  )
}
