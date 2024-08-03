import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Dispay from './components/Dispay'

function App() {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Dispay />
      </div>
      <Player />
      
    </div>
  )
}

export default App