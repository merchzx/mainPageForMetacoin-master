import '../components/DarkModeMainPage.css'
import React, { useEffect, useRef, useState } from 'react';
import { BurgerMenu } from './burgerMenuComponent';
import { Header } from './Header';


export const TradingViewMarketOverview = () => {
    const containerRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            colorTheme: 'dark',
            dateRange: '1M',
            showChart: true,
            locale: 'en',
            largeChartUrl: '',
            isTransparent: true,
            showSymbolLogo: true,
            showFloatingTooltip: false,
            width: '100%',
            height: '550',
            plotLineColorGrowing: 'rgba(0, 255, 0, 1)',
            plotLineColorFalling: 'rgba(151, 0, 0, 1)',
            gridLineColor: 'rgba(42, 46, 57, 0)',
            scaleFontColor: 'rgba(219, 219, 219, 1)',
            belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
            belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
            belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
            belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
            symbolActiveColor: 'rgba(255, 0, 0, 0.12)',
            tabs: [
                {
                    title: 'CRYPTO',
                    symbols: [
                        { s: 'BINANCE:BTCUSDT' },
                        { s: 'BINANCE:DOGEUSDT' },
                        { s: 'BINANCE:ETHUSDT' },
                        { s: 'BINANCE:SOLUSDT' },
                        { s: 'BINANCE:XRPUSDT' },
                        { s: 'CRYPTOCAP:TOTAL' },
                        { s: 'BINANCE:SUIUSDT' },
                        { s: 'BINANCE:AVAXUSDT' },
                        { s: 'BINANCE:LINKUSDT' },
                    ],
                },
            ],
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


export const TradingViewWidget = (props) => {
    const containerRef = useRef();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
            symbol: props.name,
            width: '250',
            height: '250',
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




export function DarkMode(props) {
    return (
        <div id='forBack'>
            <div id='forBackground'>
                <Header link='MainLightTheme' amount="6" />
                <BurgerMenu link='MainLightTheme' theme='dark'></BurgerMenu>
                <div id='wrapper'>
                    <div className='startNow'>
                        <h1>All In One</h1>
                        <h1>DeFi Platform</h1>
                        <p>To swap, invest and earn with crypto at ease.</p>
                        <a href='#'>START NOW</a>
                    </div>
                    <div className='trending'>
                        <h1>Trending</h1>
                        <div className='miniGraphs'>
                            <div>
                                <TradingViewWidget name="BINANCE:BTCUSDT"></TradingViewWidget>
                            </div>
                            <div>
                                <TradingViewWidget name="BINANCE:ETHUSDT"></TradingViewWidget>
                            </div>
                            <div>
                                <TradingViewWidget name="BINANCE:SOLUSDT"></TradingViewWidget>
                            </div>
                            <div>
                                <TradingViewWidget name="BINANCE:LTCUSDT"></TradingViewWidget>
                            </div>
                            <div>
                                <TradingViewWidget name="BINANCE:LTCUSDT"></TradingViewWidget>
                            </div>
                            <div>
                                <TradingViewWidget name="BINANCE:LTCUSDT"></TradingViewWidget>
                            </div>
                        </div>
                    </div>
                    <div className='popularMarkets'>
                        <h1>Popular Markets</h1>
                        <div className='largeGraph'>
                            <TradingViewMarketOverview></TradingViewMarketOverview>
                        </div>
                        <a className='viewMore' href='#'>VIEW MORE</a>
                    </div>
                    <div className='ourResults'>
                        <div>
                            <h1>750M+</h1>
                            <p>Trading Volume</p>
                        </div>
                        <div>
                            <h1>2M+</h1>
                            <p>Total Users</p>
                        </div>
                        <div>
                            <h1>50+</h1>
                            <p>Blockchains</p>
                        </div>
                        <div>
                            <h1>100+</h1>
                            <p>Countries</p>
                        </div>
                    </div>
                    <footer>

                        <div className='toRow'>
                            <h1 className='logo'>CRYPTO SIGMAS</h1>
                            <div className='downloadOn'>
                                <img src='apple.png'></img>
                                <div className='forText'>
                                    <p>DOWNLOAD ON</p>
                                    <p>App Store</p>
                                </div>
                            </div>
                            <div className='downloadOn'>
                                <img src='playMarket.png'></img>
                                <div className='forText'>
                                    <p>DOWNLOAD ON</p>
                                    <p>Google Play</p>
                                </div>
                            </div>
                        </div>
                        <div className='product'>
                            <h1>Product</h1>
                            <p>Wallet</p>
                            <p>Exchange</p>
                        </div>
                        <div className='product'>
                            <h1>About Us</h1>
                            <p>Company</p>
                            <p>Careers</p>
                            <p>Terms Of Service</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div className='product'>
                            <h1>Support</h1>
                            <p>Beginner's Guide</p>
                            <p>FAQs</p>
                            <p>Email Us</p>
                            <p>Livechat Support</p>
                        </div>
                        <div className='product'>
                            <h1>Socials</h1>
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Telegram</p>
                            <p>Instagram</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}