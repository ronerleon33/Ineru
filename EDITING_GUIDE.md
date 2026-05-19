# Руководство по редактированию текста на сайте

## Как включить режим редактирования

1. На любой странице сайта нажмите кнопку **"Редактировать"** в правом верхнем углу
2. Все редактируемые элементы будут подсвечены синей рамкой
3. Кликните на любой текст и редактируйте его прямо на странице
4. Изменения сохраняются автоматически в localStorage браузера
5. Кнопка изменится на **"Сохранено"** (зелёная)

## Как сделать текст редактируемым на странице

### Пример использования компонента EditableText

```tsx
import { EditableText } from "../components/EditableText";

// В вашем компоненте:
<EditableText
  id="unique-id-for-this-text"
  as="h1"  // или "h2", "h3", "p", "span"
  defaultValue="Текст по умолчанию"
  className="your-tailwind-classes"
/>
```

### Параметры компонента

- **id** (обязательный) - уникальный идентификатор для сохранения в localStorage
- **as** (опциональный) - HTML тег (h1, h2, h3, p, span). По умолчанию: "p"
- **defaultValue** (обязательный) - текст который будет показан изначально
- **className** (опциональный) - CSS классы для стилизации

### Примеры для разных случаев

#### Заголовок H1
```tsx
<EditableText
  id="page-title"
  as="h1"
  defaultValue="Заголовок страницы"
  className="text-5xl md:text-6xl leading-tight"
/>
```

#### Параграф
```tsx
<EditableText
  id="description-text"
  as="p"
  defaultValue="Описание продукта или услуги"
  className="text-xl text-gray-600 mb-8 leading-relaxed"
/>
```

#### Часть текста (span)
```tsx
<h1>
  <EditableText
    id="hero-highlight"
    as="span"
    defaultValue="Инновационные решения"
    className="bg-gradient-to-r from-[#EC7036] to-[#ff8c5a] bg-clip-text text-transparent"
  />
  {" "}для вашего бизнеса
</h1>
```

## Управление сохраненными данными

Все изменения хранятся в localStorage браузера под ключом `editableContent`.

### Сброс всех изменений (через консоль браузера)
```javascript
localStorage.removeItem('editableContent');
location.reload();
```

### Экспорт изменений (через консоль браузера)
```javascript
console.log(localStorage.getItem('editableContent'));
```

### Импорт изменений (через консоль браузера)
```javascript
localStorage.setItem('editableContent', '{"key":"value"}');
location.reload();
```

## Рекомендации

1. **Уникальные ID**: Используйте понятные и уникальные ID, например: `"home-hero-title"`, `"inventory-description"`, `"contact-form-heading"`

2. **Сохраняйте структуру**: Не используйте EditableText для очень длинных текстов - лучше разбить на несколько элементов

3. **Классы стилей**: Все классы Tailwind CSS которые были в оригинальном элементе должны быть переданы в параметр `className`

4. **Тестирование**: После добавления EditableText проверьте что текст корректно отображается как в обычном, так и в режиме редактирования

## Пример конвертации обычного текста

### До:
```tsx
<h1 className="mb-6 text-5xl md:text-6xl leading-tight">
  Вендинговый аппарат на основе ИИ
</h1>
```

### После:
```tsx
<EditableText
  id="vendai-title"
  as="h1"
  defaultValue="Вендинговый аппарат на основе ИИ"
  className="mb-6 text-5xl md:text-6xl leading-tight"
/>
```
