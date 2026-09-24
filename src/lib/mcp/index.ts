import { defineMcp } from "@lovable.dev/mcp-js";
import getProduct from "./tools/get-product";
import getPricing from "./tools/get-pricing";
import getFaq from "./tools/get-faq";
import getShipping from "./tools/get-shipping";
import getCompany from "./tools/get-company";

export default defineMcp({
  name: "pure-patches-shop",
  title: "Pure Patches Shop",
  version: "0.1.0",
  instructions:
    "Öffentlicher Shop-Katalog von Pure Patches (Hydrokolloid Pickel-Patches, 36 Stück in 3 Größen). Nutze `get_product` für Produktinfos und Anwendung, `get_pricing` für Preise und Bundles, `get_faq` für häufige Fragen, `get_shipping` für Versand, Zahlung und Widerruf sowie `get_company` für Impressum und Kontakt.",
  tools: [getProduct, getPricing, getFaq, getShipping, getCompany],
});
