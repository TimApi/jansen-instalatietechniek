<script setup lang="ts">
const progressWidth = ref(0);
const progressbar = ref(null);

onMounted(() => {
  const incrementProgress = () => {
    if (progressWidth.value < 70) {
      progressWidth.value += 1;
      requestAnimationFrame(incrementProgress);
    }
  };

  // Start the progress bar animation
  incrementProgress();
});
</script>
<template>
  <nav class="bg-primary flex justify-between items-center px-4">
    <img
      src="../public/assets/logo jansen installatietechniek.svg"
      class="h-12"
    />
    <ul>
      <li>
        <a href="about-us">
          <p class="text-secondary text-xl font-semibold">over ons</p>
        </a>
      </li>
    </ul>
  </nav>
  <header class="block relative">
    <div class="absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4">
      <h1 class="text-white">Coming soon</h1>
      <div
        ref="progressbarContainer"
        class="w-full bg-gray-300 rounded h-2 mt-8"
      >
        <!-- Progress bar -->
        <div
          ref="progressbar"
          class="bg-secondary h-full rounded rounded-primary"
          :style="{ width: progressWidth + '%' }"
        ></div>
      </div>
    </div>

    <img
      class="object-cover h-[400px] w-full"
      src="../public/assets/Duurzame-Installatietechniek-Nederland-1.jpg"
    />
  </header>
  <section class="bg-primary py-4 font-helvetica h-screen" id="about-us">
    <div class="container">
      <div class="flex flex-col md:flex-row gap-4 md:gap-6">
        <div class="w-full md:w-6/12">
          <h2 class="text-white">Over ons</h2>
          <p class="text-white mt-3">
            Welkom bij Jansen Installatietechniek Onze website is momenteel in
            onderhoud en wordt vernieuwd om u binnenkort nog beter van dienst te
            kunnen zijn. We werken hard aan het optimaliseren van onze online
            diensten en we hopen u snel weer volledig te kunnen informeren over
            onze installatietechnische oplossingen. Heeft u vragen of wilt u
            direct contact met ons opnemen? Bel ons gerust
          </p>
        </div>
        <div class="w-full md:w-6/12">
          <h2 class="text-white">Neem contact met ons op</h2>
          <p class="text-white">stuur een email dan nemen wij contact met u op</p>
          <contactForm />
          <div class="flex mt-4">
            <p class="mr-2">of bel naar</p>
            <a href="tel:06812918" class="text-secondary font-semibold"
              >06-53213885</a
            >
            <a href="tel:061088614 " class="ml-2 text-secondary font-semibold"
              >06-10886148</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
