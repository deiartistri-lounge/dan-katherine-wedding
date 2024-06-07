<script setup lang="ts">
const props = defineProps({
  priest: String,
  groomParents: String,
  brideParents: String,
});

const listSponsors = ref([
  { name1: "Mr. Ken P. Sarmiento", name2: "Ms. Jocelyn T. Sanchez" },
  { name1: "Mr. Levinson C. Alcantara", name2: "Ms. Anna Jean N. Esmeña" },
  { name1: "Mr. Charles B. Tabbu", name2: "Mrs. Ma. Cristina V. Malagkit" },
  { name1: "Mr. Mel L. Candano", name2: "Mrs. Marilou A. Candano" },
  { name1: "Mr. Dunhill D. Alcantara", name2: "Mrs. Charity M. Jacob" },
  { name1: "Mr. George V. Parlan", name2: "Ms. Elizabeth J. Sison" },
  { name1: "Mr. Reginald G. Protesta", name2: "Mrs. Winnie Frida M. Palma" },
  { name1: "Mr. Arnold C. Quijano", name2: "Mrs. Ramona S. Quijano" },
  { name1: "Mr. Samuel S. Aherrera", name2: "Ms. Violeta D. Aseron" },
  { name1: "Atty. Arturo J. Liquete", name2: "Mrs. Nancy P. Perez" },
  { name1: "Engr. Benjamin J. Liquete", name2: "Mrs. Evelyn S. Liquete" },
  { name1: "Mr. Pascual O. Arzadon Jr.", name2: "Mrs. Bing I. Arzadon" },
  { name1: "Capt. Domingo C. Ragudos", name2: "Mrs. Imelda M. Ragudos" },
  { name1: "Mr. Rodrigo G. Ragodos", name2: "Mrs. Susan A. Weatherup" },
  { name1: "Mr. Richard C. Sembria", name2: "Mrs. Marilag T. Sembria" },
  { name1: "Mr. Mark S. Aherrera", name2: "Mrs. Florinda R. Murphy" },
  { name1: "Mr. David S. Aherrera", name2: "Engr. Remy G. Reynaldo" },
  { name1: "Mr. Alfred V. Vejar", name2: "Mrs. Delia M. Vejar" },
  { name1: "Mr. Bernardo M. Castillo", name2: "Mrs. Noemi S. Castillo" },
  { name1: "Mr. Allan O. Pantillano", name2: "Mrs. Jocelyn R. Pantillano" },
  { name1: "Mr. Armando T. Rabaja Sr.", name2: "Mrs. Agnes C. Cabatic" },
  { name1: "Mr. Benigno C. Quejada", name2: "Mrs. Brigida R. Quejada" },
  { name1: "Mr. Norberto D. Sollano Jr.", name2: "Mrs. Merlita J. Reynaldo" },
  { name1: "Mr. Romeo L. Cayetano Jr.", name2: "Mrs. Emelda S. Colarina" },
  { name1: "Mr. Joel R. Nerviza", name2: "Mrs. Elnor M. Nerviza" },
  { name1: "Mr. Daniel S. Aherrera", name2: "Mrs. Dina Grace A. Lacebal" },
  { name1: "Mr. Pedro C. Reynaldo", name2: "Mrs. Liza B. Hidalgo" },
  { name1: "Mr. Wilmor R. Biag", name2: "Mrs. AnnaLiza A. McCarthy" },
]);
</script>
<template>
  <section
    class="relative flex items-center justify-center bg-fixed bg-center bg-cover lg:min-h-screen bg-opacity-20 bg-passport"
  >
    <div
      class="flex flex-col items-center justify-center w-full px-3 py-48 lg:max-w-screen-xl lg:py-72"
    >
      <h1
        class="font-black text-center text-[#000080] text-5xl lg:text-7xl font-cursive"
        v-motion
        :initial="{
          opacity: 0,
          x: -200,
        }"
        :visibleOnce="{
          opacity: 1,
          x: 0,
          transition: {
            type: 'spring',
            stiffness: '200',
            delay: 400,
          },
        }"
      >
        Wedding Entourage
      </h1>
      <!-- Officiating Minister -->
      <div
        class="flex flex-col gap-3 my-16 text-center"
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: '100',
            delay: 200,
          },
        }"
      >
        <h2 class="list-header">Officiating Minister</h2>
        <div class="text-3xl underline font-name">
          {{ priest }}
        </div>
      </div>

      <!-- Parents -->
      <div class="flex flex-col w-full gap-3 my-10 text-center">
        <h2
          class="list-header text-[#000080] !font-cursive !normal-case !text-4xl lg:!text-5xl"
          v-motion
          :initial="{
            opacity: 0,
            x: -200,
          }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              stiffness: '200',
              delay: 500,
            },
          }"
        >
          With the Blessings of our Dear Parents
        </h2>
        <!-- Desktop -->
        <div class="flex-col hidden w-full mt-10 lg:flex">
          <div
            class="list-sponsor-item"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="list-sponsor-item-left">Mr. Danilo L. Salaya</div>
            <!-- <div class="list-sponsor-item-right">Mr. Richard R. Reynaldo</div> -->
            <div class="list-sponsor-item-right">Ms. Josephine R. Reynaldo</div>
          </div>

          <div
            class="list-sponsor-item"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="list-sponsor-item-left">Mrs. Zenaida S. Siguin</div>
            <div class="list-sponsor-item-right">&nbsp;</div>
          </div>
        </div>

        <!-- Mobile -->
        <div class="flex-col w-full mt-10 lg:hidden">
          <div
            class="flex-col list-sponsor-item"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="list-sponsor-item-left">Mr. Danilo L. Salaya</div>
            <div class="list-sponsor-item-right">Mrs. Zenaida S. Siguin</div>
          </div>

          <div
            class="flex-col list-sponsor-item"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <!-- <div class="list-sponsor-item-left">Mr. Richard R. Reynaldo</div> -->
            <div class="list-sponsor-item-right">Ms. Josephine R. Reynaldo</div>
          </div>
        </div>
      </div>

      <!-- Primary Sponsors -->
      <div class="flex flex-col w-full gap-3 my-10 text-center">
        <h2
          class="list-header text-[#000080] !font-cursive !normal-case !text-4xl lg:!text-5xl"
          v-motion
          :initial="{
            opacity: 0,
            x: -200,
          }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              stiffness: '200',
              delay: 500,
            },
          }"
        >
          To Stand as Witness to our Vows
        </h2>

        <div class="flex flex-col flex-1 gap-10 my-10 text-3xl">
          <h2
            class="list-header"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            Principal Sponsors
          </h2>
          <div class="flex flex-col w-full">
            <div
              v-for="(sponsor, idx) in listSponsors"
              :key="idx"
              class="list-sponsor-item"
              v-motion
              :initial="{
                opacity: 0,
                y: 100,
              }"
              :visibleOnce="{
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  stiffness: '100',
                  delay: 500,
                },
              }"
            >
              <div class="list-sponsor-item-left">{{ sponsor.name1 }}</div>
              <div class="list-sponsor-item-right">{{ sponsor.name2 }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Secondary Sponsors -->
      <div class="flex flex-col gap-3 my-10 text-center">
        <h2
          class="mb-10 list-header text-[#000080] !font-cursive !normal-case !text-4xl lg:!text-5xl"
          v-motion
          :initial="{
            opacity: 0,
            x: -200,
          }"
          :visibleOnce="{
            opacity: 1,
            x: 0,
            transition: {
              type: 'spring',
              stiffness: '200',
              delay: 500,
            },
          }"
        >
          With the assistance of our Secondary Sponsors
        </h2>
        <div class="flex flex-col w-full gap-10">
          <!-- Best Man and Maid of Honor -->
          <div
            class="gap-3 list-sponsor-item lg:gap-6"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="mb-6 list-sponsor-item-left lg:mb-0">
              <div class="font-semibold list-header">Best Man</div>
              <div class="">Mr. Rayh P. Rabor</div>
            </div>
            <div class="list-sponsor-item-right">
              <div class="font-semibold list-header">Maid of Honor</div>
              <div class="">Ms. Joy R. Jacob</div>
            </div>
          </div>

          <!-- Grooms Men & Bridesmaid -->
          <div
            class="gap-3 list-sponsor-item lg:gap-6"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="mb-6 list-sponsor-item-left lg:mb-0">
              <div class="font-semibold list-header">Groomsmen</div>
              <div class="">Mr. Michael L. Cabudlan</div>
              <div class="">Mr. Ramon B. Golondrina</div>
              <div class="">Mr. Randell I. Rabuya</div>
              <div class="">Mr. Jelan Anrei Nerviza</div>
            </div>
            <div class="list-sponsor-item-right">
              <div class="font-semibold list-header">Bridesmaid</div>
              <div class="">Ms. Mariz M. Bulano</div>
              <div class="">Ms. Perlas C. Sampaga</div>
              <div class="">Ms. Blessyl Agatha S. Castillo</div>
            </div>
          </div>

          <!-- To light our path -->
          <div
            class="items-center justify-center w-full gap-3 list-sponsor-item lg:gap-6"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="w-full !text-center list-sponsor-item-left">
              <div class="font-semibold list-header">To light our path</div>
              <div class="">Mr. Bernard Allan S. Castillo</div>
              <div class="">Ms. Diana Mae S. Siguin</div>
            </div>
          </div>

          <!-- To Clothe us one & To Bind us together -->
          <div
            class="list-sponsor-item"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="mb-6 list-sponsor-item-left lg:mb-0">
              <div class="font-semibold list-header">To Clothe Us One</div>
              <div class="">Mr. John RJ Lester S. Siguin</div>
              <div class="">Ms. Joyce R. Jacob</div>
            </div>
            <div class="list-sponsor-item-right">
              <div class="font-semibold list-header">To Bind Us Together</div>
              <div class="">Mr. Henry R. Cabarrubias</div>
              <div class="">Ms. Jackie R. Jacob</div>
            </div>
          </div>

          <!-- Bible Bearer, Ring Bearer & Coin Bearer -->
          <div
            class="list-sponsor-item"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="list-sponsor-item-left !text-center mb-6 lg:mb-0">
              <div class="font-semibold list-header">Bible Bearer</div>
              <div class="font-name">Brylle Azriel S. Castillo</div>
            </div>
            <div class="list-sponsor-item-right !text-center mb-6 lg:mb-0">
              <div class="font-semibold list-header">Ring Bearer</div>
              <div class="font-name">Alden Richard V. Reynaldo</div>
            </div>
            <div class="list-sponsor-item-right !text-center">
              <div class="font-semibold list-header">Coin Bearer</div>
              <div class="font-name">Darren B. Rabarra</div>
            </div>
          </div>

          <!-- Flower Girls -->
          <div
            class="items-center justify-center w-full text-center list-sponsor-item"
            v-motion
            :initial="{
              opacity: 0,
              y: 100,
            }"
            :visibleOnce="{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                stiffness: '100',
                delay: 500,
              },
            }"
          >
            <div class="list-sponsor-item-left !text-center">
              <div class="font-semibold list-header">Flower Girls</div>
              <div class="font-name">Mikaella Adriana T. Consulta</div>
              <div class="font-name">Khiana Rain S. Reynaldo</div>
              <div class="font-name">Glenney Heart P. Reynaldo</div>
            </div>
          </div>
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
  @apply font-name text-3xl;
}

.list-sponsor-item {
  @apply flex w-full lg:gap-20 lg:flex-row flex-col mb-6 lg:mb-0;
}

.list-sponsor-item-left {
  @apply lg:w-1/2 text-2xl lg:text-3xl text-center lg:text-right font-name;
}

.list-sponsor-item-right {
  @apply lg:w-1/2 text-2xl lg:text-3xl text-center lg:text-left font-name;
}
</style>
