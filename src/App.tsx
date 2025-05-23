import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import QuizPage from './pages/QuizPage';
import EndingPage from './pages/EndingPage';
import { questions } from './data/questions';
import { results } from './data/results';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/quiz" element={<QuizPage questions={questions} />} />
        <Route path="/results" element={<EndingPage results={results} />} />
      </Routes>
    </Router>
  );
}

export default App;
