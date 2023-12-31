import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import {signup} from '../actions/auth';
import axios from 'axios';

const Signup = ({signup , isAuthenticated}) => {
    const [submitted, setSubmitted] = useState(false)

    const [formData , setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        re_password: ''
    })

    const { first_name, last_name, email, password, re_password } = formData;

    const onChange = e => setFormData({...formData, [e.target.name] : e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if(password===re_password){
            signup(first_name, last_name, email, password, re_password);
            setSubmitted(true);
        }else{
            alert("Password not same")
        }
    }

    const continueWithGoogle = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://localhost:8000`)

        window.location.replace(res.data.authorization_url);
    }

    if (isAuthenticated) {
        return(
            <Navigate to='/' />
        )
    }

    if (submitted) {
        return(
            <Navigate to='/' />
        )
    }

    return (
        <div className='container mt-5'>
            <h1>Sign Up</h1>
            <p>Create a new Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='First Name'
                        name='first_name'
                        value={first_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <div className='form-group mt-2'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password'
                        name='re_password'
                        value={re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                        required
                    />
                </div>
                <button className='btn btn-primary mt-2' type='submit'>Register</button>
            </form>
            <br />
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Login</Link>
            </p>
            
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated : state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
