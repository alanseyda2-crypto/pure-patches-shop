import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import packFront from "@/assets/pack-front.png";
import patchesSheet from "@/assets/patches-sheet.png";
import lifestyleSkin from "@/assets/lifestyle-skin.png";
import lifestyleGlow from "@/assets/lifestyle-glow.png";
import handPatch from "@/assets/hand-patch.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pure Patches — Hydrokolloid für reine Haut" },
      { name: "description", content: "36 Hydrokolloid Pickel-Patches in 3 Größen. Sanft, vegan, dermatologisch entwickelt. Made in Germany." },
    ],
  }),
});

const marqueeItems = ["Hydrokolloid", "Vegan", "Dermatologisch entwickelt", "Made in Germany", "Über Nacht-Wirkung", "Unsichtbar", "CE zertifiziert"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[var(--lilac)] selection:text-[var(--ink)]">
      <AnnouncementBar />
      <Nav />
      <Hero />
      <Marquee />
      <Manifesto />
      <Science />
      <Ritual />
      <Product />
      <Reviews />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}

function AnnouncementBar() {
  return (
    <a
      href="#produkt"
      className="block bg-[var(--ink)] text-background py-2 px-4 text-center text-[10px] sm:text-xs uppercase tracking-[0.14em] sm:tracking-[0.18em] hover:bg-[var(--primary)] transition-colors"
    >
      <span className="inline sm:hidden">Versandkostenfrei DE · 36 Patches · 3 Größen</span>
      <span className="hidden sm:inline">
        Versandkostenfrei in Deutschland <span className="text-[var(--lilac)] mx-2">·</span> 36 Patches pro Pack <span className="text-[var(--lilac)] mx-2">·</span> 3 Größen
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-black text-[20px] sm:text-[25px] tracking-[-0.02em] leading-none">
          pure<span className="text-[var(--primary)]">patches</span>
        </a>
        <a
          href="#produkt"
          aria-label="Zum Warenkorb"
          className="relative inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-border hover:bg-[var(--lilac-soft)] hover:border-[var(--primary)] transition"
        >
          <ShoppingBag className="w-5 h-5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-10 sm:pt-12 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 grid lg:grid-cols-12 gap-10 items-end relative">
        {/* Left text */}
        <div className="lg:col-span-7 relative z-10">
          <div className="flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-muted-foreground">
            <span className="w-6 sm:w-8 h-px bg-foreground/40" /> Edition Nº 01 — Hydrokolloid
          </div>
          <h1 className="mt-6 sm:mt-8 font-display font-light text-[18vw] sm:text-[14vw] lg:text-[10rem] leading-[0.85] tracking-[-0.04em]">
            Reine<br />
            <span className="italic font-normal text-[var(--primary)]">Haut,</span><br />
            <span className="text-muted-foreground">kein Stress.</span>
          </h1>
          <p className="mt-6 sm:mt-10 max-w-md text-sm sm:text-base lg:text-lg text-foreground/70 leading-relaxed">
            Über Nacht. Ohne Drücken. Pure Patches sind unsichtbare Hydrokolloid-Punkte, die Unreinheiten aufnehmen und deine Haut in Ruhe heilen lassen.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button asChild size="lg" className="rounded-none h-12 sm:h-14 px-6 sm:px-8 bg-foreground text-background hover:bg-[var(--primary)] font-medium tracking-wide text-sm sm:text-base">
              <a href="#produkt">Jetzt bestellen — ab 5,00 €</a>
            </Button>
            <a href="#wissenschaft" className="text-sm border-b border-foreground/30 pb-0.5 hover:border-foreground">So wirkt es ↓</a>
          </div>
        </div>

        {/* Right image collage */}
        <div className="lg:col-span-5 relative h-[320px] sm:h-[420px] lg:h-[640px]">
          <div className="absolute right-0 top-0 w-[75%] sm:w-[78%] h-[80%] overflow-hidden bg-[var(--lilac-soft)] animate-float" style={{ ["--r" as any]: "2deg" }}>
            <img src={packFront} alt="Pure Patches Verpackung" className="w-full h-full object-cover" />
          </div>
          <div className="absolute left-0 bottom-0 w-[55%] h-[45%] overflow-hidden bg-[var(--cream)] animate-float" style={{ animationDelay: "1s", ["--r" as any]: "-3deg" }}>
            <img src={patchesSheet} alt="Patches" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -left-2 top-4 font-display italic text-sm text-muted-foreground rotate-[-8deg] hidden lg:block">
            ↗ 36 Patches · 3 Größen
          </div>
        </div>

        {/* corner serif numeral */}
        <div className="absolute right-4 sm:right-6 lg:right-10 top-10 sm:top-12 font-display text-xs sm:text-sm tracking-widest text-muted-foreground rotate-90 origin-right hidden sm:block">
          DE / 2026
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="border-y border-border bg-[var(--lilac-soft)] py-4 sm:py-5 overflow-hidden">
      <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap font-display italic text-lg sm:text-2xl text-foreground/80">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-8 sm:gap-12">
            {t} <span className="text-[var(--primary)]">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Manifesto() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-28 lg:py-40 grid lg:grid-cols-12 gap-8 lg:gap-10">
      <div className="lg:col-span-3">
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground sticky top-24">— Manifest</div>
      </div>
      <div className="lg:col-span-9">
        <p className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.1] tracking-[-0.02em]">
          Wir glauben, Haut sollte <em className="text-[var(--primary)]">in Ruhe gelassen</em> werden, um zu heilen.<br />
          <span className="text-muted-foreground">Kein Drücken. Kein Aggressives. Nur ein winziger Punkt, der die Arbeit übernimmt — während du schläfst.</span>
        </p>
      </div>
    </section>
  );
}

