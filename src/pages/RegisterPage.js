import React, { useState } from 'react'
import '../styles/LoginPage.css'
import Input from '../components/Input'
import EmailIcon from "../assets/email_icon.svg"
import PasswordIcon from "../assets/password_icon.svg"
import { useNavigate } from 'react-router-dom'
import api from '../api'


const RegisterPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repPassword, setRepPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        navigate('/')
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const onChangeRepPassword = (event) => {
        setRepPassword(event.target.value);
    }

    const validateForm = () => {
        if (!email || !password || !repPassword) {
            setError("Username, password and repeted password are required!");
            return false;
        }
        if (password !== repPassword) {
            setError("Password and repeted password sould be equal!");
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
        
        const existing_user = await api.post('/users', {"email": email, "hashed_password": password})
        .then(() => {
            setLoading(false)
            navigate('/')
        })
        .catch((e) => {
            console.log('not ok 1')
            setError(e.response.data.detail)
            setLoading(false)
        })

    }
  return (
    <div className='LoginPage'>
        <form onSubmit={handleSubmit} className='form'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Input placeholder="Email" icon={EmailIcon} type="email" onChange={onChangeEmail}/>
            <Input placeholder="Password" icon={PasswordIcon} type="password" onChange={onChangePassword}/>
            <Input placeholder="Repeat password" icon={PasswordIcon} type="password" onChange={onChangeRepPassword}/>
            <button type='submit' className='btnSubmit'>{loading ? 'Signing up' : 'Register'}</button>
            <p className='titleRegister'>
               Already have an account?
            </p>
            <button className='registerBtn' onClick={handleLogin}>Login</button>
        </form>


    </div>
  )
}

export default RegisterPage