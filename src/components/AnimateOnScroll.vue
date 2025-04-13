<template>
  <div ref="element" :class="{ 'animate-on-scroll': true, 'is-visible': isVisible }">
    <slot></slot>
  </div>
</template>

<script setup>
import {
  onMounted,
  onUnmounted,
  ref,
} from 'vue';

const element = ref(null);
const isVisible = ref(false);
const observer = ref(null);

onMounted(() => {
  observer.value = new IntersectionObserver(([entry]) => {
    isVisible.value = entry.isIntersecting;
  }, {
    threshold: 0.1
  });

  if (element.value) {
    observer.value.observe(element.value);
  }
});

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect();
  }
});
</script>

<style scoped>
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease-out;
}

.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style> 