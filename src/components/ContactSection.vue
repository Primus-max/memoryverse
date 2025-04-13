<template>
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
</template>

<style scoped>
.contact-input {
  @apply w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400
         focus:outline-none focus:border-blue-400 transition-colors duration-300;
}

.primary-button-large {
  @apply bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-full text-xl font-medium
         hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25;
}
</style> 