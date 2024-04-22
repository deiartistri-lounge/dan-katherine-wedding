<script setup lang="ts">
import { Howl, Howler } from "howler";
import { useIntersectionObserver } from "@vueuse/core";

const sound = new Howl({
  src: ["/dan-katherine-wedding/bg-music.mp3"],
  volume: 0.5,
});

const target = ref(null);
const targetIsVisible = ref(false);
const isPlaying = ref(false);

// const { stop } = useIntersectionObserver(
//   target,
//   ([{ isIntersecting }], observerElement) => {
//     targetIsVisible.value = isIntersecting;
//     isPlaying.value = true;
//   }
// );

// watch(
//   () => isPlaying.value,
//   (newVal, oldVal) => {
//     if (newVal) {
//       sound.play();
//     }
//   }
// );

// Clear listener after first call.
sound.once("load", function () {
  sound.play();
});

// Fires when the sound finishes playing.
sound.on("end", function () {
  isPlaying.value = false;
  console.log("Finished!");
});
</script>
<template>
  <div class="w-[100vw] h-[100vh] top-0 bottom-0 right-0 left-0">
    <section
      id="danrine-cover"
      ref="target"
      class="relative flex min-h-screen p-3 bg-center bg-cover lg:bg-fixed bg-danrine1"
    >
      <div
        class="flex flex-col items-center justify-center w-full min-h-screen text-center text-primary-50"
      >
        <div
          class="flex flex-col items-center justify-center gap-6 mt-6 lg:p-6 lg:mt-0"
        >
          <div
            class="text-2xl text-white lg:text-6xl drop-shadow font-cursive"
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
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div>Welcome aboard!</div>
            <div>
              Prepare for an adventure of a lifetime as we embark on the journey
              of love together.
            </div>
          </div>
          <div
            class="text-2xl text-white lg:text-6xl drop-shadow font-cursive"
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
                stiffness: '100',
                delay: 800,
              },
            }"
          >
            Get ready to stamp your passport and join us as we,
          </div>
          <div class="h-[50px] lg:h-[200px] p-6"></div>

          <div
            class="flex flex-col mt-2 text-[2.60rem] font-bold lg:gap-3 lg:-mt-10 text-amber-50 drop-shadow lg:text-7xl euphoria-script-regular lg:flex-row"
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
                stiffness: '100',
                delay: 1200,
              },
            }"
          >
            Dan Joseph & Katherine
          </div>

          <div
            class="-mt-6 text-2xl lg:text-6xl drop-shadow font-cursive lg:mt-0"
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
                stiffness: '100',
                delay: 1500,
              },
            }"
          >
            exchange vows and celebrate this beautiful voyage on
          </div>
        </div>

        <div
          class="flex flex-col items-center justify-center w-full text-2xl uppercase lg:mt-6 lg:text-3xl drop-shadow font-name2"
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
              stiffness: '100',
              delay: 2000,
            },
          }"
        >
          <div class="lg:pl-0">June</div>
          <div class="flex items-center justify-between w-[400px] lg:w-[450px]">
            <div class="w-1/2 p-2 border-amber-400 border-y-2">Saturday</div>
            <div class="p-2 mb-1 text-6xl font-bold text-amber-500">22</div>
            <div class="w-1/2 p-2 border-amber-400 border-y-2">1:00PM</div>
          </div>
          <div class="lg:pl-0">2024</div>
        </div>

        <div
          class="flex flex-col gap-2 mt-2 lg:mt-6"
          v-motion
          :initial="{
            opacity: 0,
            x: -100,
          }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              stiffness: '100',
              delay: 2300,
            },
          }"
        >
          <div
            class="text-3xl lg:text-4xl font-cursive drop-shadow text-amber-500"
          >
            Ceremony & Reception
          </div>
          <div class="uppercase text-md lg:text-2xl drop-shadow font-name2">
            Don Leopoldo Sison Convention Center, Alaminos City, Pangasinan
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.euphoria-script-regular {
  font-family: "Euphoria Script", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
