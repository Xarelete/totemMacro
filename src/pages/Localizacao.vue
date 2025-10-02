<template>
  <section class="relative" :style="bgStyle">
    <div class="mx-auto max-w-[1200px] xl:max-w-[1400px] px-4 py-16 lg:py-24 grid lg:grid-cols-[2fr_1fr] gap-12 text-white">
      <!-- Main column -->
      <div class="flex flex-col gap-6">
        <Transition name="item" appear>
          <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Localização</h2>
        </Transition>

        <Transition name="item" appear>
          <p class="mt-3 text-white/90">
            Rua Iraci Gonçalves Ferreira, nº 100 — Jardim América, São José dos Campos/SP.
          </p>
        </Transition>

        <Transition name="item" appear>
          <div>
            <div class="flex-1 rounded-3xl overflow-hidden border border-white/20 shadow-2xl backdrop-blur-sm min-h-[20rem] lg:min-h-[28rem]">
              <img :src="mapa" alt="Mapa de localização — Altus América" class="" />
            </div>
          </div>
        </Transition>
      </div>

      <!-- Sidebar -->
      <aside class="lg:col-span-1">
        <div class="flex flex-col gap-4 lg:sticky lg:top-24">
          <Transition name="item" appear>
            <h3 class="text-xl font-semibold text-white">Por perto</h3>
          </Transition>
          <TransitionGroup name="item" appear tag="ul" class="grid gap-4 text-white">
            <li v-for="(p, i) in proximos" :key="p" class="p-4 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-sm shadow-lg" :style="{ transitionDelay: `${i * 80}ms` }">
              {{ p }}
            </li>
          </TransitionGroup>
        </div>
      </aside>
    </div>
  </section>

</template>

<script setup>
import mapa from '../../Material Altus/LOCALIZAÇÃO/Localização.png'

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

import background from '../../Material Altus/IDENTIDADE VISUAL/BACKGROUND COURO VERDE.png'
const bgStyle = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100dvh',
}
</script>
