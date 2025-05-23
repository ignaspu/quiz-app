import { Result } from '../types';

export const results: Result[] = [
  {
    title: 'Full-Stack Overlord',
    description:
      'You debug in your sleep, deploy before lunch, and meme after dinner. Whether frontend flames or backend chaos, you rule all layers with caffeine and confidence.',
    minScore: 12,
    maxScore: 15,
  },
  {
    title: 'Code Wizard',
    description:
      'You wield `console.log()` like a magic staff and can reverse a segfault with a single sigh. You may not always know why it works, but it *does* work.',
    minScore: 8,
    maxScore: 11,
  },
  {
    title: 'Bug Whisperer',
    description:
      'You speak fluent Stack Overflow and have tamed more bugs than QA has test cases. People call you not when it works, but when it *should* have.',
    minScore: 5,
    maxScore: 7,
  },
  {
    title: 'Junior JavaScript Jedi',
    description:
      'You’re still figuring out why your code compiles and what "hoisting" actually means, but you’re on the path to greatness — one meme, bug, and “why is this null?” at a time.',
    minScore: 0,
    maxScore: 4,
  },
];
