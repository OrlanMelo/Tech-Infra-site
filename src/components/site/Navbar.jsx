import React, { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Pagamento", href: "#pagamento" },
  { label: "Cobertura", href: "#cobertura" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-md border-b border-hairline" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative flex h-9 w-9 items-center justify-center border border-hairline rounded-sm bg-secondary/60">
            <Zap className="h-5 w-5 text-volt" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-sm border border-primary/0 group-hover:border-primary/40 transition-colors" />
          </span>
          <div className="leading-none">
            <div className="font-heading font-bold text-base tracking-tight text-foreground">TECH INFRA</div>
            <div className="font-mono-acc text-[10px] text-muted-foreground uppercase">Tecnologia & Infraestrutura</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-acc text-xs uppercase tracking-wider text-muted-foreground hover:text-volt transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#servicos"
            className="font-mono-acc text-xs uppercase tracking-wider px-4 h-9 inline-flex items-center border border-primary text-volt hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm"
          >
            Solicitar Serviço
          </a>
        </div>

        <button
          className="md:hidden h-10 w-10 inline-flex items-center justify-center text-volt"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-void/95 backdrop-blur-md border-b border-hairline">
          <div className="px-6 py-4 flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono-acc text-sm uppercase tracking-wider text-muted-foreground hover:text-volt py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}