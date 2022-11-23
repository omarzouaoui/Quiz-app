import React from 'react'
import "./Questions";
import Questions from './Questions';

export default function Quiz() {

  /** next button e handler*/
  function onNext(){
   
  };

  /** prev button e handler*/
  function onPrev(){
   
  };

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/** display questions*/}
      <Questions/>

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}
