<script setup lang="ts">
// import lax from "lax.js";

// const setupLax = () => {
//   lax.init();

//   // Add a driver that we use to control our animations
//   lax.addDriver("scrollY", () => window.scrollY, { inertiaEnabled: true });

//   // Add animation bindings to elements
//   lax.addElements(
//     ".spinMe",
//     {
//       scrollY: {
//         rotate: [
//           [0, 1e9],
//           [0, 1e9],
//         ],
//       },
//     },
//     []
//   );

//   lax.addElements(".selector", {
//     scrollY: {
//       opacity: [
//         [100, 0],
//         [0, 1],
//       ],
//     },
//   });
// };

const bride = "Katherine";
const groom = "Dan Joseph";
const weddingDate = "22 June 2024";

// onMounted(() => {
//   setupLax();
// });
</script>
<template>
  <ClientOnly>
    <div
      class="relative flex flex-col w-screen min-h-screen overflow-hidden bg-gray-100"
    >
      <!-- Cover Section -->
      <CoverSection :bride="bride" :groom="groom" :wedding-date="weddingDate" />

      <div
        class="bg-primary-900 bg-fixed bg-center bg-cover h-[200px] w-full"
      ></div>

      <!-- DanRine Cover Section -->
      <DanRineCoverSection />

      <!-- Countdown goes here -->
      <CountdownSection />

      <!-- Wedding Details -->
      <WeddingDetailsSection />

      <WeddingEntourageSection priest="Rev. Fr. Pedro D. Cabarrubias" />

      <!-- Attire -->
      <AttireSection />

      <!-- Gift -->
      <GiftSection />

      <!-- Snap and Share Section -->
      <SnapAndShareSection />

      <!-- Wedding Venue -->
      <WeddingVenue />

      <!-- FAQs -->
      <FAQs />

      <!-- RSVP Section -->
      <RSVPSection />

      <!-- Footer -->
      <FooterSection />
    </div>
  </ClientOnly>
</template>
