<template>
  <section class="relative min-h-dvh flex items-center">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFB85C] via-[#F68A1E] to-[#C44A12]"></div>

    <div class="mx-auto w-full max-w-[1280px] xl:max-w-[1440px] px-6 py-16 text-white">
      <div class="text-center">
        <Transition name="item" appear>
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-semibold font-[Cinzel] tracking-tight">Escolha o Empreendimento</h1>
        </Transition>

        <Transition name="item" appear>
          <p class="mt-3 text-white/90 text-lg sm:text-xl">Selecione abaixo para explorar as páginas do empreendimento.</p>
        </Transition>
      </div>

      <div class="mt-10 grid gap-8 md:gap-10 lg:gap-12 sm:grid-cols-2 place-items-center">
        <!-- Card Altus América -->
        <RouterLink to="/altus" class="group relative w-full max-w-[620px] overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl ring-0 transition focus:outline-none focus:ring-2 focus:ring-white/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          <img :src="altusImg" alt="Altus América" class="h-[330px] sm:h-[370px] lg:h-[410px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div class="absolute bottom-0 inset-x-0 p-6 sm:p-7">
            <div class="inline-flex items-center gap-3 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow">
              <span class="text-sm sm:text-base tracking-wide text-stone-700">Jardim América — SJC/SP</span>
            </div>
            <h2 class="mt-3 text-4xl sm:text-5xl font-semibold font-[Cinzel]">Altus América</h2>
            <p class="text-white/90 mt-1 text-base sm:text-lg">2 Torres • 66,66 m² e 86,95 m² • +30 itens de lazer</p>
          </div>
        </RouterLink>

        <!-- Card Mirati Residenciais -->
        <RouterLink to="/mirati" class="group relative w-full max-w-[620px] overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-sm shadow-2xl ring-0 transition focus:outline-none focus:ring-2 focus:ring-white/60 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
          <img :src="miratiSrc" alt="Mirati Residenciais" class="h-[330px] sm:h-[370px] lg:h-[410px] w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div class="absolute bottom-0 inset-x-0 p-6 sm:p-7">
            <div class="inline-flex items-center gap-3 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow">
              <span class="text-sm sm:text-base tracking-wide text-stone-700">Jardim Ismênia — SJC/SP</span>
            </div>
            <h2 class="mt-3 text-4xl sm:text-5xl font-semibold font-[Cinzel]">Mirati Residenciais</h2>
            <p class="text-white/90 mt-1 text-base sm:text-lg">2 DORM | SUÍTE | VARANDA GOURMET | LAZER COMPLETO</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
// Altus (volta a usar materiais locais funcionando)
import altusImg from '../../materiais/imagens/2-TORRES-HORIZONTAL.jpg'

// Mirati: usa hero público e logo local até o arquivo público existir
const miratiSrc = '/mirati/hero.jpg?v=2'
</script>


