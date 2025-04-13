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

    <Header />
    <main>
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ContactSection from '../components/ContactSection.vue';
import FeaturesSection from '../components/FeaturesSection.vue';
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue';
import PricingSection from '../components/PricingSection.vue';
import ProcessSection from '../components/ProcessSection.vue';

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