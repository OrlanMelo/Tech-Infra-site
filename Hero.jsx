import React from "react";
import { Image } from "@/components/ui/image";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "https://media.base44.com/images/public/6a8af28f38e13daa44dcdb30/9fa03f7e3_generated_d9157f5a.png";

const LOCATIONS = [
  "SERRA", "GRANDE VITÓRIA", "VILA VELHA", "CARIACICA", "VIANA", "GUARAPARI", "VITÓRIA",
];

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-void">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMG}
          alt="Painel elétrico perfeitamente cabeado"
          fittingType="fill"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/60 to-void" />
        <div className="absolute inset-0 grid-circuit opacity-30" />
      </div>

      {/* Ticker */}
      <div className="relative top-16 z-10 border-y border-hairline bg-void/60 backdrop-blur-sm overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker py-2.5">
          {[...LOCATIONS, ...LOCATIONS, ...LOCATIONS].map((loc, i) => (
            <span key={i} className="font-mono-acc text-xs uppercase tracking-widest text-muted-foreground px-6 flex items-center gap-6">
              <span className="text-volt">/</span> {loc}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16 w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="font-mono-acc text-xs uppercase tracking-widest text-volt">
            Sistema Operacional // Status: Ativo
          </span>
        </div>

        <h1 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] max-w-4xl">
          Precisão em <span className="text-volt text-glow">infraestrutura</span> técnica.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Serviços para elétrica, tecnologia da informação e climatização executada com
          padrão técnico rigoroso. Diagnosticamos, projetamos e mantemos os sistemas
          críticos que sustentam o seu ambiente — na Serra, Grande Vitória e demais municípios.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#servicos"
            className="group relative inline-flex items-center justify-center h-14 px-8 bg-primary text-primary-foreground font-heading font-semibold text-base rounded-sm overflow-hidden transition-transform hover:scale-[1.02] glow-volt"
          >
            [ INICIAR ARQUITETURA DE SERVIÇO ]
          </a>
          <a
            href="https://wa.me/5527960002579"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-14 px-8 border border-hairline text-foreground font-mono-acc text-sm uppercase tracking-wider rounded-sm hover:border-primary hover:text-volt transition-colors"
          >
            Falar com técnico
          </a>
        </div>

        {/* Stats strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-hairline rounded-sm overflow-hidden">
          {[
            { k: "03", v: "Frentes técnicas" },
            { k: "07+", v: "Municípios atendidos" },
            { k: "24h", v: "Pronto-atendimento" },
            { k: "PIX", v: "Cartão & débito" },
          ].map((s) => (
            <div key={s.v} className="bg-secondary/40 px-5 py-6">
              <div className="font-heading font-bold text-3xl text-volt">{s.k}</div>
              <div className="font-mono-acc text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-volt transition-colors flex flex-col items-center gap-1"
        aria-label="Rolar para serviços"
      >
        <span className="font-mono-acc text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}