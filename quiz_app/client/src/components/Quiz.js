import React, { useEffect } from 'react'
import "./Questions";
import Questions from './Questions';


/**import Redux store*/
import {useSelector} from 'react-redux';
  
export default function Quiz() { 

  const state = useSelector(state => state)

  useEffect(() => {
    console.log(state);
  })

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
