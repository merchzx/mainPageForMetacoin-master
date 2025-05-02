import React from 'react';
import { useEffect, useState } from 'react';

function useEthPrice() {
    const [ethPrice, setEthPrice] = useState(null);

    useEffect(() => {
        async function fetchPrice() {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                const data = await response.json();
                setEthPrice(data.ethereum.usd);
            } catch (error) {
                console.error('Ошибка при получении цены ETH:', error);
            }
        }

        fetchPrice();
        const interval = setInterval(fetchPrice, 60000); // обновлять каждую минуту

        return () => clearInterval(interval); // очистка интервала при размонтировании
    }, []);

    return ethPrice;
}
export function CryptoWidget() {
    const ethPrice = useEthPrice();

    return (
        <div>
            {ethPrice}
        </div>
    );
}

export default CryptoWidget;