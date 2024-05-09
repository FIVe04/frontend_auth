import React from 'react'
import "../styles/LoginPage.css"
import { useNavigate } from 'react-router-dom';


const Input = (props) => {
    const navigate = useNavigate();
    return (
    <div className='inputOuter'>
        <img src = {props.icon} className='icon'/>
        <input placeholder={props.placeholder} className='input' type={props.type}/>
    </div>
    )
}

export default Input