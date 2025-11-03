<template>
  <section class="relative min-h-dvh">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" :style="{ backgroundImage: `url(${bgCouro})` }"></div>
    <div class="absolute inset-y-0 right-0 left-1/2 z-0 hidden lg:block bg-no-repeat bg-right bg-contain pointer-events-none" :style="{ backgroundImage: `url(${torreNoturna})` }"></div>

    <div class="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1200px] px-4 py-16 lg:py-10 text-white">
      <div class="lg:grid lg:grid-cols-1 lg:gap-8 max-w-[800px]">
        <div>
          <Transition name="item" appear>
            <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Ficha Técnica</h2>
          </Transition>

          <TransitionGroup name="item" appear tag="div" class="mt-3 grid gap-4 grid-cols-3">
            <div v-for="(s, idx) in specs" :key="s.title" class="h-full rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm shadow-lg" :style="{ transitionDelay: `${idx * 70}ms` }">
              <strong>{{ s.title }}</strong>
              <div class="text-white/80" v-html="s.desc" />
            </div>
          </TransitionGroup>

          <TransitionGroup name="item" appear tag="div" class="mt-4 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
            <div v-for="(d, idx) in difs" :key="d.title" class="h-full rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm shadow-lg" :style="{ transitionDelay: `${idx * 120}ms` }">
              <h3 class="font-semibold">{{ d.title }}</h3>
              <p class="mt-2 text-white/80 text-sm">{{ d.text }}</p>
            </div>
          </TransitionGroup>

          
        </div>
      </div>
    </div>

    <div v-if="showFicha" class="fixed inset-0 z-50 flex items-center justify-center p-4" @keydown.esc.window="closeFicha" role="dialog" aria-modal="true" aria-label="Ficha técnica" tabindex="-1">
      <div class="absolute inset-0 bg-black/60" @click="closeFicha"></div>
      <div class="relative z-10 w-full max-w-5xl">
        <button @click="closeFicha" class="absolute -top-10 right-0 px-3 py-1.5 rounded-full bg-white text-stone-900 shadow hover:shadow-md">Fechar</button>
        <div id="ficha-tecnica" class="w-full">
          <Transition name="fade" appear>
            <img :src="ficha" alt="Ficha Técnica — Altus América" class="w-[95%] rounded-2xl border shadow-lg" />
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ficha from '../../../materiais/ficha-tecnica/Informacoes.png'
import { ref } from 'vue'
import bgCouro from '../../../materiais/identidade-visual/BACKGROUND-COURO-VERDE.png'
import torreNoturna from '../../../materiais/imagens/TORRE-UNICA-NOTURNA.png'
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
  { title: 'Elevadores', desc: '3 por torre com gerador + 1 elevador de transbordo' },
  { title: 'Unidades', desc: '200 unidades — 86,95 m² (3 dormitórios, 2 vagas, hobby box)<br/>100 unidades — 66,66 m² (2 dormitórios, 1 vaga)' },
  { title: 'Certificações', desc: 'PBQP‑H • ISO 9001' },
]

const difs = [
  { title: 'Diferenciais — Áreas Comuns', text: '+30 itens de lazer (equipados, climatizados e mobiliados); gerador full de energia; Wi‑Fi; bicicletário; quadra de beach tennis oficial; captação e reaproveitamento de águas pluviais; elevador privativo para visitantes; lavanderia OMO; paisagismo assinado; piscina com borda infinita; ampla academia indoor na zona sul.' },
  { title: 'Diferenciais — Áreas Privativas', text: 'Infra para aquecedor a gás; área técnica e pontos/drenos para ar‑condicionado; janela blackout com infra para automação; hobby box no andar (3 dormitórios); banheiros com ventilação natural; opção de churrasqueira a gás ou carvão; kit personalização; certificação ISO 9001 nas unidades.' },
]
</script>


