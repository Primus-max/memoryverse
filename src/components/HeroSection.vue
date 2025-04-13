<template>
  <section class="relative min-h-screen flex items-center">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-6xl md:text-8xl font-bold mb-8 hero-text">
          Оживляем <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">воспоминания</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 hero-subtitle">
          Погрузитесь в прошлое с помощью передовых технологий. Создавайте виртуальные копии ваших воспоминаний и делитесь ими с близкими в формате VR.
        </p>
        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button class="primary-button-large scale-button">
            Начать путешествие
          </button>
          <button class="secondary-button-large scale-button">
            Смотреть демо
          </button>
        </div>
        <div class="mt-12 flex justify-center items-center space-x-8">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-400">100K+</div>
            <div class="text-gray-400">Пользователей</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-purple-400">50K+</div>
            <div class="text-gray-400">Воспоминаний</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-pink-400">98%</div>
            <div class="text-gray-400">Довольных клиентов</div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped>
.primary-button-large {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-xl font-medium
         hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25;
}

.secondary-button-large {
  @apply bg-white/10 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-full text-xl font-medium
         hover:bg-white/20 transition-all duration-300;
}

.scale-button {
  @apply hover:scale-105 transition-transform duration-300;
}
</style> 