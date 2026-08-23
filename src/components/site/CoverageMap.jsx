import React from "react";
import { MapPin, Radar } from "lucide-react";

const COVERAGE = [
  { code: "MUN.01", name: "Serra", note: "Sede de atendimento" },
  { code: "MUN.02", name: "Vitória", note: "Capital" },
  { code: "MUN.03", name: "Vila Velha", note: "Grande Vitória" },
  { code: "MUN.04", name: "Cariacica", note: "Grande Vitória" },
  { code: "MUN.05", name: "Viana", note: "Grande Vitória" },
  { code: "MUN.06", name: "Guarapari", note: "Litoral sul" },
  { code: "MUN.07", name: "Demais municípios", note: "Sob consulta" },
];

export default function CoverageMap() {
  return (
    <section id="cobertura" className="relative bg-void border-t border-hairline overflow-hidden">
      {/* Radar sweep decoration */}
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-[480px] w-[480px] rounded-full border border-hairline opacity-40 pointer-events-none hidden lg:block">
        <div className="absolute inset-12 rounded-full border border-hairline" />
        <div className="absolute inset-24 rounded-full border border-hairline" />
        <div className="absolute inset-0 animate-sweep">
          <div className="absolute left-1/2 top-0 h-1/2 w-px bg-gradient-to-b from-primary to-transparent origin-bottom" />
        </div>
        <Radar className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-primary/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="mb-14">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.02] max-w-3xl">
            Cobertura técnica em <span className="text-volt">todo o Espírito Santo</span>.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Atendimento baseado na Serra com expansão para a Grande Vitória e municípios
            vizinhos. Consulte disponibilidade para a sua localidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-hairline rounded-sm overflow-hidden max-w-4xl">
          {COVERAGE.map((c) => (
            <div key={c.code} className="bg-card p-5 flex items-start gap-3 hover:bg-secondary/40 transition-colors">
              <MapPin className="h-5 w-5 text-volt shrink-0 mt-0.5" strokeWidth={1.75} />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-semibold text-base text-foreground">{c.name}</h3>
                  <span className="font-mono-acc text-[9px] uppercase tracking-widest text-muted-foreground">{c.code}</span>
                </div>
                <div className="font-mono-acc text-[11px] uppercase tracking-wider text-muted-foreground mt-0.5">{c.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}