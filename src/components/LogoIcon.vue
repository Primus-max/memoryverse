<template>
  <div class="logo-container w-12 h-12 relative group cursor-pointer">
    <!-- ДНК структура -->
    <div class="dna-structure">
      <div class="dna-helix">
        <!-- Первая спираль -->
        <div class="dna-strand dna-strand-1">
          <div v-for="n in 12" :key="`strand1-${n}`" class="dna-pair">
            <div class="base base-left"></div>
            <div class="backbone"></div>
            <div class="connection-line"></div>
          </div>
        </div>
        <!-- Вторая спираль -->
        <div class="dna-strand dna-strand-2">
          <div v-for="n in 12" :key="`strand2-${n}`" class="dna-pair">
            <div class="base base-right"></div>
            <div class="backbone"></div>
            <div class="connection-line"></div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Цифровая сфера -->
    <div class="digital-sphere">
      <svg class="absolute inset-0" viewBox="0 0 48 48" fill="none">
        <circle class="sphere-ring" cx="24" cy="24" r="20" stroke="url(#sphere-gradient)" stroke-width="0.5"/>
        <circle class="sphere-ring-inner" cx="24" cy="24" r="16" stroke="url(#sphere-gradient)" stroke-width="0.5"/>
        <circle class="sphere-core" cx="24" cy="24" r="12" fill="url(#sphere-gradient)" fill-opacity="0.1"/>
        <!-- Цифровые точки -->
        <g class="digital-points">
          <circle v-for="i in 16" :key="i" 
                 :cx="24 + 18 * Math.cos(i * Math.PI / 8)"
                 :cy="24 + 18 * Math.sin(i * Math.PI / 8)"
                 r="0.8" fill="url(#sphere-gradient)"/>
        </g>
        <!-- Дополнительные линии связи -->
        <g class="connection-lines">
          <path v-for="i in 8" :key="i"
                :d="`M24,24 L${24 + 16 * Math.cos(i * Math.PI / 4)},${24 + 16 * Math.sin(i * Math.PI / 4)}`"
                stroke="url(#sphere-gradient)" stroke-width="0.3" stroke-opacity="0.3"/>
        </g>
        <defs>
          <linearGradient id="sphere-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color: #60A5FA"/>
            <stop offset="50%" style="stop-color: #A855F7"/>
            <stop offset="100%" style="stop-color: #EC4899"/>
          </linearGradient>
        </defs>
      </svg>
    </div>

    <!-- Нейронные связи -->
    <div class="neural-connections">
      <svg class="absolute inset-0" viewBox="0 0 48 48" fill="none">
        <path class="neural-path" d="M12 24C12 24 20 16 24 24C28 32 36 24 36 24" 
              stroke="url(#sphere-gradient)" stroke-width="0.5"/>
        <path class="neural-path" d="M24 12C24 12 16 20 24 24C32 28 24 36 24 36" 
              stroke="url(#sphere-gradient)" stroke-width="0.5"/>
        <!-- Дополнительные нейронные пути -->
        <path class="neural-path-alt" d="M16 16C16 16 24 20 24 24C24 28 32 32 32 32" 
              stroke="url(#sphere-gradient)" stroke-width="0.3"/>
        <path class="neural-path-alt" d="M32 16C32 16 24 20 24 24C24 28 16 32 16 32" 
              stroke="url(#sphere-gradient)" stroke-width="0.3"/>
      </svg>
    </div>

    <!-- Эффект свечения при наведении -->
    <div class="glow-effect"></div>
  </div>
</template>

<style scoped>
.logo-container {
  @apply relative overflow-hidden;
  transform-style: preserve-3d;
}

.dna-structure {
  @apply absolute inset-0;
  perspective: 1200px;
  transform-style: preserve-3d;
}

.dna-helix {
  @apply absolute inset-0;
  animation: rotate 6s linear infinite;
  transform-style: preserve-3d;
}

.dna-strand {
  @apply absolute inset-0;
  transform-style: preserve-3d;
}

.dna-strand-1 {
  transform: rotateX(0deg) translateZ(2px);
}

.dna-strand-2 {
  transform: rotateX(180deg) translateZ(-2px);
}

.dna-pair {
  @apply absolute w-full;
  height: 8.33%;
  transform-style: preserve-3d;
}

.backbone {
  @apply absolute top-1/2 left-0 w-full h-0.5;
  background: linear-gradient(90deg, 
    rgba(96, 165, 250, 0.8),
    rgba(168, 85, 247, 0.8),
    rgba(236, 73, 153, 0.8)
  );
  transform: translateY(-50%);
  filter: drop-shadow(0 0 2px rgba(96, 165, 250, 0.3));
}

.base {
  @apply absolute top-1/2 w-2 h-2 rounded-full;
  background: linear-gradient(135deg,
    rgba(96, 165, 250, 1),
    rgba(168, 85, 247, 1),
    rgba(236, 73, 153, 1)
  );
  transform: translateY(-50%);
  filter: drop-shadow(0 0 1px rgba(168, 85, 247, 0.5));
}

.base-left { left: 0; }
.base-right { right: 0; }

