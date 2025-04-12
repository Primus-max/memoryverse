import { createI18n } from 'vue-i18n';

const messages = {
  ru: {
    nav: {
      features: 'Возможности',
      howItWorks: 'Как это работает',
      pricing: 'Тарифы',
      contact: 'Контакты',
      startFree: 'Начать бесплатно'
    },
    hero: {
      title: 'Оживи свои {memories}',
      subtitle: 'Создавайте цифровые двойники важных моментов жизни и путешествуйте по ним в виртуальной реальности',
      cta: 'Начать путешествие'
    },
    features: {
      title: 'Возможности',
      reconstruction: {
        title: '3D Реконструкция',
        description: 'Превратите ваши фотографии в интерактивные 3D-сцены'
      },
      tours: {
        title: 'Виртуальные туры',
        description: 'Путешествуйте по своим воспоминаниям в VR'
      },
      ai: {
        title: 'AI Улучшение',
        description: 'Улучшайте качество старых фотографий с помощью ИИ'
      }
    }
  }
}

export default createI18n({
  legacy: false,
  locale: 'ru',
  fallbackLocale: 'ru',
  messages
}) 