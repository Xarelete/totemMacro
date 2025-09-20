<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Lazer</h2></Transition>

    <TransitionGroup name="item" appear tag="div" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <figure v-for="(f, idx) in features" :key="f.title" class="rounded-2xl overflow-hidden border bg-white" :style="{ transitionDelay: `${idx * 70}ms` }">
        <img :src="f.img" :alt="f.title" class="w-full h-48 object-cover" />
        <figcaption class="p-4 font-medium">{{ f.title }}</figcaption>
      </figure>
    </TransitionGroup>

    <div class="mt-8">
      <Transition name="item" appear>
        <h3 class="text-xl font-semibold">+ de 2.000 m² de lazer</h3>
      </Transition>
      <TransitionGroup name="item" appear tag="ul" class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-stone-700">
        <li v-for="(a, idx) in amenitiesList" :key="a" class="p-4 rounded-xl border" :style="{ transitionDelay: `${idx * 50}ms` }">{{ a }}</li>
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import academia from '../../Material Altus/IMAGENS EM ALTA/ALTUS-ACADEMIA-CENA-1-ALTA.jpg'
import gourmet from '../../Material Altus/IMAGENS EM ALTA/ALTUS-GOURMET-CENA-1-ALTA.jpg'
import wine from '../../Material Altus/IMAGENS EM ALTA/ALTUS-WINE-BAR-ALTA.jpg'
import brinquedoteca from '../../Material Altus/IMAGENS EM ALTA/ALTUS-BRINQUEDOTECA-LADO-A-ALTA.jpg'
import coworking from '../../Material Altus/IMAGENS EM ALTA/ALTUS-COWORKING-ALTA.jpg'
import yoga from '../../Material Altus/IMAGENS EM ALTA/ALTUS-YOGA-ALTA.jpg'

const features = [
  { img: academia, title: 'Academia Indoor' },
  { img: gourmet, title: 'Salão Gourmet' },
  { img: wine, title: 'Wine Bar' },
  { img: brinquedoteca, title: 'Brinquedoteca' },
  { img: coworking, title: 'Coworking' },
  { img: yoga, title: 'Espaço Yoga' },
]

const amenitiesList = [
  'Piscinas adulto e infantil, borda infinita',
  'Coworking • Mini Market • Espaço Delivery',
  'Spa • Sauna • Área Fitness Interna e Externa',
  'Quadra de Beach Tennis oficial',
  'Salão de Festas • Salão de Jogos',
  'Brinquedoteca • Baby Care • Baby Space',
  'Pet Care • Pet Place • Bicicletário',
  'Espaço CrossFit • Redário • Fireplace',
  'Praça Interna • Lounge da Piscina',
]
</script>
