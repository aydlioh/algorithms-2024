import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Algorithms SkillFactory',
  head: [['link', { rel: 'icon', href: '/home-icon.webp' }]],
  description: 'Билеты с экзамена по алгоритмам ИРИТ-РТФ SkillFactory 2024',
  themeConfig: {
    logo: '/home-icon.webp',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Tasks', link: '/readme.md' },
    ],

    sidebar: [
      {
        text: 'Основные определения',
        collapsed: true,
        items: [
          { text: 'Алгоритм и его свойства', link: '/tasks/001.md' },
          { text: 'Структура данных', link: '/tasks/002.md' },
          {
            text: 'Абстракции «Последовательность», «Массив», «Множество»',
            link: '/tasks/003.md',
          },
          {
            text: 'Рекурсия. Принцип «разделяй и властвуй»',
            link: '/tasks/004.md',
          },
          { text: 'Представление чисел в алгоритмах', link: '/tasks/005.md' },
          { text: 'Основная теорема о рекурсии', link: '/tasks/006.md' },
          {
            text: 'Алгоритм Karatsuba. Алгоритм быстрого возведения в степень',
            link: '/tasks/007.md',
          },
          { text: 'Абстракция «Отображение»', link: '/tasks/023.md' },
          { text: 'Задача поиска. Абстракция поиска', link: '/tasks/024.md' },
        ],
      },
      {
        text: 'Сортировки',
        collapsed: true,
        items: [
          {
            text: 'Сортировка сравнением. Понятие инверсии. Сортировка пузырьком.',
            link: '/tasks/008.md',
          },
          {
            text: 'Сортировка вставками. Сортировка Шелла',
            link: '/tasks/009.md',
          },
          { text: 'Сортировка выбором', link: '/tasks/010.md' },
          { text: 'Нахождение k-порядковой статистики', link: '/tasks/011.md' },
          { text: 'Быстрая сортировка', link: '/tasks/012.md' },
          { text: 'Сортировка слиянием', link: '/tasks/013.md' },
          { text: 'Сортировка подсчетом', link: '/tasks/014.md' },
          { text: 'Поразрядная сортировка', link: '/tasks/015.md' },
          {
            text: 'Внешняя сортировка слиянием. Сортировка сериями',
            link: '/tasks/016.md',
          },
          { text: 'Обобщенный быстрый поиск', link: '/tasks/029.md' },
        ],
      },
      {
        text: 'Структуры данных',
        collapsed: true,
        items: [
          { text: 'Структура данных «Список»', link: '/tasks/017.md' },
          {
            text: 'Структура данных «Стек», «Очередь» и «Дек»',
            link: '/tasks/018.md',
          },
          {
            text: 'Структура данных «Дерево». Представление',
            link: '/tasks/019.md',
          },
          { text: 'Структура данных «Дерево». Обход', link: '/tasks/020.md' },
          {
            text: 'Бинарная куча. Абстракция «Очередь с приоритетом»',
            link: '/tasks/021.md',
          },
          { text: 'Двоичная куча', link: '/tasks/022.md' },

          { text: 'Бинарные деревья поиска', link: '/tasks/025.md' },
          { text: 'Декартовы деревья', link: '/tasks/026.md' },
          {
            text: 'Сбалансированные деревья поиска. Красно-черные деревья',
            link: '/tasks/027.md',
          },

          { text: 'Внешний поиск. B-деревья', link: '/tasks/028.md' },

          {
            text: 'Двоичные деревья. Алгоритм Хаффмана',
            link: '/tasks/037.md',
          },
          {
            text: 'Префиксное дерево. Задача о покрытии строки',
            link: '/tasks/038.md',
          },
        ],
      },
      {
        text: 'Хеш-функции',
        collapsed: true,
        items: [
          {
            text: 'Хеш-функции. Хеш-таблицы с прямой адресацией',
            link: '/tasks/030.md',
          },
          { text: 'Хеш-таблицы с открытой адресацией', link: '/tasks/031.md' },
          { text: 'Хеш-таблицы во внешней памяти', link: '/tasks/032.md' },
          { text: 'Алгоритм Карпа-Рабина', link: '/tasks/033.md' },
        ],
      },
      {
        text: 'Жадные алгоритмы',
        collapsed: true,
        items: [
          {
            text: 'Задача об интервалах',
            link: '/tasks/034.md',
          },
          {
            text: 'Задача о резервных копиях',
            link: '/tasks/035.md',
          },
          { text: 'Задача о рюкзаке', link: '/tasks/036.md' },
        ],
      },
      {
        text: 'Динамическое программирование',
        collapsed: true,
        items: [
          {
            text: 'Задача о количестве маршрутов. Принцип Беллмана',
            link: '/tasks/039.md',
          },
          {
            text: 'Задача о возрастающей подпоследовательности наибольшей длины',
            link: '/tasks/040.md',
          },
          {
            text: 'Задача о банкомате',
            link: '/tasks/041.md',
          },
          {
            text: 'Задача о счастливых билетах',
            link: '/tasks/042.md',
          },
        ],
      },
      {
        text: 'Графы',
        collapsed: true,
        items: [
          { text: 'Графы и их представление', link: '/tasks/043.md' },
          {
            text: 'Обход графа. Поиск в ширину. Алгоритм BFS',
            link: '/tasks/044.md',
          },
          {
            text: 'Обход графа. Поиск в глубину. Алгоритм DFS',
            link: '/tasks/045.md',
          },
          { text: 'Поиск компонент связности в графе', link: '/tasks/046.md' },
          { text: 'Топологическая сортировка', link: '/tasks/047.md' },
          { text: 'Остовные деревья. Свойства MST', link: '/tasks/048.md' },
          { text: 'Алгоритм Прима', link: '/tasks/049.md' },
          { text: 'Алгоритма Краскала', link: '/tasks/050.md' },
          { text: 'Алгоритм Дейкстры', link: '/tasks/051.md' },
          { text: 'Алгоритм Флойда-Уоршалла', link: '/tasks/052.md' },
          { text: 'Алгоритм Беллмана-Форда', link: '/tasks/053.md' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aydlioh/algo-exam-2024' },
    ],
  },
});
