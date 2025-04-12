<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Animated background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(17,24,39,0.9))]"></div>
      <div class="absolute w-full h-full">
        <div class="absolute w-[40rem] h-[40rem] -top-[20rem] -left-[20rem] bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
        <div class="absolute w-[40rem] h-[40rem] -top-[20rem] -right-[20rem] bg-purple-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute w-[40rem] h-[40rem] -bottom-[20rem] left-1/2 transform -translate-x-1/2 bg-pink-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </div>

    <!-- Hero Content -->
    <div class="container mx-auto px-4 relative">
      <div class="max-w-5xl mx-auto text-center">
        <h1 class="text-7xl md:text-8xl font-bold mb-8 hero-text leading-tight">
          Оживляем <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-gradient">воспоминания</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-12 hero-subtitle max-w-3xl mx-auto leading-relaxed">
          Погрузитесь в прошлое с помощью передовых технологий. Создавайте виртуальные копии ваших воспоминаний и делитесь ими с близкими в формате VR.
        </p>
        <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <button class="primary-button-large scale-button group">
            Начать путешествие
            <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
          <button class="secondary-button-large scale-button group">
            <span class="mr-2">▶</span>
            Смотреть демо
          </button>
        </div>
        
        <!-- Stats -->
        <div class="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div class="stat-card">
            <div class="text-4xl font-bold text-blue-400 mb-2 counter" data-target="100">0</div>
            <div class="text-sm text-gray-400">тысяч пользователей</div>
          </div>
          <div class="stat-card">
            <div class="text-4xl font-bold text-purple-400 mb-2 counter" data-target="50">0</div>
            <div class="text-sm text-gray-400">тысяч воспоминаний</div>
          </div>
          <div class="stat-card">
            <div class="text-4xl font-bold text-pink-400 mb-2 counter" data-target="98">0</div>
            <div class="text-sm text-gray-400">% довольных клиентов</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

import gsap from 'gsap';

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

  // Counter animation
  const counters = document.querySelectorAll('.counter')
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'))
    const duration = 2
    
    gsap.to(counter, {
      scrollTrigger: {
        trigger: counter,
        start: 'top center'
      },
      innerHTML: target,
      duration: duration,
      snap: { innerHTML: 1 }
    })
  })
})
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

@keyframes gradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;
}

.stat-card {
  @apply relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10
         transform transition-all duration-300 hover:border-white/20 hover:-translate-y-1;
}

.primary-button-large {
  @apply bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-4 rounded-full text-xl font-medium
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