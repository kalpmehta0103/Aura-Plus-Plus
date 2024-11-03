import React from 'react'
import Navbar from './components/Navbar'
import TimelineComponent from './components/TimelineComponent'


function ProfileDash() {
  return (
    <div className='w-screen h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <TimelineComponent/>
    </div>
  )
}

export default ProfileDash