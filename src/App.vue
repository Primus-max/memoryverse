<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
// Компонент не требует дополнительной логики
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.app {
  @apply min-h-screen bg-gray-100;
}
</style>
