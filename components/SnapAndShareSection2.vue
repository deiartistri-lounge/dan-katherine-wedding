<script setup lang="ts"></script>
<template>
  <section
    class="relative flex items-center justify-center bg-fixed bg-center bg-cover parallax bg-passport lg:p-10 bg-opacity-20"
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
            Snap and Share
          </h1>

          <p
            class="text-[1.15rem] lg:text-2xl font-name whitespace-break-spaces"
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
            After our UNPLUGGED Ceremony, help us capture and share our precious
            moments using our official WEDDING HASHTAG
          </p>
          <p
            class="my-3 text-[1.3rem] lg:text-3xl font-passport"
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
                  delay: 1200,
                  duration: 1000,
                },
                opacity: {
                  duration: 1000,
                  delay: 1200,
                },
              },
            }"
          >
            <strong>#DANeverEndingLovewithKATH</strong>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* Fixed background for tablet and mobile */
@media all and (max-width: 1024px) {
  .parallax:after {
    content: "";
    width: 100%;
    height: 100%;
    background-position: inherit;
    background-image: inherit;
    background-size: inherit;
    background-attachment: inherit;
    background-repeat: inherit;
    position: fixed;
    top: 0;
    z-index: -1;
  }
}

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
