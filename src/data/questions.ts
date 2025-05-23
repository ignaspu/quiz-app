import { Question } from '../types';

export const questions: Question[] = [
  {
    text: 'What’s your first reaction when code compiles without errors?',
    answers: [
      { text: 'Panic. It’s never this easy.', correct: true },
      { text: 'Celebrate with a coffee', correct: false },
      { text: 'Call it a day', correct: false },
      { text: 'Push to production immediately', correct: false },
    ],
  },
  {
    text: 'Why do developers prefer dark mode?',
    answers: [
      { text: 'Saves battery', correct: false },
      { text: 'It’s easier on the eyes', correct: false },
      { text: 'Because light attracts bugs 🐛', correct: true },
      { text: 'It looks cooler', correct: false },
    ],
  },
  {
    text: 'What’s the most reliable debugging tool?',
    answers: [
      { text: 'Console.log()', correct: true },
      { text: 'Breakpoints', correct: false },
      { text: 'Rubber duck', correct: false },
      { text: 'Crying softly', correct: false },
    ],
  },
  {
    text: 'What does “it works on my machine” usually mean?',
    answers: [
      { text: 'You have a magical laptop', correct: false },
      { text: 'The code is perfect', correct: false },
      { text: 'The problem is yours now', correct: true },
      { text: 'Blame it on DNS', correct: false },
    ],
  },
  {
    text: 'Which of the following is a valid reason to refactor code?',
    answers: [
      { text: 'Someone said "legacy"', correct: true },
      { text: 'Mercury is in retrograde', correct: false },
      { text: 'You had a weird dream about it', correct: false },
      { text: 'Because tabs > spaces', correct: false },
    ],
  },
  {
    text: 'What’s the true purpose of Stack Overflow?',
    answers: [
      { text: 'To learn best practices', correct: false },
      { text: 'To understand documentation', correct: false },
      { text: 'To copy and paste working code', correct: true },
      { text: 'To argue in the comments', correct: false },
    ],
  },
  {
    text: 'When should you test your code?',
    answers: [
      { text: 'Before deployment', correct: false },
      { text: 'After deployment', correct: false },
      { text: 'In production (like a real dev)', correct: true },
      { text: 'What is testing?', correct: false },
    ],
  },
  {
    text: 'What’s the fastest way to fix a bug?',
    answers: [
      { text: 'Blame the intern', correct: false },
      { text: 'Roll back and pretend it never happened', correct: true },
      { text: 'Turn it off and on again', correct: false },
      { text: 'Sacrifice a rubber duck', correct: false },
    ],
  },
  {
    text: 'Why did the developer go broke?',
    answers: [
      { text: 'Too many coffee subscriptions', correct: false },
      { text: 'Because he used up all his cache 💸', correct: true },
      { text: 'Bought too many monitors', correct: false },
      { text: 'Upgraded to AI-powered everything', correct: false },
    ],
  },
  {
    text: 'Which Git command fixes everything?',
    answers: [
      { text: 'git merge', correct: false },
      { text: 'git revert', correct: false },
      { text: 'git push --force', correct: true },
      { text: 'git yolo', correct: false },
    ],
  },
  {
    text: 'What’s the best part of being a full-stack dev?',
    answers: [
      { text: 'Doing front-end and back-end', correct: false },
      { text: 'Understanding the full picture', correct: false },
      { text: 'Double the bugs, double the fun', correct: true },
      { text: 'Endless coffee breaks', correct: false },
    ],
  },
  {
    text: 'What do developers do on weekends?',
    answers: [
      { text: 'Touch grass 🌱', correct: false },
      { text: 'Sleep', correct: false },
      { text: 'Refactor for fun', correct: true },
      { text: 'Complain about Jira tickets', correct: false },
    ],
  },
  {
    text: 'Why are semicolons important?',
    answers: [
      { text: 'They prevent chaos', correct: false },
      { text: 'They look cute ;)', correct: false },
      { text: 'To start arguments on Twitter', correct: true },
      { text: 'What are semicolons?', correct: false },
    ],
  },
  {
    text: 'When you see a `try...catch`, what do you assume?',
    answers: [
      { text: 'This dev is cautious', correct: false },
      { text: 'Something sketchy is going on', correct: true },
      { text: 'It’s clean code', correct: false },
      { text: 'Must be handling payment logic', correct: false },
    ],
  },
  {
    text: 'Best comment in code?',
    answers: [
      { text: '// TODO: fix this', correct: false },
      { text: '// Don’t touch this or it breaks', correct: true },
      { text: '// Magic happens here ✨', correct: false },
      { text: '// Who wrote this?', correct: false },
    ],
  },
];
