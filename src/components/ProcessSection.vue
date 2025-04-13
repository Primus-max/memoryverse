<template>
  <section id="process" class="py-20 px-4">
    <div class="container mx-auto max-w-6xl">
      <!-- Заголовок секции -->
      <AnimateOnScroll>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
          Как это <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">работает</span>
        </h2>
      </AnimateOnScroll>
      
      <!-- Описание -->
      <AnimateOnScroll>
        <p class="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Простой процесс создания виртуальных воспоминаний в четыре шага
        </p>
      </AnimateOnScroll>

      <!-- Шаги процесса -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Шаг 1 -->
        <AnimateOnScroll>
          <div class="process-card group">
            <div class="process-number">1</div>
            <div class="process-content">
              <h3 class="text-xl font-semibold mb-2">Загрузка фото</h3>
              <p class="text-gray-400">Загрузите ваши фотографии в любом формате и разрешении</p>
            </div>
          </div>
        </AnimateOnScroll>

        <!-- Шаг 2 -->
        <AnimateOnScroll>
          <div class="process-card group">
            <div class="process-number">2</div>
            <div class="process-content">
              <h3 class="text-xl font-semibold mb-2">AI Обработка</h3>
              <p class="text-gray-400">Наш ИИ анализирует и улучшает качество каждого изображения</p>
            </div>
          </div>
        </AnimateOnScroll>

        <!-- Шаг 3 -->
        <AnimateOnScroll>
          <div class="process-card group">
            <div class="process-number">3</div>
            <div class="process-content">
              <h3 class="text-xl font-semibold mb-2">3D Генерация</h3>
              <p class="text-gray-400">Создание детализированной трехмерной модели из ваших фото</p>
            </div>
          </div>
        </AnimateOnScroll>

        <!-- Шаг 4 -->
        <AnimateOnScroll>
          <div class="process-card group">
            <div class="process-number">4</div>
            <div class="process-content">
              <h3 class="text-xl font-semibold mb-2">VR Доступ</h3>
              <p class="text-gray-400">Мгновенный доступ к вашим воспоминаниям через VR-гарнитуру</p>
            </div>
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
.process-card {
  @apply bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10
         hover:bg-white/10 hover:border-white/20 transition-all duration-300
         transform hover:scale-105 min-h-[180px] flex flex-col;
  height: 100%;
}

.process-number {
  @apply w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 
         flex items-center justify-center mb-4 text-2xl font-bold text-blue-400
         group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0;
}

.process-content {
  @apply flex flex-col justify-between flex-grow;
}

.process-content h3 {
  @apply text-xl font-semibold mb-4;
}

.process-content p {
  @apply text-gray-400 text-base leading-relaxed;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}

.animate-slide-up {
  animation: slide-up 0.8s ease-out forwards;
  opacity: 0;
}
</style> 