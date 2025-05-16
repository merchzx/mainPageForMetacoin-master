import '../components/thirdPageLT.css'
import React, { useEffect, useRef, useState, memo } from 'react';
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

    const [isLiked, setLiked] = useState(false)

    const toggleLike = () => {
        setLiked(!isLiked)
    }

    return (<div className='itemOfTableLT'>
        <img src={isLiked ? 'heartPainted.png' : 'darkHeart.png'} onClick={toggleLike}></img>
        <img src={props.src + '.png'}></img>
        <p className='boldText'>{props.tick}</p>
        <p className='boldText'>{props.fullName}</p>
        <p className='boldText'>{props.addres}</p>
        <p className='boldText'><CryptoWidget></CryptoWidget></p>
        <p className='boldText'>{props.value}</p>
        <p id='marginLeftThirdPage' className='boldText'>{props.balance}</p>
        <p id='marginLeftThirdPage' className='boldText'>{props.liquidity}</p>
        <p id='marginLeftThirdPage' className='boldText'>{props.volume}</p>
        <p id='marginLeftThirdPage' className='boldText'>{props.transaction}</p>
    </div>)
}

export function LargeTableLT(props) {
    return (
        <div id='forBackkLT'>
            <div id='forBackgrounddLT'>
                <BurgerMenu link='largeTable' theme='light'></BurgerMenu>
                <Header link='largeTable' amount='1'></Header>
                <div class="wrapperThirdPage">
                    <div className='sliderWithCurrencyesLT'>
                        <TradingViewWidget name="BINANCE:BTCUSDT"></TradingViewWidget>
                        <TradingViewWidget name="BINANCE:ETHUSDT"></TradingViewWidget>
                        <TradingViewWidget name="BINANCE:DOGEUSDT"></TradingViewWidget>
                        <TradingViewWidget name="BINANCE:LTCUSDT"></TradingViewWidget>
                        <TradingViewWidget name="BINANCE:APTUSDT"></TradingViewWidget>
                    </div>
                    <div className='searchBarThirdPageLT'>
                        <img src='searchIcon.png'></img>
                        <input type='text' placeholder='Seacrh'></input>
                    </div>

                    <div className='mainTableLT'>
                        <div className='exampleLineLT'>
                            <img src='darkHeart.png'></img>
                            <p className='boldTextLT'>token name</p>
                            <p className='boldTextLT'>addres</p>
                            <p id='marginToLeft' className='boldTextLT'>price</p>
                            <p id='marginToLeft' className='boldTextLT'>value</p>
                            <p id='marginToLeft' className='boldTextLT'>balance</p>
                            <p id='marginToLeft' className='boldTextLT'>liquidity</p>
                            <p id='marginToLeft' className='boldTextLT'>volume(24)</p>
                            <p id='marginToLeft' className='boldTextLT'>transactions</p>
                        </div>
                        <ItemOfTable src='eth' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='sol' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='xrp' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='usdt' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='eth' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='eth' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                        <ItemOfTable src='eth' tick='ETH' fullName='Ethereum' addres='lorem loren' value='1.1' balance='0' liquidity='24M %' volume='+1.2%' transaction='+11.2%'></ItemOfTable>
                    </div>
                     <a className='viewMore' id='isVisible' href='#'>VIEW MORE</a>
                </div>
            </div>
        </div>
    )
}