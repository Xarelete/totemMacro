<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>

    <div class="mx-auto max-w-6xl px-4 py-12 text-white">
      <Transition name="item" appear>
        <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Plantas</h2>
      </Transition>
      <Transition name="item" appear>
        <p class="mt-3 text-white/90">Duas tipologias planejadas para conforto e funcionalidade.</p>
      </Transition>

      <TransitionGroup name="item" appear tag="div" class="mt-6 grid sm:grid-cols-2 gap-6">
        <figure v-for="(p, idx) in plantas" :key="p.title" class="rounded-2xl overflow-hidden border bg-white" :style="{ transitionDelay: `${idx * 90}ms` }">
          <img :src="p.img" :alt="p.alt" class="w-full h-auto cursor-zoom-in" @click="openHigh(p.img, p.alt)" />
          <figcaption class="p-4 text-stone-900">
            <h3 class="font-semibold">{{ p.title }}</h3>
            <p class="mt-1 text-stone-700 text-sm">{{ p.desc }}</p>
          </figcaption>
        </figure>
      </TransitionGroup>
    </div>

    <div v-if="showHigh" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closeHigh" role="dialog" aria-modal="true" aria-label="Imagem em alta" tabindex="-1">
      <div class="absolute inset-0 bg-black/70" @click="closeHigh"></div>
      <div class="relative z-10 w-full max-w-5xl">
        <button @click="closeHigh" class="absolute -top-10 right-0 px-3 py-1.5 rounded-full bg-white text-stone-900 shadow hover:shadow-md">Fechar</button>
        <Transition name="fade" appear>
          <img :src="highSrc" :alt="highAlt" class="w-full h-auto rounded-2xl border shadow-lg" />
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import planta2 from '../../../materiais/plantas/PLANTA-DE-2-DORMITORIOS.jpg'
import planta3 from '../../../materiais/plantas/PLANTA-DE-3-DORMITORIOS.jpg'
import bgCouro from '../../../materiais/identidade-visual/BACKGROUND-COURO-VERDE.png'
import { ref } from 'vue'

const plantas = [
  { img: planta2, alt: 'Planta 2 dormitórios — 66,66 m²', title: '66,66 m² — 2 dormitórios (1 suíte)', desc: '1 banheiro • cozinha • área de serviço • sala de jantar/estar • varanda gourmet • 1 vaga' },
  { img: planta3, alt: 'Planta 3 dormitórios — 86,95 m²', title: '86,95 m² — 3 dormitórios (1 suíte)', desc: '1 banheiro • 1 lavabo • cozinha • área de serviço • sala de jantar/estar • varanda gourmet • 2 vagas com hobby box' },
]

const showHigh = ref(false)
const highSrc = ref('')
const highAlt = ref('')
const openHigh = (src, alt) => { highSrc.value = src; highAlt.value = alt; showHigh.value = true }
const closeHigh = () => { showHigh.value = false }
</script>


