import React from 'react'
import Blogs from '../../components/Blogs/Blogs'
import SideBar from '../../components/SideBar/SideBar'
import './Centered.scss'

export default function Centered () {
  return (
    <div className='centered'>
        <SideBar />
        <Blogs />
    </div>
  )
}
