<template>
  <section class="mx-auto max-w-5xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl font-semibold">Ficha Técnica</h2></Transition>
    <Transition name="item" appear>
      <div class="mt-6 grid sm:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl border"><strong>Arquitetura</strong><div class="text-stone-600">Escritório XYZ</div></div>
        <div class="p-4 rounded-xl border"><strong>Terreno</strong><div class="text-stone-600">5.000 m²</div></div>
        <div class="p-4 rounded-xl border"><strong>Torre</strong><div class="text-stone-600">1 torre, 40 andares</div></div>
        <div class="p-4 rounded-xl border"><strong>Vagas</strong><div class="text-stone-600">3 ou 4 por unidade</div></div>
      </div>
    </Transition>
  </section>
</template>
