<template>
  <section class="py-20 relative overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
    <div class="absolute w-full h-full">
      <div class="absolute w-96 h-96 -right-48 top-0 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute w-96 h-96 -left-48 bottom-0 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Section header -->
      <div class="text-center mb-20">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
          Возможности
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            платформы
          </span>
        </h2>
        <p class="text-xl text-gray-400 max-w-3xl mx-auto">
          Откройте для себя инновационные технологии, которые помогут сохранить ваши воспоминания в цифровом формате
        </p>
      </div>

      <!-- Features grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="feature-card group">
          <div class="feature-icon bg-gradient-to-br from-blue-500 to-purple-500">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">3D Сканирование</h3>
          <p class="text-gray-400">Создавайте точные трехмерные модели реальных объектов и пространств с помощью передовых технологий сканирования</p>
        </div>

        <div class="feature-card group">
          <div class="feature-icon bg-gradient-to-br from-purple-500 to-pink-500">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">AI Реконструкция</h3>
          <p class="text-gray-400">Искусственный интеллект помогает восстановить и улучшить качество старых фотографий и видео</p>
        </div>

        <div class="feature-card group">
          <div class="feature-icon bg-gradient-to-br from-pink-500 to-red-500">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 group-hover:text-pink-400 transition-colors">VR Просмотр</h3>
          <p class="text-gray-400">Погрузитесь в свои воспоминания с помощью виртуальной реальности и почувствуйте себя там снова</p>
        </div>

        <div class="feature-card group">
          <div class="feature-icon bg-gradient-to-br from-green-500 to-blue-500">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 group-hover:text-green-400 transition-colors">Совместный Доступ</h3>
          <p class="text-gray-400">Делитесь воспоминаниями с семьей и друзьями, создавайте общие коллекции и альбомы</p>
        </div>

        <div class="feature-card group">
          <div class="feature-icon bg-gradient-to-br from-yellow-500 to-orange-500">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 group-hover:text-yellow-400 transition-colors">Безопасное Хранение</h3>
          <p class="text-gray-400">Шифрование данных и надежное облачное хранилище для ваших цифровых воспоминаний</p>
        </div>

        <div class="feature-card group">
          <div class="feature-icon bg-gradient-to-br from-red-500 to-yellow-500">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4 group-hover:text-red-400 transition-colors">Интеграции</h3>
          <p class="text-gray-400">Подключайте существующие сервисы и импортируйте контент из социальных сетей</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  const cards = document.querySelectorAll('.feature-card')
  
  cards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.6,
      delay: index * 0.1
    })
  })
})
</script>

<style scoped>
.feature-card {
  @apply bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10
         transform transition-all duration-300 hover:border-white/20 hover:-translate-y-2;
}

.feature-icon {
  @apply w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6
         transform transition-all duration-300 group-hover:scale-110;
}
</style> 