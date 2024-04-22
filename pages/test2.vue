<script setup lang="ts"></script>
<template>
  <div class="relative">
    <CoverSection />
    <DanRineCoverSection2 class="parallax" />
    <CountdownSection2 class="parallax" />
    <WeddingDetailsSection2 class="parallax" />
    <WeddingEntourageSection2 class="parallax" />
    <AttireSection2 class="parallax" />
    <GiftSection2 class="parallax" />
    <SnapAndShareSection2 class="parallax" />
    <WeddingVenue2 class="parallax" />
    <FAQs2 class="parallax" />
    <RSVPSection class="parallax" />
    <FooterSection2 class="parallax" />
  </div>
</template>
<style scoped>
.bg-img {
  background-image: url(https://deiartistri-lounge.github.io/dan-katherine-wedding/bg-blue-glitter.webp);
}

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
</style>
