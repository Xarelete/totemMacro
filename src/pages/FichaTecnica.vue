<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <Transition name="item" appear>
      <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Ficha Técnica</h2>
    </Transition>

    <TransitionGroup name="item" appear tag="div" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      <div v-for="(s, idx) in specs" :key="s.title" class="p-4 rounded-xl border" :style="{ transitionDelay: `${idx * 70}ms` }">
        <strong>{{ s.title }}</strong>
        <div class="text-stone-700" v-html="s.desc" />
      </div>
    </TransitionGroup>

    <TransitionGroup name="item" appear tag="div" class="mt-8 grid sm:grid-cols-2 gap-4">
      <div v-for="(d, idx) in difs" :key="d.title" class="p-5 rounded-2xl border" :style="{ transitionDelay: `${idx * 120}ms` }">
        <h3 class="font-semibold">{{ d.title }}</h3>
        <p class="mt-2 text-stone-700 text-sm">{{ d.text }}</p>
      </div>
    </TransitionGroup>

    <Transition name="item" appear>
      <div class="mt-10">
        <img :src="ficha" alt="Ficha Técnica — Altus América" class="w-full rounded-2xl border" />
      </div>
    </Transition>
  </section>
</template>

<script setup>
import ficha from '../../Material Altus/FICHA TÉCNICA/Informações.png'

const specs = [
  { title: 'Empreendimento', desc: 'Altus América' },
  { title: 'Endereço', desc: 'Rua Iraci Gonçalves Ferreira, nº 100<br/>Jardim América — São José dos Campos/SP' },
  { title: 'Área do Terreno', desc: '14.602,35 m²' },
  { title: 'Área Construída', desc: '40.135,84 m²' },
  { title: 'Torres', desc: '2 torres residenciais' },
  { title: 'Pavimentos', desc: '30 (25 residenciais)' },
  { title: 'Elevadores', desc: '3 por torre com gerador + 1 de transbordo' },
  { title: 'Unidades', desc: '200 apês de 86,95 m² (3 dorms, 2 vagas, hobby box)<br/>100 apês de 66,66 m² (2 dorms, 1 vaga)' },
  { title: 'Certificações', desc: 'PBQP‑H • ISO 9001' },
]

const difs = [
  {
    title: 'Diferenciais — Áreas Comuns',
    text: '+30 itens de lazer equipados, climatizados e mobiliados; gerador full; Wi‑Fi; bicicletário; quadra de beach tennis oficial; captação e reaproveitamento de águas pluviais; elevador privativo para visitantes; lavanderia OMO; paisagismo assinado; piscina com borda infinita; ampla academia indoor.'
  },
  {
    title: 'Diferenciais — Áreas Privativas',
    text: 'Infra para aquecedor a gás; área técnica e pontos/drenos para ar‑condicionado; janela blackout com infra para automação; hobby box no andar (3 dorms); banheiros com ventilação natural; opção de churrasqueira a gás ou carvão; kit personalização; unidades com ISO 9001.'
  }
]
</script>
