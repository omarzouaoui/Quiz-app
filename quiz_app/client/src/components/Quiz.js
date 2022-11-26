import React, { useEffect } from 'react'
import Questions from './Questions';
import { MoveNextQuestion, MovePrevQuestion} from '../hooks/FetchQuestions';


/**import Redux store*/
import {useSelector, useDispatch} from 'react-redux';
  
export default function Quiz() { 

  const {queue} = useSelector(state => state.questions );
  const {trace} = useSelector(state => state.questions );


  const dispatch = useDispatch()

  useEffect(() => {
    console.log(trace);
  })

  /** next button e handler*/
  function onNext(){
    if( trace < queue.length - 1 ){
      /**Update the trace value by 1 using move MoveNextAction */
      console.log("next question");
      dispatch(MoveNextQuestion());
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
