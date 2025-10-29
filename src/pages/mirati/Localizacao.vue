<template>
  <section class="relative" :style="bgStyle">
    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-12 lg:py-12 grid lg:grid-cols-[2fr_1fr] gap-12 text-white">
      <div class="flex flex-col gap-6">
        <Transition name="item" appear>
          <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Localização</h2>
        </Transition>

        <Transition name="item" appear>
          <p class="text-white/90">
            Rua Alteia, 104, São José dos Campos - SP
          </p>
        </Transition>

        <Transition name="item" appear>
          <div class="flex flex-col gap-4">
            <div class="flex-1 rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm min-h-[22rem] lg:min-h-[26rem] w-[620px] h-[400px]">
              <iframe
                class="w-full h-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Rua%20Alteia%2C%20104%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP&output=embed">
              </iframe>
            </div>

            <button
              type="button"
              @click="openPdf"
              class="inline-flex w-max items-center gap-2 rounded-full bg-white text-stone-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition animate-pulse"
            >
              Veja planta completa
            </button>
          </div>
        </Transition>
      </div>

      <aside class="lg:col-span-1">
        <div class="flex flex-col gap-4 lg:sticky lg:top-24">
          <Transition name="item" appear>
            <h3 class="text-xl font-semibold text-white">Por perto</h3>
          </Transition>
          <TransitionGroup name="item" appear tag="ul" class="grid gap-3 text-white">
            <li v-for="(p, i) in proximos" :key="p" class="px-5 py-[0.6rem] rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm shadow-lg" :style="{ transitionDelay: `${i * 80}ms` }">
              {{ p }}
            </li>
          </TransitionGroup>
        </div>
      </aside>
    </div>
    <div v-if="showHigh" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closeHigh" role="dialog" aria-modal="true" aria-label="Planta em alta" tabindex="-1">
      <div class="absolute inset-0 bg-black/70" @click="closeHigh"></div>
      <div class="relative z-10 w-full max-w-5xl">
        <button @click="closeHigh" class="absolute -top-10 right-0 px-3 py-1.5 rounded-full bg-white text-stone-900 shadow hover:shadow-md">Fechar</button>
        <Transition name="fade" appear>
          <img :src="highSrc" :alt="highAlt" class="w-full h-auto rounded-2xl border shadow-lg" />
        </Transition>
      </div>
    </div>

    <!-- Modal para PDF (visualização na própria tela) -->
    <div v-if="showPdf" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closePdf" role="dialog" aria-modal="true" aria-label="Visualização da planta (PDF)" tabindex="-1">
      <div class="absolute inset-0 bg-black/70" @click="closePdf"></div>
      <div class="relative z-10 w-full max-w-5xl h-[80vh]">
        <button @click="closePdf" class="absolute -top-10 right-0 px-3 py-1.5 rounded-full bg-white text-stone-900 shadow hover:shadow-md">Fechar</button>
        <Transition name="fade" appear>
          <div
            class="w-full h-full rounded-2xl overflow-hidden border shadow-lg bg-white relative cursor-grab"
            @mousedown="onDragStart"
            @mousemove="onDragMove"
            @mouseup="onDragEnd"
            @mouseleave="onDragEnd"
            @touchstart.passive="onTouchStart"
            @touchmove.passive="onTouchMove"
            @touchend.passive="onTouchEnd"
          >
            <div class="absolute top-3 left-3 z-20 inline-flex items-center gap-2">
              <button type="button" @click="zoomOut" class="px-3 py-1.5 rounded-full bg-white/95 text-stone-900 shadow hover:bg-white disabled:opacity-50" :disabled="zoom <= minZoom" aria-label="Diminuir zoom">−</button>
              <button type="button" @click="zoomIn" class="px-3 py-1.5 rounded-full bg-white/95 text-stone-900 shadow hover:bg-white disabled:opacity-50" :disabled="zoom >= maxZoom" aria-label="Aumentar zoom">+</button>
            </div>
            <div
              class="w-full h-full"
              :style="{
                transform: `translate(${offsetX}px, ${offsetY}px) scale(${zoom})`,
                transformOrigin: 'center center'
              }"
            >
              <iframe
                src="/mirati/localizacao/localizacao2.pdf#view=FitH&toolbar=0"
                class="w-full h-full pointer-events-none"
                title="Planta completa (PDF)"
              ></iframe>
            </div>
          </div>
        </Transition>
        <div class="mt-3 text-right">
          <a href="/mirati/localizacao/localizacao2.pdf" target="_blank" rel="noopener" class="inline-block text-white/90 underline">Baixar PDF</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// fundo sólido (#002262)

const proximos = [
  'Linha Verde — 1 min',
  'Rodovia Presidente Dutra — 1 min',
  'Shopping Jardim Oriente — 5 min',
  'Shopping Vale Sul — 4 min',
  'Centro da Juventude — 3 min',
  'Anel Viário — 5 min',
  'Drogaria São Paulo — 4 min',
  'Padaria Flor de Ypê — 4 min',
  'Ponto Garden — 2 min'
]

const bgStyle = {
  backgroundColor: '#002262',
  minHeight: '100dvh'
}

const showHigh = ref(false)
const highSrc = ref('')
const highAlt = ref('')
const openHigh = (src, alt) => { highSrc.value = src; highAlt.value = alt; showHigh.value = true }
const closeHigh = () => { showHigh.value = false }

// Visualização de PDF em modal
const showPdf = ref(false)
const openPdf = () => { showPdf.value = true }
const closePdf = () => { showPdf.value = false }

// Zoom e arrasto do PDF
const minZoom = 1
const maxZoom = 3
const zoomStep = 0.2
const zoom = ref(1)
const offsetX = ref(0)
const offsetY = ref(0)
const isDragging = ref(false)
let startX = 0
let startY = 0
let baseX = 0
let baseY = 0

const zoomIn = () => {
  if (zoom.value < maxZoom) zoom.value = Math.min(maxZoom, +(zoom.value + zoomStep).toFixed(2))
}
const zoomOut = () => {
  if (zoom.value > minZoom) {
    zoom.value = Math.max(minZoom, +(zoom.value - zoomStep).toFixed(2))
    if (zoom.value === minZoom) { offsetX.value = 0; offsetY.value = 0 }
  }
}

const onDragStart = (e) => {
  if (zoom.value === 1) return
  isDragging.value = true
  startX = e.clientX
  startY = e.clientY
  baseX = offsetX.value
  baseY = offsetY.value
}
const onDragMove = (e) => {
  if (!isDragging.value) return
  offsetX.value = baseX + (e.clientX - startX)
  offsetY.value = baseY + (e.clientY - startY)
}
const onDragEnd = () => { isDragging.value = false }

// Suporte básico a toque
const onTouchStart = (e) => {
  if (zoom.value === 1) return
  const t = e.touches[0]
  isDragging.value = true
  startX = t.clientX
  startY = t.clientY
  baseX = offsetX.value
  baseY = offsetY.value
}
const onTouchMove = (e) => {
  if (!isDragging.value) return
  const t = e.touches[0]
  offsetX.value = baseX + (t.clientX - startX)
  offsetY.value = baseY + (t.clientY - startY)
}
const onTouchEnd = () => { isDragging.value = false }
</script>


