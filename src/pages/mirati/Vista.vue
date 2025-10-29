<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10" :style="{ backgroundColor: '#002262' }"></div>

    <div class="mx-auto max-w-[1200px] px-4 py-10 lg:py-12 text-white">
      <Transition name="item" appear>
        <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Tour 360</h2>
      </Transition>

      <Transition name="item" appear>
        <div class="mt-6 overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl">
          <iframe
            src="https://my.matterport.com/show/?m=45fPTTDjFMC"
            title="Tour 360 Mirati Residenciais"
            class="w-full h-[68vh] sm:h-[66vh] lg:h-[64vh] 2xl:h-[62vh]"
            allow="xr-spatial-tracking; gyroscope; accelerometer; fullscreen"
            allowfullscreen
          ></iframe>
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
</script>


