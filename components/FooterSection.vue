<script setup lang="ts">
import { mdiChevronDoubleDown } from "@mdi/js";

const props = defineProps({
  bride: String,
  groom: String,
  weddingDate: String,
});

const scrollToTarget = () => {
  const targetElement = document.getElementById("danrine-cover");
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section
    class="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden lg:bg-fixed bg-center bg-cover bg-primary-900 bg-glitter"
  >
    <div class="absolute flex items-center justify-center w-full h-full gap-3">
      <img
        src="/butterfly-transparent-bg.gif"
        loop="false"
        class="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] object-contain"
        v-motion
        :initial="{
          opacity: 0,
        }"
        :visibleOnce="{
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 500,
            opacity: {
              delay: 2000,
            },
          },
        }"
      />

      <img
        src="/butterfly-transparent-bg.gif"
        class="!transform -rotate-180 -scale-y-100 w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] object-contain"
        v-motion
        :initial="{
          opacity: 0,
        }"
        :visibleOnce="{
          opacity: 1,
          transition: {
            type: 'spring',
            delay: 500,
            opacity: {
              delay: 2000,
            },
          },
        }"
      />
    </div>
    <img
      src="/danrine-white-bg.svg"
      class="svg-img lg:object-contain object-cover mt-32 object-center w-full h-[350px] lg:h-[calc(100vh-20px)] z-10 relative lg:mt-20"
      v-motion
      :initial="{
        opacity: 0,
        scale: 0,
      }"
      :visibleOnce="{
        opacity: 1,
        scale: 0.9,
        transition: {
          type: 'spring',
          delay: 1000,
          scale: {
            duration: 1000,
          },
          opacity: {
            delay: 500,
          },
        },
      }"
    />

    <div
      class="z-20 flex flex-col items-center justify-center w-full gap-3 -mt-16 text-center lg:-mt-60 text-primary-50"
    >
      <div
        class="text-[2.85rem] euphoria-script-regular lg:text-7xl"
        v-motion
        :initial="{
          opacity: 0,
        }"
        :visibleOnce="{
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: '200',
            opacity: {
              delay: 1500,
            },
          },
        }"
      >
        Dan Joseph & Katherine
      </div>
      <div
        class="text-4xl lg:text-5xl font-passport"
        v-motion
        :initial="{
          opacity: 0,
        }"
        :visibleOnce="{
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: '200',
            delay: 4000,
            opacity: {
              delay: 2000,
            },
          },
        }"
      >
        06.22.24
      </div>
      <a
        href="https://www.facebook.com/BlumenPrints"
        target="_blank"
        class="relative flex items-center pb-10 my-6"
      >
        <img
          src="/deiartistri-lounge-logo.png"
          class="w-[60px] h-[60px] drop-shadow"
        />
      </a>
    </div>
  </section>
  <!-- <div
    class="flex flex-col items-center justify-center text-primary-50 bg-primary h-96"
  >
    <h1 class="text-4xl font-semibold">
      {{ groom }}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>heart</title>
        <path
          d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
        />
      </svg>
      {{ bride }}
    </h1>
    <h2 class="text-lg">
      {{ weddingDate }}
    </h2>

  </div> -->
</template>
<style scoped>
.euphoria-script-regular {
  font-family: "Euphoria Script", cursive;
  font-weight: 400;
  font-style: normal;
}

/* img {
  filter: invert(50%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%)
    contrast(50%);
} */

.svg-img {
  filter: invert(100%) brightness(100%);
}
</style>
