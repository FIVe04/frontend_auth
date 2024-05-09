import React from 'react'
import '../styles/LoginPage.css'
import Input from '../components/Input'
import EmailIcon from "../assets/email_icon.svg"
import PasswordIcon from "../assets/password_icon.svg"


const LoginPage = () => {
    
  return (
    <div className='LoginPage'>
        <form onSubmit={() => console.log("submit")} className='form'>
            <Input placeholder="Email" icon={EmailIcon} type="email"/>
            <Input placeholder="Password" icon={PasswordIcon} type="password"/>
            <Input placeholder="Repeat password" icon={PasswordIcon} type="password"/>
            <button type='submit' className='btnSubmit'>Submit</button>
        </form>


    </div>
  )
}

export default LoginPage