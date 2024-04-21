<script setup lang="ts"></script>
<template>
  <section
    class="relative flex items-center justify-center min-h-screen p-10 bg-no-repeat bg-cover bg-danrine2 lg:bg-left"
  >
    <div
      class="flex flex-col items-center justify-center p-10 lg:left-0 px-10 lg:absolute bg-primary-50 backdrop-blur-[2px] bg-opacity-20 h-full"
    >
      <h1
        class="font-black text-center text-[#000080] text-5xl lg:text-7xl font-cursive tracking-wider"
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
            delay: 300,
          },
        }"
      >
        R.S.V.P
      </h1>
      <div
        class="flex flex-col my-3 text-2xl text-center lg:flex-row lg:gap-3 font-name drop-shadow"
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
            delay: 300,
          },
        }"
      >
        <div>Please respond on or before</div>
        <div class="font-bold"><strong>May 31, 2024</strong></div>
      </div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScDq-mruEt4wq37ifZ1ogsAySM0VR7CVZNPPKE_WiLGtOwp-A/viewform?embedded=true"
        width="100%"
        height="750"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        class="lg:w-[620px] w-[372px]"
        >Loading…</iframe
      >
    </div>
  </section>
</template>
