<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>
    <div class="absolute inset-y-0 right-0 left-1/2 z-0 bg-no-repeat bg-right bg-contain pointer-events-none" :style="{ backgroundImage: `url(${torreNoturna})` }"></div>

    <div class="mx-auto max-w-6xl px-4 py-12 text-white">
      <div class="lg:grid lg:grid-cols-1 lg:gap-8 min-h-dvh">
        <!-- Left column: content -->
        <div>
          <Transition name="item" appear>
            <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Ficha Técnica</h2>
          </Transition>
          <Transition name="item" appear>
            <img :src="logoCouro" alt="Altus América" class="mt-3 h-10 sm:h-12 w-auto" />
          </Transition>

          <TransitionGroup name="item" appear tag="div" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div v-for="(s, idx) in specs" :key="s.title" class="p-4 rounded-xl border border-white/20" :style="{ transitionDelay: `${idx * 70}ms` }">
              <strong>{{ s.title }}</strong>
              <div class="text-white/80" v-html="s.desc" />
            </div>
          </TransitionGroup>

          <TransitionGroup name="item" appear tag="div" class="mt-8 grid sm:grid-cols-2 gap-4">
            <div v-for="(d, idx) in difs" :key="d.title" class="p-5 rounded-2xl border border-white/20" :style="{ transitionDelay: `${idx * 120}ms` }">
              <h3 class="font-semibold">{{ d.title }}</h3>
              <p class="mt-2 text-white/80 text-sm">{{ d.text }}</p>
            </div>
          </TransitionGroup>

          <Transition name="item" appear>
            <div class="mt-8">
              <button @click="openFicha" class="inline-block px-4 py-2 rounded-full border border-white/60 text-white hover:bg-white hover:text-stone-900">
                Ver ficha técnica completa
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <!-- Modal: Ficha Técnica -->
    <div v-if="showFicha" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closeFicha" role="dialog" aria-modal="true" aria-label="Ficha técnica" tabindex="-1">
      <div class="absolute inset-0 bg-black/60" @click="closeFicha"></div>
      <div class="relative z-10 w-full max-w-5xl">
        <button @click="closeFicha" class="absolute -top-10 right-0 px-3 py-1.5 rounded-full bg-white text-stone-900 shadow hover:shadow-md">Fechar</button>
        <div id="ficha-tecnica" class="w-full">
          <img :src="ficha" alt="Ficha Técnica — Altus América" class="w-full rounded-2xl border shadow-lg" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ficha from '../../Material Altus/FICHA TÉCNICA/Informações.png'
import logoCouro from '../../Material Altus/IDENTIDADE VISUAL/LOGO ALTUS FUNDO COURO.png'
import { ref } from 'vue'
import bgCouro from '../../Material Altus/IDENTIDADE VISUAL/BACKGROUND COURO VERDE.png'
import torreNoturna from '../../Material Altus/IMAGENS EM ALTA/TORRE ÚNICA NOTURNA.png'
const showFicha = ref(false)
const openFicha = () => { showFicha.value = true }
const closeFicha = () => { showFicha.value = false }

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
