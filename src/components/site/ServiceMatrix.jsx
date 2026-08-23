import React, { useState } from "react";
import { Image } from "@/components/ui/image";
import { Zap, Network, Snowflake, ArrowRight, X, MessageCircle } from "lucide-react";

const SERVICES = [
  {
    code: "",
    title: "Elétrica",
    icon: Zap,
    image: "https://media.base44.com/images/public/6a8af28f38e13daa44dcdb30/322927247_generated_a1eaee22.png",
    desc: "Instalações, manutenções e diagnósticos em baixa tensão com rigor normativo.",
    specs: [
      "Quadros de distribuição & comando",
      "Aterramento e SPDA",
      "Diagnóstico de carga e fator de potência",
      "Iluminação e automação",
    ],
    whatsapp: "https://wa.me/5527960002579?text=Quero%20fazer%20um%20orçamento%20na%20categoria%20de%20serviços%20elétricos.",
  },
  {
    code: "",
    title: "Tecnologia da Informação",
    icon: Network,
    image: "https://media.base44.com/images/public/6a8af28f38e13daa44dcdb30/b140c5109_generated_d8164ac3.png",
    desc: "Infraestrutura de rede e cabeamento estruturado.",
    specs: [
      "Cabeamento estruturado CAT6/Fibra",
      "Instalação e configuração de roteadores",
      "CFTV IP e conexão remota",
      "Suporte técnico",
    ],
    whatsapp: "https://wa.me/5527960002579?text=Quero%20fazer%20um%20orçamento%20na%20categoria%20de%20serviços%20de%20%TI.",
  },
  {
    code: "",
    title: "Ar-Condicionado",
    icon: Snowflake,
    image: "https://media.base44.com/images/public/6a8af28f38e13daa44dcdb30/25dac70e9_generated_e5ab9e8b.png",
    desc: "Instalação, higienização e manutenção preventiva de sistemas de climatização.",
    specs: [
      "Cálculo de carga térmica",
      "Higienização química profunda",
      "Gestão de refrigerante e gás",
      "Manutenção preventiva programada",
    ],
    whatsapp: "https://wa.me/5527960002579?text=Quero%20fazer%20um%20orçamento%20na%20categoria%20de%20serviços%20de%20refrigeração.",
  },
];

export default function ServiceMatrix() {
  const [active, setActive] = useState(null);

  const openModal = (s) => setActive(s);
  const closeModal = () => setActive(null);
  const confirmRedirect = () => {
    if (active?.whatsapp) window.open(active.whatsapp, "_blank", "noopener,noreferrer");
    closeModal();
  };

  return (
    <section id="servicos" className="relative bg-void border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl max-w-3xl leading-[1.02]">
              Três frentes técnicas. <span className="text-volt">Um padrão</span> de execução.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground text-base">
            Cada serviço é tratado como um sistema crítico — diagnosticado, documentado e executado com rastreabilidade técnica completa.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border border border-hairline rounded-sm overflow-hidden">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className="group relative bg-card flex flex-col">
                {/* Image */}
                <div className="relative h-56 overflow-hidden border-b border-hairline">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fittingType="fill"
                    className="h-full w-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                  {s.code && (
                    <div className="absolute top-4 left-4 font-mono-acc text-[10px] uppercase tracking-widest text-volt bg-void/70 px-2 py-1 rounded-sm border border-hairline">
                      {s.code}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 flex items-center justify-center h-11 w-11 bg-void/80 border border-primary/40 rounded-sm">
                    <Icon className="h-5 w-5 text-volt" strokeWidth={2} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground text-[15px] leading-relaxed">{s.desc}</p>

                  <div className="mt-6 pt-5 border-t border-hairline">
                    <div className="font-mono-acc text-[10px] uppercase tracking-widest text-muted-foreground mb-3">
                      // Especificações técnicas
                    </div>
                    <ul className="space-y-2.5">
                      {s.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2.5 text-sm text-foreground/90">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => openModal(s)}
                    className="mt-7 inline-flex items-center justify-center gap-2 h-12 px-5 border border-hairline font-mono-acc text-xs uppercase tracking-wider text-foreground hover:border-primary hover:text-volt hover:bg-primary/5 transition-colors rounded-sm"
                  >
                    Configurar Serviço <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Redirect modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-void/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md bg-card border border-hairline rounded-sm p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 h-9 w-9 inline-flex items-center justify-center text-muted-foreground hover:text-volt transition-colors"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center justify-center h-14 w-14 border border-primary/40 rounded-sm bg-primary/5 mb-6">
              <MessageCircle className="h-6 w-6 text-volt" strokeWidth={1.75} />
            </div>

            <h3 className="font-heading font-bold text-2xl text-foreground">Você será redirecionado</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Será aberto uma página do WhatsApp para preenchimento do formulário com os serviços
              que deseja, tudo de forma automática!
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={confirmRedirect}
                className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-5 bg-primary text-primary-foreground font-heading font-semibold rounded-sm hover:opacity-90 transition-opacity glow-volt"
              >
                <MessageCircle className="h-4 w-4" /> Continuar para o WhatsApp
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex items-center justify-center h-12 px-5 border border-hairline font-mono-acc text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors rounded-sm"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}