<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Plantas</h2></Transition>
    <Transition name="item" appear>
      <p class="mt-3 text-stone-700">Duas tipologias planejadas para conforto e funcionalidade.</p>
    </Transition>

    <Transition name="item" appear>
      <div class="mt-6 grid sm:grid-cols-2 gap-6">
        <figure class="rounded-2xl overflow-hidden border bg-white">
          <img :src="planta2" alt="Planta 2 dormitórios — 66,66 m²" class="w-full h-auto" />
          <figcaption class="p-4">
            <h3 class="font-semibold">66,66 m² — 2 dormitórios (1 suíte)</h3>
            <p class="mt-1 text-stone-700 text-sm">1 banheiro • cozinha • área de serviço • sala de jantar/estar • varanda gourmet • 1 vaga</p>
            <a :href="planta2" target="_blank" class="inline-block mt-3 px-4 py-2 rounded-full border hover:bg-stone-50">Ver em alta</a>
          </figcaption>
        </figure>

        <figure class="rounded-2xl overflow-hidden border bg-white">
          <img :src="planta3" alt="Planta 3 dormitórios — 86,95 m²" class="w-full h-auto" />
          <figcaption class="p-4">
            <h3 class="font-semibold">86,95 m² — 3 dormitórios (1 suíte)</h3>
            <p class="mt-1 text-stone-700 text-sm">1 banheiro • 1 lavabo • cozinha • área de serviço • sala de jantar/estar • varanda gourmet • 2 vagas com hobby box</p>
            <a :href="planta3" target="_blank" class="inline-block mt-3 px-4 py-2 rounded-full border hover:bg-stone-50">Ver em alta</a>
          </figcaption>
        </figure>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import planta2 from '../../Material Altus/PLANTAS/PLANTA DE 2 DORMITÓRIOS.jpg'
import planta3 from '../../Material Altus/PLANTAS/PLANTA DE 3 DORMITÓRIOS.jpg'
</script>
