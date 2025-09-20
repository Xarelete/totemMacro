<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Plantas</h2></Transition>
    <Transition name="item" appear>
      <p class="mt-3 text-stone-700">Duas tipologias planejadas para conforto e funcionalidade.</p>
    </Transition>

    <TransitionGroup name="item" appear tag="div" class="mt-6 grid sm:grid-cols-2 gap-6">
      <figure v-for="(p, idx) in plantas" :key="p.title" class="rounded-2xl overflow-hidden border bg-white" :style="{ transitionDelay: `${idx * 90}ms` }">
        <img :src="p.img" :alt="p.alt" class="w-full h-auto" />
        <figcaption class="p-4">
          <h3 class="font-semibold">{{ p.title }}</h3>
          <p class="mt-1 text-stone-700 text-sm">{{ p.desc }}</p>
          <a :href="p.img" target="_blank" class="inline-block mt-3 px-4 py-2 rounded-full border hover:bg-stone-50">Ver em alta</a>
        </figcaption>
      </figure>
    </TransitionGroup>
  </section>
</template>

<script setup>
import planta2 from '../../Material Altus/PLANTAS/PLANTA DE 2 DORMITÓRIOS.jpg'
import planta3 from '../../Material Altus/PLANTAS/PLANTA DE 3 DORMITÓRIOS.jpg'

const plantas = [
  {
    img: planta2,
    alt: 'Planta 2 dormitórios — 66,66 m²',
    title: '66,66 m² — 2 dormitórios (1 suíte)',
    desc: '1 banheiro • cozinha • área de serviço • sala de jantar/estar • varanda gourmet • 1 vaga'
  },
  {
    img: planta3,
    alt: 'Planta 3 dormitórios — 86,95 m²',
    title: '86,95 m² — 3 dormitórios (1 suíte)',
    desc: '1 banheiro • 1 lavabo • cozinha • área de serviço • sala de jantar/estar • varanda gourmet • 2 vagas com hobby box'
  }
]
</script>
