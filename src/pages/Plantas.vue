<template>
  <section class="mx-auto max-w-5xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl font-semibold">Plantas</h2></Transition>
    <Transition name="item" appear>
      <p class="mt-3 text-stone-600">Galeria simples para inserir as plantas em alta resolução.</p>
    </Transition>
    <Transition name="item" appear>
      <div class="mt-6 grid sm:grid-cols-3 gap-4">
        <div v-for="n in 6" :key="n" class="rounded-xl overflow-hidden border aspect-square bg-stone-100 grid place-items-center text-stone-500">
          Planta {{ n }}
        </div>
      </div>
    </Transition>
  </section>
</template>
