import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const stored = browser ? localStorage.getItem('theme') : null;
export const isDark = writable(stored === 'dark');

if (browser) {
  isDark.subscribe(dark => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
}

export const toggle = () => isDark.update(d => !d);
