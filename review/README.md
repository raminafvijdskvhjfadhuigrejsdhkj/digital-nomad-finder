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
| 1 | API-ключ зашит в код | [2026-06-24-security-and-key.md](2026-06-24-security-and-key.md) | 🟡 в работе |
| 2 | Неверный `key` в списке | [2026-06-24-security-and-key.md](2026-06-24-security-and-key.md) | 🟢 закрыто |

**Итерация 2 — React, стили, разметка, архитектура, безопасность**

| # | Тема | Раздел | Файл | Статус |
|---|------|--------|------|--------|
| 3 | Краш страницы «Favorites» 🔴 | A. Баги | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 4 | Фильтр региона не работает | A. Баги | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 5 | «Visa»/«Search» — пустышки | A. Баги | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 6 | Нет единой модели данных | B. Архитектура | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 7 | Дублирование роутов | B. Архитектура | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 8 | Дубль `RegionFilter`/`VisaFilter` | B. Архитектура | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 9 | Состояние визы не поднято | C. React | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 10 | Дропдаун не закрывается | C. React | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 11 | Логика Loading спорная | C. React | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 12 | Цвета мимо темы | D. Стили | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 13 | «Favorites» вне общего стиля | D. Стили | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 14 | a11y: `label` без `id` | D. Разметка | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 15 | Нет состояний ошибки/пусто | E. Качество | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 16 | `localStorage` без `try/catch` | E. Безопасность | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |
| 17 | README — дефолтный шаблон | E. Качество | [2026-06-26-react-styles-architecture.md](2026-06-26-react-styles-architecture.md) | 🔴 открыто |

Легенда: 🔴 открыто · 🟡 в работе · 🟢 закрыто

_Актуализировано 2026-06-26 после первой порции правок стажёра._
