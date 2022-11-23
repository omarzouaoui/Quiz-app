import React from 'react'
import "./Questions";

export default function Quiz() {

  /** next button e handler*/
  function onNext(){
    console.log("on Next");
  };

  /** prev button e handler*/
  function onPrev(){
    console.log("on Prev");
  };

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/** display questions*/}
      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}
