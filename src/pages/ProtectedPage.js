import React, { useEffect, useState } from 'react'
import api from "../api"
import { useNavigate } from 'react-router-dom'
import '../styles/ProtectedPage.css'

const ProtectedPage = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/')
    }

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem('token');
            console.log('token');
            try {
                const response = await fetch(`http://0.0.0.0/api/verify-token/${token}`);
                if (!response.ok) {
                    throw new Error('Token verification failed.');
                }
                setEmail(localStorage.getItem('email'));
            } catch (error) {
                localStorage.removeItem('token');
                localStorage.removeItem('email');
                navigate('/');
            }
        };

        verifyToken();
    }, [navigate]);

    return (
    <div className='ProtectedPage'>
        <header className='header'>
            <button className='logoutBtn' onClick={handleLogout}>Log out</button>
            <p className='email'>{email}</p>
        </header>

    </div>
    )
}

export default ProtectedPage