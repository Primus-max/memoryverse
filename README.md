# MemoryVerse Frontend

## О проекте

MemoryVerse Frontend - клиентская часть платформы для сохранения и визуализации воспоминаний. Этот репозиторий содержит только frontend-приложение.

Для полноценной работы требуется [MemoryVerse Backend](https://github.com/memoryverse/backend).

## Технологический стек

- Vue.js 3 с Composition API
- TypeScript для типобезопасности
- Tailwind CSS для стилизации
- GSAP для анимаций
- Pinia для управления состоянием
- Vite как сборщик

## Требования

- Node.js 18+
- npm 8+ или yarn 1.22+
- Современный браузер с поддержкой WebGL и WebAssembly
- Минимум 4GB RAM
- Для VR-функционала: поддержка WebXR

## Установка и запуск

```bash
# Установка зависимостей
npm install

# Настройка переменных окружения
cp .env.example .env
# Отредактируйте .env файл, указав необходимые параметры

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Запуск тестов
npm run test
```

## Структура проекта

```
src/
├── components/     # Vue компоненты
│   ├── ui/        # UI компоненты
│   ├── forms/     # Компоненты форм
│   ├── layout/    # Компоненты разметки
│   └── features/  # Компоненты функционала
├── views/         # Страницы приложения
├── stores/        # Pinia хранилища
├── composables/   # Vue композиции
├── services/      # API клиенты
├── utils/         # Утилиты
└── types/         # TypeScript типы
```

## Разработка

### Рекомендуемое IDE
- VS Code с Vue и TypeScript расширениями
- WebStorm

### Расширения VS Code
- Volar
- TypeScript Vue Plugin
- Tailwind CSS IntelliSense
- ESLint
- Prettier

### Скрипты

```bash
# Линтинг
npm run lint

# Форматирование кода
npm run format

# Проверка типов TypeScript
npm run type-check

# Запуск unit-тестов
npm run test:unit

# Запуск e2e тестов
npm run test:e2e
```

## Тестирование

- Unit тесты: Jest + Vue Test Utils
- E2E тесты: Cypress
- Component тесты
- Visual regression тесты

## CI/CD

Проект использует GitHub Actions для:
- Проверки кода
- Запуска тестов
- Сборки и деплоя

## Связанные репозитории

- [MemoryVerse Backend](https://github.com/memoryverse/backend)
- [MemoryVerse Mobile](https://github.com/memoryverse/mobile)
- [MemoryVerse Desktop](https://github.com/memoryverse/desktop)

## Вклад в проект

Мы приветствуем вклад в развитие проекта! Пожалуйста, ознакомьтесь с нашим руководством по внесению изменений в файле CONTRIBUTING.md.

## Лицензия

MIT License - см. файл LICENSE для деталей.
