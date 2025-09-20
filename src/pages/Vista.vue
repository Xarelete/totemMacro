<template>
  <section class="mx-auto max-w-5xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl font-semibold">Vista dos Andares</h2></Transition>
    <Transition name="item" appear>
      <p class="mt-3 text-stone-600">Selecione um andar para visualizar a vista panorâmica correspondente (placeholder).</p>
    </Transition>
    <Transition name="item" appear>
      <div class="mt-6 flex flex-wrap gap-2">
        <button v-for="n in 8" :key="n" class="px-3 py-1 rounded-full border hover:bg-stone-100 transition">Andar {{ n*5 }}</button>
      </div>
    </Transition>
    <Transition name="item" appear>
      <div class="mt-6 rounded-xl border aspect-video bg-stone-100 grid place-items-center text-stone-500">
        Panorama placeholder
      </div>
    </Transition>
  </section>
</template>
