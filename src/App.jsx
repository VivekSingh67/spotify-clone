import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'
import Dispay from './components/Dispay'
import { PlayerContext } from './context/PlayerContext'

function App() {
  const {audioRef, track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Dispay />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App