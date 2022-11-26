import React, { useEffect } from 'react'
import Questions from './Questions';
import { MoveNextQuestion } from '../hooks/FetchQuestions';


/**import Redux store*/
import {useSelector, useDispatch} from 'react-redux';
  
export default function Quiz() { 

  const state = useSelector(state => state.questions.trace );
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(state);
  })

  /** next button e handler*/
  function onNext(){

    /**Update the trace value by 1 using move MoveNextAction */
    dispatch(MoveNextQuestion());
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
