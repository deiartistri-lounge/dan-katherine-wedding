<script setup lang="ts"></script>
<template>
  <div class="flex flex-col">
    <!-- Countdown goes here -->
    <CountdownSection />

    <section ref="target" class="relative flex flex-col min-h-screen p-3">
      <div class="sticky parallax-image1"></div>

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

    <!-- Countdown goes here -->
    <CountdownSection />
  </div>
</template>
<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 0;
}

div.parallax-image* {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  background-position: center;
  -webkit-background-positione: center;
  -moz-background-position: center;
  top: 0;
}

div.parallax-image1 {
  background: url(https://deiartistri-lounge.github.io/dan-katherine-wedding/danrine-1.jpeg)
    center center;
}

.sticky {
  margin-top: -100vh;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, red, blue);
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 0;
}

.euphoria-script-regular {
  font-family: "Euphoria Script", cursive;
  font-weight: 400;
  font-style: normal;
}
</style>
