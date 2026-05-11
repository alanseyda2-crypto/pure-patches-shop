import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2 } from "@/components/LegalLayout";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB — Pure Patches" },
      { name: "description", content: "Allgemeine Geschäftsbedingungen der Ilmmion Technologies GmbH." },
    ],
  }),
  component: () => (
    <LegalLayout title="Allgemeine Geschäftsbedingungen" updated="Mai 2026">
      <H2>§ 1 Geltungsbereich</H2>
      <p>
        Diese AGB gelten für alle Bestellungen, die Verbraucher und Unternehmer über unseren Online-Shop unter www.purepatches.de bei der Ilmmion Technologies GmbH („Anbieter") tätigen.
      </p>

      <H2>§ 2 Vertragspartner, Vertragsschluss</H2>
      <p>
        Der Kaufvertrag kommt zustande mit der Ilmmion Technologies GmbH. Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot, sondern eine Aufforderung zur Bestellung dar. Mit Absenden der Bestellung über den Button „Kaufen" geben Sie ein verbindliches Angebot ab. Die Annahme erfolgt durch Versand einer Auftragsbestätigung per E-Mail.
      </p>

      <H2>§ 3 Preise und Versandkosten</H2>
      <p>
        Die im Shop angegebenen Preise enthalten die gesetzliche Umsatzsteuer und sonstige Preisbestandteile. Versandkosten werden vor Abgabe der Bestellung gesondert ausgewiesen. Ab einem Bestellwert von 15 € erfolgt der Versand innerhalb Deutschlands kostenfrei.
      </p>

      <H2>§ 4 Lieferung</H2>
      <p>
        Die Lieferung erfolgt innerhalb von 1–3 Werktagen nach Zahlungseingang. Lieferungen ins Ausland können abweichende Lieferzeiten haben.
      </p>

      <H2>§ 5 Zahlung</H2>
      <p>
        Sie können die Zahlung per Kreditkarte, PayPal, Klarna, Apple Pay oder Sofortüberweisung vornehmen. Wir behalten uns vor, einzelne Zahlungsarten auszuschließen.
      </p>

      <H2>§ 6 Eigentumsvorbehalt</H2>
      <p>Die Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>

      <H2>§ 7 Widerrufsrecht</H2>
      <p>
        Verbrauchern steht ein Widerrufsrecht nach Maßgabe unserer{" "}
        <a className="underline" href="/widerruf">Widerrufsbelehrung</a> zu.
      </p>

      <H2>§ 8 Mängelhaftung</H2>
      <p>Es gelten die gesetzlichen Mängelhaftungsrechte.</p>

      <H2>§ 9 Anwendbares Recht, Gerichtsstand</H2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei Verbrauchern gilt diese Rechtswahl nur, soweit hierdurch der durch zwingende Bestimmungen des Rechts des Staates des gewöhnlichen Aufenthaltes des Verbrauchers gewährte Schutz nicht entzogen wird.
      </p>
    </LegalLayout>
  ),
});
