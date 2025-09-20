<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <Transition name="item" appear><h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Fotos</h2></Transition>
    <TransitionGroup name="item" appear tag="div" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <img v-for="(img, idx) in imagens" :key="idx" :src="img" alt="Foto do empreendimento" class="rounded-xl border w-full h-56 object-cover" :style="{ transitionDelay: `${idx * 60}ms` }" />
    </TransitionGroup>
  </section>
</template>

<script setup>
import f1 from '../../Material Altus/DECORADO/05e29536-982a-4a7b-8301-6c0ea7aa5a6d.jpg'
import f2 from '../../Material Altus/DECORADO/770f3342-b93f-4b72-afcb-d43c373c158b.jpg'
import f3 from '../../Material Altus/DECORADO/b4a934d3-b138-4997-97a5-0105a8341784.jpg'
import f4 from '../../Material Altus/DECORADO/3a00508c-2d99-4ae2-a286-e475e125f472.jpg'
import f5 from '../../Material Altus/DECORADO/8bbc0f80-b349-4712-b905-eb63cb274352.jpg'
import f6 from '../../Material Altus/DECORADO/6fe21150-d589-482b-8a74-144cc661f7c9.jpg'
import f7 from '../../Material Altus/DECORADO/be401863-d501-4254-8f1f-392e7f7fa6d6.jpg'
import f8 from '../../Material Altus/DECORADO/367ca43d-dcee-46a5-8342-8936ea7eae5f.jpg'
import f9 from '../../Material Altus/DECORADO/4d6436fa-1b6e-41e8-a42b-90286243520c.jpg'

const imagens = [f1, f2, f3, f4, f5, f6, f7, f8, f9]
</script>
