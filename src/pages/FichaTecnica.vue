<template>
  <section class="mx-auto max-w-6xl px-4 py-12">
    <Transition name="item" appear>
      <h2 class="text-3xl sm:text-4xl font-semibold font-[Cinzel]">Ficha Técnica</h2>
    </Transition>

    <Transition name="item" appear>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        <div class="p-4 rounded-xl border"><strong>Empreendimento</strong><div class="text-stone-700">Altus América</div></div>
        <div class="p-4 rounded-xl border"><strong>Endereço</strong><div class="text-stone-700">Rua Iraci Gonçalves Ferreira, nº 100<br/>Jardim América — São José dos Campos/SP</div></div>
        <div class="p-4 rounded-xl border"><strong>Área do Terreno</strong><div class="text-stone-700">14.602,35 m²</div></div>
        <div class="p-4 rounded-xl border"><strong>Área Construída</strong><div class="text-stone-700">40.135,84 m²</div></div>
        <div class="p-4 rounded-xl border"><strong>Torres</strong><div class="text-stone-700">2 torres residenciais</div></div>
        <div class="p-4 rounded-xl border"><strong>Pavimentos</strong><div class="text-stone-700">30 (25 residenciais)</div></div>
        <div class="p-4 rounded-xl border"><strong>Elevadores</strong><div class="text-stone-700">3 por torre com gerador + 1 de transbordo</div></div>
        <div class="p-4 rounded-xl border"><strong>Unidades</strong><div class="text-stone-700">200 apês de 86,95 m² (3 dorms, 2 vagas, hobby box)<br/>100 apês de 66,66 m² (2 dorms, 1 vaga)</div></div>
        <div class="p-4 rounded-xl border"><strong>Certificações</strong><div class="text-stone-700">PBQP‑H • ISO 9001</div></div>
      </div>
    </Transition>

    <Transition name="item" appear>
      <div class="mt-8 grid sm:grid-cols-2 gap-4">
        <div class="p-5 rounded-2xl border">
          <h3 class="font-semibold">Diferenciais — Áreas Comuns</h3>
          <p class="mt-2 text-stone-700 text-sm">+30 itens de lazer equipados, climatizados e mobiliados; gerador full; Wi‑Fi; bicicletário; quadra de beach tennis oficial; captação e reaproveitamento de águas pluviais; elevador privativo para visitantes; lavanderia OMO; paisagismo assinado; piscina com borda infinita; ampla academia indoor.</p>
        </div>
        <div class="p-5 rounded-2xl border">
          <h3 class="font-semibold">Diferenciais — Áreas Privativas</h3>
          <p class="mt-2 text-stone-700 text-sm">Infra para aquecedor a gás; área técnica e pontos/drenos para ar‑condicionado; janela blackout com infra para automação; hobby box no andar (3 dorms); banheiros com ventilação natural; opção de churrasqueira a gás ou carvão; kit personalização; unidades com ISO 9001.</p>
        </div>
      </div>
    </Transition>

    <Transition name="item" appear>
      <div class="mt-10">
        <img :src="ficha" alt="Ficha Técnica — Altus América" class="w-full rounded-2xl border" />
      </div>
    </Transition>
  </section>
</template>

<script setup>
import ficha from '../../Material Altus/FICHA TÉCNICA/Informações.png'
</script>
