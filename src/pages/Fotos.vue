<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>

    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-16 lg:py-20 text-white">
      <Transition name="item" appear>
        <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Perspectiva Decorado 3 Dormitórios</h2>
      </Transition>

      <div class="mt-10 flex flex-col items-center gap-8">
        <div class="relative flex w-full items-center justify-center gap-4 pb-16 sm:pb-0">
          <button
            type="button"
            @click="prevFoto"
            class="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-900 shadow-lg transition hover:bg-white"
            aria-label="Anterior"
          >
            <span aria-hidden="true">&lt;</span>
          </button>

          <Transition name="item" mode="out-in">
            <figure
              :key="currentFoto.title"
              class="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl cursor-pointer"
              @click="openHigh(currentFoto.img, currentFoto.title)"
            >
              <img :src="currentFoto.img" :alt="currentFoto.title" class="w-full h-[360px] sm:h-[420px] lg:h-[520px] object-cover" />
              <figcaption class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-lg font-medium">
                {{ currentFoto.title }}
              </figcaption>
            </figure>
          </Transition>

          <button
            type="button"
            @click="nextFoto"
            class="hidden sm:inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-900 shadow-lg transition hover:bg-white"
            aria-label="Próxima"
          >
            <span aria-hidden="true">&gt;</span>
          </button>

          <div class="absolute -bottom-14 flex w-full justify-between px-6 sm:hidden">
            <button
              type="button"
              @click="prevFoto"
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-900 shadow-lg transition hover:bg-white"
              aria-label="Anterior"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button
              type="button"
              @click="nextFoto"
              class="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-stone-900 shadow-lg transition hover:bg-white"
              aria-label="Próxima"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
        </div>

        <div class="flex items-center justify-center gap-2 text-white/70 text-sm">
          <span>{{ currentIndex + 1 }} / {{ fotos.length }}</span>
        </div>
      </div>
    </div>

    <!-- Modal imagem em alta -->
    <div v-if="showHigh" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closeHigh" role="dialog" aria-modal="true" aria-label="Foto em alta" tabindex="-1">
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
import f1 from '../../Material Altus/DECORADO/05e29536-982a-4a7b-8301-6c0ea7aa5a6d.jpg'
import f2 from '../../Material Altus/DECORADO/770f3342-b93f-4b72-afcb-d43c373c158b.jpg'
import f3 from '../../Material Altus/DECORADO/b4a934d3-b138-4997-97a5-0105a8341784.jpg'
import f4 from '../../Material Altus/DECORADO/3a00508c-2d99-4ae2-a286-e475e125f472.jpg'
import f5 from '../../Material Altus/DECORADO/8bbc0f80-b349-4712-b905-eb63cb274352.jpg'
import f6 from '../../Material Altus/DECORADO/6fe21150-d589-482b-8a74-144cc661f7c9.jpg'
import f7 from '../../Material Altus/DECORADO/be401863-d501-4254-8f1f-392e7f7fa6d6.jpg'
import f8 from '../../Material Altus/DECORADO/367ca43d-dcee-46a5-8342-8936ea7eae5f.jpg'
import f9 from '../../Material Altus/DECORADO/4d6436fa-1b6e-41e8-a42b-90286243520c.jpg'
import bgCouro from '../../Material Altus/IDENTIDADE VISUAL/BACKGROUND COURO VERDE.png'
import { ref, computed } from 'vue'

const fotos = [
  { img: f1, title: 'Estar integrado ao jantar' },
  { img: f2, title: 'Varanda gourmet' },
  { img: f3, title: 'Suíte principal' },
  { img: f4, title: 'Cozinha funcional' },
  { img: f5, title: 'Banho com ventilação natural' },
  { img: f6, title: 'Dormitório juvenil' },
  { img: f7, title: 'Espaço home office' },
  { img: f8, title: 'Living ampliado' },
  { img: f9, title: 'Detalhes do decorado' },
]

const totalFotos = fotos.length
const currentIndex = ref(0)
const currentFoto = computed(() => {
  if (!totalFotos) {
    return { img: '', title: '' }
  }

  const normalized = ((currentIndex.value % totalFotos) + totalFotos) % totalFotos
  return fotos[normalized]
})

const showHigh = ref(false)
const highSrc = ref('')
const highAlt = ref('')
const openHigh = (src, alt) => { highSrc.value = src; highAlt.value = alt; showHigh.value = true }
const closeHigh = () => { showHigh.value = false }

const nextFoto = () => {
  if (!totalFotos) return
  currentIndex.value = (currentIndex.value + 1) % totalFotos
}

const prevFoto = () => {
  if (!totalFotos) return
  currentIndex.value = (currentIndex.value - 1 + totalFotos) % totalFotos
}
</script>
