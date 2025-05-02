import './registrPage.css'
import React from 'react';

export function InputString(props) {
    return (
        <div className={props.divName}>
            <label>{props.label}
                <input placeholder={props.placeholder} className={props.classType} type={props.type} />
            </label>
        </div>
    )
}

export function ButtonSubmit(props) {
    return (

        <button className='signUp' type="submit">{props.text}</button>
    )
}

export function Registr() {
    return (
        <div className='forBack'>
            <div className='forBackImg'>
                <p className='cryptoo'>Crypto</p>
                <p className='sigmas'>Sigmas</p>
                <form className="parent">
                    <InputString divName='div1' label='Referal ID' placeholder='Referal ID' classType='large' type='text'></InputString>
                    <InputString divName='div2' label='Username' placeholder='Username' classType='' type='text'></InputString>
                    <InputString divName='div3' label='Display Name' placeholder='Display Name' classType='' type='text'></InputString>
                    <InputString divName='div4' label='Email' placeholder='Email' classType='large' type='email'></InputString>
                    <InputString divName='div5' label='Password' placeholder='Password' classType='' type='password'></InputString>
                    <InputString divName='div6' label='Confirm Password' placeholder='Confirm Password' classType='' type='password'></InputString>
                    <ButtonSubmit text='Sign Up'></ButtonSubmit>
                </form>
            </div>
        </div>
    );
}