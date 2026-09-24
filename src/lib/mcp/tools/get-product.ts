import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_product",
  title: "Produktinfos abrufen",
  description:
    "Liefert alle Informationen zum Pure Patches Hydrokolloid-Pickelpatch: Inhalt, Größen, Eigenschaften und Wirkung.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const product = {
      name: "Pure Patches",
      tagline: "Reine Haut. Kein Stress.",
      category: "Hydrokolloid Pickel-Patches (Pimple Patches)",
      edition: "Edition Nº 01",
      patchesPerPack: 36,
      sizes: [
        { diameter_mm: 8, count: 12 },
        { diameter_mm: 10, count: 12 },
        { diameter_mm: 12, count: 12 },
      ],
      howItWorks: [
        "Absorbiert: Hydrokolloid zieht Sekret und Talg gezielt aus der Pore — sichtbar weiß am Morgen.",
        "Schützt: eine unsichtbare Barriere gegen Berührung, Bakterien und Make-up.",
        "Heilt: feuchtes Mikroklima beschleunigt die Regeneration und beugt Narben vor.",
      ],
      application: [
        "Reinigen: Gesicht waschen, betroffene Stelle sanft trocken tupfen.",
        "Aufkleben: Patch in passender Größe direkt auf den Pickel platzieren.",
        "Aufwachen: Nach 8–12 Stunden abnehmen. Patch wird weiß = es hat gewirkt.",
      ],
      properties: [
        "Vegan",
        "Dermatologisch entwickelt und getestet",
        "Unsichtbar — auch tagsüber tragbar (auch unter Make-up)",
        "CE zertifiziert",
        "Made in Germany",
      ],
      wearTime: "Mindestens 6, optimal 8–12 Stunden pro Patch.",
      website: "https://purepatches.de",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(product, null, 2) }],
      structuredContent: { product },
    };
  },
});
