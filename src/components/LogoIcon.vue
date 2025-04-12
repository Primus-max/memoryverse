<template>
  <div class="logo-container w-10 h-10 relative">
    <!-- <div class="dna-helix absolute inset-0"> -->
      <!-- Первая спираль -->
      <!-- <div v-for="i in 20" :key="`helix1-${i}`" 
           class="dna-segment"
           :style="{
             transform: `rotateY(${i * 18}deg) translateZ(6px) translateY(${i * 5}%)`,
             '--delay': `${i * -0.1}s`
           }">
        <div class="dna-base"></div>
        <div class="dna-backbone"></div>
      </div> -->

      <!-- Вторая спираль (смещена на 180 градусов) -->
      <!-- <div v-for="i in 20" :key="`helix2-${i}`" 
           class="dna-segment"
           :style="{
             transform: `rotateY(${(i * 18) + 180}deg) translateZ(6px) translateY(${i * 5}%)`,
             '--delay': `${i * -0.1}s`
           }">
        <div class="dna-base"></div>
        <div class="dna-backbone"></div>
      </div> -->

      <!-- Соединяющие перекладины -->
      <!-- <div v-for="i in 20" :key="`rungs-${i}`" 
           class="dna-rung"
           :style="{
             transform: `translateY(${i * 5}%) rotateY(${i * 18}deg)`,
             '--delay': `${i * -0.1}s`
           }">
      </div> -->
    <!-- </div> -->
  </div>
</template>

<style scoped>
.logo-container {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.dna-helix {
  transform-style: preserve-3d;
  animation: spin 8s linear infinite;
  transform: rotateX(60deg) scale(0.8);
}

.dna-segment {
  @apply absolute left-1/2 w-8;
  transform-style: preserve-3d;
  height: 2px;
}

.dna-base {
  @apply absolute w-2 h-2 rounded-full;
  background: linear-gradient(135deg, #60A5FA, #A855F7);
  filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.8));
  left: -4px;
  top: -4px;
  transform-style: preserve-3d;
  animation: glow 2s ease-in-out infinite;
  animation-delay: var(--delay);
}

.dna-backbone {
  @apply absolute h-0.5;
  width: 100%;
  background: linear-gradient(90deg, 
    rgba(96, 165, 250, 0.9),
    rgba(168, 85, 247, 0.9)
  );
  top: 50%;
  transform: translateY(-50%);
  filter: drop-shadow(0 0 2px rgba(168, 85, 247, 0.6));
}

.dna-rung {
  @apply absolute left-1/2 w-12 h-0.5;
  background: linear-gradient(90deg,
    rgba(96, 165, 250, 0.4),
    rgba(168, 85, 247, 0.4)
  );
  transform-style: preserve-3d;
  transform-origin: center;
  margin-left: -24px;
  animation: fade 2s ease-in-out infinite;
  animation-delay: var(--delay);
}

@keyframes spin {
  from { transform: rotateX(60deg) rotateY(0) scale(0.8); }
  to { transform: rotateX(60deg) rotateY(360deg) scale(0.8); }
}

@keyframes glow {
  0%, 100% { 
    filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.8));
    transform: scale(1);
  }
  50% { 
    filter: drop-shadow(0 0 6px rgba(168, 85, 247, 1));
    transform: scale(1.2);
  }
}

@keyframes fade {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
</style>

<script setup lang="ts">
// Component logic
</script> 