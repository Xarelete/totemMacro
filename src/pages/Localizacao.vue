<template>
  <section class="mx-auto max-w-7xl px-4 py-12">
    <div class="grid lg:grid-cols-3 gap-8">
      <!-- Main column -->
      <div class="lg:col-span-2">
        <Transition name="item" appear>
          <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Localização</h2>
        </Transition>

        <Transition name="item" appear>
          <p class="mt-3 text-stone-700">
            Rua Iraci Gonçalves Ferreira, nº 100 — Jardim América, São José dos Campos/SP.
          </p>
        </Transition>

        <Transition name="item" appear>
          <div class="mt-6 rounded-2xl overflow-hidden border">
            <img :src="mapa" alt="Mapa de localização — Altus América" class="w-full h-auto" />
          </div>
        </Transition>
      </div>

      <!-- Sidebar -->
      <aside class="lg:col-span-1">
        <div class="lg:sticky lg:top-24">
          <Transition name="item" appear>
            <h3 class="text-xl font-semibold">Por perto</h3>
          </Transition>
          <TransitionGroup name="item" appear tag="ul" class="mt-4 grid gap-3 text-stone-700">
            <li v-for="(p, i) in proximos" :key="p" class="p-4 rounded-xl border" :style="{ transitionDelay: `${i * 80}ms` }">
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
</script>
