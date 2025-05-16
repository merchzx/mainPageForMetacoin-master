import '../components/mainPage.css'
import React, { useEffect, useRef } from 'react';
import '../components/burgerMenu.css'
import { Link } from 'react-router-dom';

export function BurgerMenu(props) {
    if (props.theme === 'dark') {
        return (
            <div className='burgerMenu'>
                <input id="burger" type="checkbox" />
                <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav>
                    <ul>
                        <li><Link to={'/largeGraph'}>Finance</Link></li>
                        <li><Link to={'/largeTable'}>Products</Link></li>
                        <li><Link to={'/'}>Trade</Link></li>
                        <li><Link to={'/'}>Wallet</Link></li>
                        <li><Link to={'/'}>Markets</Link></li>
                        <li><Link to={'/'}>Campaigns</Link></li>
                    </ul>
                    <div className="switchThemeBurgerMenu">
                        <Link to={'/' + props.link}>
                            <img className='nightModeImg' src="nightMode.png" alt="switch" />
                            <img src="round.png" alt="round" />
                        </Link>
                    </div>
                    <Link to={'/registr'} id='login' >Log In</Link>
                </nav>
            </div>
        )
    }
    else if (props.theme === 'light') {
        return (
            <div className='burgerMenu'>
                <input id="burger" type="checkbox" />
                <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <nav className='nav'>
                    <ul>
                        <li><Link to={'/LighThemeLargeGraph'}>Finance</Link></li>
                        <li><Link to={'/largeTableLightTheme'}>Products</Link></li>
                        <li><Link to={'/MainLightTheme'}>Trade</Link></li>
                        <li><Link to={'/MainLightTheme'}>Wallet</Link></li>
                        <li><Link to={'/MainLightTheme'}>Markets</Link></li>
                        <li><Link to={'/MainLightTheme'}>Campaigns</Link></li>
                    </ul>
                    <div className="switchThemeBurgerMenu">
                        <Link to={'/' + props.link}>
                            <img className='nightModeImg' src="lightMode.png" alt="switch" />
                            <img src="lightRound.png" alt="round" />
                        </Link>
                    </div>
                    <Link to={'/registr'} id='login' >Log In</Link>
                </nav>
            </div>
        )
    }

}