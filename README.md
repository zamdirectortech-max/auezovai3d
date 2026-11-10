# Auezov AI MVP

Интерактивная образовательная AI-реконструкция и виртуальный ассистент Auezov University. Приложение не выдаёт изображение или синтетическую речь за подлинную запись Мухтара Ауэзова.

## Возможности

- 2.5D-аватар из предоставленных кадров: idle, listening, thinking, speaking и подготовленные эмоциональные состояния.
- Чат на казахском, русском и английском; демонстрационная база работает без ключей.
- Push-to-talk через Web Speech API и голосовой ответ через SpeechSynthesis.
- API: `/api/chat`, `/api/transcribe`, `/api/speech`, `/api/health`, `/api/knowledge/search`, `/api/admin/documents`.
- Защищённая заготовка административного API, лимиты ввода и прозрачная маркировка demo-ответов.
- Адаптивный интерфейс для компьютера, планшета и телефона.

## Запуск

```bash
npm install
copy .env.example .env.local
npm run dev
```

Откройте `http://127.0.0.1:5173`. Для production-проверки: `npm run build`.

## Подключение production AI

Заполните `OPENAI_API_KEY`, `DATABASE_URL` и `ADMIN_TOKEN`, затем замените демо-реализацию route handlers вызовами LLM/STT/TTS и PostgreSQL + pgvector. Секреты должны оставаться только на сервере. Для 3D-режима добавьте лицензированную модель `public/models/auezov.glb`; отсутствие файла не нарушает работу 2.5D-режима.
