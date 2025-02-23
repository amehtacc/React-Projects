import React from 'react'
import Counter from './Counter'

function App() {
  return (
    <div className='w-full h-screen text-white flex flex-col justify-center items-center gap-20'>
      <h2 className='text-4xl font-bold'>React Counter App</h2>
      <Counter />
    </div>
  )
}

export default App