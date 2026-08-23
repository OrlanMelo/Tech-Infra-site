import React from "react";
import { Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer id="contato" className="relative bg-void border-t border-hairline">
      {/* Massive contact block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <h2 className="font-heading font-bold text-4xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-5xl">
          Fale com a <span className="text-volt text-glow">Tech Infra</span>.
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground text-lg">
          Pronto-atendimento técnico para diagnóstico, orçamento e agendamento de serviço.
        </p>

        {/* Contact cards */}
        <div className="mt-14 grid md:grid-cols-2 gap-px bg-border border border-hairline rounded-sm overflow-hidden">
          <a
            href="tel:+5527960002579"
            className="group bg-card p-8 flex flex-col gap-4 hover:bg-secondary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-acc text-[10px] uppercase tracking-widest text-muted-foreground">CANAL.01 — Telefone</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-volt transition-colors" />
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-8 w-8 text-volt" strokeWidth={1.75} />
              <span className="font-heading font-bold text-3xl sm:text-4xl text-foreground tracking-tight">
                (27) 96000-2579
              </span>
            </div>
          </a>

          <a
            href="mailto:servicos@solucoestecinfra.com"
            className="group bg-card p-8 flex flex-col gap-4 hover:bg-secondary/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-acc text-[10px] uppercase tracking-widest text-muted-foreground">CANAL.02 — E-mail</span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-volt transition-colors" />
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-volt" strokeWidth={1.75} />
              <span className="font-heading font-bold text-2xl sm:text-3xl text-foreground tracking-tight break-all">
                servicos@solucoestecinfra.com
              </span>
            </div>
          </a>
        </div>

        {/* Hours strip */}
        <div className="mt-px bg-card border border-hairline rounded-sm p-6 flex items-center gap-4">
          <Clock className="h-5 w-5 text-volt" strokeWidth={1.75} />
          <span className="font-mono-acc text-xs uppercase tracking-wider text-muted-foreground">
            Atendimento: segunda a sábado — 08h às 20h // Pronto-atendimento 24h para emergências
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-hairline">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-dot" />
            <span className="font-mono-acc text-[11px] uppercase tracking-widest text-muted-foreground">
              Tech Infra // Tecnologia e Infraestrutura
            </span>
          </div>
          <div className="font-mono-acc text-[11px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} — Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
}