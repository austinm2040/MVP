import React, { useState, useContext } from 'react';
import Start from './components/Start.js';
import Quiz from './components/Quiz.js';
import Result from './components/Result.js';
import QuizContext from './components/Context.js';

const App = () => {
  const [quizState, setQuizState] = useState('start');
  const [answerTracker, setAnswerTracker] = useState ({
    A: 0,
    B: 0,
    C: 0,
    D: 0
  });

  return (
    <div className="App">
      <h1>Which Cocktail Are You?</h1>
      <QuizContext.Provider value={{ quizState, setQuizState, answerTracker, setAnswerTracker }}>
        {quizState === 'start' && <Start />}
        {quizState === 'quiz' && <Quiz />}
        {quizState === 'result' && <Result />}
      </QuizContext.Provider>
    </div>
  )
};

export default App;
