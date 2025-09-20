<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Lazer</h2></Transition>

    <Transition name="item" appear>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <figure class="rounded-2xl overflow-hidden border bg-white">
          <img :src="academia" alt="Academia" class="w-full h-48 object-cover" />
          <figcaption class="p-4 font-medium">Academia Indoor</figcaption>
        </figure>
        <figure class="rounded-2xl overflow-hidden border bg-white">
          <img :src="gourmet" alt="Salão Gourmet" class="w-full h-48 object-cover" />
          <figcaption class="p-4 font-medium">Salão Gourmet</figcaption>
        </figure>
        <figure class="rounded-2xl overflow-hidden border bg-white">
          <img :src="wine" alt="Wine Bar" class="w-full h-48 object-cover" />
          <figcaption class="p-4 font-medium">Wine Bar</figcaption>
        </figure>
        <figure class="rounded-2xl overflow-hidden border bg-white">
          <img :src="brinquedoteca" alt="Brinquedoteca" class="w-full h-48 object-cover" />
          <figcaption class="p-4 font-medium">Brinquedoteca</figcaption>
        </figure>
        <figure class="rounded-2xl overflow-hidden border bg-white">
          <img :src="influencer" alt="Coworking" class="w-full h-48 object-cover" />
          <figcaption class="p-4 font-medium">Coworking</figcaption>
        </figure>
        <figure class="rounded-2xl overflow-hidden border bg-white">
          <img :src="yoga" alt="Espaço Yoga" class="w-full h-48 object-cover" />
          <figcaption class="p-4 font-medium">Espaço Yoga</figcaption>
        </figure>
      </div>
    </Transition>

    <Transition name="item" appear>
      <div class="mt-8">
        <h3 class="text-xl font-semibold">+ de 2.000 m² de lazer</h3>
        <ul class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-stone-700">
          <li class="p-4 rounded-xl border">Piscinas adulto e infantil, borda infinita</li>
          <li class="p-4 rounded-xl border">Coworking • Mini Market • Espaço Delivery</li>
          <li class="p-4 rounded-xl border">Spa • Sauna • Área Fitness Interna e Externa</li>
          <li class="p-4 rounded-xl border">Quadra de Beach Tennis oficial</li>
          <li class="p-4 rounded-xl border">Salão de Festas • Salão de Jogos</li>
          <li class="p-4 rounded-xl border">Brinquedoteca • Baby Care • Baby Space</li>
          <li class="p-4 rounded-xl border">Pet Care • Pet Place • Bicicletário</li>
          <li class="p-4 rounded-xl border">Espaço CrossFit • Redário • Fireplace</li>
          <li class="p-4 rounded-xl border">Praça Interna • Lounge da Piscina</li>
        </ul>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import academia from '../../Material Altus/IMAGENS EM ALTA/ALTUS-ACADEMIA-CENA-1-ALTA.jpg'
import gourmet from '../../Material Altus/IMAGENS EM ALTA/ALTUS-GOURMET-CENA-1-ALTA.jpg'
import wine from '../../Material Altus/IMAGENS EM ALTA/ALTUS-WINE-BAR-ALTA.jpg'
import brinquedoteca from '../../Material Altus/IMAGENS EM ALTA/ALTUS-BRINQUEDOTECA-LADO-A-ALTA.jpg'
import influencer from '../../Material Altus/IMAGENS EM ALTA/ALTUS-COWORKING-ALTA.jpg'
import yoga from '../../Material Altus/IMAGENS EM ALTA/ALTUS-YOGA-ALTA.jpg'
</script>
