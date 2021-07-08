import React, { useState, useContext, useEffect } from 'react';
import QuizContext from './Context.js';

const Compare = () => {
  const { setQuizState, results } = useContext( QuizContext );

  // useEffect(() => {
  //   if (results) {
  //     console.log('results', results)
      // results.map(result => {
      //   return (
      //   <>
      //     <p>{result.category}: </p>
      //     <p>{result['total results']}</p>
      //   </>
      //   )
      // })
  //   }
  // })
  const showResults = () => {
    if (results) {
      results.sort((a,b) => (a['total results'] < b['total results'] ? 1 : -1))
      console.log('results', results)
      return (
      <>
        <span><p>{results[0].category} : {results[0]['total results']}</p></span>
        <span><p>{results[1].category} : {results[1]['total results']}</p></span>
        <span><p>{results[2].category} : {results[2]['total results']}</p></span>
        <span><p>{results[3].category} : {results[3]['total results']}</p></span>
        <span><p>{results[4].category} : {results[4]['total results']}</p></span>
        <span><p>{results[5].category} : {results[5]['total results']}</p></span>
        <span><p>{results[6].category} : {results[6]['total results']}</p></span>
        <span><p>{results[7].category} : {results[7]['total results']}</p></span>
        <span><p>{results[8].category} : {results[8]['total results']}</p></span>
        <span><p>{results[9].category} : {results[9]['total results']}</p></span>
        <span><p>{results[10].category} : {results[10]['total results']}</p></span>
        <span><p>{results[11].category} : {results[11]['total results']}</p></span>
        <span><p>{results[12].category} : {results[12]['total results']}</p></span>
        <span><p>{results[13].category} : {results[13]['total results']}</p></span>
        <span><p>{results[14].category} : {results[14]['total results']}</p></span>
      </>
      )
    }
  };

  return (
    <div className='compare'>
      {showResults()}
      <br/>
        <button onClick={() => setQuizState('start')}>Restart Quiz</button>
    </div>
  )
};

export default Compare;