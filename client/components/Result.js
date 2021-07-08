import React, { useState, useContext } from 'react';
import QuizContext from './Context.js';
import QuestionBank from './QuestionBank.js';
import axios from 'axios';

const Result = () => {
  const { answerTracker, setAnswerTracker, setQuizState, results, setResults } = useContext( QuizContext );
  const [ cocktail, setCocktail ] = useState( {} );

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

  const getCocktail = () => {
    let result = getCategory();

    axios.get('http://localhost:3000/cocktail')
    .then(response => {
      response.data.map(cocktail => {
        if (result === cocktail.category1 || result === cocktail.category2) {
          setCocktail(cocktail)
        }
      })
    })
    .catch(err => console.log('GET error', err));
  };

  const postResult = () => {
    let cocktailResult = {
      'category': cocktail.name
    };
    axios.post('http://localhost:3000/add', cocktailResult)
    .catch(err => console.log('post error', err));
  };

  const getResults = () => {
    axios.get('http://localhost:3000/results')
    .then(response => {
      setResults(response.data)
    })
    .catch(err => console.log('GET error', err));
  };

  return (
    <div className='result'>
      {getCocktail()}
      <h2>{`You got ${cocktail.name}!`}</h2>
      <img alt={cocktail.name} src={cocktail.image} height='250px' width='375px' style={{'objectFit':'cover'}} />
      <p>{cocktail.description}</p>
      <a>Find out how to make your Cocktail!</a>
      <div className='link'>
        <a href={cocktail.link}>{cocktail.name}</a>
      </div>
      <br/>
        <button onClick={() => restart()}>Restart Quiz</button>
      <br/>
      <button onClick={() => {postResult(); getResults(); setQuizState('compare')}}>Compare Your Results</button>
    </div>
  )
};

export default Result;