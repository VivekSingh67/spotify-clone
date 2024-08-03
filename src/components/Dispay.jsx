import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'

function Dispay() {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%]'>
        <Routes>
            <Route path="/" element={<DisplayHome />} />
        </Routes>
    </div>
  )
}

export default Dispay