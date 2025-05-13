import { Link } from 'react-router-dom';
import '../components/Header.css'
import React, { useEffect, useRef, useState } from 'react';

export function Header(props) {
    if (props.amount === "6") {
        return (
            <header>
                <h1 className='logo'>FOMO DEX</h1>
                <nav>
                    <Link to={'/largeGraph'}>Finance</Link><img src='arrow.png'></img>
                    <Link to={'/largeTable'} href='#'>Products</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Trade</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Wallet</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Markets</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Campaigns</Link><img src='arrow.png'></img>
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

    else if (props.amount === "1") {
        return (
            <header>
                <h1 className='logo'>FOMO DEX</h1>
                <nav>
                    <Link to={'/largeGraph'}>Finance</Link><img src='arrow.png'></img>
                    <Link to={'/largeTable'}>Products</Link><img src='arrow.png'></img>
                    <Link to={'/'} >Trade</Link><img src='arrow.png'></img>
                    <Link to={'/'} >Wallet</Link><img src='arrow.png'></img>
                    <Link to={'/'} >Markets</Link><img src='arrow.png'></img>
                    <Link to={'/'} >Campaigns</Link><img src='arrow.png'></img>
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
    else if (props.amount === "5") {
        return (
            <header>
                <h1 className='logo'>FOMO DEX</h1>
                <nav >
                    <Link to={'/largeGraph'}>Finance</Link><img src='arrow.png'></img>
                    <Link to={'/largeTable'} href='#'>Products</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Trade</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Wallet</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Markets</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Campaigns</Link><img src='arrow.png'></img>
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
                <h1 className='logo'>FOMO DEX</h1>
                <nav className='miniNav'>
                    <Link to={'/largeTable'} href='#'>Products</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Trade</Link><img src='arrow.png'></img>
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
                <h1 className='logo'>FOMO DEX</h1>
                <nav className='miniNav'>
                    <Link to={'/largeTable'} href='#'>Products</Link><img src='arrow.png'></img>
                    <Link to={'/'} href='#'>Trade</Link><img src='arrow.png'></img>
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
