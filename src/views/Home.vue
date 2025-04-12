<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-900 to-black text-white">
    <!-- Animated background -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,0.9))]"></div>
      <div class="absolute w-full h-full">
        <div class="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute w-96 h-96 -top-48 -right-48 bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute w-96 h-96 -bottom-48 -left-48 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <div class="logo-container w-10 h-10 relative">
            <div class="dna-helix absolute inset-0">
              <div class="dna-strand-1"></div>
              <div class="dna-strand-2"></div>
            </div>
          </div>
          <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MemoryVerse</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#features" class="nav-link">Возможности</a>
          <a href="#how-it-works" class="nav-link">Процесс</a>
          <a href="#pricing" class="nav-link">Тарифы</a>
          <a href="#contact" class="nav-link">Контакты</a>
        </div>
        <button class="primary-button scale-button">
          Попробовать бесплатно
        </button>
      </div>
    </nav>

    <main>
      <!-- Hero Section -->
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

      <!-- Features Section -->
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

      <!-- How it Works Section -->
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

      <!-- Pricing Section -->
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

      <!-- Contact Section -->
      <section id="contact" class="py-32 relative">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Свяжитесь с нами</span>
            </h2>
            <p class="text-xl text-gray-300 text-center mb-12">
              Готовы начать путешествие по вашим воспоминаниям? Напишите нам!
            </p>
            <div class="contact-form">
              <div class="grid md:grid-cols-2 gap-8 mb-8">
                <input type="text" placeholder="Ваше имя" class="contact-input">
                <input type="email" placeholder="Email" class="contact-input">
              </div>
              <textarea placeholder="Ваше сообщение" rows="5" class="contact-input mb-8"></textarea>
              <button class="primary-button-large w-full">Отправить сообщение</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-12 border-t border-white/10">
        <div class="container mx-auto px-4">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <div class="flex items-center space-x-2 mb-6">
                <div class="logo-container w-8 h-8 relative">
                  <div class="dna-helix absolute inset-0">
                    <div class="dna-strand-1"></div>
                    <div class="dna-strand-2"></div>
                  </div>
                </div>
                <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MemoryVerse</span>
              </div>
              <p class="text-gray-400">Оживляем воспоминания с помощью современных технологий</p>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Компания</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition">О нас</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition">Блог</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Поддержка</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-400 hover:text-white transition">FAQ</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition">Документация</a></li>
                <li><a href="#" class="text-gray-400 hover:text-white transition">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-bold mb-4">Следите за нами</h4>
              <div class="flex space-x-4">
                <a href="#" class="social-link">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" class="social-link">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" class="social-link">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2024 MemoryVerse. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Hero animations
  gsap.from('.hero-text', {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power4.out'
  })
  
  gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    ease: 'power4.out'
  })

  // Features animation
  gsap.from('.feature-card', {
    scrollTrigger: {
      trigger: '#features',
      start: 'top center'
    },
    opacity: 0,
    y: 100,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power4.out'
  })
})
</script>

<style>
/* Animations */
@keyframes blob {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Navigation */
.nav-link {
  @apply relative text-gray-300 hover:text-white transition-colors duration-300;
}

.nav-link::after {
  @apply content-[''] absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}

/* Buttons */
.primary-button {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-full font-medium 
         hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25;
}

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

/* Feature cards */
.feature-card {
  @apply relative bg-gradient-to-b from-white/5 to-white/[0.02] p-8 rounded-2xl backdrop-blur-xl
         border border-white/10 hover:border-white/20 transition-all duration-300
         hover:transform hover:-translate-y-2;
}

.feature-icon {
  @apply w-16 h-16 rounded-xl flex items-center justify-center mb-6;
}

/* DNA Logo Animation */
.logo-container {
  perspective: 1000px;
}

.dna-helix {
  transform-style: preserve-3d;
  animation: rotate 4s linear infinite;
}

.dna-strand-1,
.dna-strand-2 {
  position: absolute;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #60A5FA, #A78BFA);
  border-radius: 1px;
}

.dna-strand-1 {
  animation: wave1 2s ease-in-out infinite;
}

.dna-strand-2 {
  animation: wave2 2s ease-in-out infinite;
}

@keyframes rotate {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

@keyframes wave1 {
  0%, 100% { transform: translateY(20%) scaleX(0.8); }
  50% { transform: translateY(80%) scaleX(1.2); }
}

@keyframes wave2 {
  0%, 100% { transform: translateY(80%) scaleX(1.2); }
  50% { transform: translateY(20%) scaleX(0.8); }
}

/* Process Section */
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

/* Pricing Cards */
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

/* Contact Form */
.contact-input {
  @apply w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400
         focus:outline-none focus:border-blue-400 transition-colors duration-300;
}

/* Social Links */
.social-link {
  @apply text-gray-400 hover:text-white transition-colors duration-300;
}
</style> 