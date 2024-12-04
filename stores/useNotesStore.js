// stores/useFontStore.js
import { defineStore } from 'pinia';
export const useNotesStore = defineStore('notes', () => {
  const archivedNotesMenu = [
    {
      id: 1,
      label: 'Archived Note Number 1',
      tags: ['dev', 'react'],
      date: '2021-10-01',
    },
    {
      id: 2,
      label: 'Something that does not matter',
      tags: ['dev', 'vue'],
      date: '2021-10-02',
    },
    {
      id: 3,
      label: 'A Note Title Here',
      tags: ['dev', 'nuxt'],
      date: '2021-10-03',
    },
    {
      id: 4,
      label: 'Vite',
      tags: ['dev', 'vite'],
      date: '2021-10-04',
    },
    {
      id: 5,
      label: 'Tailwind CSS',
      tags: ['dev', 'tailwind'],
      date: '2021-10-05',
    },
    {
      id: 6,
      label: 'Deno',
      tags: ['dev', 'deno'],
      date: '2021-10-06',
    },
    {
      id: 7,
      label: 'Svelte',
      tags: ['dev', 'svelte'],
      date: '2021-10-07',
    },
    {
      id: 8,
      label: 'Angular',
      tags: ['dev', 'angular'],
      date: '2021-10-08',
    },
    {
      id: 9,
      label: 'TypeScript',
      tags: ['dev', 'typescript'],
      date: '2021-10-09',
    },
    {
      id: 10,
      label: 'JavaScript',
      tags: ['dev', 'javascript'],
      date: '2021-10-10',
    },
    {
      id: 11,
      label: 'HTML',
      tags: ['dev', 'html'],
      date: '2021-10-11',
    },
    {
      id: 12,
      label: 'CSS',
      tags: ['dev', 'css'],
      date: '2021-10-12',
    },
    {
      id: 13,
      label: 'Sass',
      tags: ['dev', 'sass'],
      date: '2021-10-12'
    }
  ]

  const activeNotesMenu = [
    {
      id: 1,
      label: 'React Performance Optimization',
      tags: ['dev', 'react'],
      date: '2021-10-01',
    },
    {
      id: 2,
      label: 'Vue 3 Composition API',
      tags: ['dev', 'vue'],
      date: '2021-10-02',
    },
    {
      id: 3,
      label: 'Nuxt 3',
      tags: ['dev', 'nuxt'],
      date: '2021-10-03',
    },
    {
      id: 4,
      label: 'Vite',
      tags: ['dev', 'vite'],
      date: '2021-10-04',
    },
    {
      id: 5,
      label: 'Tailwind CSS',
      tags: ['dev', 'tailwind'],
      date: '2021-10-05',
    },
    {
      id: 6,
      label: 'Deno',
      tags: ['dev', 'deno'],
      date: '2021-10-06',
    },
    {
      id: 7,
      label: 'Svelte',
      tags: ['dev', 'svelte'],
      date: '2021-10-07',
    },
    {
      id: 8,
      label: 'Angular',
      tags: ['dev', 'angular'],
      date: '2021-10-08',
    },
    {
      id: 9,
      label: 'TypeScript',
      tags: ['dev', 'typescript'],
      date: '2021-10-09',
    },
    {
      id: 10,
      label: 'JavaScript',
      tags: ['dev', 'javascript'],
      date: '2021-10-10',
    },
    {
      id: 11,
      label: 'HTML',
      tags: ['dev', 'html'],
      date: '2021-10-11',
    },
    {
      id: 12,
      label: 'CSS',
      tags: ['dev', 'css'],
      date: '2021-10-12',
    },
    {
      id: 13,
      label: 'Sass',
      tags: ['dev', 'sass'],
      date: '2021-10-12'
    }
  ]

  return {
    activeNotesMenu,
    archivedNotesMenu,
  };
});
