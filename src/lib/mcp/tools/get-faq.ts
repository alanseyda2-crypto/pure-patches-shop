import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_faq",
  title: "FAQ abrufen",
  description:
    "Liefert die häufigsten Fragen und Antworten zu Pure Patches (Tragedauer, Wirkung, Make-up, Hautverträglichkeit, Lieferung).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const faq = [
      {
        question: "Wie lange muss ich ein Patch tragen?",
        answer:
          "Mindestens 6, optimal 8–12 Stunden. Sobald sich das Patch weißlich verfärbt, ist es Zeit zum Wechseln.",
      },
      {
        question: "Funktioniert es bei jedem Pickel?",
        answer:
          "Am besten bei entzündeten Pickeln mit sichtbarer Eiterspitze. Bei tiefliegenden Mitessern ist die Wirkung geringer.",
      },
      {
        question: "Kann ich Make-up darüber tragen?",
        answer:
          "Ja. Die Patches sind ultradünn und unsichtbar — Concealer und Foundation lassen sich problemlos auftragen.",
      },
      {
        question: "Sind sie für empfindliche Haut geeignet?",
        answer:
          "Absolut. Hydrokolloid ist hautneutral, vegan und enthält keine reizenden Wirkstoffe.",
      },
      {
        question: "Wie schnell ist die Lieferung?",
        answer:
          "Versand innerhalb 24 h aus Deutschland. Lieferzeit 1–3 Werktage.",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify({ faq }, null, 2) }],
      structuredContent: { faq },
    };
  },
});
