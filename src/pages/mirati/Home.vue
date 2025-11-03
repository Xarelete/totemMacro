<template>
  <section class="relative">
    <div class="relative h-[93dvh] bg-black">
      <img :src="heroSrc" alt="Mirati Residenciais" class="absolute inset-0 h-full w-full object-cover kenburns gpu-smooth" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      <div class="relative z-10 h-[90vh] flex items-end">
        <div class="mx-auto w-full max-w-6xl px-4 pb-10 sm:pb-14">
          <Transition name="item" appear>
            <div class="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow liquid-chip">
              <span class="text-xs sm:text-sm 2xl:text-base tracking-wide text-stone-700">Jardim Ismênia — São José dos Campos/SP</span>
            </div>
          </Transition>

          <Transition name="item" appear>
            <h1 class="mt-4 text-5xl sm:text-7xl font-semibold tracking-tight text-white font-[Cinzel]">
              Mirati Residenciais
            </h1>
          </Transition>

          <Transition name="item" appear>
            <p class="mt-4 text-white/90 max-w-4xl text-base sm:text-lg">
              2 Torres • 58m² • Suíte e varanda gourmet • Lazer completo
            </p>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

const heroSrc = '/mirati/hero.jpg?v=2'
</script>


