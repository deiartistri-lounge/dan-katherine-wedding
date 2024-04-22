<script setup lang="ts">
import { mdiChevronDown } from "@mdi/js";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
</script>
<template>
  <section
    class="relative flex items-center justify-center bg-center bg-cover lg:bg-fixed bg-passport lg:px-10 bg-opacity-20"
  >
    <div
      class="flex flex-col items-center justify-center w-full p-6 lg:max-w-screen-lg"
    >
      <div class="mb-10 text-center lg:p-0">
        <h1
          class="font-black text-center text-[#000080] text-5xl lg:text-7xl font-cursive"
        >
          Frequently Asked Questions
        </h1>

        <div class="flex flex-col w-full gap-3 mt-6 lg:max-w-xl rounded-2xl">
          <!-- Is R.S.V.P required? -->
          <Disclosure v-slot="{ open }">
            <div class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 w-full">
              <DisclosureButton
                class="flex items-center text-left justify-between w-full px-4 py-2 text-primary-50 bg-[#000080] transition duration-200 hover:bg-opacity-85 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
              >
                <div class="flex items-center gap-1">
                  <span class="font-semibold lg:text-2xl font-passport"
                    >Is R.S.V.P required?</span
                  >
                </div>
                <BaseIcon
                  :path="mdiChevronDown"
                  :size="24"
                  :width="6"
                  :height="6"
                  :class="open ? 'rotate-180 transform' : ''"
                  class="text-primary-50"
                />
              </DisclosureButton>
              <div v-auto-animate class="w-full">
                <DisclosurePanel class="p-6 lg:text-2xl font-passport">
                  <p>
                    YES, please! Confirming your attendance will help us include
                    you in our guest list.
                  </p>
                  <p>
                    Please let us know
                    <strong>on or before May 31, 2024</strong>.
                  </p>
                </DisclosurePanel>
              </div>
            </div>
          </Disclosure>

          <!-- May I invite a "PLUS 1" to the event? -->
          <Disclosure v-slot="{ open }">
            <div class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 w-full">
              <DisclosureButton
                class="flex items-center text-left justify-between w-full px-4 py-2 text-primary-50 bg-[#000080] transition duration-200 hover:bg-opacity-85 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
              >
                <div class="flex items-center gap-1">
                  <span class="font-semibold lg:text-2xl font-passport">
                    May I invite a "PLUS 1" to the event?</span
                  >
                </div>
                <BaseIcon
                  :path="mdiChevronDown"
                  :size="24"
                  :width="6"
                  :height="6"
                  :class="open ? 'rotate-180 transform' : ''"
                  class="text-primary-50"
                />
              </DisclosureButton>
              <div v-auto-animate class="w-full">
                <DisclosurePanel class="p-6 lg:text-2xl font-passport">
                  As much as we love to accommodate all our friends and family,
                  we only have a limited number of seats due to venue capacity
                  restrictions. We have a strict guest list and we might not
                  have any extra seats for your companion. Please understand
                  that this event is strictly by invitation only. Names that are
                  not found on the guest list we have provided to our
                  Coordinator will not be allowed to enter.</DisclosurePanel
                >
              </div>
            </div>
          </Disclosure>

          <!-- What if RSVPed but could not go? -->
          <Disclosure
            v-slot="{ open }"
            as="div"
            class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 w-full"
          >
            <DisclosureButton
              class="flex items-center text-left justify-between w-full px-4 py-2 text-primary-50 bg-[#000080] transition duration-200 hover:bg-opacity-85 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
            >
              <div class="flex items-center gap-1">
                <span class="font-semibold lg:text-2xl font-passport">
                  What if RSVPed but could not go?</span
                >
              </div>
              <BaseIcon
                :path="mdiChevronDown"
                :size="24"
                :width="6"
                :height="6"
                :class="open ? 'rotate-180 transform' : ''"
                class="text-primary-50"
              />
            </DisclosureButton>
            <div v-auto-animate class="w-full">
              <DisclosurePanel class="p-6 lg:text-2xl font-passport">
                We would love to have you at our wedding, but we understand that
                there are some things that are out of our control. However,
                please let us know as soon as possible so we can reallocate your
                seats. Give us a toast from afar.</DisclosurePanel
              >
            </div>
          </Disclosure>

          <!-- What if I did not RSVP. Can I still go? -->
          <Disclosure
            v-slot="{ open }"
            as="div"
            class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 w-full"
          >
            <DisclosureButton
              class="flex items-center text-left justify-between w-full px-4 py-2 text-primary-50 bg-[#000080] transition duration-200 hover:bg-opacity-85 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
            >
              <div class="flex items-center gap-1">
                <span class="font-semibold lg:text-2xl font-passport">
                  What if I did not RSVP. Can I still go?</span
                >
              </div>
              <BaseIcon
                :path="mdiChevronDown"
                :size="24"
                :width="6"
                :height="6"
                :class="open ? 'rotate-180 transform' : ''"
                class="text-primary-50"
              />
            </DisclosureButton>
            <div v-auto-animate class="w-full">
              <DisclosurePanel class="p-6 lg:text-2xl font-passport">
                Please check with us first. Unfortunately, we have a strict
                guest list. Kindly inform us if your schedule cleared up, so we
                can try to accommodate you. Should some seats free up, then
                we'll let you know as soon as we can.
                <strong
                  >Please do not go unannounced, we might not have any available
                  seat for you.</strong
                ></DisclosurePanel
              >
            </div>
          </Disclosure>

          <!-- Can I sit anywhere during the reception? -->
          <Disclosure
            v-slot="{ open }"
            as="div"
            class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 w-full"
          >
            <DisclosureButton
              class="flex items-center text-left justify-between w-full px-4 py-2 text-primary-50 bg-[#000080] transition duration-200 hover:bg-opacity-85 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
            >
              <div class="flex items-center gap-1">
                <span class="font-semibold lg:text-2xl font-passport">
                  Can I sit anywhere during the reception?</span
                >
              </div>
              <BaseIcon
                :path="mdiChevronDown"
                :size="24"
                :width="6"
                :height="6"
                :class="open ? 'rotate-180 transform' : ''"
                class="text-primary-50"
              />
            </DisclosureButton>
            <div v-auto-animate class="w-full">
              <DisclosurePanel class="p-6 lg:text-2xl font-passport">
                We planned a seating arrangement for our guests' convenience and
                group familiarity. Our coordinators will assist you in finding
                your designated seats. Feel free to ask them for assistance and
                they will gladly help you.</DisclosurePanel
              >
            </div>
          </Disclosure>

          <!-- Am I allowed to take pictures or videos during the church ceremony? -->
          <Disclosure
            v-slot="{ open }"
            as="div"
            class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 w-full"
          >
            <DisclosureButton
              class="flex items-center text-left justify-between w-full px-4 py-2 text-primary-50 bg-[#000080] transition duration-200 hover:bg-opacity-85 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
            >
              <div class="flex items-center gap-1">
                <span class="font-semibold lg:text-2xl font-passport">
                  Am I allowed to take pictures or videos during the church
                  ceremony?</span
                >
              </div>
              <BaseIcon
                :path="mdiChevronDown"
                :size="24"
                :width="6"
                :height="6"
                :class="open ? 'rotate-180 transform' : ''"
                class="text-primary-50"
              />
            </DisclosureButton>
            <div v-auto-animate class="w-full">
              <DisclosurePanel class="p-6 lg:text-2xl font-passport">
                We hired professional photographers and videographers to capture
                our special moments so that you can sit back, relax and enjoy it
                with us. Please keep your phones down and in silent mode during
                the processional and ceremony. Our beautiful images will be
                available after the wedding.

                <br />

                <strong
                  >Also, please keep the aisle clear during the bridal
                  entrance.</strong
                >

                <br />

                Don't worry, once we're pronounced husband and wife, you can
                take all the photos you want after the ceremony and the entire
                reception, but please make way for the team that will cover our
                wedding.
              </DisclosurePanel>
            </div>
          </Disclosure>

          <!-- How can I help the couple have a great time during their wedding? -->
          <Disclosure
            v-slot="{ open }"
            as="div"
            class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 w-full"
          >
            <DisclosureButton
              class="flex items-center text-left justify-between w-full px-4 py-2 text-primary-50 bg-[#000080] transition duration-200 hover:bg-opacity-85 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500/75"
            >
              <div class="flex items-center gap-1">
                <span class="font-semibold lg:text-2xl font-passport">
                  How can I help the couple have a great time during their
                  wedding?</span
                >
              </div>
              <BaseIcon
                :path="mdiChevronDown"
                :size="24"
                :width="6"
                :height="6"
                :class="open ? 'rotate-180 transform' : ''"
                class="text-primary-50"
              />
            </DisclosureButton>
            <div v-auto-animate class="w-full">
              <DisclosurePanel class="p-6 lg:text-2xl font-passport">
                <ul class="text-justify list-disc">
                  <li>
                    Pray with us that the weather will be in favor and for the
                    continuous blessings of our Lord as we enter the new chapter
                    of our lives as husband and wife.
                  </li>
                  <li>RSVP as early as your schedule is cleared.</li>
                  <li>Dress appropriate and follow our wedding motif.</li>
                  <li>Be on time.</li>
                  <li>Follow seating arrangement in the reception.</li>
                  <li>Stay until the end of the program.</li>
                  <li>Join the activities and enjoy!</li>
                </ul>
              </DisclosurePanel>
            </div>
          </Disclosure>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.list-header {
  @apply text-3xl font-bold uppercase font-passport;
}

.list-name {
  @apply font-passport text-3xl;
}

.list-sponsor-item {
  @apply flex w-full gap-20;
}

.list-sponsor-item-left {
  @apply w-1/2 text-3xl text-right font-passport;
}

.list-sponsor-item-right {
  @apply w-1/2 text-3xl text-left font-passport;
}
</style>
