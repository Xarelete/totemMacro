<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
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

    <Transition name="item" appear>
      <div class="mt-8">
        <h3 class="text-xl font-semibold">Por perto</h3>
        <ul class="mt-4 grid sm:grid-cols-3 gap-3 text-stone-700">
          <li class="p-4 rounded-xl border">Linha Verde — 1 min</li>
          <li class="p-4 rounded-xl border">Rodovia Presidente Dutra — 1 min</li>
          <li class="p-4 rounded-xl border">Shopping Jardim Oriente — 5 min</li>
          <li class="p-4 rounded-xl border">Shopping Vale Sul — 4 min</li>
          <li class="p-4 rounded-xl border">Centro da Juventude — 3 min</li>
          <li class="p-4 rounded-xl border">Anel Viário — 5 min</li>
          <li class="p-4 rounded-xl border">Drogaria São Paulo — 4 min</li>
          <li class="p-4 rounded-xl border">Padaria Flor de Ypê — 4 min</li>
          <li class="p-4 rounded-xl border">Ponto Garden — 2 min</li>
        </ul>
      </div>
    </Transition>
  </section>
  
</template>

<script setup>
import mapa from '../../Material Altus/LOCALIZAÇÃO/Localização.png'
</script>
