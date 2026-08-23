import React from "react";
import { QrCode, CreditCard, Banknote } from "lucide-react";

const METHODS = [
  {
    code: "PAY.01",
    title: "PIX",
    icon: QrCode,
    desc: "Pagamento instantâneo via QR Code dinâmico ou chave copia-e-cola. Confirmação em segundos.",
    tag: "Instantâneo",
  },
  {
    code: "PAY.02",
    title: "Cartão de Crédito",
    icon: CreditCard,
    desc: "Bandeiras Visa, Mastercard, Elo e Amex. Aprovação segura no ato da contratação.",
    tag: "Aprovação na hora",
  },
  {
    code: "PAY.03",
    title: "Cartão de Débito",
    icon: Banknote,
    desc: "Débito direto em conta com leitura de chip. Ideal para ordens de serviço presenciais.",
    tag: "Presencial",
  },
];

export default function PaymentGateway() {
  return (
    <section id="pagamento" className="relative bg-card border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid gap-px bg-border border border-hairline rounded-sm overflow-hidden">
          {METHODS.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.code} className="bg-card p-6 flex items-center gap-5 hover:bg-secondary/40 transition-colors group">
                <div className="flex items-center justify-center h-14 w-14 border border-hairline rounded-sm bg-void group-hover:border-primary/50 transition-colors shrink-0">
                  <Icon className="h-6 w-6 text-volt" strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-heading font-semibold text-xl text-foreground">{m.title}</h3>
                    <span className="font-mono-acc text-[10px] uppercase tracking-widest text-muted-foreground">{m.code}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
                <span className="hidden sm:inline-flex font-mono-acc text-[10px] uppercase tracking-wider text-volt border border-primary/30 px-2.5 py-1 rounded-sm shrink-0">
                  {m.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}