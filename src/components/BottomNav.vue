<template>
  <nav v-if="!isLanding" class="fixed bottom-0 inset-x-0 z-50">
    <div class="mx-auto w-full ">
      <ul :class="['flex items-center justify-center gap-4 sm:gap-6 border-t backdrop-blur px-4 py-4 shadow-sm h-20', navBgClass]">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-3 sm:px-4 py-2 rounded-full text-base sm:text-lg font-semibold transition-colors duration-300"
            :class="isActive(link.to) ? 'bg-stone-900 text-white' : 'text-stone-700 hover:text-stone-900'"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isLanding = computed(() => route.path === '/')

const prefix = computed(() => {
  if (route.path.startsWith('/altus')) return '/altus'
  if (route.path.startsWith('/mirati')) return '/mirati'
  return ''
})

const links = computed(() => {
  if (!prefix.value) return []
  return [
    { to: `${prefix.value}`, label: 'Início' },
    { to: `${prefix.value}/localizacao`, label: 'Localização' },
    { to: `${prefix.value}/ficha-tecnica`, label: 'Ficha Técnica' },
    { to: `${prefix.value}/plantas`, label: 'Plantas' },
    { to: `${prefix.value}/lazer`, label: 'Lazer' },
    { to: `${prefix.value}/fotos`, label: 'Fotos' },
    { to: `${prefix.value}/vista-dos-andares`, label: prefix.value === '/altus' ? 'Vista dos Andares' : 'Tour 360' }
  ]
})

const isActive = (path) => route.path === path

const navBgClass = computed(() => (
  prefix.value === '/mirati'
    ? 'bg-[#FFA823]'
    : 'bg-[#C4A158]'
))
</script>
