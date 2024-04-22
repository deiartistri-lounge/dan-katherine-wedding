<script setup lang="ts"></script>

<template>
  <div
    class="relative flex flex-col-reverse items-center justify-center min-h-screen lg:flex-row bg-primary-800"
  >
    <img
      src="/danrine-3.jpeg"
      class="object-contain w-full lg:w-1/2 lg:h-screen lg:object-cover lg:object-center"
    />
    <div
      class="flex flex-col items-center justify-center bg-cover lg:p-10 lg:w-1/2 bg-passport lg:h-screen"
    >
      <div
        class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 lg:shadow-2xl lg:max-w-screen-lg w-full"
      >
        <div
          class="flex flex-col items-center justify-center gap-6 p-6 border-4 border-gray-600 border-dotted"
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
        >
          <h1
            class="lg:px-5 lg:py-5 text-[1.75rem] font-bold text-center uppercase lg:text-5xl font-passport"
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
            Passport to Marriage
          </h1>
          <div
            class="flex flex-col items-center justify-center w-full gap-3 px-5 py-5 text-center border-gray-600 border-dotted lg:gap-0 lg:text-left lg:items-start lg:justify-between lg:flex-row border-y-4"
          >
            <!-- Type -->
            <div>
              <div class="passport-label">Type</div>
              <div
                class="passport-data"
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
                      delay: 1500,
                    },
                  },
                }"
              >
                Wedding
              </div>
            </div>

            <!-- Country -->
            <div>
              <div class="passport-label">Country</div>
              <div
                class="passport-data"
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
                      delay: 2000,
                    },
                  },
                }"
              >
                PHL
              </div>
            </div>

            <!-- Passport No. -->
            <div>
              <div class="passport-label">Passport No.</div>
              <div
                class="passport-data"
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
                      delay: 2500,
                    },
                  },
                }"
              >
                062224
              </div>
            </div>
          </div>

          <!-- Groom's Name -->
          <div
            class="flex flex-col justify-center w-full gap-5 py-5 text-center lg:px-5 lg:text-left"
          >
            <div>
              <div class="passport-label">Groom's Name</div>
              <div
                class="flex flex-col passport-data lg:flex-row lg:gap-3"
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
                      delay: 3000,
                    },
                  },
                }"
              >
                <div>Dan Joseph</div>
                <div>Lasala Salaya</div>
              </div>
            </div>

            <div>
              <div class="passport-label">Bride's Name</div>
              <div
                class="flex flex-col passport-data lg:flex-row lg:gap-3"
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
                      delay: 3500,
                    },
                  },
                }"
              >
                <div>Katherine</div>
                <div>Reynaldo Anuri</div>
              </div>
            </div>

            <div class="flex justify-between lg:gap-3">
              <div class="lg:w-1/2">
                <div class="passport-label">Date</div>
                <div
                  class="passport-data"
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
                        delay: 4000,
                      },
                    },
                  }"
                >
                  22 June 2024
                </div>
              </div>

              <div class="lg:w-1/2">
                <div class="passport-label">Time</div>
                <div
                  class="passport-data"
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
                        delay: 4000,
                      },
                    },
                  }"
                >
                  1:00 PM
                </div>
              </div>
            </div>

            <div>
              <div class="passport-label">Ceremony & Reception</div>
              <div
                class="text-[1.5rem] uppercase font-name2 leading-6"
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
                      delay: 4300,
                    },
                  },
                }"
              >
                Don Leopoldo Sison Convention Center, Alaminos City, Pangasinan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
