import React, { useState } from 'react'
import '../styles/LoginPage.css'
import Input from '../components/Input'
import EmailIcon from "../assets/email_icon.svg"
import PasswordIcon from "../assets/password_icon.svg"
import { useNavigate } from 'react-router-dom'
import api from '../api'


const LoginPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = () => {
        navigate('/register');
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const validateForm = () => {
        if (!email || !password ) {
            setError("Email and password are required!");
            return false;
        }
        setError("");
        return true;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const is_valid = validateForm();
        if(!is_valid) {return};
        setLoading(true);

        const formDetails = new URLSearchParams();
        formDetails.append("username", email);
        formDetails.append("password", password);
        try {
            const response = await fetch('http://0.0.0.0/api/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formDetails,
            })

            if (response.ok) {
                const data = await response.json();
                if (localStorage.getItem('token')) {
                    localStorage.removeItem('token');
                }
                localStorage.setItem('token', data.access_token);
                localStorage.setItem('email', data.email);
                navigate('/protected');
            } else {
                const errorData = await response.json();
                setLoading(false);
                setError(errorData.detail || 'Authentication failed!');
            }
        } catch (error) {
            setLoading(false);
            setError('An error occurred. Please try again later.');
        }
    }
  return (
    <div className='LoginPage'>
        <form onSubmit={handleSubmit} className='form'>
            {error && <p className='errMessage'>{error}</p>}
            <Input placeholder="Email" icon={EmailIcon} type="email" onChange={onChangeEmail}/>
            <Input placeholder="Password" icon={PasswordIcon} type="password" onChange={onChangePassword}/>
            <button type='submit' className='btnSubmit'>{loading ? 'Logging in...' : 'Login'}</button>
            <p className='titleRegister'>
                Don't have an account?
            </p>
            <button className='registerBtn' onClick={handleRegister}>Sign up</button>
        </form>


    </div>
  )
}

export default LoginPage