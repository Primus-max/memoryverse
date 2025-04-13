<template>
  <nav class="fixed w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-2">
        <LogoIcon />
        <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MemoryVerse</span>
      </div>
      <div class="hidden md:flex space-x-8">
        <a href="#features" class="nav-link">Возможности</a>
        <a href="#how-it-works" class="nav-link">Процесс</a>
        <a href="#pricing" class="nav-link">Тарифы</a>
        <a href="#contact" class="nav-link">Контакты</a>
      </div>
      <button class="primary-button scale-button">
        Попробовать бесплатно
      </button>
    </div>
  </nav>
</template>

<script setup>
import LogoIcon from './LogoIcon.vue';
</script>

<style scoped>
.nav-link {
  @apply relative text-gray-300 hover:text-white transition-colors duration-300;
}

.nav-link::after {
  @apply content-[''] absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.primary-button {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-medium 
         hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25;
}

.scale-button {
  @apply hover:scale-105 transition-transform duration-300;
}
</style> 