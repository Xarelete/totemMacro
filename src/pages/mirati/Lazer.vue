<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10" :style="{ backgroundColor: '#002262' }"></div>

    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-16 lg:py-20 text-white">
      <Transition name="item" appear>
        <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Lazer</h2>
      </Transition>

      <div class="grid gap-12 lg:grid-cols-[2fr_1fr] items-start">
        <Transition name="item" appear>
          <div class="flex flex-col gap-6 mt-10">
            <div class="relative flex items-center justify-center gap-4 pb-16 sm:pb-0">
              <button type="button" @click="prevFeature" class="hidden sm:inline-flex items-center justify-center rounded-full bg-white/80 text-stone-900 w-12 h-12 shadow-lg hover:bg-white transition" aria-label="Anterior">
                <span aria-hidden="true">&lt;</span>
              </button>

              <Transition name="item" mode="out-in">
                <figure :key="currentFeature.title" class="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl cursor-pointer" @click="openHigh(currentFeature.img, currentFeature.title)">
                  <img :src="currentFeature.img" :alt="currentFeature.title" class="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover" />
                  <figcaption class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-lg font-medium">
                    {{ toTitleCase(cleanRight(currentFeature.title)) }}
                  </figcaption>
                </figure>
              </Transition>

              <button type="button" @click="nextFeature" class="hidden sm:inline-flex items-center justify-center rounded-full bg-white/80 text-stone-900 w-12 h-12 shadow-lg hover:bg-white transition" aria-label="Próxima">
                <span aria-hidden="true">&gt;</span>
              </button>

              <div class="absolute -bottom-14 flex w-full justify-between px-6 sm:hidden">
                <button type="button" @click="prevFeature" class="inline-flex items-center justify-center rounded-full bg-white/80 text-stone-900 w-12 h-12 shadow-lg hover:bg-white transition" aria-label="Anterior">
                  <span aria-hidden="true">&lt;</span>
                </button>
                <button type="button" @click="nextFeature" class="inline-flex items-center justify-center rounded-full bg-white/80 text-stone-900 w-12 h-12 shadow-lg hover:bg-white transition" aria-label="Próxima">
                  <span aria-hidden="true">&gt;</span>
                </button>
              </div>
            </div>

            
          </div>
        </Transition>

        <aside>
          <Transition name="item" appear>
            <h3 class="text-xl font-semibold">Mais de 12 itens de lazer</h3>
          </Transition>
          <TransitionGroup name="item" appear tag="ul" class="mt-4 space-y-2 text-white/80">
            <li v-for="(featureItem, idx) in features" :key="featureItem.title" class="p-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm shadow-lg cursor-pointer transition" :class="{ 'bg-white/20 border-white/60 text-white': currentIndex === idx }" :style="{ transitionDelay: `${idx * 50}ms` }" role="button" tabindex="0" @click="goToFeature(idx)" @keydown.enter.prevent="goToFeature(idx)" @keydown.space.prevent="goToFeature(idx)">
              {{ toTitleCase(cleanRight(featureItem.title)) }}
            </li>
          </TransitionGroup>
        </aside>
      </div>
    </div>

    <div v-if="showHigh" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closeHigh" role="dialog" aria-modal="true" aria-label="Imagem de lazer em alta" tabindex="-1">
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
// Imagens públicas do Mirati (substitua pelos seus arquivos)
const plantaLazer = '/mirati/lazer/planta-lazer.jpeg'
// fundo sólido definido inline (#002262)
import { ref, computed } from 'vue'

// Ordem fixa baseada nos arquivos presentes na pasta
const filenames = [
  'MIRATI-BRINQUEDOTECA-ALTA.jpg',
  'MIRATI-CHURRASQUEIRA-ALTA.jpg',
  'MIRATI-FESTAS-ALTA.jpg',
  'MIRATI-GOURMET-ALTA.jpg',
  'MIRATI-HORTA-ALTA.jpg',
  'MIRATI-JOGOS-ALTA.jpg',
  'MIRATI-PISCINA-ALTA.jpg',
  'MIRATI-QUADRA-ALTA.jpg',
  'MIRATTI-FITNESS-ALTA.jpg',
  'MIRATTI-HALL-ALTA.jpg',
  'MIRATTIPLAYGROUND-ALTA.jpg'
]

const prettyTitle = (name) => name
  .replace(/\.[^.]+$/, '')
  .replace(/[-_]+/g, ' ')
  .replace(/^MIRATTI?\s?/i, '')
  .trim()

// Remove somente nos textos da lista à direita
const cleanRight = (title) => title
  .replace(/\bmiratti?\b/gi, '')
  .replace(/\bmirati\b/gi, '')
  .replace(/\balta\b/gi, '')
  .replace(/\s{2,}/g, ' ')
  .trim()

// Converte para Title Case (primeira letra de cada palavra maiúscula)
const toTitleCase = (value) => {
  if (!value) return ''
  return value
    .toLowerCase()
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(' ')
}

const features = filenames.map((n) => ({
  img: `/mirati/lazer/${n}`,
  title: prettyTitle(n)
}))

const totalFeatures = features.length
const currentIndex = ref(0)
const currentFeature = computed(() => {
  if (!totalFeatures) return { img: '', title: '' }
  const normalized = ((currentIndex.value % totalFeatures) + totalFeatures) % totalFeatures
  return features[normalized]
})

const showHigh = ref(false)
const highSrc = ref('')
const highAlt = ref('')
const modalIndex = ref(-1) // -1 quando não for item da lista (ex.: planta completa)
const canNavigate = computed(() => modalIndex.value >= 0 && totalFeatures > 1)

const syncModalToIndex = () => {
  const item = features[((modalIndex.value % totalFeatures) + totalFeatures) % totalFeatures]
  if (!item) return
  highSrc.value = item.img
  highAlt.value = item.title
}

const openHigh = (src, alt) => {
  const idx = features.findIndex((f) => f.img === src)
  modalIndex.value = idx
  highSrc.value = src
  highAlt.value = alt
  showHigh.value = true
}
const closeHigh = () => { showHigh.value = false; modalIndex.value = -1 }

const modalNext = () => { if (!canNavigate.value) return; modalIndex.value = (modalIndex.value + 1) % totalFeatures; syncModalToIndex() }
const modalPrev = () => { if (!canNavigate.value) return; modalIndex.value = (modalIndex.value - 1 + totalFeatures) % totalFeatures; syncModalToIndex() }

const nextFeature = () => { if (!totalFeatures) return; currentIndex.value = (currentIndex.value + 1) % totalFeatures }
const prevFeature = () => { if (!totalFeatures) return; currentIndex.value = (currentIndex.value - 1 + totalFeatures) % totalFeatures }
const goToFeature = (index) => { if (!totalFeatures) return; const normalized = ((index % totalFeatures) + totalFeatures) % totalFeatures; currentIndex.value = normalized }
</script>


