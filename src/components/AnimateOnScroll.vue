<template>
  <div ref="element" class="animate-on-scroll" :class="{ 'is-visible': isVisible }">
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

const createObserver = () => {
  observer.value = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        // Отключаем наблюдение после первого появления
        observer.value.unobserve(entry.target);
      }
    },
    {
      threshold: 0.1,
      rootMargin: '50px'
    }
  );
};

onMounted(() => {
  createObserver();
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
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;
}

.is-visible {
  opacity: 1 !important;
  transform: translateY(0) !important;
}

/* Добавляем задержку для элементов внутри grid */
:deep(.grid) > * {
  transition-delay: calc(var(--order, 0) * 0.1s);
}

/* Обеспечиваем видимость на мобильных устройствах */
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style> 