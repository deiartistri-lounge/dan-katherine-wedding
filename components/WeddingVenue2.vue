<script setup lang="ts"></script>
<template>
  <section
    class="relative flex flex-col items-center justify-center bg-fixed bg-center bg-cover lg:p-10 bg-passport"
  >
    <div
      class="bg-primary-50 backdrop-blur-[2px] bg-opacity-20 py-20 p-6 lg:shadow-2xl lg:max-w-screen-lg w-full"
    >
      <div
        class="flex flex-col items-center justify-center gap-6 border-4 border-gray-600 border-dotted drop-shadow lg:p-6"
      >
        <h1
          class="lg:mb-6 mt-6 text-6xl text-center drop-shadow text-[#000080] font-cursive"
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
          Ceremony & Reception
        </h1>
        <div class="flex flex-col items-center justify-center gap-3">
          <img
            src="/venue.jpg"
            class="lg:w-[600px] w-[calc(100%-10px)] lg:object-cover shadow-2xl border-8 border-primary-900"
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
          />
          <div
            class="!text-[1.72rem] text-center text-[#000080] leading-6 passport-data"
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
            <div>Don Leopoldo Sison Convention Center,</div>
            <div>Alaminos City, Pangasinan</div>
          </div>
        </div>
        <div
          class="flex gap-3 -mt-3 border-8 shadow-2xl border-primary-900 lg:mt-0"
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3832.248530592461!2d119.97567087627608!3d16.156128884535992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393ddaf7b0e7885%3A0x4aa7bea8882cd1cb!2sDon%20Leopoldo%20Sison%20Convention%20Centre!5e0!3m2!1sen!2sph!4v1712649440367!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen="false"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="lg:w-[600px] w-full h-[250px] lg:h-[600px]"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
