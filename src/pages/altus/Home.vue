<template>
  <section class="relative">
    <!-- HERO -->
    <div class="relative h-[93dvh] bg-black">
      <img
        :src="hero"
        alt="Fachada Altus América"
        class="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 h-full w-auto kenburns gpu-smooth"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

      <div class="relative z-10 h-[90vh] flex items-end">
        <div class="mx-auto w-full max-w-6xl xl:max-w-[1280px] 2xl:max-w-[1440px] px-4 pb-10 sm:pb-14">
          <Transition name="item" appear>
            <div class="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow liquid-chip">
              <span class="text-xs sm:text-sm 2xl:text-base tracking-wide text-stone-700">Jardim América — São José dos Campos/SP</span>
            </div>
          </Transition>

          <Transition name="item" appear>
            <h1 class="mt-4 text-5xl sm:text-7xl 2xl:text-8xl font-semibold tracking-tight text-white font-[Cinzel]">
              Altus América
            </h1>
          </Transition>

          <Transition name="item" appear>
            <p class="mt-3 sm:mt-4 text-white/90 max-w-4xl 2xl:max-w-5xl text-base sm:text-lg 2xl:text-xl">
              2 Torres Residenciais • Tipologias de 66,66 m² e 86,95 m² • 30 itens de lazer
            </p>
          </Transition>

        </div>
      </div>
    </div>

    <!-- Removed highlights card per request -->
  </section>
</template>

<script setup>
import hero from '../../../materiais/imagens/2-TORRES-HORIZONTAL.jpg'
</script>


