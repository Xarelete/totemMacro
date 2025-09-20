<template>
  <section class="mx-auto max-w-5xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl font-semibold">Fotos</h2></Transition>
    <Transition name="item" appear>
      <div class="mt-6 grid sm:grid-cols-3 gap-4">
        <div v-for="n in 9" :key="n" class="rounded-xl overflow-hidden border aspect-[4/3] bg-stone-100 grid place-items-center text-stone-500">
          Imagem {{ n }}
        </div>
      </div>
    </Transition>
  </section>
</template>
