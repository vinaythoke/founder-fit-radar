import React, { useState } from 'react';
import './App.css';
import QuestionCard from './components/QuestionCard';
import ProgressBar from './components/ProgressBar';
import ResultsView from './components/ResultsView';
import { QUESTIONS } from './data/questions';
import { calculateScore } from './data/scoring';

function App() {
  const [started, setStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (value) => {
    const question = QUESTIONS[currentQuestionIndex];
    setAnswers({ ...answers, [question.id]: value });
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setStarted(false); // Back to intro
    }
  };

  const handleReset = () => {
    setStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const results = calculateScore(answers);
    return (
      <ResultsView results={results} onReset={handleReset} />
    );
  }

  if (!started) {
    return (
      <div className="intro-container fade-in">
        <h1 className="gradient-text">Founder Fit Radar</h1>
        <p className="tagline">How ready is the founder to lead what comes next.</p>
        <p className="description text-secondary">
          Fast, reality-first founder assessment that separates ego from readiness.
          <br />12 Questions. 2 Minutes. Brutal honesty required.
        </p>
        <button className="btn btn-primary btn-large" onClick={handleStart}>
          Start Assessment
        </button>
      </div>
    );
  }

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const currentAnswer = answers[currentQuestion.id];

  return (
    <div className="quiz-container">
      <ProgressBar current={currentQuestionIndex} total={QUESTIONS.length} />
      <QuestionCard
        question={currentQuestion}
        answer={currentAnswer}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
        isFirst={currentQuestionIndex === 0} // Handling Back to intro separately
        isLast={currentQuestionIndex === QUESTIONS.length - 1}
      />
    </div>
  );
}

export default App;
