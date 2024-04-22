<script setup lang="ts"></script>
<template>
  <div class="relative">
    <CoverSection />
    <DanRineCoverSection2 />
    <CountdownSection2 />
    <WeddingDetailsSection2 />
    <WeddingEntourageSection2 />
    <AttireSection2 />
    <GiftSection2 />
    <FAQs2 />
  </div>
</template>
<style scoped>
.bg-img {
  background-image: url(https://deiartistri-lounge.github.io/dan-katherine-wedding/bg-blue-glitter.webp);
}

#div_background > div {
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  right: 0px;
  bottom: 0px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  display: inline-block;

  background-image: url(https://deiartistri-lounge.github.io/dan-katherine-wedding/bg-blue-glitter.webp);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

#div_background {
  display: inline-block;
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 100%;
  right: 0%;
  bottom: 0%;
  z-index: -1;
  background-color: #a0b4c8;
}
</style>
