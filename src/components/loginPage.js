import { Link } from 'react-router-dom';
import './loginPage.css';
import React from 'react';

export function InputString(props) {
    return (
        <div className={props.divName}>
            <label>{props.label}
                <input placeholder={props.placeholder} className={props.classType} type={props.type} />
            </label>
        </div>
    );
}

export function ButtonLogin(props) {
    return (
        <button className='login' type="submit">{props.text}</button>
    );
}

export function Login(props) {
    return (
        <div className='forBack'>
            <div className='forBackImg'>
                <p className='cryptoo'>FOMO</p>
                <p className='sigmas'>DEX</p>
                <div className="topnavigation">
                    <Link className='linkToLogin' to='/login'>Login</Link>
                    <Link className='linkToRegister' to='/registr'>Sign Up</Link>
                </div>
                <form className="parent">
                    <InputString divName='div8' label='Password' placeholder='Password' classType='large' type='password' />
                    <InputString divName='div9' label='Email' placeholder='Email' classType='' type='email' />
                </form>
                <ButtonLogin text='Login' />
                <Link className='toBack' to={'/'}><img className='arrowBack' src='arrowToLeft.png'></img></Link><p className='toBackText'>Back</p>
            </div>
        </div>
    );
}
