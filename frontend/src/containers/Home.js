import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector(state => state.auth.user);
    console.log(user);
    return (
        <div className='container'>
            <div className='jumbotron mt-5'>
            { user ? `Hello, ${user.id}` : 'Not logged in' }
                <h1 className='display-4'>Welcome to Micro-services project</h1>
            
            </div>
        </div>
    )
}

export default Home
