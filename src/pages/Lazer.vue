<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>

    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-16 lg:py-20 text-white">
      <Transition name="item" appear>
        <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Lazer</h2>
      </Transition>

      <div class="grid gap-12 lg:grid-cols-[2fr_1fr] items-start">
        <Transition name="item" appear>
          <div class="flex flex-col gap-6 mt-10">
            <div class="relative flex items-center justify-center gap-4 pb-16 sm:pb-0">
              <button
                type="button"
                @click="prevFeature"
                class="hidden sm:inline-flex items-center justify-center rounded-full bg-white/80 text-stone-900 w-12 h-12 shadow-lg hover:bg-white transition"
                aria-label="Anterior"
              >
                <span aria-hidden="true">&lt;</span>
              </button>

              <Transition name="item" mode="out-in">
                <figure
                  :key="currentFeature.title"
                  class="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl cursor-pointer"
                  @click="openHigh(currentFeature.img, currentFeature.title)"
                >
                  <img :src="currentFeature.img" :alt="currentFeature.title" class="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover" />
                  <figcaption class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-lg font-medium">
                    {{ currentFeature.title }}
                  </figcaption>
                </figure>
              </Transition>

              <button
                type="button"
                @click="nextFeature"
                class="hidden sm:inline-flex items-center justify-center rounded-full bg-white/80 text-stone-900 w-12 h-12 shadow-lg hover:bg-white transition"
                aria-label="Próxima"
              >
                <span aria-hidden="true">&gt;</span>
              </button>

              <!-- Mobile navigation -->
              <div class="absolute -bottom-14 flex w-full justify-between px-6 sm:hidden">
                <button
                  type="button"
                  @click="prevFeature"
                  class="inline-flex items-center justify-center rounded-full bg-white/80 text-stone-900 w-12 h-12 shadow-lg hover:bg-white transition"
                  aria-label="Anterior"
                >
                  <span aria-hidden="true">&lt;</span>
                </button>
                <button
                  type="button"
                  @click="nextFeature"
                  class="inline-flex items-center justify-center rounded-full bg-white/80 text-stone-900 w-12 h-12 shadow-lg hover:bg-white transition"
                  aria-label="Próxima"
                >
                  <span aria-hidden="true">&gt;</span>
                </button>
              </div>
            </div>

            <div class="flex items-center justify-center gap-2 text-white/70 text-sm">
              <span>{{ currentIndex + 1 }} / {{ features.length }}</span>
            </div>

            <button
              type="button"
              @click="openHigh(plantaLazer, 'Planta completa de lazer')"
              class="self-start inline-flex items-center gap-2 rounded-full bg-white text-stone-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition animate-pulse"
            >
              Veja planta completa
            </button>
          </div>
        </Transition>

        <!-- Sidebar: Lazer list -->
        <aside>
          <Transition name="item" appear>
            <h3 class="text-xl font-semibold">+ de 2.000 m² de lazer</h3>
          </Transition>
          <TransitionGroup name="item" appear tag="ul" class="mt-4 space-y-2 text-white/80">
            <li
              v-for="(a, idx) in amenitiesList"
              :key="a"
              class="p-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-lg"
              :style="{ transitionDelay: `${idx * 50}ms` }"
            >
              {{ a }}
            </li>
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
import casaDeCampo from '../../Material Altus/IMAGENS EM ALTA/ALTUS-CASA-DE-CAMPO-ALTA.jpg'
import academia from '../../Material Altus/IMAGENS EM ALTA/ALTUS-ACADEMIA-CENA-1-ALTA.jpg'
import gourmet from '../../Material Altus/IMAGENS EM ALTA/ALTUS-GOURMET-CENA-1-ALTA.jpg'
import wine from '../../Material Altus/IMAGENS EM ALTA/ALTUS-WINE-BAR-ALTA.jpg'
import brinquedoteca from '../../Material Altus/IMAGENS EM ALTA/ALTUS-BRINQUEDOTECA-LADO-A-ALTA.jpg'
import coworking from '../../Material Altus/IMAGENS EM ALTA/ALTUS-COWORKING-ALTA.jpg'
import yoga from '../../Material Altus/IMAGENS EM ALTA/ALTUS-YOGA-ALTA.jpg'
import plantaLazer from '../../Material Altus/LAZER/planta-lazer.jpeg'
import bgCouro from '../../Material Altus/IDENTIDADE VISUAL/BACKGROUND COURO VERDE.png'
import { ref, computed } from 'vue'

const features = [
  { img: casaDeCampo, title: 'Casa da Mata' },
  { img: academia, title: 'Academia Indoor' },
  { img: gourmet, title: 'Salão Gourmet' },
  { img: wine, title: 'Wine Bar' },
  { img: brinquedoteca, title: 'Brinquedoteca' },
  { img: coworking, title: 'Coworking' },
  { img: yoga, title: 'Espaço Yoga' },
]

const amenitiesList = [
  'Casa da Mata',
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

const totalFeatures = features.length
const currentIndex = ref(0)
const currentFeature = computed(() => {
  if (!totalFeatures) {
    return { img: '', title: '' }
  }
  const normalized = ((currentIndex.value % totalFeatures) + totalFeatures) % totalFeatures
  return features[normalized]
})

const showHigh = ref(false)
const highSrc = ref('')
const highAlt = ref('')
const openHigh = (src, alt) => { highSrc.value = src; highAlt.value = alt; showHigh.value = true }
const closeHigh = () => { showHigh.value = false }

const nextFeature = () => {
  if (!totalFeatures) return
  currentIndex.value = (currentIndex.value + 1) % totalFeatures
}

const prevFeature = () => {
  if (!totalFeatures) return
  currentIndex.value = (currentIndex.value - 1 + totalFeatures) % totalFeatures
}
</script>
