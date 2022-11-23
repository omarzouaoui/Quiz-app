import React from 'react'

export default function Quiz() {
  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/** display questions*/}
      <div className='grid'>
        <button>Prev</button>
        <button>Next</button>
      </div>

    </div>
  )
}
