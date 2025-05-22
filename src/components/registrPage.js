import './registrPage.css';
import React from 'react';
import { Link } from 'react-router-dom'; // Не забудь этот импорт

export function InputString(props) {
    return (
        <div className={props.divName}>
            <label>{props.label}
                <input placeholder={props.placeholder} className={props.classType} type={props.type} />
            </label>
        </div>
    );
}

export function ButtonSubmit(props) {
    return (
        <button className='signUp' type="submit">{props.text}</button>
    );
}

export function Registr() {
    return (
        <div className='forBack'>
            <div className="topnavigation">
                <Link className='linkToLogin1' to={'/login'}>Login</Link>
                <Link className='linkToRegister2' to='/registr'>Sign Up</Link>
            </div>
            <div className='forBackImgRegister'>
                <p className='cryptoo'>FOMO</p>
                <p className='sigmas'>DEX</p>
                <form className="parentRegister">
                    <InputString divName='div1' label='Referal ID' placeholder='Referal ID' classType='large' type='text' />
                    <InputString divName='div2' label='Username' placeholder='Username' classType='' type='text' />
                    <InputString divName='div3' label='Display Name' placeholder='Display Name' classType='' type='text' />
                    <InputString divName='div4' label='Email' placeholder='Email' classType='large' type='email' />
                    <InputString divName='div5' label='Password' placeholder='Password' classType='' type='password' />
                    <InputString divName='div6' label='Confirm Password' placeholder='Confirm Password' classType='' type='password' />
                    <ButtonSubmit text='Sign Up' />
                </form>
                <Link id='forRegisterToBack' className='toBack' to={'/'}><img className='arrowBack' src='arrowToLeft.png'></img></Link><p id='forRegisterToBackText' className='toBackText'>Back</p>
            </div>
        </div>
    );
}