function Science() {
  const items = [
    { n: "01", title: "Absorbiert", text: "Hydrokolloid zieht Sekret und Talg gezielt aus der Pore — sichtbar weiß am Morgen." },
    { n: "02", title: "Schützt", text: "Eine unsichtbare Barriere gegen Berührung, Bakterien und Make-up." },
    { n: "03", title: "Heilt", text: "Feuchtes Mikroklima beschleunigt die Regeneration und beugt Narben vor." },
  ];
  return (
    <section id="wissenschaft" className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-32">
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-16">
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl tracking-[-0.03em] leading-none">
            Drei Wirkungen.<br /><em className="text-[var(--primary)]">Ein</em> Patch.
          </h2>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground hidden md:block">— Die Wissenschaft</div>
        </div>
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border-y border-border">
          {items.map((it) => (
            <div key={it.n} className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl sm:text-5xl text-[var(--primary)]">{it.n}</span>
                <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border" />
              </div>
              <h3 className="mt-8 sm:mt-12 font-display text-2xl sm:text-3xl">{it.title}</h3>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ritual() {
  return (
    <section id="ritual" className="bg-[var(--ink)] text-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-32 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img src={lifestyleSkin} alt="Hydrokolloid-Patch Stillleben" className="w-full h-full object-cover" loading="lazy" width={1024} height={1280} />
          <div className="absolute bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 flex justify-between text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-background/90">
            <span>8 · 10 · 12 mm</span>
            <span>36 pcs</span>
          </div>
        </div>
        <div>
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-background/60">— Das Ritual</div>
          <h2 className="mt-4 sm:mt-6 font-display text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-none">
            In drei Schritten<br /><em className="text-[var(--lilac)]">zum Glow.</em>
          </h2>
          <ol className="mt-8 sm:mt-12 space-y-6 sm:space-y-8">
            {[
              ["Reinigen", "Gesicht waschen, betroffene Stelle sanft trocken tupfen."],
              ["Aufkleben", "Patch in passender Größe direkt auf den Pickel platzieren."],
              ["Aufwachen", "Nach 8–12 Stunden abnehmen. Patch wird weiß = es hat gewirkt."],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-5 sm:gap-8 border-b border-background/15 pb-6 sm:pb-8">
                <span className="font-display text-2xl sm:text-3xl text-background/40 w-7 sm:w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl">{t}</h3>
                  <p className="text-sm sm:text-base text-background/70 mt-1">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Product() {
  const tiers = [
    { packs: 1, price: 5.0, label: "1 Pack", note: "Probieren", per: 5.0 },
    { packs: 3, price: 10.0, label: "3 Packs", note: "Beliebt · spare 33%", per: 10 / 3, popular: true },
    { packs: 6, price: 15.0, label: "6 Packs", note: "Bester Preis · spare 50%", per: 15 / 6 },
  ];
  const [tierIdx, setTierIdx] = useState(1);
  const tier = tiers[tierIdx];
  return (
    <section id="produkt" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
        <div className="relative">
          <div className="aspect-[4/5] bg-[var(--lilac-soft)] overflow-hidden">
            <img src={packFront} alt="Pure Patches" className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-2 sm:mt-3">
            <img src={patchesSheet} alt="36 Patches in 3 Größen" className="aspect-square object-cover bg-[var(--cream)]" />
            <img src={handPatch} alt="Patch auf der Haut" className="aspect-square object-cover bg-[var(--cream)]" />
          </div>
        </div>

        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">Edition Nº 01</div>
          <h2 className="mt-3 sm:mt-4 font-display text-5xl sm:text-6xl md:text-7xl tracking-[-0.03em] leading-none">
            Pure<br /><em className="text-[var(--primary)]">Patches.</em>
          </h2>
          <p className="mt-5 sm:mt-6 text-sm sm:text-base text-foreground/70 max-w-md leading-relaxed">
            36 Hydrokolloid-Patches pro Pack in drei Größen. Wähle dein Bundle — je mehr, desto günstiger.
          </p>

          <div className="mt-8 sm:mt-10 space-y-2.5 sm:space-y-3">
            {tiers.map((t, i) => {
              const active = i === tierIdx;
              return (
                <button
                  key={t.packs}
                  onClick={() => setTierIdx(i)}
                  className={`w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3.5 sm:py-4 border text-left transition-colors ${active ? "border-foreground bg-[var(--lilac-soft)]" : "border-border hover:border-foreground/40"}`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                    <span className={`w-4 h-4 rounded-full border shrink-0 ${active ? "border-foreground bg-foreground" : "border-foreground/40"}`} />
                    <div className="min-w-0">
                      <div className="font-display text-base sm:text-lg flex items-center gap-2 flex-wrap">
                        {t.label}
                        {t.popular && <span className="text-[10px] uppercase tracking-widest bg-foreground text-background px-2 py-0.5">Top</span>}
                      </div>
                      <div className="text-[11px] sm:text-xs text-muted-foreground">{t.note}</div>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display text-lg sm:text-xl">{t.price.toFixed(2).replace(".", ",")} €</div>
                    <div className="text-[11px] sm:text-xs text-muted-foreground">{t.per.toFixed(2).replace(".", ",")} € / Pack</div>
                  </div>
                </button>
              );
            })}
          </div>

          <ul className="mt-6 sm:mt-8 space-y-2.5 sm:space-y-3 text-sm">
            {[
              "12× 8 mm · 12× 10 mm · 12× 12 mm pro Pack",
              "Vegan & dermatologisch getestet",
              "Unsichtbar — auch tagsüber tragbar",
              "Versandkostenfrei in Deutschland",
            ].map(t => (
              <li key={t} className="flex gap-3 items-center"><Check className="w-4 h-4 text-[var(--primary)] shrink-0" />{t}</li>
            ))}
          </ul>

          <div className="mt-8 sm:mt-10">
            <Button size="lg" className="w-full rounded-none h-12 sm:h-14 bg-foreground text-background hover:bg-[var(--primary)] font-medium tracking-wide text-sm sm:text-base">
              In den Warenkorb · {tier.price.toFixed(2).replace(".", ",")} €
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

type Review = {
  name: string;
  initials: string;
  hue: number;
  age: string;
  skin: string;
  rating: number;
  date: string; // ISO
  helpful: number;
  title: string;
  text: string;
  verified: boolean;
};

const REVIEWS: Review[] = [
  { name: "Lena Krüger", initials: "LK", hue: 305, age: "24", skin: "Mischhaut", rating: 5, date: "2026-04-22", helpful: 142, title: "Über Nacht weggezaubert", text: "Habe vor dem Schlafen einen Patch draufgemacht — morgens war der Pickel komplett weg. Absolut beeindruckend, das wird mein neuer Standard.", verified: true },
  { name: "Max Reiter", initials: "MR", hue: 200, age: "29", skin: "Sensibel", rating: 5, date: "2026-04-15", helpful: 98, title: "Endlich keine Narben mehr", text: "Habe früher immer gedrückt — und Narben gehabt. Mit den Patches ist das vorbei. Trage sie auch tagsüber, sieht wirklich niemand.", verified: true },
  { name: "Sophia Bauer", initials: "SB", hue: 330, age: "31", skin: "Fettig", rating: 5, date: "2026-04-10", helpful: 87, title: "Die 3 Größen sind perfekt", text: "Der 12mm rettet mich bei den großen Entzündungen am Kinn. Kleine Patches für die Stirn. Durchdacht und wirklich effektiv.", verified: true },
  { name: "Jonas Weber", initials: "JW", hue: 270, age: "22", skin: "Akne-neigend", rating: 4, date: "2026-03-28", helpful: 64, title: "Funktioniert sehr gut", text: "Bei oberflächlichen Pickeln top. Bei tiefliegenden brauchts manchmal 2 Nächte. Trotzdem klare Empfehlung.", verified: true },
  { name: "Aisha Demir", initials: "AD", hue: 250, age: "27", skin: "Normal", rating: 5, date: "2026-03-19", helpful: 121, title: "Mein Lifesaver vor Events", text: "Hochzeit am Wochenende, Pickel am Donnerstag. Patch drauf — am Samstag perfekte Haut. Hat mich gerettet.", verified: true },
  { name: "Felix Hartmann", initials: "FH", hue: 220, age: "35", skin: "Trocken", rating: 4, date: "2026-03-05", helpful: 41, title: "Solide & dezent", text: "Ultradünn, fällt selbst aus der Nähe kaum auf. Kleben hält die ganze Nacht. Preis-Leistung sehr fair.", verified: true },
];

const DISTRIBUTION = [
  { stars: 5, count: 2104 },
  { stars: 4, count: 187 },
  { stars: 3, count: 32 },
  { stars: 2, count: 11 },
  { stars: 1, count: 7 },
];

function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div className="inline-flex gap-0.5" aria-label={`${value} von 5 Sternen`}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill={i <= value ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className={i <= value ? "text-[var(--primary)]" : "text-foreground/20"}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function Avatar({ initials, hue }: { initials: string; hue: number }) {
  return (
    <div
      className="w-11 h-11 rounded-full flex items-center justify-center font-display text-sm text-white shrink-0 ring-1 ring-foreground/10"
      style={{ background: `linear-gradient(135deg, oklch(0.7 0.13 ${hue}), oklch(0.5 0.16 ${hue + 30}))` }}
    >
      {initials}
    </div>
  );
}

function Reviews() {
  const [sort, setSort] = useState<"helpful" | "recent" | "highest" | "lowest">("helpful");
  const [filter, setFilter] = useState<number | null>(null);

  const total = DISTRIBUTION.reduce((s, d) => s + d.count, 0);
  const avg = (DISTRIBUTION.reduce((s, d) => s + d.stars * d.count, 0) / total).toFixed(1);

  const filtered = REVIEWS.filter(r => filter === null || r.rating === filter);
  const sorted = [...filtered].sort((a, b) => {
    if (sort === "helpful") return b.helpful - a.helpful;
    if (sort === "recent") return b.date.localeCompare(a.date);
    if (sort === "highest") return b.rating - a.rating;
    return a.rating - b.rating;
  });

  const sortLabels: Record<typeof sort, string> = {
    helpful: "Hilfreichste",
    recent: "Neueste",
    highest: "Höchste Bewertung",
    lowest: "Niedrigste Bewertung",
  };

  return (
    <section className="border-t border-border bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-32">
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">— Kundenstimmen</div>
            <h2 className="mt-3 sm:mt-4 font-display text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-none">
              <em className="text-[var(--primary)]">2.341</em><br />reine Gesichter.
            </h2>
          </div>
          <div className="hidden md:block text-xs uppercase tracking-[0.2em] text-muted-foreground">Verifiziert via Trusted Shops</div>
        </div>

        {/* Summary card */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 bg-background border border-border p-6 sm:p-8 lg:p-10">
          <div className="lg:col-span-3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border pb-6 sm:pb-8 lg:pb-0 lg:pr-8">
            <div className="font-display text-6xl sm:text-7xl leading-none">{avg.replace(".", ",")}</div>
            <div className="mt-3"><Stars value={Math.round(parseFloat(avg))} size={18} /></div>
            <div className="mt-3 text-sm text-muted-foreground">basierend auf {total.toLocaleString("de-DE")} Bewertungen</div>
          </div>
          <div className="lg:col-span-5 space-y-2">
            {DISTRIBUTION.map(d => {
              const pct = (d.count / total) * 100;
              const active = filter === d.stars;
              return (
                <button
                  key={d.stars}
                  onClick={() => setFilter(active ? null : d.stars)}
                  className={`w-full grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-4 items-center text-sm group ${active ? "opacity-100" : "opacity-90 hover:opacity-100"}`}
                >
                  <span className="font-display tabular-nums w-8 sm:w-10 text-left">{d.stars} ★</span>
                  <span className="h-2 bg-secondary relative overflow-hidden">
                    <span className="absolute inset-y-0 left-0 transition-all" style={{ width: `${pct}%`, background: active ? "var(--primary)" : "var(--lilac)" }} />
                  </span>
                  <span className="tabular-nums text-muted-foreground w-12 sm:w-14 text-right">{d.count.toLocaleString("de-DE")}</span>
                </button>
              );
            })}
            {filter !== null && (
              <button onClick={() => setFilter(null)} className="text-xs text-[var(--primary)] underline mt-2">Filter zurücksetzen</button>
            )}
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center gap-3 lg:border-l border-border lg:pl-8 border-t lg:border-t-0 pt-6 lg:pt-0">
            <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Würden wieder kaufen</span><span className="font-display text-lg">96 %</span></div>
            <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Sichtbares Ergebnis</span><span className="font-display text-lg">über Nacht</span></div>
            <div className="flex items-center justify-between text-sm"><span className="text-muted-foreground">Hautverträglichkeit</span><span className="font-display text-lg">4,9 / 5</span></div>
          </div>
        </div>

        {/* Sort bar */}
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-border pb-4">
          <div className="text-sm text-muted-foreground">{sorted.length} {sorted.length === 1 ? "Bewertung" : "Bewertungen"}{filter !== null && ` mit ${filter} ★`}</div>
          <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
            <span className="text-muted-foreground hidden sm:inline">Sortieren:</span>
            <div className="flex border border-border w-full sm:w-auto overflow-x-auto">
              {(Object.keys(sortLabels) as (keyof typeof sortLabels)[]).map(k => (
                <button
                  key={k}
                  onClick={() => setSort(k)}
                  className={`px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs whitespace-nowrap transition ${sort === k ? "bg-foreground text-background" : "hover:bg-secondary"}`}
                >
                  {sortLabels[k]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Review list */}
        <div className="mt-2 grid md:grid-cols-2 gap-px bg-border">
          {sorted.map(r => (
            <article key={r.name} className="bg-background p-6 sm:p-8 flex flex-col">
              <header className="flex items-start gap-3 sm:gap-4">
                <Avatar initials={r.initials} hue={r.hue} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-sm sm:text-base">{r.name}</span>
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-[var(--primary)] bg-[var(--lilac-soft)] px-1.5 py-0.5">
                        <Check className="w-3 h-3" /> Verifiziert
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">{r.age} J. · {r.skin} · {new Date(r.date).toLocaleDateString("de-DE", { day: "2-digit", month: "short", year: "numeric" })}</div>
                </div>
                <Stars value={r.rating} />
              </header>
              <h4 className="mt-4 sm:mt-5 font-display text-lg sm:text-xl leading-tight">„{r.title}"</h4>
              <p className="mt-2 sm:mt-3 text-foreground/75 leading-relaxed text-sm flex-1">{r.text}</p>
              <footer className="mt-5 sm:mt-6 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span>{r.helpful} fanden das hilfreich</span>
                <button className="hover:text-foreground transition">Hilfreich ↑</button>
              </footer>
            </article>
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">Keine Bewertungen mit diesem Filter.</div>
        )}
      </div>
    </section>
  );
}


function Faq() {
  const items = [
    ["Wie lange muss ich ein Patch tragen?", "Mindestens 6, optimal 8–12 Stunden. Sobald sich das Patch weißlich verfärbt, ist es Zeit zum Wechseln."],
    ["Funktioniert es bei jedem Pickel?", "Am besten bei entzündeten Pickeln mit sichtbarer Eiterspitze. Bei tiefliegenden Mitessern ist die Wirkung geringer."],
    ["Kann ich Make-up darüber tragen?", "Ja. Die Patches sind ultradünn und unsichtbar — Concealer und Foundation lassen sich problemlos auftragen."],
    ["Sind sie für empfindliche Haut geeignet?", "Absolut. Hydrokolloid ist hautneutral, vegan und enthält keine reizenden Wirkstoffe."],
    ["Wie schnell ist die Lieferung?", "Versand innerhalb 24 h aus Deutschland. Lieferzeit 1–3 Werktage."],
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-20 sm:py-24 lg:py-32 grid lg:grid-cols-12 gap-8 lg:gap-10">
      <div className="lg:col-span-4">
        <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">— FAQ</div>
        <h2 className="mt-4 sm:mt-6 font-display text-4xl sm:text-5xl md:text-6xl tracking-[-0.03em] leading-none">
          Fragen?<br /><em className="text-[var(--primary)]">Antworten.</em>
        </h2>
      </div>
      <div className="lg:col-span-8">
        <div className="border-t border-border">
          {items.map(([q, a], i) => (
            <div key={i} className="border-b border-border">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-5 sm:py-6 flex items-center justify-between text-left gap-4 sm:gap-6">
                <span className="font-display text-lg sm:text-xl md:text-2xl">{q}</span>
                <span className="shrink-0">{open === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}</span>
              </button>
              {open === i && <p className="pb-6 sm:pb-8 pr-4 sm:pr-12 text-sm sm:text-base text-muted-foreground leading-relaxed">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="px-6 lg:px-10 pb-10">
      <div className="max-w-[1400px] mx-auto bg-[var(--ink)] text-background relative overflow-hidden">
        <img src={lifestyleGlow} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)] via-[var(--ink)]/85 to-transparent" />
        <div className="px-8 lg:px-20 py-24 lg:py-32 text-center relative">
          <div className="text-xs uppercase tracking-[0.2em] text-background/60">— Edition Nº 01</div>
          <h2 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl tracking-[-0.04em] leading-[0.9]">
            Sag tschüss<br /><em className="text-[var(--lilac)]">zum Pickel.</em>
          </h2>
          <Button asChild size="lg" className="mt-12 rounded-none h-14 px-10 bg-background text-foreground hover:bg-[var(--lilac)] font-medium tracking-wide">
            <a href="#produkt">Jetzt bestellen <ArrowUpRight className="w-4 h-4 ml-2" /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const legal = [
    { to: "/impressum", label: "Impressum" },
    { to: "/agb", label: "AGB" },
    { to: "/datenschutz", label: "Datenschutz" },
    { to: "/widerruf", label: "Widerruf" },
    { to: "/versand", label: "Versand & Zahlung" },
  ] as const;
  return (
    <footer className="border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div className="md:col-span-2">
          <div className="font-display font-black text-[25px] tracking-[-0.02em]">
            pure<span className="text-[var(--primary)]">patches</span>
          </div>
          <div className="mt-6 text-muted-foreground space-y-1">
            <div>Ilmmion Technologies GmbH</div>
            <div>Am Gewerbehof 7–9, 50170 Kerpen</div>
            <div>info@purepatches.de</div>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Shop</div>
          <ul className="space-y-2">
            <li><a href="/#produkt" className="text-foreground/80 hover:text-[var(--primary)] transition">Shop</a></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Rechtliches</div>
          <ul className="space-y-2">
            {legal.map(l => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/80 hover:text-[var(--primary)] transition">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Pure Patches — Alle Rechte vorbehalten
      </div>
    </footer>
  );
}
