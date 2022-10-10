import React from "react";
import { Link } from 'react-router-dom';

/**
 * A component which render an Homepage where you can choose 
 * from different users to get profile page
 */
const Home = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '700px'
        }}>
            <Link to="/user/12">User 12</Link>
            <Link to="/user/18">User 18</Link>
        </div>
    )
}

export default Home