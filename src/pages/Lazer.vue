<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>

    <div class="mx-auto max-w-6xl px-4 py-12 text-white">
    <Transition name="item" appear><h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Lazer</h2></Transition>

    <div class="mt-6 lg:grid lg:grid-cols-3 lg:gap-8">
      <!-- Gallery: 2 columns -->
      <TransitionGroup name="item" appear tag="div" class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <figure v-for="(f, idx) in features" :key="f.title" class="rounded-2xl overflow-hidden border bg-white cursor-pointer" :style="{ transitionDelay: `${idx * 70}ms` }" @click="openHigh(f.img, f.title)">
          <img :src="f.img" :alt="f.title" class="w-full h-48 object-cover" />
          <figcaption class="p-4 font-medium text-stone-900">{{ f.title }}</figcaption>
        </figure>
      </TransitionGroup>

      <!-- Sidebar: Lazer list -->
      <aside class="mt-8 lg:mt-0">
        <Transition name="item" appear>
          <h3 class="text-xl font-semibold">+ de 2.000 m² de lazer</h3>
        </Transition>
        <TransitionGroup name="item" appear tag="ul" class="mt-4 space-y-3 text-white/80">
          <li v-for="(a, idx) in amenitiesList" :key="a" class="p-4 rounded-xl border border-white/20" :style="{ transitionDelay: `${idx * 50}ms` }">{{ a }}</li>
        </TransitionGroup>
      </aside>
    </div>
    </div>

    <!-- Modal imagem em alta -->
    <div v-if="showHigh" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closeHigh" role="dialog" aria-modal="true" aria-label="Imagem de lazer em alta" tabindex="-1">
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
import academia from '../../Material Altus/IMAGENS EM ALTA/ALTUS-ACADEMIA-CENA-1-ALTA.jpg'
import gourmet from '../../Material Altus/IMAGENS EM ALTA/ALTUS-GOURMET-CENA-1-ALTA.jpg'
import wine from '../../Material Altus/IMAGENS EM ALTA/ALTUS-WINE-BAR-ALTA.jpg'
import brinquedoteca from '../../Material Altus/IMAGENS EM ALTA/ALTUS-BRINQUEDOTECA-LADO-A-ALTA.jpg'
import coworking from '../../Material Altus/IMAGENS EM ALTA/ALTUS-COWORKING-ALTA.jpg'
import yoga from '../../Material Altus/IMAGENS EM ALTA/ALTUS-YOGA-ALTA.jpg'
import bgCouro from '../../Material Altus/IDENTIDADE VISUAL/BACKGROUND COURO VERDE.png'
import { ref } from 'vue'

const features = [
  { img: academia, title: 'Academia Indoor' },
  { img: gourmet, title: 'Salão Gourmet' },
  { img: wine, title: 'Wine Bar' },
  { img: brinquedoteca, title: 'Brinquedoteca' },
  { img: coworking, title: 'Coworking' },
  { img: yoga, title: 'Espaço Yoga' },
]

const amenitiesList = [
  'Piscinas adulto e infantil, borda infinita',
  'Coworking • Mini Market • Espaço Delivery',
  'Spa • Sauna • Área Fitness Interna e Externa',
  'Quadra de Beach Tennis oficial',
  'Salão de Festas • Salão de Jogos',
  'Brinquedoteca • Baby Care • Baby Space',
  'Pet Care • Pet Place • Bicicletário',
  'Espaço CrossFit • Redário • Fireplace',
  'Praça Interna • Lounge da Piscina',
]

const showHigh = ref(false)
const highSrc = ref('')
const highAlt = ref('')
const openHigh = (src, alt) => { highSrc.value = src; highAlt.value = alt; showHigh.value = true }
const closeHigh = () => { showHigh.value = false }
</script>
