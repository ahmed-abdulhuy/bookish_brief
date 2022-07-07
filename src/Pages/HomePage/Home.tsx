import './Home.scss'
import React from 'react'
import Books from '../../components/Books/Books'
import SideBar from '../../components/SideBar/SideBar'

export default function Home() {

    return(
    <div className='home'>
        <SideBar />
        <Books />
    </div>
    )
}