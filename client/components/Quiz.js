import React, { useState, useContext } from 'react';
import QuestionBank from './QuestionBank.js'
import QuizContext from './Context.js';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState( 0 );
  const { answerTracker, setAnswerTracker, setQuizState } = useContext( QuizContext );

  const handleClick = (selected) => {
    setAnswerTracker({
      ...answerTracker,
      [selected]: answerTracker[selected] + QuestionBank[currentQuestion].Weight
    })
    if (currentQuestion === QuestionBank.length - 1) {
      setQuizState('result');
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  console.log('answerTracker', answerTracker);
  console.log('question', currentQuestion);

  return (
    <div className='quiz'>
      <h1>{QuestionBank[currentQuestion].Question}</h1>
      <div className='choices'>
        <button onClick={handleClick.bind(null, 'A')}>{QuestionBank[currentQuestion].A}</button>
        <button onClick={handleClick.bind(null, 'B')}>{QuestionBank[currentQuestion].B}</button>
        <button onClick={handleClick.bind(null, 'C')}>{QuestionBank[currentQuestion].C}</button>
        <button onClick={handleClick.bind(null, 'D')}>{QuestionBank[currentQuestion].D}</button>
        <button onClick={handleClick.bind(null, 'E')}>{QuestionBank[currentQuestion].E}</button>
      </div>
    </div>
  )
};

export default Quiz;