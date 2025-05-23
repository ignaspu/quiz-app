import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { Result, Score } from '../types';

interface EndingPageProps {
  results: Result[];
}

const EndingPage: React.FC<EndingPageProps> = ({ results }) => {
  const { width, height } = useWindowSize();
  const location = useLocation();
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState<Score[]>([]);
  const [userName] = useState(sessionStorage.getItem('name') || 'Anonymous');
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<Result | undefined>();

  useEffect(() => {
    const savedScore = sessionStorage.getItem('quizScore');
    if (savedScore) {
      const scoreValue = parseInt(savedScore, 10);
      setScore(scoreValue);
      const resultFound = results.find(
        (r) => scoreValue >= r.minScore && (r.maxScore === undefined || scoreValue <= r.maxScore)
      );
      if (!resultFound) {
        navigate('/');
        return;
      }
      setResult(resultFound);
    } else if (location.state?.score) {
      const scoreValue = location.state.score;
      sessionStorage.setItem('quizScore', scoreValue.toString());
      setScore(scoreValue);
      const resultFound = results.find(
        (r) => scoreValue >= r.minScore && (r.maxScore === undefined || scoreValue <= r.maxScore)
      );
      if (!resultFound) {
        navigate('/');
        return;
      }
      setResult(resultFound);
    } else {
      navigate('/');
    }
  }, [location.state, navigate, results]);

  useEffect(() => {
    if (score === 0 || !result) return;

    const saveAndLoad = async () => {
      try {
        const hasSubmitted = sessionStorage.getItem('scoreSubmitted');
        if (!hasSubmitted) {
          const saveRes = await fetch('http://localhost:3001/api/saveScore', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: userName, score }),
          });

          if (!saveRes.ok) {
            const errorData = await saveRes.json();
            throw new Error(errorData.error || 'Failed to save score');
          }

          sessionStorage.setItem('scoreSubmitted', 'true');
        }

        const leaderRes = await fetch(`http://localhost:3001/api/getLeaderboard?t=${Date.now()}`);

        const data = await leaderRes.json();
        setLeaderboard(data);
      } catch (error) {
        console.error('Save and Load error:', error);
      }
    };

    saveAndLoad();
  }, [score, result, userName]);

  if (!result || score === 0) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4">
      <Confetti width={width} height={height} recycle={false} numberOfPieces={400} />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl max-w-2xl w-full space-y-8 text-center border border-white/10"
      >
        <div className="space-y-4">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {result.title}
          </h2>
          <div className="text-2xl font-bold text-gray-200">You scored {score} points!</div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => navigate('/')}
            className="p-4 bg-cyan-500/30 hover:bg-cyan-500/40 text-white rounded-xl transition-all"
          >
            🏠 Back Home
          </button>
        </div>

        <div className="mt-8">
          <h3 className="text-xl text-white mb-4">Top 10 Players:</h3>
          <div className="space-y-2">
            {leaderboard.map((entry, index) => (
              <div
                key={index}
                className={`flex justify-between text-gray-200 ${entry.name === userName ? 'font-bold text-white' : ''}`}
              >
                <span>
                  {index + 1}. {entry.name}
                </span>
                <span>{entry.score} points</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EndingPage;
