import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://maharashtra-ac-service-and-repair-two.vercel.app",
  trailingSlash: "always",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Manrope",
      cssVariable: "--font-manrope",
      styles: ["normal"],
      weights: ["400 800"],
      fallbacks: ["system-ui", "sans-serif"]
    }
  ]
});
