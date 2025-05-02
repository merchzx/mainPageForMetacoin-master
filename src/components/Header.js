import { Link } from 'react-router-dom';
import '../components/Header.css'
import React, { useEffect, useRef, useState } from 'react';

export function Header(props) {
    if (props.amount === "6") {
        return (
            <header>
                <h1 className='logo'>Crypto Sigmas</h1>
                <nav>
                    <a href='#'>Finance</a><img src='arrow.png'></img>
                    <a href='#'>Products</a><img src='arrow.png'></img>
                    <a href='#'>Trade</a><img src='arrow.png'></img>
                    <a href='#'>Wallet</a><img src='arrow.png'></img>
                    <a href='#'>Markets</a>
                    <a href='#'>Campaigns</a><img src='arrow.png'></img>
                </nav>
                <div className='loginAndElse'>
                    <img src='internet.png' href="#"></img>
                    <img src='settings.png' href="#"></img>
                    <div className="switchTheme">
                        <Link to={'/' + props.link}>
                            <img className='nightModeImg' src="nightMode.png" alt="switch" />
                            <img src="round.png" alt="round" />
                        </Link>
                    </div>
                    <a id='login' href='#'>Log In</a>
                </div>
            </header>
        )
    }
    else if (props.amount === "5") {
        return (
            <header>
                <h1 className='logo'>Crypto Sigmas</h1>
                <nav>
                    <a href='#'>Finance</a><img src='arrow.png'></img>
                    <a href='#'>Products</a><img src='arrow.png'></img>
                    <a href='#'>Trade</a><img src='arrow.png'></img>
                    <a href='#'>Wallet</a><img src='arrow.png'></img>
                    <a href='#'>Markets</a>
                    <a href='#'>Campaigns</a><img src='arrow.png'></img>
                </nav>
                <div className='loginAndElse'>
                    <img src='internet.png' href="#"></img>
                    <img src='settings.png' href="#"></img>
                    <div className="switchTheme">
                        <Link to={'/' + props.link}>
                            <img className='nightModeImg' src="lightMode.png" alt="switch" />
                            <img src="LightRound.png" alt="round" />
                        </Link>
                    </div>
                    <a id='login' href='#'>Log In</a>
                </div>
            </header>
        )
    }
    else if (props.amount === "3") {
        return (
            <header>
                <h1 className='logo'>Crypto Sigmas</h1>
                <nav>
                    <a href='#'>Products</a><img src='arrow.png'></img>
                    <a href='#'>Trade</a><img src='arrow.png'></img>
                </nav>
                <div className='loginAndElse'>
                    <img src='internet.png' href="#"></img>
                    <img src='settings.png' href="#"></img>
                    <div className="switchTheme">
                        <Link to={'/' + props.link}>
                            <img className='nightModeImg' src="lightMode.png" alt="switch" />
                            <img src="lightRound.png" alt="round" />
                        </Link>
                    </div>
                    <a id='login' href='#'>Log In</a>
                </div>
            </header>
        )
    }
    else {
        return (
            <header>
                <h1 className='logo'>Crypto Sigmas</h1>
                <nav>
                    <a href='#'>Products</a><img src='arrow.png'></img>
                    <a href='#'>Trade</a><img src='arrow.png'></img>
                </nav>
                <div className='loginAndElse'>
                    <img src='internet.png' href="#"></img>
                    <img src='settings.png' href="#"></img>
                    <div className="switchTheme">
                        <Link to={'/' + props.link}>
                            <img className='nightModeImg' src="nightMode.png" alt="switch" />
                            <img src="round.png" alt="round" />
                        </Link>
                    </div>
                    <a id='login' href='#'>Log In</a>
                </div>
            </header>
        )
    }
}
