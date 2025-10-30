<template>
  <div class="min-h-dvh font-[Poppins] relative">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <!-- Back to Home -->
    <RouterLink
      v-if="showBack"
      to="/"
      class="fixed left-4 top-4 z-50 rounded-full bg-white/95 px-4 py-2 text-base sm:text-lg font-semibold text-stone-900 shadow-lg hover:bg-white"
      aria-label="Voltar para a seleção de empreendimentos"
    >
      ← Início
    </RouterLink>

    <BottomNav />

    <Transition name="fade" appear>
      <div
        v-if="showFullscreenModal && isLanding"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
        role="dialog"
        aria-modal="true"
        aria-label="Selecione o modo de visualização"
      >
        <div class="relative w-full max-w-md rounded-3xl bg-white border border-stone-200 p-6 text-stone-900 shadow-xl">
          <button
            type="button"
            @click="closeModal"
            class="absolute right-4 top-4 rounded-full bg-[#F68A1E]/10 px-2 py-1 text-sm font-medium text-[#F68A1E] hover:bg-[#F68A1E]/15"
            aria-label="Fechar"
          >
            ✕
          </button>

          <Transition name="item" appear>
            <div class="space-y-4">
              <h2 class="text-2xl font-semibold font-[Cinzel]">Escolha o modo de visualização</h2>
              <p class="text-sm text-stone-700">Ative a experiência em tela cheia para uma imersão completa ou continue navegando normalmente.</p>

              <div class="flex flex-col gap-3">
                <button
                  type="button"
                  @click="activateFullscreen"
                  class="w-full rounded-full bg-[#C44A12] px-5 py-3 text-center text-base font-semibold text-white shadow hover:shadow-lg transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F68A1E] active:scale-[0.98] duration-150"
                >
                  {{ isFullscreen ? 'Continuar em tela cheia' : 'Entrar em tela cheia' }}
                </button>

                <button
                  type="button"
                  @click="continueWithoutFullscreen"
                  class="w-full rounded-full bg-white border border-[#F68A1E] px-5 py-3 text-center text-base font-semibold text-[#F68A1E] shadow hover:bg-[#F68A1E]/10 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F68A1E] active:scale-[0.98] duration-150"
                >
                  Continuar sem tela cheia
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import BottomNav from './components/BottomNav.vue'
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute } from 'vue-router'

const showFullscreenModal = ref(true)
const isFullscreen = ref(!!document.fullscreenElement)
const route = useRoute()
const isLanding = computed(() => route.path === '/')
const showBack = computed(() => route.path.startsWith('/altus') || route.path.startsWith('/mirati'))

const handleFullscreenChange = () => {
  isFullscreen.value = !!document.fullscreenElement
}

onMounted(() => {
  document.addEventListener('fullscreenchange', handleFullscreenChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('fullscreenchange', handleFullscreenChange)
})

const closeModal = () => {
  showFullscreenModal.value = false
}

const activateFullscreen = async () => {
  try {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen()
    }
  } catch (error) {
    console.error('Fullscreen error', error)
  } finally {
    closeModal()
  }
}

const continueWithoutFullscreen = async () => {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen?.()
    }
  } catch (error) {
    console.error('Exit fullscreen error', error)
  } finally {
    closeModal()
  }
}
</script>
