import './App.css'
import React from 'react'

function App() {


  return (
    <div className="w-full h-screen bg-clip-border flex text-white bg-center bg-[url('./image/background.jpg')] items-center justify-center">
      <div className="h-150 w-150 flex items-center justify-center backdrop-blur backdrop-filter bg-opacity-50 rounded-lg flex-col border-1 border-white-500 shadow-lg shadow-2xl">
        <form className='flex flex-col items-center justify-center gap-5'>
          <h1 className='text-[30px] font-bold mb-5 mt-[-50px] flex'>LOGIN</h1>
          <input className='bg-none p-3 rounded-lg focus:outline-none border-1  hover:bg-purple-700 animate-bounce'
          type="gmail"
           />
          <input className='bg-none p-3 rounded-lg focus:outline-none border-1 hover:bg-purple-700 animate-bounce'
          type="password"
           />
           <button className='bg-none hover:bg-purple-700 text-white font-bold py-2 px-4 rounded cursor-pointer border-1'
           type='submit'
           >Login</button>
        </form>
      </div>
    </div>
  )
}


export default App
