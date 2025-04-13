<template>
  <nav class="fixed w-full z-50">
    <!-- Основная навигация -->
    <div class="relative bg-black/10 backdrop-blur-xl border-b border-white/10">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <!-- Логотип -->
        <div class="flex items-center space-x-3 z-50">
          <LogoIcon />
          <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MemoryVerse</span>
        </div>
        
        <!-- Десктопная навигация -->
        <div class="hidden md:flex space-x-8">
          <a v-for="link in navLinks" 
             :key="link.href" 
             :href="link.href" 
             class="nav-link">
            {{ link.text }}
          </a>
        </div>
        
        <!-- Кнопка бургер-меню -->
        <button @click="toggleMenu" 
                class="md:hidden z-50 p-2 focus:outline-none"
                :class="{ 'fixed right-4': isMenuOpen }">
          <div class="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mb-1.5 rounded-full transition-all"
               :class="{ 'rotate-45 translate-y-2': isMenuOpen }"></div>
          <div class="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mb-1.5 rounded-full transition-all"
               :class="{ 'opacity-0': isMenuOpen }"></div>
          <div class="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all"
               :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"></div>
        </button>

        <!-- Десктопная кнопка -->
        <button class="hidden md:block primary-button scale-button">
          Попробовать бесплатно
        </button>
      </div>
    </div>

    <!-- Мобильное меню -->
    <div v-show="isMenuOpen" 
         class="fixed inset-0 bg-gradient-to-b from-black/95 via-black/98 to-black/95 backdrop-blur-xl z-40 transition-all duration-300"
         :class="{ 'opacity-100': isMenuOpen, 'opacity-0 pointer-events-none': !isMenuOpen }">
      <div class="container mx-auto px-4 pt-24">
        <div class="flex flex-col items-center text-center">
          <div class="w-full max-w-sm space-y-8">
            <a v-for="link in navLinks" 
               :key="link.href" 
               :href="link.href" 
               class="mobile-menu-link group"
               @click="closeMenu">
              <div class="flex items-center justify-between py-4 px-6 rounded-xl hover:bg-white/5">
                <span>{{ link.text }}</span>
                <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <button @click="closeMenu" 
                    class="mobile-primary-button">
              Попробовать бесплатно
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

import LogoIcon from './LogoIcon.vue';

const isMenuOpen = ref(false);

const navLinks = [
  { href: '#features', text: 'Возможности' },
  { href: '#how-it-works', text: 'Процесс' },
  { href: '#pricing', text: 'Тарифы' },
  { href: '#contact', text: 'Контакты' }
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
}
</script>

<style scoped>
.nav-link {
  @apply relative text-gray-300 hover:text-white transition-colors duration-300;
}

.nav-link::after {
  @apply content-[''] absolute left-0 bottom-0 w-0 h-0.5 
         bg-gradient-to-r from-blue-400 to-purple-400 
         transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

.mobile-menu-link {
  @apply block text-xl font-medium text-white/90
         transition-all duration-200;
}

.mobile-primary-button {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 
         text-white text-xl font-medium
         px-8 py-4 rounded-xl mt-8
         hover:from-blue-600 hover:to-purple-600 
         transition-all duration-300
         w-full;
}

.primary-button {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 
         text-white px-6 py-2 rounded-lg 
         hover:from-blue-600 hover:to-purple-600 
         transition-all duration-300;
}

.scale-button {
  @apply hover:scale-105 active:scale-95;
}
</style> 