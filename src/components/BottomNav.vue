<template>
  <nav class="fixed bottom-0 inset-x-0 z-50">
    <div class="mx-auto w-full ">
      <ul class="flex items-center justify-center gap-4 sm:gap-6 border-t bg-[#C4A158] backdrop-blur px-4 py-3 shadow-sm h-18">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="px-2 sm:px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300"
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

const links = [
  { to: '/', label: 'Início' },
  { to: '/localizacao', label: 'Localização' },
  { to: '/ficha-tecnica', label: 'Ficha Técnica' },
  { to: '/plantas', label: 'Plantas' },
  { to: '/lazer', label: 'Lazer' },
  { to: '/fotos', label: 'Fotos' },
  { to: '/vista-dos-andares', label: 'Vista dos Andares' }
]

const route = useRoute()
const isActive = (path) => route.path === path
</script>
