<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>

    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-16 lg:py-20 text-white">
      <Transition name="item" appear>
        <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Vista dos Andares</h2>
      </Transition>

      <Transition name="item" appear>
        <p class="mt-3 text-white/85 max-w-2xl">
          Explore as perspectivas 360º das torres e dos andares do Altus América em realidade virtual.
        </p>
      </Transition>

      <div class="mt-10 space-y-10">
        <div>
          <Transition name="item" appear>
            <h3 class="text-xl font-semibold text-white">Torres</h3>
          </Transition>
          <TransitionGroup name="item" appear tag="div" class="mt-4 grid gap-4 sm:grid-cols-2">
            <button
              v-for="(torre, idx) in torres"
              :key="torre"
              type="button"
              class="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 px-6 py-5 text-left shadow-lg backdrop-blur-sm transition hover:border-white/40 hover:bg-white/20"
              :style="{ transitionDelay: `${idx * 80}ms` }"
              @click="openModal(torre)"
            >
              <span class="text-lg font-semibold text-white">{{ torre }}</span>
              <span class="mt-2 block text-sm text-white/70">Clique para abrir a vista 360º</span>
            </button>
          </TransitionGroup>
        </div>

        <div>
          <Transition name="item" appear>
            <h3 class="text-xl font-semibold text-white">Andares 1 a 6</h3>
          </Transition>
          <TransitionGroup name="item" appear tag="div" class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <button
              v-for="(andar, idx) in andares"
              :key="andar"
              type="button"
              class="group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 px-6 py-5 text-left shadow-lg backdrop-blur-sm transition hover:border-white/40 hover:bg-white/20"
              :style="{ transitionDelay: `${idx * 60}ms` }"
              @click="openModal(andar)"
            >
              <span class="text-lg font-semibold text-white">{{ andar }}</span>
              <span class="mt-2 block text-sm text-white/70">Clique para abrir a vista 360º</span>
            </button>
          </TransitionGroup>
        </div>
      </div>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @keydown.esc.window="closeModal"
      role="dialog"
      aria-modal="true"
      aria-label="Vista 360 graus"
      tabindex="-1"
    >
      <div class="absolute inset-0 bg-black/70" @click="closeModal"></div>
      <div class="relative z-10 w-full max-w-5xl overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
        <div class="flex items-center justify-between bg-white/10 px-6 py-3 text-white">
          <span class="font-semibold">{{ activeLabel }}</span>
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
import bgCouro from '../../Material Altus/IDENTIDADE VISUAL/BACKGROUND COURO VERDE.png'
import { ref } from 'vue'

const torres = ['Torre A', 'Torre B']
const andares = ['1º andar', '2º andar', '3º andar', '4º andar', '5º andar', '6º andar']
const kuulaUrl = 'https://kuula.co/share/collection/7D4G0?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&thumbs=1&inst=pt'

const showModal = ref(false)
const activeLabel = ref('')
const openModal = (label) => { activeLabel.value = label; showModal.value = true }
const closeModal = () => { showModal.value = false; activeLabel.value = '' }
</script>
