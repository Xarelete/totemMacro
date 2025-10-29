<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>

    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-8 lg:py-8 text-white">
      <Transition name="item" appear>
        <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Vista dos Andares</h2>
      </Transition>

      <Transition name="item" appear>
        <p class="mt-3 text-white/85 max-w-2xl">
          Explore as perspectivas 360º das torres e dos andares do Altus América em realidade virtual.
        </p>
      </Transition>

      <div class="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] items-center">
        <Transition name="item" appear>
          <div class="space-y-6">
            <p class="text-white/80 max-w-xl">
              Acesse o tour virtual para vivenciar cada detalhe das vistas panorâmicas em 360º.
            </p>
            <button
              type="button"
              @click="openModal"
              class="inline-flex items-center gap-2 rounded-full bg-white text-stone-900 px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition animate-pulse"
            >
              Abrir tour 360º
            </button>
          </div>
        </Transition>

        <Transition name="item" appear>
          <div class="flex items-center justify-center overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl">
            <img
              :src="torreNoturna"
              alt="Vista noturna da torre do Altus América"
              class="w-full h-auto object-contain"
              :style="{ maxHeight: 'calc(100vh - 16rem)' }"
            />
          </div>
        </Transition>
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @keydown.esc.window="closeModal"
      role="dialog"
      aria-modal="true"
      aria-label="Tour 360 Altus América"
      tabindex="-1"
    >
      <div class="absolute inset-0 bg-black/70" @click="closeModal"></div>
      <div class="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
        <div class="flex items-center justify-between bg-white/10 px-6 py-3 text-white">
          <span class="font-semibold">Tour 360 Altus América</span>
          <button
            type="button"
            @click="closeModal"
            class="rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-stone-900 shadow hover:bg-white"
          >
            Fechar
          </button>
        </div>
        <iframe
          :src="kuulaUrl"
          title="Tour 360 Altus América"
          class="aspect-video w-full bg-black"
          allow="xr-spatial-tracking; gyroscope; accelerometer"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup>
import bgCouro from '../../materiais/identidade-visual/BACKGROUND-COURO-VERDE.png'
import torreNoturna from '../../materiais/imagens/TORRE-UNICA-NOTURNA.png'
import { ref } from 'vue'

const kuulaUrl = 'https://kuula.co/share/collection/7D4G0?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1&inst=pt'
const showModal = ref(false)
const openModal = () => { showModal.value = true }
const closeModal = () => { showModal.value = false }
</script>
