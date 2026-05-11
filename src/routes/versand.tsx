import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2 } from "@/components/LegalLayout";

export const Route = createFileRoute("/versand")({
  head: () => ({
    meta: [
      { title: "Versand & Zahlung — Pure Patches" },
      { name: "description", content: "Informationen zu Versandkosten, Lieferzeiten und Zahlungsarten." },
    ],
  }),
  component: () => (
    <LegalLayout title="Versand & Zahlung" updated="Mai 2026">
      <H2>Versand innerhalb Deutschlands</H2>
      <p>
        Versandkosten: 3,90 € pauschal.<br />
        Versandkostenfrei ab einem Bestellwert von 15 €.<br />
        Lieferzeit: 1–3 Werktage nach Zahlungseingang.
      </p>

      <H2>Versand ins EU-Ausland</H2>
      <p>
        Versandkosten: 6,90 € pauschal. Lieferzeit: 3–7 Werktage. Versand erfolgt mit DHL.
      </p>

      <H2>Zahlungsarten</H2>
      <p>
        Wir akzeptieren Kreditkarte (Visa, Mastercard, American Express), PayPal, Klarna (Rechnung & Ratenkauf), Apple Pay, Google Pay sowie Sofortüberweisung. Sämtliche Zahlungen werden über verschlüsselte Verbindungen abgewickelt.
      </p>

      <H2>Rücksendungen</H2>
      <p>
        Innerhalb von 14 Tagen können Sie unbeschädigte und originalverpackte Ware an uns zurücksenden. Bitte beachten Sie die <a className="underline" href="/widerruf">Widerrufsbelehrung</a>. Die Rücksendekosten trägt der Käufer.
      </p>
    </LegalLayout>
  ),
});
