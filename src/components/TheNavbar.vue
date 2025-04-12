<template>
  <nav class="fixed w-full z-50 bg-black/10 backdrop-blur-xl border-b border-white/10">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <div class="logo-container w-12 h-12 relative">
          <div class="dna-structure">
            <div class="dna-helix">
              <div v-for="n in 8" :key="n" class="dna-pair">
                <div class="base base-left"></div>
                <div class="backbone"></div>
                <div class="base base-right"></div>
              </div>
            </div>
          </div>
        </div>
        <span class="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">MemoryVerse</span>
      </div>
      <div class="hidden md:flex space-x-8">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">{{ link.text }}</a>
      </div>
      <button class="primary-button scale-button">
        Попробовать бесплатно
      </button>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { href: '#features', text: 'Возможности' },
  { href: '#how-it-works', text: 'Процесс' },
  { href: '#pricing', text: 'Тарифы' },
  { href: '#contact', text: 'Контакты' }
]
</script>

<style scoped>
.dna-structure {
  @apply absolute inset-0;
  perspective: 1000px;
  transform-style: preserve-3d;
}

.dna-helix {
  @apply absolute inset-0;
  animation: rotate 4s linear infinite;
  transform-style: preserve-3d;
}

.dna-pair {
  @apply absolute w-full;
  height: 12.5%;
  animation: wave 2s ease-in-out infinite;
}

.dna-pair:nth-child(1) { top: 0%; animation-delay: -0.0s; }
.dna-pair:nth-child(2) { top: 12.5%; animation-delay: -0.25s; }
.dna-pair:nth-child(3) { top: 25%; animation-delay: -0.5s; }
.dna-pair:nth-child(4) { top: 37.5%; animation-delay: -0.75s; }
.dna-pair:nth-child(5) { top: 50%; animation-delay: -1.0s; }
.dna-pair:nth-child(6) { top: 62.5%; animation-delay: -1.25s; }
.dna-pair:nth-child(7) { top: 75%; animation-delay: -1.5s; }
.dna-pair:nth-child(8) { top: 87.5%; animation-delay: -1.75s; }

.backbone {
  @apply absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400;
  transform: translateY(-50%);
}

.base {
  @apply absolute top-1/2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400;
  transform: translateY(-50%);
}

.base-left {
  left: 0;
}

.base-right {
  right: 0;
}

@keyframes rotate {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

@keyframes wave {
  0%, 100% { transform: scaleX(0.8); }
  50% { transform: scaleX(1.2); }
}

.nav-link {
  @apply relative text-gray-300 hover:text-white transition-colors duration-300;
}

.nav-link::after {
  @apply content-[''] absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 transition-all duration-300;
}

.nav-link:hover::after {
  @apply w-full;
}
</style> 