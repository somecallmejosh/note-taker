// stores/useFontStore.js
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core';

export const useFontStore = defineStore('font', () => {
  let selectedFont = useStorage('fontPreference', 'font-sans');

  function setFont(font) {
    selectedFont.value = font;
  }

  return {
    selectedFont,
    setFont,
  };
});
