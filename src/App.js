import { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import { Card } from './Card';
import './App.css'

function App() {

  const [data, setData] = useState([]);
  const [tickers, setTickers] = useState([
    'AAPL', // Apple
    'GOOGL', // Alphabet
    'MSFT', // Microsoft
    'AMZN', // Amazon
    'FB', // Facebook
    'TSLA', // Tesla
  ]);

  useEffect(() => {
    const socket = io('http://localhost:4000');
    socket.emit('start');
    socket.on('ticker', function(response) {
        const res = Array.isArray(response) ? response : [response];
        setData(res);
    })  
  }, []);

  const remove = (card) => {
    setTickers(tickers.filter(ticker => ticker !== card.ticker));
    console.log(tickers);
  }

  return (
    <div className="App">
      <div className="cards">
        { data.length > 0 ? (
            data.filter(({ ticker }) =>
              tickers.some((item) => item === ticker)
            )
            .map(item => <Card key={item.ticker} card={item} dataOfArray={dataOfArray} remove={remove}/>)
          ) : null
        } 
      </div>
    </div>
  );
}

export default App;
