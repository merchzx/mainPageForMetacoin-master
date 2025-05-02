import '../components/thirdPage.css'
import React, { useEffect, useRef, memo } from 'react';
import { Header } from './Header';
import { BurgerMenu } from './burgerMenuComponent';
import CryptoWidget from './CurrentPrice';

const TradingViewWidget = (props) => {
    const containerRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: props.name,
            width: '250',
            height: '150',
            locale: 'en',
            dateRange: '12M',
            colorTheme: 'dark',
            isTransparent: true,
            autosize: false,
            largeChartUrl: ''
        });

        if (containerRef.current) {
            containerRef.current.innerHTML = '';
            containerRef.current.appendChild(script);
        }
    }, []);

    return (
        <div className="tradingview-widget-container">
            <div ref={containerRef} className="tradingview-widget-container__widget" />
            <div className="tradingview-widget-copyright">

            </div>
        </div>
    );
};

function ItemOfTable(props) {
    return (<div className='itemOfTable'>
        <img src='heart.png'></img>
        <img src={props.src + '.png'}></img>
        <p className='boldText'>{props.tick}</p>
        <p className='boldText'>{props.fullName}</p>
        <p className='boldText'>{props.addres}</p>
        <p className='boldText'><CryptoWidget></CryptoWidget></p>
        <p className='boldText'>{props.value}</p>
        <p className='boldText'>{props.balance}</p>
        <p className='boldText'>{props.liquidity}</p>
        <p className='boldText'>{props.volume}</p>
        <p className='boldText'>{props.transaction}</p>
    </div>)
}

export function LargeTable(props) {
    return (
        <div id='forBackk'>
            <div id='forBackgroundd'>
                <BurgerMenu theme='dark'></BurgerMenu>
                <Header link='LightThemeLargeTable' amount='6'></Header>
                <div class="wrapper">
                    <div className='sliderWithCurrencyes'>
                        <TradingViewWidget name="BINANCE:BTCUSDT"></TradingViewWidget>
                        <TradingViewWidget name="BINANCE:ETHUSDT"></TradingViewWidget>
                        <TradingViewWidget name="BINANCE:DOGEUSDT"></TradingViewWidget>
                        <TradingViewWidget name="BINANCE:LTCUSDT"></TradingViewWidget>
                        <TradingViewWidget name="BINANCE:APTUSDT"></TradingViewWidget>
                    </div>
                    <div className='searchBar'>
                        <img src='searchIcon.png'></img>
                        <input type='text' placeholder='Seacrh'></input>
                    </div>

                    <div className='mainTable'>
                        <div className='exampleLine'>
                            <img src='heart.png'></img>
                            <p className='boldText'>token name</p>
                            <p className='boldText'>addres</p>
                            <p className='boldText'>price</p>
                            <p className='boldText'>value</p>
                            <p className='boldText'>balance</p>
                            <p className='boldText'>liquidity</p>
                            <p className='boldText'>volume(24)</p>
                            <p className='boldText'>transactions</p>
                        </div>
                        <ItemOfTable src='eth' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='sol' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='xrp' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='usdt' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='eth' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='eth' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='eth' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                    </div>
                </div>
            </div>
        </div>
    )
}