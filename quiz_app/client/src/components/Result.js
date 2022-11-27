import React from 'react'
import "../styles/Result.css";
import { Link } from 'react-router-dom';
import ResultTable from './ResultTable';
import { useDispatch } from 'react-redux';

/**Import Actions */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';

export default function Result() {

  const dispatch = useDispatch();

  function onRestart(){
    dispatch(resetAllAction());
    dispatch(resetResultAction());

  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/**Result Table */}
      <div className='result flex-center'>
        <div className='flex'>
          <span>userName</span>
          <span className='bold'>Daily Tuition</span>
        </div>
        <div className='flex'>
          <span>Total Quiz Points : </span>
          <span className='bold'>50</span>
        </div>
        <div className='flex'>
          <span>Total Questions : </span>
          <span className='bold'>05</span>
        </div>
        <div className='flex'>
          <span>Total Attempts : </span>
          <span className='bold'>03</span>
        </div>
        <div className='flex'>
          <span>Total Earn Points : </span>
          <span className='bold'>30</span>
        </div>
        <div className='flex'>
          <span>Quiz Result : </span>
          <span className='bold'>Passed</span>
        </div>
      </div>

      {/**Restart button to Main.js */}
      <div className='start'>
        <Link className='btn' to={"/"} onClick={onRestart()}>Restart</Link>
      </div>

      {/**Result Table*/}
      <div className='container'>
        <ResultTable/>
      </div>
    
    </div>
  )
}
