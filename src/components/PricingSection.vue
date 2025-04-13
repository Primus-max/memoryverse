<template>
  <section id="pricing" class="py-20 px-4">
    <div class="container mx-auto max-w-6xl">
      <!-- Заголовок секции -->
      <AnimateOnScroll>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Тарифные <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">планы</span>
        </h2>
      </AnimateOnScroll>
      
      <!-- Описание -->
      <AnimateOnScroll>
        <p class="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Выберите подходящий план для сохранения ваших воспоминаний
        </p>
      </AnimateOnScroll>

      <!-- Тарифные планы -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Базовый план -->
        <AnimateOnScroll>
          <div class="pricing-card group">
            <h3 class="text-2xl font-bold mb-2">Базовый</h3>
            <div class="text-4xl font-bold mb-6">
              <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">₽999</span>
              <span class="text-lg text-gray-400">/мес</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                До 100 фотографий
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Базовое улучшение качества
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                3D просмотр онлайн
              </li>
            </ul>
            <button class="w-full py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-lg
                           border border-white/10 hover:border-white/20 transition-all duration-300
                           transform hover:scale-105">
              Выбрать план
            </button>
          </div>
        </AnimateOnScroll>

        <!-- Премиум план -->
        <AnimateOnScroll>
          <div class="pricing-card group popular-plan">
            <div class="popular-badge">Популярный</div>
            <h3 class="text-2xl font-bold mb-2">Премиум</h3>
            <div class="text-4xl font-bold mb-6">
              <span class="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">₽1999</span>
              <span class="text-lg text-gray-400">/мес</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                До 500 фотографий
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Продвинутое AI улучшение
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                VR доступ
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Приоритетная поддержка
              </li>
            </ul>
            <button class="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500
                           hover:from-blue-600 hover:to-purple-600 transition-all duration-300
                           transform hover:scale-105">
              Выбрать план
            </button>
          </div>
        </AnimateOnScroll>

        <!-- Бизнес план -->
        <AnimateOnScroll>
          <div class="pricing-card group">
            <h3 class="text-2xl font-bold mb-2">Бизнес</h3>
            <div class="text-4xl font-bold mb-6">
              <span class="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">₽4999</span>
              <span class="text-lg text-gray-400">/мес</span>
            </div>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Безлимитное хранение
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Максимальное качество
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                API доступ
              </li>
              <li class="flex items-center text-gray-300">
                <svg class="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Персональный менеджер
              </li>
            </ul>
            <button class="w-full py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-lg
                           border border-white/10 hover:border-white/20 transition-all duration-300
                           transform hover:scale-105">
              Выбрать план
            </button>
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
.pricing-card {
  @apply bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10
         hover:bg-white/10 hover:border-white/20 transition-all duration-300
         relative transform scale-90 md:scale-90;
  height: 100%;
  /* На мобильных устройствах карточки будут нормального размера */
  @apply scale-100;
}

.popular-plan {
  @apply border-blue-500/30 z-10;
  box-shadow: 0 0 40px rgba(59, 130, 246, 0.1);
  /* Масштаб только для десктопа */
  @apply md:scale-105;
}

.popular-badge {
  @apply absolute -top-4 left-1/2 transform -translate-x-1/2
         bg-gradient-to-r from-blue-500 to-purple-500 text-white
         px-6 py-1.5 rounded-full text-sm font-medium;
}

/* Анимация при наведении */
.pricing-card:not(.popular-plan):hover {
  @apply md:scale-95;
  /* На мобильных меньше увеличение */
  @apply scale-[1.02];
}

.popular-plan:hover {
  @apply md:scale-110;
  /* На мобильных меньше увеличение */
  @apply scale-[1.02];
}

/* Контейнер для карточек */
.grid {
  @apply relative;
}

/* Затемнение фона под центральной карточкой */
.popular-plan::before {
  content: '';
  @apply absolute inset-0 rounded-2xl;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%);
  z-index: -1;
}
</style> 