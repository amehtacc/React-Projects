import React from 'react'  // Importing React library
import Counter from './Counter'  // Importing the Counter component

function App() {
  return (
    <div className='w-full h-screen text-white flex flex-col justify-center items-center gap-20'>

      {/* Application title */}
      <h2 className='text-4xl font-bold'>React Counter App</h2>

      {/* Rendering the Counter component */}
      <Counter />
    </div>
  )
}

export default App