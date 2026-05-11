import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const links = [
  { to: "/impressum", label: "Impressum" },
  { to: "/agb", label: "AGB" },
  { to: "/datenschutz", label: "Datenschutz" },
  { to: "/widerruf", label: "Widerruf" },
  { to: "/versand", label: "Versand & Zahlung" },
] as const;

export function LegalLayout({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-display text-2xl tracking-tight italic">
            pure<span className="text-[var(--primary)]">·</span>patches
          </Link>
          <Link to="/" className="group inline-flex items-center gap-1 text-sm border-b border-foreground/30 pb-0.5 hover:border-foreground">
            Zur Startseite <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </Link>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">— Rechtliches</div>
          <nav className="flex flex-col gap-1 text-sm">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                activeProps={{ className: "text-[var(--primary)] font-medium" }}
                inactiveProps={{ className: "text-muted-foreground hover:text-foreground" }}
                className="py-1.5 transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </aside>

        <main className="lg:col-span-9 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Stand: {updated}</div>
          <h1 className="mt-4 font-display text-5xl md:text-6xl tracking-[-0.03em] leading-[0.95]">{title}</h1>
          <div className="mt-12 prose-legal space-y-6 text-foreground/80 leading-relaxed">
            {children}
          </div>
        </main>
      </div>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pure Patches · Ilmmion Technologies GmbH
      </footer>
    </div>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-display text-2xl mt-12 mb-3 text-foreground">{children}</h2>;
}
export function P({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}
