<template>
  <header class="headerHeight">
    <TransitionGroup name="list" tag="div" class="header-bg">
      <div
        v-for="(rect, idx) in columns"
        :key="idx"
        class="header-rect"
        :style="rect"
        aria-hidden="true"
      ></div>
      <img
        :class="[
          'header-bg-img',
          { 'opacity-100': showBgImg, 'opacity-0': !showBgImg },
        ]"
        src="/red-blue.jpg"
        width="1920"
        height="1280"
        alt="Blue and red fusion background"
      />
    </TransitionGroup>
    <div
      class="content"
      :class="{ 'opacity-100': showContent, 'opacity-0': !showContent }"
    >
      <h1 class="leading-3">
        <span class="text-4xl md:text-5xl font-semibold">{{
          introObj.lineOne
        }}</span>
        <br />
        <span class="text-2xl md:text-3xl font-medium">{{
          introObj.lineTwo
        }}</span>
        <br />
        <a href="/contact" class="header-link text-2xl md:text-3xl text-small">
          {{ introObj.lineThree }}
        </a>
      </h1>
    </div>
  </header>
</template>

<script setup>
const columns = ref([]);
const counter = ref(0);
const numOfColumns = 4;
const width = 2;
const columnSpacing = 20;
const typeSpeed = 50;
const columnSpeed = 100;
const rectangDelay = ref(1300);
const typeWriterDelay = ref(2800);
const contentContainerDelay = ref(2500);
const showBgImg = ref(false);
const showContent = ref(false);
const isMobile = ref(false);
const { enabled } = useTheme();
const { transitionCompletedOnce } = useTransitionTracking();

const i = ref(0);
const j = ref(0);
const introObj = ref({
  lineOne: "",
  lineTwo: "",
  lineThree: "",
});
const intro = [
  "Hey, I’m Jai Sharma 👋",
  "I help startups & small businesses build fast, responsive websites that convert.",
  "Let’s Work Together",
];

// Generate columns with dynamic left positions
const addColumns = () => {
  if (counter.value < numOfColumns) {
    const left = columnSpacing + counter.value * columnSpacing;
    columns.value.push({
      height: "100%",
      width: `${width}%`,
      top: 0,
      left: `${left}%`,
      position: "absolute",
      background: "#fff",
      opacity: 0.2,
    });
    counter.value++;
    setTimeout(addColumns, columnSpeed);
  }
};

// Typewriter effect for intro lines
const typeWriter = () => {
  const currentLine = ["lineOne", "lineTwo", "lineThree"][j.value];
  if (j.value < 3) {
    if (i.value < intro[j.value].length) {
      introObj.value[currentLine] += intro[j.value][i.value];
      i.value++;
      setTimeout(typeWriter, typeSpeed);
    } else {
      if (j.value < 2) i.value = 0;
      j.value++;
      if (j.value < 3) setTimeout(typeWriter, typeSpeed);
    }
  }
};

// Adjust delays based on device and theme
const assignDelayAmount = () => {
  if (window.innerWidth < 500) {
    isMobile.value = true;
    if (enabled.value) {
      contentContainerDelay.value = 800;
      typeWriterDelay.value = 1100;
    } else {
      rectangDelay.value = 0;
      contentContainerDelay.value = 1200;
      typeWriterDelay.value = 1500;
    }
  } else {
    if (enabled.value) {
      rectangDelay.value = 0;
      contentContainerDelay.value = transitionCompletedOnce.value ? 800 : 2100;
      typeWriterDelay.value = transitionCompletedOnce.value ? 1100 : 2400;
    } else {
      rectangDelay.value = transitionCompletedOnce.value ? 0 : 1300;
      contentContainerDelay.value = transitionCompletedOnce.value ? 1200 : 2500;
      typeWriterDelay.value = transitionCompletedOnce.value ? 1500 : 2800;
    }
  }
};

// Reveal background image after columns
const triggerRevealBackground = () => {
  if (counter.value === numOfColumns && !enabled.value) {
    setTimeout(() => {
      showBgImg.value = true;
    }, 200);
  } else if (enabled.value) {
    const delay = transitionCompletedOnce.value
      ? 300
      : isMobile.value
        ? 500
        : 1200;
    setTimeout(() => {
      showBgImg.value = true;
    }, delay);
  }
};

watchEffect(() => {
  triggerRevealBackground();
});

onMounted(() => {
  assignDelayAmount();
  setTimeout(addColumns, rectangDelay.value);
  triggerRevealBackground();
  setTimeout(() => {
    showContent.value = true;
  }, contentContainerDelay.value);
  setTimeout(typeWriter, typeWriterDelay.value);
});
</script>

<style lang="scss" scoped>
.headerHeight {
  height: calc(100vh - 70px);
  position: relative;
  overflow: hidden;
}

.header-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.header-rect {
  position: absolute;
  background: #fff;
  opacity: 0.2;
  transition: all 0.5s ease;
}

.header-bg-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  transition: opacity 0.7s;
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  transition: opacity 0.7s;
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.header-link {
  text-decoration: underline;
  text-underline-offset: 4px; // adds space between text and underline
  text-decoration-thickness: 2px; // optional: makes underline a bit thicker
  transition: color 0.2s;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
