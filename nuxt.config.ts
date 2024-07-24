import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Web Developer | Jai Sharma",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, viewport-fit=cover",
        },
        {
          name: "description",
          content:
            "Personal Portfolio Website. Hi, I am Jai Sharma. I'm a Front-End Web Developer based in Jaipur, Rajasthan.",
        },
        { name: "format-detection", content: "telephone=no" },
        { property: "author", content: "Jai Sharma" },
        {
          name: "keywords",
          content:
            "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Jai Sharma",
        },
        // social meta tags
        {
          property: "og:site_name",
          content: "Web Developer | Jai Sharma",
        },
        {
          property: "og:site",
          content: "https://jaisharma.vercel.app",
        },
        {
          property: "og:title",
          content: "Web Developer | Jai Sharma",
        },
        {
          property: "og:description",
          content:
            "Personal Portfolio Website. Hi, I am Jai Sharma. I'm a Front-End Web Developer based Jaipur, Rajasthan",
        },
        // sharing thumbmail img
        {
          property: "og:image",
          content: "https://jaisharma.vercel.appfavicon-bw.svg", ///favicon-wb.png
        },
        // google site verification
      ],
      link: [{ rel: "icon", href: "/favicon-bw.svg" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.scss",
  },
  build: {
    transpile: ["gsap", "@headlessui/vue", "@heroicons/vue"],
  },
  runtimeConfig: {
    public: {
      NUXT_GTM_ID: process.env.NUXT_GTM_ID,
    },
  },
});
