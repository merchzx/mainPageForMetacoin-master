import '../components/secondPageLightTheme.css'
import React, { useEffect, useRef, memo } from 'react';
import { Header } from './Header';
import { BurgerMenu } from './burgerMenuComponent';
import CryptoWidget from './CurrentPrice';

function TradingViewWidget() {
    const container = useRef();

    useEffect(
        () => {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
        {
          "width": "942",
          "height": "630",
          "symbol": "ETHUSDT",
          "interval": "D",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "backgroundColor": "#ffffff",
          "allow_symbol_change": true,
          "hide_top_toolbar": true,
          "allow_symbol_change": true, 
          "support_host": "https://www.tradingview.com"
        }`;
            container.current.appendChild(script);
        },
        []
    );

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
            <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text"></span></a></div>
        </div>
    );
}

export default memo(TradingViewWidget);


function CryptoCurrence(props) {
    return (
        <div className='cryptoLT'>
            <img src={props.name + '.png'}></img>
            <p className='tickerLT'>{props.tick}</p>
            <p className='amountLT'>{props.am}</p>
        </div>
    )
}

export function SimpleLine(props) {
    if (props.isCurrPrice === 'true') {
        return (
            <p className='lineWithTextLT'>{props.zagol}<p className='boldLine'>1 ETH = <CryptoWidget></CryptoWidget> USDT</p></p>
        )
    }
    return (
        <p className='lineWithTextLT'>{props.zagol}<p className='boldLine'>{props.amount}</p></p>
    )
}

export function Polzun(props) {
    return (
        <input id='slideLT' type='range'></input>
    )
}

export function PageWithGraphLightTheme(props) {
    return (
        <div id='forBackkLT'>
            <div id='forBackgrounddLT'>
                <BurgerMenu link='largeGraph' theme='light'></BurgerMenu>
                <Header link='largeGraph' amount='secondPageLightTheme'></Header>
                <div className="wrapperLT">
                    <div className="searchLT">
                        <div className='searchBarLT'>
                            <img src='searchIcon.png'></img>
                            <input type='text' placeholder='Seacrh coin or paste any token'></input>
                        </div>
                        <CryptoCurrence name='eth' tick='ETH' am='0'></CryptoCurrence>
                        <CryptoCurrence name='usdt' tick='USDT' am='0'></CryptoCurrence>
                        <CryptoCurrence name='sol' tick='SOL' am='0'></CryptoCurrence>
                        <CryptoCurrence name='xrp' tick='XRP' am='0'></CryptoCurrence>
                        <CryptoCurrence name='xrp' tick='XRP' am='0'></CryptoCurrence>
                    </div>
                    <div className="mainGraphLT"><TradingViewWidget></TradingViewWidget></div>
                    <div className="pooledTokLT">
                        <div className='whatWeExchangeLT'>
                            <p>Pooled Tokens</p>
                            <div>
                                <img src='eth.png'></img><p>ETH</p>
                            </div>
                            <div>
                                <img src='usdt.png'></img><p>ETH</p>
                            </div>
                        </div>
                        <div className='liquidityLT'>
                            <div>
                                <p>Total Liquidity</p>
                                <p>$92.8 M</p>
                                <p>0.59%</p>
                            </div>
                            <div>
                                <p>24h Volume</p>
                                <p>$7.4 M</p>
                                <p>-36.56%</p>
                            </div>
                        </div>
                    </div>
                    <div className="exchangeLT">
                        <div className='currentBalanceLT'>
                            <p>Balance</p>
                            <p>0,00 ETH</p>
                            <p>0 USDT</p>
                        </div>
                        <div className='AmountLT'>
                            <p className='amLT'>Amount</p>
                            <p className='tickLT'>ETH</p>
                            <p className='usendLT'>YOU SEND</p>
                            <p className='currPriceLT'>$<CryptoWidget></CryptoWidget></p>
                            <Polzun />
                        </div>
                        <img src='exchange.png'></img>
                        <div className='AmountLT'>
                            <p className='amLT'>Amount</p>
                            <p className='tickLT'>USDT</p>
                            <p className='usend2LT'>YOU SEND</p>
                            <p className='currPriceLT'>$ 1</p>
                        </div>
                        <button className='yourBalanceButtLT'>
                            Your Balance or gas fee is not enough
                        </button>
                    </div>

                    <div className="balanceLT">
                        <SimpleLine zagol='Rate' amount='' isCurrPrice="true"></SimpleLine>
                        <SimpleLine zagol='Inverse Rate' amount='1 USDT=0.0005 ETH'></SimpleLine>
                        <SimpleLine zagol='Price Impact' amount='0.01%'></SimpleLine>
                        <SimpleLine zagol='Gwei' amount='Slow:Gwei 32'></SimpleLine>
                        <Polzun></Polzun>
                        <SimpleLine zagol='Estimate gas fee' amount='0.004002 ETH~$7.99'></SimpleLine>
                        <SimpleLine zagol='Liquidity Fee' amount='0.011 ETH'></SimpleLine>
                        <div>
                            <img className='logoOfCurrencyLT' src='eth.png'></img>
                            <img className='arrowToRightLT' src='Vector.png'></img>
                            <img src='usdt.png'></img>
                        </div>
                    </div>
                </div>
                <div className="pairLT">
                    <p>Pair</p>
                    <p>Volume</p>
                    <p>Time</p>
                </div>
            </div>
        </div>

    )
}