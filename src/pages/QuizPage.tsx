import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useSound from '../hooks/useSound';
import ProgressRing from '../components/ProgressRing';
import { Question, Answer } from '../types';
import shuffleArray from '../utils/helpers';

interface QuizPageProps {
  questions: Question[];
}

const QuizPage: React.FC<QuizPageProps> = ({ questions }) => {
  const [shuffledQuestions] = useState(() => shuffleArray(questions));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();
  const { playSound } = useSound();

  const correctAnswerIndex = shuffledQuestions[currentQuestion]?.answers.findIndex(
    (answer) => answer.correct
  );

  const handleAnswer = useCallback(
    (answer: Answer, index: number) => {
      setSelectedAnswer(index);
      playSound(answer.correct ? 'correct' : 'wrong');

      setTimeout(() => {
        setScore((prev) => prev + (answer.correct ? 1 : 0));
        setSelectedAnswer(null);
        setTimeLeft(30);

        if (currentQuestion < shuffledQuestions.length - 1) {
          setCurrentQuestion((prev) => prev + 1);
        } else {
          navigate('/results', { state: { score: score + (answer.correct ? 1 : 0) } });
        }
      }, 1500);
    },
    [currentQuestion, score, navigate, playSound, shuffledQuestions.length]
  );

  useEffect(() => {
    const timer =
      timeLeft > 0 &&
      setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

    if (timeLeft === 0) {
      const timeoutAnswer: Answer = { text: '', correct: false };
      handleAnswer(timeoutAnswer, -1);
    }

    return () => clearInterval(timer as NodeJS.Timeout);
  }, [timeLeft, handleAnswer]);

  if (!shuffledQuestions[currentQuestion]) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-8 relative">
        <div className="flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <span className="font-bold text-cyan-400">Q{currentQuestion + 1}</span>
            <span className="text-gray-400">/{shuffledQuestions.length}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">⭐</span>
              <span className="font-bold">{score}</span>
            </div>
            <ProgressRing
              radius={24}
              stroke={4}
              progress={(timeLeft / 30) * 100}
              color={timeLeft > 10 ? '#22d3ee' : '#ef4444'}
            />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl space-y-8 border border-white/10"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-100">
              {shuffledQuestions[currentQuestion].text}
            </h2>

            <div className="grid gap-4">
              {shuffledQuestions[currentQuestion].answers.map((answer, index) => {
                const isSelected = index === selectedAnswer;
                const isCorrect = answer.correct;
                const showCorrect = selectedAnswer !== null && index === correctAnswerIndex;

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(answer, index)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 text-left rounded-xl transition-all border-2
                      ${
                        isSelected
                          ? isCorrect
                            ? 'bg-green-500/30 border-green-400'
                            : 'bg-red-500/30 border-red-400'
                          : showCorrect
                            ? 'bg-green-500/30 border-green-400'
                            : 'bg-white/10 border-transparent'
                      }
                      ${selectedAnswer !== null && !isSelected && !showCorrect ? 'opacity-50' : ''}`}
                    whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-lg text-cyan-400">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-gray-100">{answer.text}</span>
                      {isCorrect && (isSelected || showCorrect) && (
                        <span className="ml-auto text-green-400">✓</span>
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
