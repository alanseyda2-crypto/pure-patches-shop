import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2 } from "@/components/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz — Pure Patches" },
      { name: "description", content: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO." },
    ],
  }),
  component: () => (
    <LegalLayout title="Datenschutzerklärung" updated="Mai 2026">
      <H2>1. Verantwortlicher</H2>
      <p>
        Ilmmion Technologies GmbH, Am Gewerbehof 7–9, 50170 Kerpen, Deutschland. E-Mail: hello@purepatches.de.
      </p>

      <H2>2. Erhebung und Speicherung personenbezogener Daten</H2>
      <p>
        Beim Aufrufen unserer Website werden durch den Browser automatisch Informationen an unseren Server gesendet (IP-Adresse, Datum, Uhrzeit, User-Agent). Diese Daten werden zur Sicherstellung eines reibungslosen Betriebs und zur Optimierung des Angebots verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).
      </p>

      <H2>3. Bestellung im Shop</H2>
      <p>
        Bei einer Bestellung erheben wir die zur Vertragsabwicklung notwendigen Daten (Name, Anschrift, E-Mail, Zahlungsdaten). Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <H2>4. Weitergabe an Dritte</H2>
      <p>
        Eine Weitergabe Ihrer Daten erfolgt nur an Versanddienstleister, Zahlungsdienstleister und Steuerberater, soweit dies zur Vertragsabwicklung erforderlich ist.
      </p>

      <H2>5. Cookies</H2>
      <p>
        Wir setzen technisch notwendige Cookies und — nach Einwilligung — Cookies zur Reichweitenmessung ein. Sie können Ihre Einwilligung jederzeit widerrufen.
      </p>

      <H2>6. Ihre Rechte</H2>
      <p>
        Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21 DSGVO). Beschwerden können Sie bei der zuständigen Aufsichtsbehörde einreichen.
      </p>

      <H2>7. Kontakt</H2>
      <p>Für Anfragen zum Datenschutz erreichen Sie uns unter datenschutz@purepatches.de.</p>
    </LegalLayout>
  ),
});
