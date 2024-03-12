# Правила, <br> которые надо соблюдать, <br> иначе бан

## *Base*
Базовые настройки всего проекта, сброс стилей.

## *Container*
Настройки контейнера для всего сайта

## *Typography*
**Headlines (***Заголовки***)**, имена классов: <br> Имена можно увидеть в макете <br> 
- heading_1 
- heading_2 
- heading_3 
- heading_4
- heading_5

**Other text**, имена классов: <br>
- Текст
  - body_l
  - body_m
  - body_s
  - footnote_l
  - footnote_m
  - footnote_s
- Кнопки
  - font_button_m
  - font_button_s

## *Root*
В файле **root** объявлены все переменные, <br> которые используются по всему проекту

## *Mixins*
Миксины подключены глобально на весь проект <br>
для вызова миксина - используется *(@include nameMixin)*

## *Interface*
Пока тут хранятся базовые настройки для спрайтов

## *Set-class*
Наборы классов, например (set-flex), для flex:
- flex_al_c - это класс модификатор, значение
  - display: flex; align-items: center;
- flex_jc_sb_al_c
  - display: flex; justify-content: space-between; align-items: center;

***Можно использовать в местах, где часто повторяется набор стилей.***