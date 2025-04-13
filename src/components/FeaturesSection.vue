<template>
  <section class="py-20 px-4">
    <div class="container mx-auto max-w-6xl">
      <!-- Заголовок секции -->
      <AnimateOnScroll>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Инновационные <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">возможности</span>
        </h2>
      </AnimateOnScroll>
      
      <!-- Описание -->
      <AnimateOnScroll>
        <p class="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Откройте для себя передовые технологии, которые делают ваши воспоминания живыми
        </p>
      </AnimateOnScroll>

      <!-- Карточки возможностей -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 3D Реконструкция -->
        <AnimateOnScroll>
          <div class="feature-card group">
            <div class="feature-icon">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">3D Реконструкция</h3>
            <p class="text-gray-400">Преобразуйте ваши фотографии в детализированные трехмерные модели с помощью ИИ</p>
          </div>
        </AnimateOnScroll>

        <!-- VR Погружение -->
        <AnimateOnScroll>
          <div class="feature-card group">
            <div class="feature-icon">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">VR Погружение</h3>
            <p class="text-gray-400">Исследуйте свои воспоминания в виртуальной реальности с полным эффектом присутствия</p>
          </div>
        </AnimateOnScroll>

        <!-- AI Улучшение -->
        <AnimateOnScroll>
          <div class="feature-card group">
            <div class="feature-icon">
              <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">AI Улучшение</h3>
            <p class="text-gray-400">Автоматическое улучшение качества и детализации ваших фотографий</p>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
</template>

<script setup>
import AnimateOnScroll from './AnimateOnScroll.vue';
</script>

<style scoped>
.feature-card {
  @apply bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10
         hover:bg-white/10 hover:border-white/20 transition-all duration-300
         transform hover:scale-105;
}

.feature-icon {
  @apply w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 
         flex items-center justify-center mb-4 text-blue-400
         group-hover:text-blue-300 transition-colors duration-300;
}
</style> 