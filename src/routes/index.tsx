import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Droplet, Shield, Heart, Check, Star, Moon, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import packFront from "@/assets/pack-front.jpeg";
import packBack from "@/assets/pack-back.jpeg";
import patchesSheet from "@/assets/patches-sheet.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pure Patches – Hydrokolloid Pickel-Patches | Reine Haut. Kein Stress." },
      { name: "description", content: "36 Hydrokolloid Pickel-Patches in 3 Größen. Bekämpfe Pickel sanft über Nacht. Absorbiert, schützt, heilt – ohne Ausdrücken." },
    ],
  }),
});

function Index() {
  const [active, setActive] = useState(0);
  const images = [packFront, patchesSheet, packBack];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/50">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="text-xl font-bold tracking-tight">
            pure<span className="text-primary">patches</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#vorteile" className="hover:text-foreground transition">Vorteile</a>
            <a href="#anwendung" className="hover:text-foreground transition">Anwendung</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <Button asChild size="sm" className="rounded-full">
            <a href="#kaufen">Jetzt kaufen</a>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "radial-gradient(60% 50% at 80% 20%, oklch(0.85 0.15 330 / 0.6), transparent)" }} />
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-28 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-white/60 backdrop-blur border border-white/80 text-foreground">
              <Sparkles className="w-3.5 h-3.5" /> Über Nacht-Wirkung · Dermatologisch entwickelt
            </span>
            <h1 className="mt-5 text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Reine Haut.<br /><span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-primary)" }}>Kein Stress.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/70 max-w-md">
              Hydrokolloid Pickel-Patches, die Unreinheiten sanft & wirksam über Nacht bekämpfen. 36 Patches in 3 Größen — für jeden Pickel der richtige Schutz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8 h-12 shadow-[var(--shadow-elegant)]">
                <a href="#kaufen">Jetzt bestellen — 12,90 €</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 bg-white/60 backdrop-blur">
                <a href="#vorteile">So wirkt es</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-foreground/70">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}</div>
              <span>4,9 / 5 — über 2.300 zufriedene Kund:innen</span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-white/40 backdrop-blur-sm border border-white/60 shadow-[var(--shadow-glow)]">
              <img src={images[active]} alt="Pure Patches Verpackung" className="w-full h-full object-cover" />
            </div>
            <div className="mt-4 flex gap-3 justify-center">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition ${active === i ? "border-primary scale-105" : "border-white/60 opacity-70"}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VORTEILE */}
      <section id="vorteile" className="py-20 md:py-28 max-w-6xl mx-auto px-5">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Drei Wirkungen. Eine Lösung.</h2>
          <p className="mt-4 text-muted-foreground">Hydrokolloid-Technologie aus der Medizin — für strahlend reine Haut.</p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { icon: Droplet, title: "Absorbiert", text: "Zieht Sekret und Talg gezielt aus dem Pickel — sichtbar weiß gefärbt am Morgen." },
            { icon: Shield, title: "Schützt", text: "Bildet eine unsichtbare Barriere gegen Berührung, Bakterien und Make-up." },
            { icon: Heart, title: "Heilt", text: "Beschleunigt die Regeneration der Haut und beugt Narbenbildung vor." },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-8 rounded-3xl bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "var(--gradient-primary)" }}>
                <Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ANWENDUNG */}
      <section id="anwendung" className="py-20 md:py-28" style={{ background: "var(--gradient-soft)" }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-elegant)]">
            <img src={patchesSheet} alt="Pure Patches Sheet" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">In 3 Schritten zu reiner Haut</h2>
            <ol className="mt-8 space-y-6">
              {[
                ["Reinigen", "Haut gründlich reinigen und Pickel sanft abtrocknen."],
                ["Aufkleben", "Patch in passender Größe direkt auf die betroffene Stelle kleben."],
                ["Entfernen", "Nach max. 8, besser 12 Stunden abnehmen — fertig."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>{i + 1}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{t}</h3>
                    <p className="text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 p-5 rounded-2xl bg-white/70 backdrop-blur border border-border">
              <p className="text-sm"><strong>Tipp:</strong> Wechsel das Patch, sobald es sich weißlich färbt. Spar dir das Ausdrücken — lass deine Haut in Ruhe heilen.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KAUFEN */}
      <section id="kaufen" className="py-20 md:py-28 max-w-6xl mx-auto px-5">
        <div className="rounded-[2rem] overflow-hidden grid md:grid-cols-2 shadow-[var(--shadow-elegant)] border border-border">
          <div className="p-10 md:p-14 flex items-center justify-center" style={{ background: "var(--gradient-hero)" }}>
            <img src={packFront} alt="Pure Patches Pack" className="max-h-[500px] object-contain drop-shadow-2xl" />
          </div>
          <div className="p-10 md:p-14 bg-card">
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">Bestseller</span>
            <h2 className="mt-2 text-4xl font-bold">Pure Patches</h2>
            <p className="mt-2 text-muted-foreground">36 Hydrokolloid-Patches in 3 Größen</p>
            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-5xl font-bold">12,90&nbsp;€</span>
              <span className="text-muted-foreground line-through">16,90 €</span>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "12× 8 mm · 12× 10 mm · 12× 12 mm",
                "Vegan & dermatologisch getestet",
                "Unsichtbar — auch tagsüber tragbar",
                "Versandkostenfrei ab 25 €",
              ].map(t => (
                <li key={t} className="flex gap-2 text-sm"><Check className="w-5 h-5 text-primary shrink-0" />{t}</li>
              ))}
            </ul>
            <Button size="lg" className="mt-8 w-full rounded-full h-12 shadow-[var(--shadow-elegant)]">In den Warenkorb</Button>
            <div className="mt-5 flex justify-around text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><Moon className="w-4 h-4" />Über Nacht</span>
              <span className="flex items-center gap-1.5"><Leaf className="w-4 h-4" />Vegan</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" />CE zertifiziert</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 max-w-3xl mx-auto px-5">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Häufige Fragen</h2>
        <Accordion type="single" collapsible className="mt-10">
          {[
            ["Wie lange muss ich ein Patch tragen?", "Mindestens 6, optimal 8–12 Stunden. Sobald das Patch sich weißlich verfärbt, ist es Zeit zum Wechseln."],
            ["Funktioniert es bei jedem Pickel?", "Pure Patches wirken am besten bei entzündeten Pickeln mit sichtbarer Eiterspitze. Bei tief liegenden Mitessern ist die Wirkung geringer."],
            ["Kann ich Make-up darüber tragen?", "Ja. Die Patches sind ultradünn und unsichtbar — Concealer und Foundation lassen sich problemlos darüber auftragen."],
            ["Sind die Patches für empfindliche Haut geeignet?", "Absolut. Hydrokolloid ist hautneutral, vegan und enthält keine reizenden Wirkstoffe."],
            ["Wie schnell ist die Lieferung?", "Versand innerhalb 24h aus Deutschland. Lieferzeit 1–3 Werktage."],
          ].map(([q, a], i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-5">
        <div className="max-w-4xl mx-auto rounded-[2rem] p-12 md:p-20 text-center text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Sag Tschüss zum Pickel.</h2>
          <p className="mt-5 text-lg opacity-90 max-w-xl mx-auto">Bestelle jetzt deine Pure Patches und wach mit klarerer Haut auf.</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 rounded-full px-10 h-12">
            <a href="#kaufen">Jetzt bestellen</a>
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Pure Patches · Ilmmion Technologies GmbH · Kerpen, Deutschland</p>
      </footer>
    </div>
  );
}
