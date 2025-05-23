import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { questions } from '../data/questions';
import useSound from '../hooks/useSound';
import { Feature } from '../types';
import { useState } from 'react';

const IntroPage: React.FC = () => {
  const navigate = useNavigate();
  const { playSound } = useSound();
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleStart = () => {
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (name.length < 2) {
      setError('Name must be at least 2 characters');
      return;
    }
    sessionStorage.removeItem('quizScore');
    sessionStorage.removeItem('scoreSubmitted');
    sessionStorage.setItem('name', name);
    playSound('click');
    navigate('/quiz');
  };

  const features: Feature[] = [
    {
      icon: '⏱️',
      title: 'Speed Run Mode',
      text: '30s per question – like coding before a deadline',
    },
    {
      icon: '🧠',
      title: 'Intelligent Scoring',
      text: 'Scores based on your dev instincts (and sarcasm)',
    },
    {
      icon: '📈',
      title: 'Dev Personality Breakdown',
      text: 'Results more insightful than your Jira board',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex items-center justify-center p-4 relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-20 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/10 max-w-2xl space-y-8 transform transition-all hover:scale-[1.005]">
          <div className="space-y-6 text-center">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
              className="inline-block text-6xl"
            >
              🚀
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Developer Vibes Quiz
            </h1>
            <p className="text-lg text-gray-300">
              Discover your dev personality through {questions.length} carefully crafted, mildly
              sarcastic questions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature: Feature, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-white/5 rounded-xl border border-white/10 space-y-2"
              >
                <div className="text-2xl">{feature.icon}</div>
                <h3 className="font-semibold text-cyan-400">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.text}</p>
              </motion.div>
            ))}
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError('');
            }}
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg mb-4 text-black"
          />
          {error && <p className="text-red-400 mb-2">{error}</p>}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStart}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Start Debugging 🐞</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default IntroPage;
