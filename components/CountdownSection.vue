<script setup lang="ts">
import { DateTime } from "luxon";

const countdownDate = DateTime.fromObject({
  year: 2024,
  month: 6,
  day: 22,
  hour: 13,
});

const currentTime = ref(DateTime.local());

const timeRemaining = computed(() => {
  const diff = countdownDate
    .diff(currentTime.value, ["days", "hours", "minutes", "seconds"])
    .toObject();
  return {
    days: Math.floor(diff.days),
    hours: Math.floor(diff.hours),
    minutes: Math.floor(diff.minutes),
    seconds: Math.floor(diff.seconds),
  };
});

const updateCountdown = () => {
  currentTime.value = DateTime.local();
};

onMounted(() => {
  const timer = setInterval(() => {
    updateCountdown();
  }, 1000);

  // Clear interval on component unmount
  return () => clearInterval(timer);
});
</script>
<template>
  <section
    class="flex flex-col items-center justify-center gap-6 p-6 py-10 lg:p-10 h-[calc(50vh)] lg:h-[600px] drop-shadow bg-fixed bg-cover bg-center bg-primary-900 bg-glitter"
    style="background-attachment: fixed"
  >
    <div
      class="text-2xl text-white uppercase font-name"
      v-motion
      :initial="{
        opacity: 0,
        y: -10,
      }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: '100',
          delay: 1000,
        },
      }"
    >
      Countdown to
    </div>
    <div
      class="text-5xl text-center lg:text-6xl font-cursive text-amber-500 drop-shadow"
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
          delay: 1300,
        },
      }"
    >
      Our Wedding Day
    </div>
    <div
      class="flex items-center justify-between gap-1 p-3 text-white lg:gap-3"
    >
      <div
        class="flex flex-col items-center shadow justify-center lg:w-[100px] w-[80px] p-2 bg-white backdrop-blur bg-opacity-20 rounded-lg"
        v-motion
        :initial="{
          opacity: 0,
          y: -100,
        }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: '100',
            delay: 1600,
          },
        }"
      >
        <div class="font-bold lg:text-2xl font-roboto">
          {{ timeRemaining.days }}
        </div>
        <div class="text-lg font-name">Days</div>
      </div>
      <div
        class="flex flex-col items-center shadow justify-center lg:w-[100px] w-[90px] p-2 bg-white backdrop-blur bg-opacity-20 rounded-lg"
        v-motion
        :initial="{
          opacity: 0,
          y: -100,
        }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: '100',
            delay: 1900,
          },
        }"
      >
        <div class="font-bold lg:text-2xl font-roboto">
          {{ timeRemaining.hours }}
        </div>
        <div class="text-lg font-name">Hours</div>
      </div>
      <div
        class="flex flex-col items-center shadow justify-center lg:w-[100px] w-[90px] p-2 bg-white backdrop-blur bg-opacity-20 rounded-lg"
        v-motion
        :initial="{
          opacity: 0,
          y: -100,
        }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: '100',
            delay: 2200,
          },
        }"
      >
        <div class="font-bold lg:text-2xl font-roboto">
          {{ timeRemaining.minutes }}
        </div>
        <div class="text-lg font-name">Minutes</div>
      </div>
      <div
        class="flex flex-col items-center shadow justify-center lg:w-[100px] w-[90px] p-2 bg-white backdrop-blur bg-opacity-20 rounded-lg"
        v-motion
        :initial="{
          opacity: 0,
          y: -100,
        }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: '100',
            delay: 2500,
          },
        }"
      >
        <div class="font-bold lg:text-2xl font-roboto">
          {{ timeRemaining.seconds }}
        </div>
        <div class="text-lg font-name">Seconds</div>
      </div>
    </div>
  </section>
</template>
