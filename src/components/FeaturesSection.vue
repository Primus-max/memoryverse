<template>
  <section id="features" class="py-32">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-20">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Инновационные возможности</span>
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="feature-card">
          <div class="feature-icon bg-blue-500/20">
            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">3D Реконструкция</h3>
          <p class="text-gray-300">Мгновенное преобразование фотографий в детализированные 3D-модели с помощью ИИ</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon bg-purple-500/20">
            <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">VR Погружение</h3>
          <p class="text-gray-300">Полное погружение в воспоминания через VR с эффектом присутствия</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon bg-pink-500/20">
            <svg class="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">AI Улучшение</h3>
          <p class="text-gray-300">Восстановление и улучшение качества старых фотографий с помощью нейросетей</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  @apply relative bg-gradient-to-b from-white/5 to-white/[0.02] p-8 rounded-2xl backdrop-blur-xl
         border border-white/10 hover:border-white/20 transition-all duration-300
         hover:transform hover:-translate-y-2;
}

.feature-icon {
  @apply w-16 h-16 rounded-xl flex items-center justify-center mb-6;
}
</style> 