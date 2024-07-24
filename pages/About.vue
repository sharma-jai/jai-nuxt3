<script setup>
//const
const { hobbies, timeline } = useConstants();
useHead({
  meta: [
    {
      property: "og:site",
      content: "https://www.eazypau.com/about",
    },
  ],
});
</script>
<template>
  <NuxtLayout name="default">
    <div class="about-section">
      <Profile />
      <div class="empty-left-content"></div>
      <div class="right-content">
        <section>
          <h2>About</h2>
          <p class="mt-2">
            Welcome! I am a Senior Software Engineer with a solid foundation in
            Computer Science engineering, having graduated from JK Lakshmipat
            University, Jaipur. Presently, I am employed as a Senior Software Engineer
            at
            <a
              class="font-bold text-red-600 dark:text-red-300 hover:underline"
              href="https://www.zensar.com"
              target="_blank"
              >Zensar Technologies</a
            >.
          </p>
          <p class="mt-2">
            My professional journey is driven by a fervent enthusiasm for
            exploring new technologies, crafting responsive websites, and
            meticulously documenting complex features. I thrive on the
            challenges inherent in software development, constantly seeking
            opportunities to innovate and refine my skills.
          </p>
          <p class="mt-2">
            Here are a few technologies I've been working with recently:
          </p>

          <div class="flex gap-10 mt-2 pl-3">
            <ul>
              <li>JavaScript</li>
              <li>Vue</li>
              <li>Nuxt</li>
              <li>React</li>
            </ul>
            <ul>
              <li>Bootstrap</li>
              <li>Gsap</li>
              <li>TailwindCSS</li>
              <li>Azure Cloud</li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Career Timeline</h2>
          <CardsCareer v-for="career in timeline" :career-details="career" />
        </section>

        <HobbySection :hobbies="hobbies" />
      </div>
    </div>
  </NuxtLayout>
</template>
