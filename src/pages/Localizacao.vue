<template>
  <section class="mx-auto max-w-5xl px-4 py-12">
    <Transition name="item" appear>
      <h2 class="text-3xl font-semibold">Localização</h2>
    </Transition>
    <Transition name="item" appear>
      <p class="mt-3 text-stone-600">Endereço privilegiado próximo a parques, centros comerciais e vias de acesso. Insira aqui o mapa interativo (Google Maps) quando disponível.</p>
    </Transition>
    <Transition name="item" appear>
      <div class="mt-6 rounded-xl border aspect-video bg-gradient-to-br from-stone-100 to-stone-200 grid place-items-center text-stone-500">
        Mapa placeholder
      </div>
    </Transition>
  </section>
</template>
