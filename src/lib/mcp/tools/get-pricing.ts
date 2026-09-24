import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_pricing",
  title: "Preise & Bundles abrufen",
  description:
    "Liefert die aktuellen Preise und Bundle-Angebote für Pure Patches (1, 3 und 6 Packs).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const pricing = {
      currency: "EUR",
      bundles: [
        {
          packs: 1,
          label: "1 Pack",
          price: 5.0,
          pricePerPack: 5.0,
          note: "Probieren",
        },
        {
          packs: 3,
          label: "3 Packs",
          price: 10.0,
          pricePerPack: 3.33,
          savingsVsSinglePackPercent: 33,
          note: "Beliebt — spare 33%",
          popular: true,
        },
        {
          packs: 6,
          label: "6 Packs",
          price: 15.0,
          pricePerPack: 2.5,
          savingsVsSinglePackPercent: 50,
          note: "Bester Preis — spare 50%",
        },
      ],
      shipping: "Versandkostenfrei in Deutschland",
      website: "https://purepatches.de",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(pricing, null, 2) }],
      structuredContent: { pricing },
    };
  },
});
