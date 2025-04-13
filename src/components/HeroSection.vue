<template>
  <section class="relative min-h-screen flex items-center justify-center px-4 py-20">
    <div class="text-center max-w-4xl mx-auto">
      <!-- Заголовок -->
      <h1 class="mb-6 animate-fade-in">
        <span class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 animate-slide-up" style="animation-delay: 200ms;">
          Оживляем
        </span>
        <span class="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-up" style="animation-delay: 400ms;">
          <span class="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            воспоминания
          </span>
        </span>
      </h1>

      <!-- Подзаголовок -->
      <p class="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 px-4 animate-fade-in animate-slide-up" style="animation-delay: 600ms;">
        Погрузитесь в прошлое с помощью передовых технологий. Создавайте виртуальные копии ваших воспоминаний и делитесь ими с близкими в формате VR.
      </p>

      <!-- Кнопки -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style="animation-delay: 800ms;">
        <button 
          class="w-full sm:w-auto px-8 py-4 text-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300"
          @click="showUpload = true"
        >
          Начать путешествие
        </button>
        <button 
          class="w-full sm:w-auto px-8 py-4 text-lg bg-white/5 text-white rounded-xl hover:bg-white/10 backdrop-blur-lg transform hover:scale-105 transition-all duration-300"
          @click="showDemo = true"
        >
          Смотреть демо
        </button>
      </div>

      <!-- Модальное окно для демо -->
      <div v-if="showDemo" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="relative w-full max-w-4xl mx-4">
          <button 
            @click="showDemo = false" 
            class="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-4">
            <div class="aspect-video w-full">
              <iframe 
                class="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Демонстрация работы сервиса"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="mt-4 text-center">
              <h3 class="text-xl font-bold text-white mb-2">Демонстрация работы сервиса</h3>
              <p class="text-gray-400">Посмотрите, как легко создавать виртуальные воспоминания</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Компонент загрузки -->
      <div v-if="showUpload" class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
        <div class="relative w-full max-w-2xl mx-4">
          <button 
            @click="showUpload = false" 
            class="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
          >
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <UploadComponent />
        </div>
      </div>

      <!-- Статистика -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in" style="animation-delay: 1000ms;">
        <div class="stat-item animate-slide-up" style="animation-delay: 1200ms;">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            100K+
          </div>
          <div class="text-sm sm:text-base text-gray-400">Пользователей</div>
        </div>
        <div class="stat-item animate-slide-up" style="animation-delay: 1400ms;">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            50K+
          </div>
          <div class="text-sm sm:text-base text-gray-400">Воспоминаний</div>
        </div>
        <div class="stat-item animate-slide-up" style="animation-delay: 1600ms;">
          <div class="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
            98%
          </div>
          <div class="text-sm sm:text-base text-gray-400">Довольных клиентов</div>
        </div>
      </div>

      <!-- Индикатор прокрутки -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce animate-fade-in" style="animation-delay: 2000ms;">
        <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
import UploadComponent from './UploadComponent.vue';

export default {
  name: 'HeroSection',
  components: {
    UploadComponent
  },
  data() {
    return {
      showUpload: false,
      showDemo: false
    }
  }
}
</script>

<style scoped>
.stat-item {
  @apply flex flex-col items-center p-4 rounded-2xl bg-white/5 backdrop-blur-lg;
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