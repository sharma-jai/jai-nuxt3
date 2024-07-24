<script setup>
const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  name: "Web Developer Portfolio | Jai Sharma",
  author: {
    "@type": "Person",
    "@id": "#jai",
  },
  url: "https://www.eazypau.com/",
  description:
    "Personal Portfolio Website. Hi, I am Jai Sharma. I'm a Front-End Web Developer based in Jaipur,Rajasthan,India. Currently focused on developing website using Nuxt, Vue and React.",
  keywords:
    "Web Developer, Front End Developer, Frontend Developer, Junior Web Developer, Software Developer, Software Engineer, Senior Software Engineer, Jai Sharma, Jaipur, India",
};
const personJson = {
  "@context": "https://schema.org/",
  "@type": "Person",
  "@id": "#jai",
  name: "Jai Sharma",
  email: "jai.sharma9782@gmail.com",
  url: "https://www.eazypau.com/",
};
useHead({
  script: [
    {
      children: JSON.stringify(jsonLd),
      type: "application/ld+json",
    },
    {
      children: JSON.stringify(personJson),
      type: "application/ld+json",
    },
  ],
});
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="main">
    <Header />
  </NuxtLayout>
</template>
