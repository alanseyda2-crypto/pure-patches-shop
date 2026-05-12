import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2 } from "@/components/LegalLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum — Pure Patches" },
      { name: "description", content: "Anbieterkennzeichnung gemäß § 5 TMG für Pure Patches." },
    ],
  }),
  component: () => (
    <LegalLayout title="Impressum" updated="Mai 2026">
      <H2>Anbieter</H2>
      <p>
        Ilmmion Technologies GmbH<br />
        Am Gewerbehof 7–9<br />
        50170 Kerpen, Deutschland
      </p>

      <H2>Kontakt</H2>
      <p>
        Telefon: +49 (0) 22 73 / 000 000<br />
        E-Mail: info@purepatches.de<br />
        Web: www.purepatches.de
      </p>

      <H2>Vertretungsberechtigt</H2>
      <p>Geschäftsführung: [Name der Geschäftsführung]</p>

      <H2>Registereintrag</H2>
      <p>
        Eintragung im Handelsregister<br />
        Registergericht: Amtsgericht Köln<br />
        Registernummer: HRB 000000
      </p>

      <H2>Umsatzsteuer-ID</H2>
      <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: DE000000000</p>

      <H2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</H2>
      <p>[Name], Anschrift wie oben.</p>

      <H2>EU-Streitschlichtung</H2>
      <p>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <a className="underline" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr</a>.
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <H2>Haftung für Inhalte</H2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
      </p>
    </LegalLayout>
  ),
});