/* Позиции для пар ДНК */
.dna-strand-1 .dna-pair:nth-child(1) { top: 0%; animation: wave 3s ease-in-out infinite; animation-delay: -0.0s; }
.dna-strand-1 .dna-pair:nth-child(2) { top: 8.33%; animation: wave 3s ease-in-out infinite; animation-delay: -0.25s; }
.dna-strand-1 .dna-pair:nth-child(3) { top: 16.66%; animation: wave 3s ease-in-out infinite; animation-delay: -0.5s; }
.dna-strand-1 .dna-pair:nth-child(4) { top: 24.99%; animation: wave 3s ease-in-out infinite; animation-delay: -0.75s; }
.dna-strand-1 .dna-pair:nth-child(5) { top: 33.32%; animation: wave 3s ease-in-out infinite; animation-delay: -1.0s; }
.dna-strand-1 .dna-pair:nth-child(6) { top: 41.65%; animation: wave 3s ease-in-out infinite; animation-delay: -1.25s; }
.dna-strand-1 .dna-pair:nth-child(7) { top: 49.98%; animation: wave 3s ease-in-out infinite; animation-delay: -1.5s; }
.dna-strand-1 .dna-pair:nth-child(8) { top: 58.31%; animation: wave 3s ease-in-out infinite; animation-delay: -1.75s; }
.dna-strand-1 .dna-pair:nth-child(9) { top: 66.64%; animation: wave 3s ease-in-out infinite; animation-delay: -2.0s; }
.dna-strand-1 .dna-pair:nth-child(10) { top: 74.97%; animation: wave 3s ease-in-out infinite; animation-delay: -2.25s; }
.dna-strand-1 .dna-pair:nth-child(11) { top: 83.3%; animation: wave 3s ease-in-out infinite; animation-delay: -2.5s; }
.dna-strand-1 .dna-pair:nth-child(12) { top: 91.63%; animation: wave 3s ease-in-out infinite; animation-delay: -2.75s; }

.dna-strand-2 .dna-pair:nth-child(1) { top: 0%; animation: wave 3s ease-in-out infinite; animation-delay: -1.5s; }
.dna-strand-2 .dna-pair:nth-child(2) { top: 8.33%; animation: wave 3s ease-in-out infinite; animation-delay: -1.75s; }
.dna-strand-2 .dna-pair:nth-child(3) { top: 16.66%; animation: wave 3s ease-in-out infinite; animation-delay: -2.0s; }
.dna-strand-2 .dna-pair:nth-child(4) { top: 24.99%; animation: wave 3s ease-in-out infinite; animation-delay: -2.25s; }
.dna-strand-2 .dna-pair:nth-child(5) { top: 33.32%; animation: wave 3s ease-in-out infinite; animation-delay: -2.5s; }
.dna-strand-2 .dna-pair:nth-child(6) { top: 41.65%; animation: wave 3s ease-in-out infinite; animation-delay: -2.75s; }
.dna-strand-2 .dna-pair:nth-child(7) { top: 49.98%; animation: wave 3s ease-in-out infinite; animation-delay: -3.0s; }
.dna-strand-2 .dna-pair:nth-child(8) { top: 58.31%; animation: wave 3s ease-in-out infinite; animation-delay: -3.25s; }
.dna-strand-2 .dna-pair:nth-child(9) { top: 66.64%; animation: wave 3s ease-in-out infinite; animation-delay: -3.5s; }
.dna-strand-2 .dna-pair:nth-child(10) { top: 74.97%; animation: wave 3s ease-in-out infinite; animation-delay: -3.75s; }
.dna-strand-2 .dna-pair:nth-child(11) { top: 83.3%; animation: wave 3s ease-in-out infinite; animation-delay: -4.0s; }
.dna-strand-2 .dna-pair:nth-child(12) { top: 91.63%; animation: wave 3s ease-in-out infinite; animation-delay: -4.25s; }

.digital-sphere {
  @apply absolute inset-0;
  animation: pulse 4s ease-in-out infinite;
}

.sphere-ring {
  opacity: 0.3;
  animation: rotate-reverse 12s linear infinite;
  filter: drop-shadow(0 0 2px rgba(168, 85, 247, 0.3));
}

.sphere-ring-inner {
  opacity: 0.4;
  animation: rotate 10s linear infinite;
  filter: drop-shadow(0 0 1px rgba(236, 73, 153, 0.3));
}

.sphere-core {
  animation: pulse 3s ease-in-out infinite;
}

.digital-points {
  animation: rotate 15s linear infinite;
}

.connection-lines {
  animation: fade-pulse 4s ease-in-out infinite;
}

.neural-connections {
  @apply absolute inset-0;
  animation: fade-pulse 3s ease-in-out infinite;
}

.neural-path {
  stroke-dasharray: 30;
  animation: dash 3s linear infinite;
  filter: drop-shadow(0 0 1px rgba(168, 85, 247, 0.3));
}

.neural-path-alt {
  stroke-dasharray: 20;
  animation: dash-reverse 4s linear infinite;
  opacity: 0.6;
}

.glow-effect {
  @apply absolute inset-0 opacity-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20;
  filter: blur(8px);
  transition: opacity 0.3s ease;
}

/* Интерактивность */
.group:hover .glow-effect {
  opacity: 1;
}

.group:hover .dna-helix {
  animation-duration: 4s;
}

.group:hover .sphere-ring,
.group:hover .sphere-ring-inner {
  opacity: 0.6;
}

@keyframes rotate {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

@keyframes rotate-reverse {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}

@keyframes wave {
  0%, 100% { transform: scaleX(0.8) translateZ(0); }
  50% { transform: scaleX(1.2) translateZ(2px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1) translateZ(0); opacity: 0.8; }
  50% { transform: scale(1.05) translateZ(2px); opacity: 1; }
}

@keyframes fade-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.7; }
}

@keyframes dash {
  to { stroke-dashoffset: -60; }
}

@keyframes dash-reverse {
  to { stroke-dashoffset: 40; }
}
</style>

<script setup lang="ts">
// Компонент использует только декларативную логику в шаблоне
</script> 