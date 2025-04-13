<template>
  <section id="how-it-works" class="py-32 relative">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-20">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Как это работает</span>
      </h2>
      <div class="grid md:grid-cols-4 gap-8 relative">
        <div class="process-line"></div>
        <div class="process-card">
          <div class="process-number">01</div>
          <h3 class="text-xl font-bold mb-4">Загрузка фото</h3>
          <p class="text-gray-300">Загрузите ваши фотографии через приложение или веб-интерфейс</p>
        </div>
        <div class="process-card">
          <div class="process-number">02</div>
          <h3 class="text-xl font-bold mb-4">AI Обработка</h3>
          <p class="text-gray-300">Наши нейросети анализируют и улучшают качество изображений</p>
        </div>
        <div class="process-card">
          <div class="process-number">03</div>
          <h3 class="text-xl font-bold mb-4">3D Генерация</h3>
          <p class="text-gray-300">Создание детализированной 3D модели пространства</p>
        </div>
        <div class="process-card">
          <div class="process-number">04</div>
          <h3 class="text-xl font-bold mb-4">VR Доступ</h3>
          <p class="text-gray-300">Мгновенный доступ к вашим воспоминаниям через VR</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process-card {
  @apply relative bg-gradient-to-b from-white/5 to-white/[0.02] p-8 rounded-2xl backdrop-blur-xl
         border border-white/10 hover:border-white/20 transition-all duration-300;
}

.process-number {
  @apply text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4;
}

.process-line {
  @apply absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2;
  opacity: 0.2;
}
</style> 