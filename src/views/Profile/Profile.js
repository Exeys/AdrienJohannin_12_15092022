import React from 'react'
import './Profile.css'
import Header from '../../components/Header/Header.js'
import Dashboard from '../../components/Dashboard/Dashboard.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'

const Welcome = () => {
    return (
        <div className='WelcomeContent'>
            <Header />
            <Dashboard />
            <Sidebar />
        </div>

    )

}

export default Welcome;