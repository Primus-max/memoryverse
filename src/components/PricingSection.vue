<template>
  <section id="pricing" class="py-32 relative">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Тарифные планы</span>
      </h2>
      <p class="text-xl text-gray-300 text-center mb-20 max-w-2xl mx-auto">
        Выберите подходящий план для сохранения ваших воспоминаний
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="pricing-card">
          <div class="pricing-header">
            <h3 class="text-2xl font-bold mb-2">Базовый</h3>
            <div class="text-4xl font-bold mb-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">₽990</span>
              <span class="text-lg text-gray-400">/мес</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li>10 3D реконструкций</li>
            <li>Базовое улучшение фото</li>
            <li>VR просмотр</li>
            <li>5GB хранилища</li>
          </ul>
          <button class="pricing-button">Выбрать план</button>
        </div>
        <div class="pricing-card pricing-card-popular">
          <div class="popular-badge">Популярный</div>
          <div class="pricing-header">
            <h3 class="text-2xl font-bold mb-2">Премиум</h3>
            <div class="text-4xl font-bold mb-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">₽1990</span>
              <span class="text-lg text-gray-400">/мес</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li>Безлимитные реконструкции</li>
            <li>AI улучшение фото</li>
            <li>VR просмотр</li>
            <li>50GB хранилища</li>
            <li>Приоритетная поддержка</li>
          </ul>
          <button class="pricing-button-popular">Выбрать план</button>
        </div>
        <div class="pricing-card">
          <div class="pricing-header">
            <h3 class="text-2xl font-bold mb-2">Бизнес</h3>
            <div class="text-4xl font-bold mb-4">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">₽4990</span>
              <span class="text-lg text-gray-400">/мес</span>
            </div>
          </div>
          <ul class="pricing-features">
            <li>Корпоративный доступ</li>
            <li>Расширенная аналитика</li>
            <li>API доступ</li>
            <li>500GB хранилища</li>
            <li>24/7 поддержка</li>
          </ul>
          <button class="pricing-button">Связаться с нами</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pricing-card {
  @apply relative bg-gradient-to-b from-white/5 to-white/[0.02] p-8 rounded-2xl backdrop-blur-xl
         border border-white/10 hover:border-white/20 transition-all duration-300;
}

.pricing-card-popular {
  @apply border-blue-400/30 transform scale-105;
}

.popular-badge {
  @apply absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500
         px-4 py-1 rounded-full text-sm font-medium;
}

.pricing-header {
  @apply text-center pb-6 border-b border-white/10 mb-6;
}

.pricing-features {
  @apply space-y-4 mb-8;
}

.pricing-features li {
  @apply flex items-center text-gray-300;
}

.pricing-features li::before {
  content: "✓";
  @apply mr-2 text-blue-400;
}

.pricing-button {
  @apply w-full bg-white/10 backdrop-blur-xl border border-white/20 py-3 rounded-xl
         hover:bg-white/20 transition-all duration-300;
}

.pricing-button-popular {
  @apply w-full bg-gradient-to-r from-blue-500 to-purple-500 py-3 rounded-xl
         hover:opacity-90 transition-all duration-300;
}
</style> 