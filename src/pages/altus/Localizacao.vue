<template>
  <section class="relative" :style="bgStyle">
    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-12 lg:py-12 grid lg:grid-cols-[2fr_1fr] gap-12 text-white">
      <div class="flex flex-col gap-6">
        <Transition name="item" appear>
          <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Localização</h2>
        </Transition>

        <Transition name="item" appear>
          <p class="text-white/90">
            Rua Iraci Gonçalves Ferreira, nº 100 — Jardim América, São José dos Campos/SP.
          </p>
        </Transition>

        <Transition name="item" appear>
          <div class="flex flex-col gap-4">
            <div class="flex-1 rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm min-h-[22rem] lg:min-h-[26rem] w-[620px] h-[400px]">
              <img :src="mapa" alt="Mapa de localização — Altus América" class="w-full h-full object-cover" />
            </div>

            <button
              type="button"
              @click="openHigh(plantaTorres, 'Planta de implantação das torres')"
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
  </section>
</template>

<script setup>
import mapa from '../../../materiais/localizacao/localizacao-full.jpeg'
import plantaTorres from '../../../materiais/localizacao/planta-implantacao-torres.jpeg'
import { ref } from 'vue'
import background from '../../../materiais/identidade-visual/BACKGROUND-COURO-VERDE.png'

const proximos = [
  '5 min Hospital Municipal',
  '2 min Berçário e Educação Infantil',
  '5 min Avenida JK',
  '5 min Museu Interativo de Ciências',
  '3 min Supermercado'
]

const bgStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100dvh',
}

const showHigh = ref(false)
const highSrc = ref('')
const highAlt = ref('')
const openHigh = (src, alt) => { highSrc.value = src; highAlt.value = alt; showHigh.value = true }
const closeHigh = () => { showHigh.value = false }
</script>


