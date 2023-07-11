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
                <h1 className='display-4'>Welcome to Auth System!</h1>
                <p className='lead'>This is an incredible authentication system with production level features!</p>
                <hr className='my-4' />
                <p>Click the Log In button</p>
                <Link className='btn btn-primary btn-lg' to='/login' role='button'>Login</Link>
            </div>
        </div>
    )
}

export default Home
