import React, { useContext } from 'react';
import QuizContext from './Context.js';
import QuestionBank from './QuestionBank.js';

const Result = () => {
  const { answerTracker, setAnswerTracker, setQuizState } = useContext( QuizContext );

  console.log('answers', answerTracker);

  let categories = {
    A: 'Adventurous',
    B: 'Traditional',
    C: 'Sensitive',
    D: 'Thinker',
    E: 'Leader'
  }

  const getCategory = () => {
    let max = 0;
    let maxAnswer = '';
    let secondMax = 0;
    let secondAnswer = '';
    let answers = [];

    for (var key1 in answerTracker) {
      if (answerTracker[key1] > max) {
        max = answerTracker[key1];
        maxAnswer = key1
      }
    }
    answers.push(maxAnswer);

    for (var key2 in answerTracker) {
      if (answerTracker[key2] === max) {
        secondMax = answerTracker[key2];
        secondAnswer = key2;
      }
    }
    answers.push(secondAnswer);

    if (answers[0] === answers[1]) {
      return categories[answers[0]];
    }
    return categories[answers[0]] + categories[answers[1]];
  };

  const restart = () => {
    setAnswerTracker({
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      E: 0
    })
    setQuizState('start');
  };

  console.log('answers', answerTracker);

  const getCocktail = () => {
    axios.get('http://localhost:3000/cocktail')
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log('GET error', err));
  };

  return (
    <div className='result'>
      <h2>{getCocktail()}</h2>
      <button onClick={() => restart()}>RestartQuiz</button>
    </div>
  )
};

export default Result;