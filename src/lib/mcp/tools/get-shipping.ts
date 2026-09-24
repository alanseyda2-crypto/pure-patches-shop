import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_shipping",
  title: "Versand & Zahlung abrufen",
  description:
    "Liefert Versand- und Zahlungsinformationen für Pure Patches (Versandkosten, Lieferzeit, Zahlarten, Widerruf).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const shipping = {
      shippingCost: "Versandkostenfrei in Deutschland — immer, ohne Mindestbestellwert",
      dispatchTime: "Versand binnen 24 Stunden",
      deliveryTime: "1–3 Werktage",
      shippingFrom: "Deutschland",
      returns:
        "Widerrufsrecht: 14 Tage Rückgabe ohne Angabe von Gründen. Details unter https://purepatches.de/widerruf",
      legalPages: {
        agb: "https://purepatches.de/agb",
        datenschutz: "https://purepatches.de/datenschutz",
        widerruf: "https://purepatches.de/widerruf",
        versand: "https://purepatches.de/versand",
      },
      contactEmail: "info@purepatches.de",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(shipping, null, 2) }],
      structuredContent: { shipping },
    };
  },
});
