# Ревью проекта — digital-nomad-finder

Здесь собраны замечания по проекту с объяснением **почему** так, а не просто
«исправь». Цель — не раскритиковать, а помочь разобраться.

Каждый файл — одна итерация ревью, имя: `ГГГГ-ММ-ДД-тема.md`.
Формат пунктов внутри: **Что** → **Почему** → **Как** (направление, без готового
решения — попробуй сам).

## Статус замечаний

**Итерация 1 — безопасность и базовый React**

| # | Тема | Файл | Статус |
|---|------|------|--------|
| 1 | API-ключ зашит в код | [2026-06-24-security-and-key.md](2026-06-24-security-and-key.md) | 🟢 закрыто (вынесен в `import.meta.env`) |
| 2 | Неверный `key` в списке | [2026-06-24-security-and-key.md](2026-06-24-security-and-key.md) | 🟢 закрыто |

**Итерация 2 — React, стили, разметка, архитектура, безопасность**

| # | Тема | Раздел | Файл | Статус |
|---|------|--------|------|--------|
| 3 | Краш страницы «Favorites» | A. Баги | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🟢 закрыто |
| 4 | Фильтр региона не работает | A. Баги | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🟢 закрыто |
| 5 | «Visa»/«Search» — пустышки | A. Баги | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🟢 закрыто (фильтры рабочие) |
| 6 | Нет единой модели данных | B. Архитектура | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто → см. [23] |
| 7 | Дублирование роутов | B. Архитектура | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 8 | Дубль `RegionFilter`/`VisaFilter` | B. Архитектура | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🟢 закрыто (`CustomSelect`) |
| 9 | Состояние фильтров не поднято | C. React | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто → см. [18] |
| 10 | Дропдаун не закрывается | C. React | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🟢 закрыто |
| 11 | Логика Loading спорная | C. React | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто → см. [19] |
| 12 | Цвета мимо темы | D. Стили | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто → см. [25] |
| 13 | «Favorites» вне общего стиля | D. Стили | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🟡 частично (Navbar есть, стили инлайн) |
| 14 | a11y: `label` без `id` | D. Разметка | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 15 | Нет состояний ошибки/пусто | E. Качество | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🟡 частично |
| 16 | `localStorage` без `try/catch` | E. Безопасность | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 17 | README — дефолтный шаблон | E. Качество | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |

**Итерация 3 — основы JavaScript и React**

| # | Тема | Раздел | Файл | Статус |
|---|------|--------|------|--------|
| 18 | Двойная фильтрация, состояние разорвано | A. Состояние | [2026-06-30-javascript-react-fundamentals.md](2026-06-30-javascript-react-fundamentals.md) | 🔴 открыто |
| 19 | Мёртвый код загрузки | A. Состояние | [2026-06-30-javascript-react-fundamentals.md](2026-06-30-javascript-react-fundamentals.md) | 🔴 открыто |
| 20 | `index` в составе `key` | B. Рендеринг | [2026-06-30-javascript-react-fundamentals.md](2026-06-30-javascript-react-fundamentals.md) | 🔴 открыто |
| 21 | Side-effect в теле рендера | B. Рендеринг | [2026-06-30-javascript-react-fundamentals.md](2026-06-30-javascript-react-fundamentals.md) | 🔴 открыто |
| 22 | Сетевой запрос на каждую карточку | B. Рендеринг | [2026-06-30-javascript-react-fundamentals.md](2026-06-30-javascript-react-fundamentals.md) | 🔴 открыто |
| 23 | `getCountryName` дублируется ~6 раз | C. JS / DRY | [2026-06-30-javascript-react-fundamentals.md](2026-06-30-javascript-react-fundamentals.md) | 🔴 открыто |
| 24 | Компоненты общаются через `localStorage` | D. Связь | [2026-06-30-javascript-react-fundamentals.md](2026-06-30-javascript-react-fundamentals.md) | 🔴 открыто |
| 25 | Хардкод цветов ломает светлую тему | E. Стили | [2026-06-30-javascript-react-fundamentals.md](2026-06-30-javascript-react-fundamentals.md) | 🔴 открыто |

**Итерация 4 — React: декомпозиция и архитектура компонентов**

| # | Тема | Раздел | Файл | Статус |
|---|------|--------|------|--------|
| 26 | God-компоненты (`CountryDetails`, `Home`) | Декомпозиция | [2026-06-30-react-decomposition.md](2026-06-30-react-decomposition.md) | 🔴 открыто |
| 27 | Стили смешаны с логикой | Декомпозиция | [2026-06-30-react-decomposition.md](2026-06-30-react-decomposition.md) | 🔴 открыто |
| 28 | Дублирование каркаса → `Layout` | Архитектура | [2026-06-30-react-decomposition.md](2026-06-30-react-decomposition.md) | 🔴 открыто |
| 29 | Нет UI-примитивов | Переиспользование | [2026-06-30-react-decomposition.md](2026-06-30-react-decomposition.md) | 🔴 открыто |
| 30 | Логика не вынесена → кастомные хуки | Хуки | [2026-06-30-react-decomposition.md](2026-06-30-react-decomposition.md) | 🔴 открыто |
| 31 | Конфиг фильтров в разметке | Чистота | [2026-06-30-react-decomposition.md](2026-06-30-react-decomposition.md) | 🔴 открыто |

Легенда: 🔴 открыто · 🟡 в работе/частично · 🟢 закрыто

_Актуализировано 2026-06-30. Стажёр закрыл большинство пунктов итераций 1–2 👏_
