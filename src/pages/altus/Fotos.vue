<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>

    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-16 lg:py-20 text-white">
      <Transition name="item" appear>
        <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Perspectiva Decorado 3 Dormitórios</h2>
      </Transition>

      <div class="mt-10 flex flex-col items-center gap-8">
        <div class="relative flex w-full items-center justify-center gap-4 pb-16 sm:pb-0">
          <button type="button" @click="prevFoto" class="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-900 shadow-lg transition hover:bg-white" aria-label="Anterior">
            <span aria-hidden="true">&lt;</span>
          </button>

          <Transition name="item" mode="out-in">
            <figure :key="currentFoto.title" class="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl cursor-pointer hover-float" @click="openHigh(currentFoto.img, currentFoto.title)">
              <img :src="currentFoto.img" :alt="currentFoto.title" class="w-full h-[360px] sm:h-[420px] lg:h-[520px] object-cover" />
              <figcaption class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-lg font-medium">
                {{ currentFoto.title }}
              </figcaption>
            </figure>
          </Transition>

          <button type="button" @click="nextFoto" class="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-900 shadow-lg transition hover:bg-white" aria-label="Próxima">
            <span aria-hidden="true">&gt;</span>
          </button>

          <div class="absolute -bottom-14 flex w-full justify-between px-6 sm:hidden">
            <button type="button" @click="prevFoto" class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-900 shadow-lg transition hover:bg-white" aria-label="Anterior">
              <span aria-hidden="true">&lt;</span>
            </button>
            <button type="button" @click="nextFoto" class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-900 shadow-lg transition hover:bg-white" aria-label="Próxima">
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center gap-2 text-white/70 text-sm">
          <span>{{ currentIndex + 1 }} / {{ fotos.length }}</span>
        </div>
      </div>
    </div>

    <div v-if="showHigh" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closeHigh" role="dialog" aria-modal="true" aria-label="Foto em alta" tabindex="-1">
      <div class="absolute inset-0 bg-black/70" @click="closeHigh"></div>
      <div class="relative z-10 w-full max-w-5xl">
        <button @click="closeHigh" class="absolute -top-10 right-0 px-3 py-1.5 rounded-full bg-white text-stone-900 shadow hover:shadow-md">Fechar</button>
        <button v-if="canNavigate" @click="modalPrev" class="absolute left-0 top-1/2 -translate-y-1/2 ml-2 sm:ml-4 rounded-full bg-white/90 text-stone-900 w-10 h-10 sm:w-12 sm:h-12 shadow hover:bg-white" aria-label="Anterior">‹</button>
        <button v-if="canNavigate" @click="modalNext" class="absolute right-0 top-1/2 -translate-y-1/2 mr-2 sm:mr-4 rounded-full bg-white/90 text-stone-900 w-10 h-10 sm:w-12 sm:h-12 shadow hover:bg-white" aria-label="Próxima">›</button>
        <Transition name="fade" appear>
          <img :src="highSrc" :alt="highAlt" class="max-w-full max-h-[90vh] w-auto h-auto rounded-2xl border shadow-lg object-contain" />
        </Transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import quartoCasal1 from '../../../materiais/decorado/quarto-casal-1.jpg'
import quartoCasal2 from '../../../materiais/decorado/quarto-casal-2.jpg'
import quartoCasal3 from '../../../materiais/decorado/quarto-casal-3.jpg'
import quartoCasal4 from '../../../materiais/decorado/quarto-casal-4.jpg'
import quartoCriancas1 from '../../../materiais/decorado/quarto-criancas-1.jpg'
import quartoCriancas2 from '../../../materiais/decorado/quarto-criancas-2.jpg'
import quartoCriancas3 from '../../../materiais/decorado/quarto-criancas-3.jpg'
import living1 from '../../../materiais/decorado/living-1.jpg'
import living2 from '../../../materiais/decorado/living-2.jpg'
import living3 from '../../../materiais/decorado/living-3.jpg'
import living4 from '../../../materiais/decorado/living-4.jpg'
import living5 from '../../../materiais/decorado/living-5.jpg'
import homeOffice2 from '../../../materiais/decorado/home-office-2.jpg'
import homeOffice3 from '../../../materiais/decorado/home-office-3.jpg'
import homeOffice from '../../../materiais/decorado/home-office.jpg'
import banheiro2 from '../../../materiais/decorado/banheiro-2.jpg'
import banheiroSuite2 from '../../../materiais/decorado/banheiro-suite-2.jpg'
import banheiroSuite from '../../../materiais/decorado/banheiro-suite.jpg'
import lavabo from '../../../materiais/decorado/lavabo.jpg'
import lavanderia from '../../../materiais/decorado/lavanderia.jpg'

import bgCouro from '../../../materiais/identidade-visual/BACKGROUND-COURO-VERDE.png'
import { ref, computed } from 'vue'

const fotos = [
  { img: quartoCasal2, title: 'Quarto casal decorado' },
  { img: quartoCasal3, title: 'Detalhes suíte casal' },
  { img: quartoCasal4, title: 'Ambiente suíte casal' },
  { img: quartoCriancas1, title: 'Dormitório infantil' },
  { img: quartoCriancas2, title: 'Quarto das crianças' },
  { img: quartoCriancas3, title: 'Dormitório juvenil' },
  { img: living1, title: 'Living integrado' },
  { img: living2, title: 'Living decorado' },
  { img: living3, title: 'Detalhes do living' },
  { img: living4, title: 'Sala de estar ampliada' },
  { img: living5, title: 'Estar e jantar integrados' },
  { img: homeOffice2, title: 'Espaço home office' },
  { img: homeOffice3, title: 'Home office funcional' },
  { img: homeOffice, title: 'Área de trabalho' },
  { img: banheiro2, title: 'Banheiro social' },
  { img: banheiroSuite2, title: 'Banho da suíte' },
  { img: banheiroSuite, title: 'Banheiro suíte' },
  { img: lavabo, title: 'Lavabo decorado' },
  { img: lavanderia, title: 'Lavanderia' },
]

const totalFotos = fotos.length
const currentIndex = ref(0)
const currentFoto = computed(() => {
  if (!totalFotos) return { img: '', title: '' }
  const normalized = ((currentIndex.value % totalFotos) + totalFotos) % totalFotos
  return fotos[normalized]
})

const showHigh = ref(false)
const highSrc = ref('')
const highAlt = ref('')
const modalIndex = ref(-1)
const canNavigate = computed(() => modalIndex.value >= 0 && totalFotos > 1)

const syncModalToIndex = () => {
  const item = fotos[((modalIndex.value % totalFotos) + totalFotos) % totalFotos]
  if (!item) return
  highSrc.value = item.img
  highAlt.value = item.title
}

const openHigh = (src, alt) => {
  const idx = fotos.findIndex((f) => f.img === src)
  modalIndex.value = idx
  highSrc.value = src
  highAlt.value = alt
  showHigh.value = true
}
const closeHigh = () => { showHigh.value = false; modalIndex.value = -1 }

const modalNext = () => { if (!canNavigate.value) return; modalIndex.value = (modalIndex.value + 1) % totalFotos; syncModalToIndex() }
const modalPrev = () => { if (!canNavigate.value) return; modalIndex.value = (modalIndex.value - 1 + totalFotos) % totalFotos; syncModalToIndex() }

const nextFoto = () => { if (!totalFotos) return; currentIndex.value = (currentIndex.value + 1) % totalFotos }
const prevFoto = () => { if (!totalFotos) return; currentIndex.value = (currentIndex.value - 1 + totalFotos) % totalFotos }
</script>


