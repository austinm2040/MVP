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
        <img alt={QuestionBank[currentQuestion].A} onClick={handleClick.bind(null, 'A')} src={QuestionBank[currentQuestion].aImage} height='250px' width='375px' style={{'objectFit':'cover'}} />{QuestionBank[currentQuestion].A}
        <img alt={QuestionBank[currentQuestion].B} onClick={handleClick.bind(null, 'B')} src={QuestionBank[currentQuestion].bImage} height='250px' width='375px' style={{'objectFit':'cover'}} />{QuestionBank[currentQuestion].B}
        <img alt={QuestionBank[currentQuestion].C} onClick={handleClick.bind(null, 'C')} src={QuestionBank[currentQuestion].cImage} height='250px' width='375px' style={{'objectFit':'cover'}} />{QuestionBank[currentQuestion].C}
        <img alt={QuestionBank[currentQuestion].D} onClick={handleClick.bind(null, 'D')} src={QuestionBank[currentQuestion].dImage} height='250px' width='375px' style={{'objectFit':'cover'}} />{QuestionBank[currentQuestion].D}
        <img alt={QuestionBank[currentQuestion].E} onClick={handleClick.bind(null, 'E')} src={QuestionBank[currentQuestion].eImage} height='250px' width='375px' style={{'objectFit':'cover'}} />{QuestionBank[currentQuestion].E}
      </div>
    </div>
  )
};

export default Quiz;