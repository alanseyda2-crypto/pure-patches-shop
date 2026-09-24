import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_company",
  title: "Firmeninfos & Kontakt abrufen",
  description:
    "Liefert Impressums- und Kontaktdaten des Anbieters Pure Patches (Ilmmion Technologies GmbH).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const company = {
      brand: "Pure Patches",
      legalName: "Ilmmion Technologies GmbH",
      address: {
        street: "Am Gewerbehof 7–9",
        postalCode: "50170",
        city: "Kerpen",
        country: "Deutschland",
      },
      email: "info@purepatches.de",
      website: "https://purepatches.de",
      imprintUrl: "https://purepatches.de/impressum",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(company, null, 2) }],
      structuredContent: { company },
    };
  },
});
