<script setup lang="ts"></script>
<template>
  <section
    id="attire"
    class="relative flex items-center justify-center min-h-screen lg:bg-fixed bg-center bg-cover lg:p-10 bg-passport bg-opacity-20"
  >
    <div
      class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 p-6 lg:shadow-2xl lg:max-w-screen-lg w-full"
    >
      <div
        class="flex flex-col items-center justify-center w-full gap-6 p-6 border-4 border-gray-600 border-dotted"
      >
        <div class="z-20 mb-10 text-center drop-shadow">
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
                  delay: 300,
                },
              },
            }"
          >
            Attire Guide
          </h1>
          <div class="my-3">
            <div
              class="lg:!text-4xl font-bold passport-data !font-passport"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0,
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
              Principal Sponsors
            </div>
            <div
              v-motion
              :initial="{
                opacity: 0,
                scale: 0,
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
              class="relative flex flex-col items-center justify-center"
            >
              <div class="my-6 text-xl uppercase lg:text-3xl font-name">
                - Formal -
              </div>
              <img
                src="/attire-1.png"
                class="lg:absolute relative z-10 -top-10 lg:-top-20 lg:-left-32 lg:h-[450px] h-[300px] lg:mb-6"
                v-motion
                :initial="{
                  opacity: 0,
                  scale: 0,
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
              />
              <div class="mb-6 -mt-10 text-center lg:mt-0">
                <div
                  class="!text-xl lg:text-3xl !font-passport flex lg:flex-row flex-col lg:gap-2 lg:items-center"
                >
                  <div
                    class="!text-xl font-bold lg:!text-3xl passport-data !font-passport"
                  >
                    Ninong:
                  </div>
                  <div>Black Coat with Tie</div>
                </div>
                <div
                  class="!text-xl lg:text-3xl !font-passport flex lg:flex-row flex-col lg:gap-2 lg:items-center"
                >
                  <div
                    class="!text-xl font-bold lg:!text-3xl passport-data !font-passport"
                  >
                    Ninang:
                  </div>
                  <div>Sky/Light Blue Long Gown</div>
                </div>
              </div>
            </div>
          </div>
          <div class="my-3">
            <div
              class="lg:!text-4xl font-bold passport-data !font-passport"
              v-motion
              :initial="{
                opacity: 0,
                scale: 0,
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
              Guests
            </div>
            <div
              v-motion
              :initial="{
                opacity: 0,
                scale: 0,
              }"
              :visibleOnce="{
                opacity: 1,
                scale: 1,
                transition: {
                  type: 'spring',
                  scale: {
                    delay: 1800,
                    duration: 1000,
                  },
                  opacity: {
                    duration: 1000,
                    delay: 1800,
                  },
                },
              }"
              class="relative flex flex-col items-center justify-center"
            >
              <div class="mt-3 text-xl uppercase lg:my-6 lg:text-3xl font-name">
                - Semi-Formal or Formal -
              </div>

              <img
                src="/attire-2.png"
                class="lg:absolute relative z-10 -top-3 lg:-top-10 lg:-bottom-52 lg:-right-40 lg:h-[450px] h-[300px] lg:mb-6"
                v-motion
                :initial="{
                  opacity: 0,
                  scale: 0,
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
              />

              <div class="mb-6 -mt-5 text-center lg:mt-0">
                <div
                  class="!text-xl lg:text-3xl !font-passport flex lg:flex-row flex-col lg:gap-2 lg:items-center"
                >
                  <div
                    class="!text-xl font-bold lg:!text-3xl passport-data !font-passport"
                  >
                    Gentlemen:
                  </div>
                  <div>Polo Long/Short Sleeves, Slacks Pants</div>
                </div>
                <div
                  class="!text-xl lg:text-3xl !font-passport flex lg:flex-row flex-col lg:gap-2 lg:items-center"
                >
                  <div
                    class="!text-xl font-bold lg:!text-3xl passport-data !font-passport"
                  >
                    Ladies:
                  </div>
                  <div>Dress, or Blouse and Pants</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Colors -->
          <div
            class="flex items-center justify-center gap-3 p-3 -mt-6 lg:mt-0 lg:gap-6"
          >
            <div
              class="lg:w-[100px] shadow lg:h-[100px] h-[50px] w-[50px] rounded-full bg-[#c2ddcc]"
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
                  delay: 3000,
                },
              }"
            ></div>
            <div
              class="lg:w-[100px] shadow lg:h-[100px] h-[50px] w-[50px] rounded-full bg-[#ddb196]"
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
                  delay: 3300,
                },
              }"
            ></div>
            <div
              class="lg:w-[100px] shadow lg:h-[100px] h-[50px] w-[50px] rounded-full bg-[#f1dac8]"
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
                  delay: 3600,
                },
              }"
            ></div>
            <div
              class="lg:w-[100px] shadow lg:h-[100px] h-[50px] w-[50px] rounded-full bg-[#c8c8c8]"
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
                  delay: 3900,
                },
              }"
            ></div>
            <div
              class="lg:w-[100px] shadow lg:h-[100px] h-[50px] w-[50px] rounded-full bg-[#e68574]"
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
                  delay: 4200,
                },
              }"
            ></div>
          </div>
          <div
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
                  delay: 3000,
                  duration: 1000,
                },
                opacity: {
                  duration: 1000,
                  delay: 3000,
                },
              },
            }"
          >
            <div
              class="-mt-2 text-xl font-bold uppercase lg:mt-0 lg:my-6 lg:text-3xl font-passport"
            >
              Earth Tones
            </div>
          </div>
          <div
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
                  delay: 3200,
                  duration: 1000,
                },
                opacity: {
                  duration: 1000,
                  delay: 3200,
                },
              },
            }"
          >
            <div class="mt-8 text-xl font-name lg:mt-0">
              Strictly NO wearing of white dress, t-shirts, polo-shirts, jeans
              and slippers
            </div>
          </div>
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
