<script setup lang="ts"></script>
<template>
  <section
    class="relative flex items-center justify-center bg-fixed bg-center bg-cover bg-passport lg:p-10 bg-opacity-20"
    style="background-attachment: fixed"
  >
    <div
      class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 p-6 lg:shadow-2xl lg:max-w-screen-lg w-full"
    >
      <div
        class="flex flex-col items-center justify-center gap-6 p-6 border-4 border-gray-600 border-dotted"
      >
        <div class="p-3 mb-10 text-center lg:p-0">
          <h1
            class="mb-6 text-6xl drop-shadow text-[#000080] font-cursive"
            v-motion
            :initial="{
              opacity: 0,
              scale: 2,
            }"
            :visibleOnce="{
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                scale: {
                  delay: 500,
                  duration: 1000,
                },
                opacity: {
                  duration: 1000,
                  delay: 500,
                },
              },
            }"
          >
            Gift Guide
          </h1>

          <p
            class="text-xl lg:text-2xl font-name"
            v-motion
            :initial="{
              opacity: 0,
              scale: 2,
            }"
            :visibleOnce="{
              opacity: 1,
              scale: 1,
              transition: {
                type: 'spring',
                scale: {
                  delay: 1000,
                  duration: 1000,
                },
                opacity: {
                  duration: 1000,
                  delay: 1000,
                },
              },
            }"
          >
            We are truly grateful for the honor of your presence and your
            heartfelt prayers as we embark on this new chapter of our lives
            together. Your blessings mean the world to us and your warm wishes
            are more than enough. But if your desire to give nonetheless, a
            MONETARY GIFT for our future is one we suggest.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.list-header {
  @apply text-3xl font-bold uppercase font-name;
}

.list-name {
  @apply font-name text-3xl;
}

.list-sponsor-item {
  @apply flex w-full gap-20;
}

.list-sponsor-item-left {
  @apply w-1/2 text-3xl text-right font-name;
}

.list-sponsor-item-right {
  @apply w-1/2 text-3xl text-left font-name;
}
</style>
