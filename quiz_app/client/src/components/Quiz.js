import React, { useEffect, useState } from 'react'
import Questions from './Questions';

import { MoveNextQuestion, MovePrevQuestion} from '../hooks/FetchQuestions';
import { PushAnswer } from '../hooks/setResult';


/**import Redux store*/
import {useSelector, useDispatch} from 'react-redux';

import { Navigate } from 'react-router-dom';
  
export default function Quiz() { 

  const [check, setChecked] = useState(undefined);

  const {queue} = useSelector(state => state.questions );
  const {trace} = useSelector(state => state.questions );
  const result = useSelector(state => state.result.result);

  const dispatch = useDispatch()

  useEffect(() => {
    console.log(queue);
  })

  /** next button e handler*/
  function onNext(){
    if( trace < queue.length  ){
      /**Update the trace value by 1 using move MoveNextAction */
      console.log("next question");
      dispatch(MoveNextQuestion());
      dispatch(PushAnswer(check))
    }
  };

  /** prev button e handler*/
  function onPrev(){
    if( trace > 0 ){
      console.log("prev question");
      /**Update the trace value by 1 using move MoveNextAction */
      dispatch(MovePrevQuestion())
    }
  };

  function onChecked(check){
    console.log(check); 
    setChecked(check)
  }

  /**finish the exam after the last question */
  if(result.length && result.length >= queue.length ){
    return <Navigate to={"/result"} replace={true}></Navigate>
  }
 
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/** display questions*/}
      <Questions onChecked={onChecked}/>

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </div>
  )
}
