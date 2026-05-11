import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2 } from "@/components/LegalLayout";

export const Route = createFileRoute("/widerruf")({
  head: () => ({
    meta: [
      { title: "Widerrufsbelehrung — Pure Patches" },
      { name: "description", content: "Widerrufsrecht und Muster-Widerrufsformular für Verbraucher." },
    ],
  }),
  component: () => (
    <LegalLayout title="Widerrufsbelehrung" updated="Mai 2026">
      <H2>Widerrufsrecht</H2>
      <p>
        Sie haben das Recht, binnen 14 Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt 14 Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
      </p>
      <p>
        Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Ilmmion Technologies GmbH, Am Gewerbehof 7–9, 50170 Kerpen, hello@purepatches.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren.
      </p>

      <H2>Folgen des Widerrufs</H2>
      <p>
        Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.
      </p>
      <p>
        Sie tragen die unmittelbaren Kosten der Rücksendung der Waren. Sie müssen für einen etwaigen Wertverlust der Waren nur aufkommen, wenn dieser Wertverlust auf einen zur Prüfung der Beschaffenheit, Eigenschaften und Funktionsweise der Waren nicht notwendigen Umgang mit ihnen zurückzuführen ist.
      </p>

      <H2>Ausschluss des Widerrufsrechts</H2>
      <p>
        Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung versiegelter Waren, die aus Gründen des Gesundheitsschutzes oder der Hygiene nicht zur Rückgabe geeignet sind, wenn ihre Versiegelung nach der Lieferung entfernt wurde.
      </p>

      <H2>Muster-Widerrufsformular</H2>
      <p>
        An: Ilmmion Technologies GmbH, Am Gewerbehof 7–9, 50170 Kerpen, hello@purepatches.de.<br />
        Hiermit widerrufe(n) ich/wir den von mir/uns abgeschlossenen Vertrag über den Kauf der folgenden Waren:<br />
        Bestellt am ___ / erhalten am ___<br />
        Name des/der Verbraucher(s), Anschrift, Datum, Unterschrift (nur bei Mitteilung auf Papier).
      </p>
    </LegalLayout>
  ),
});
