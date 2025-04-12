<template>
  <nav class="fixed w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <!-- <LogoIcon /> -->
        <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MemoryVerse</span>
      </div>
      <div class="hidden md:flex space-x-8">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">{{ link.text }}</a>
      </div>
      <button class="primary-button scale-button">
        Попробовать бесплатно
      </button>
    </div>
  </nav>
</template>

<script setup>
import LogoIcon from './LogoIcon.vue';

const navLinks = [
  { href: '#features', text: 'Возможности' },
  { href: '#how-it-works', text: 'Процесс' },
  { href: '#pricing', text: 'Тарифы' },
  { href: '#contact', text: 'Контакты' }
]
</script>

<style scoped>
.nav-link {
  @apply text-white/80 hover:text-white transition-colors duration-200;
}

.primary-button {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg 
         hover:from-blue-600 hover:to-purple-600 transition-all duration-300;
}

.scale-button {
  @apply hover:scale-105 active:scale-95;
}
</style> 