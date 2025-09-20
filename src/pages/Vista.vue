<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>

    <div class="mx-auto max-w-6xl px-4 py-12 text-white">
      <Transition name="item" appear><h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Vista dos Andares</h2></Transition>
      <Transition name="item" appear>
      <p class="mt-3 text-white/90">Em breve: vistas por andar. Enquanto isso, confira a perspectiva das torres.</p>
      </Transition>
      <Transition name="item" appear>
      <div class="mt-6 rounded-2xl overflow-hidden border border-white/20">
        <img :src="fachada" alt="Perspectiva das torres" class="w-full h-auto" />
      </div>
      </Transition>
    </div>
  </section>
</template>

<script setup>
import fachada from '../../Material Altus/IMAGENS EM ALTA/2 TORRES HORIZONTAL.jpg'
import bgCouro from '../../Material Altus/IDENTIDADE VISUAL/BACKGROUND COURO VERDE.png'
</script>
