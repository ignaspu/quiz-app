# Developer Vibes Quiz App

A simple, fun quiz app to test your developer knowledge and personality.

## Features

- 3 pages: Start, Quiz, Results
- Questions show one by one
- Question order random every time
- Timer for each question (30 seconds)
- Score system (1 point per correct)
- Persistent leaderboard using MongoDB
- Nice animations and design
- Mobile friendly

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Database**: MongoDB for leaderboard storage
- **Animations**: Framer Motion
- **Confetti Effects**: React-confetti

## How To Use

1. Click "Start Quiz"
2. Read questions carefully
3. Choose answer before time runs out
4. See correct answer after selection
5. Finish all questions to see final score
6. Check where you rank against others
7. Try again to improve your score!

## Installation & Setup

1. **Prerequisites**:
   - Node.js installed
   - MongoDB installed and running

2. **Frontend**:
```bash
Create .env file in root directory with:
MONGODB_URI="mongodb+srv://username:password@cluster0.3jy3sc1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
npm install
npm start
