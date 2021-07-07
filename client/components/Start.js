import React, { useContext } from 'react';
import QuizContext from './Context.js';

const Start = () => {
  const { quizState, setQuizState } = useContext( QuizContext );

  return (
    <div className='start'>
      <button onClick={() => setQuizState('quiz')}>Start Quiz</button>
    </div>
  )
};

export default Start;