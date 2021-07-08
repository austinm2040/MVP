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

  const goBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  return (
    <div className='quiz'>
      <h1>{QuestionBank[currentQuestion].Question}</h1>
      <div className='choices'>
        <img className='imageA' alt={QuestionBank[currentQuestion].A} onClick={handleClick.bind(null, 'A')} src={QuestionBank[currentQuestion].aImage} height='250px' width='375px'/><a className='A'>{QuestionBank[currentQuestion].A}</a>
        <img className='imageB' alt={QuestionBank[currentQuestion].B} onClick={handleClick.bind(null, 'B')} src={QuestionBank[currentQuestion].bImage} height='250px' width='375px'/><a className='B'>{QuestionBank[currentQuestion].B}</a>
        <img className='imageC' alt={QuestionBank[currentQuestion].C} onClick={handleClick.bind(null, 'C')} src={QuestionBank[currentQuestion].cImage} height='250px' width='375px'/><a className='C'>{QuestionBank[currentQuestion].C}</a>
        <img className='imageD' alt={QuestionBank[currentQuestion].D} onClick={handleClick.bind(null, 'D')} src={QuestionBank[currentQuestion].dImage} height='250px' width='375px'/><a className='D'>{QuestionBank[currentQuestion].D}</a>
        <img className='imageE' alt={QuestionBank[currentQuestion].E} onClick={handleClick.bind(null, 'E')} src={QuestionBank[currentQuestion].eImage} height='250px' width='375px'/><a className='E'>{QuestionBank[currentQuestion].E}</a>
      </div>
      {currentQuestion > 0 ? (
        <button onClick={() => goBack()}>Back</button>
      ) : ('') }
    </div>
  )
};

export default Quiz;