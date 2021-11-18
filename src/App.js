import { useDispatch, useSelector } from 'react-redux';
import { Card } from './Card';
import { getData } from './asyncActions/tickers';
import './App.css'

function App() {

  const dispatch = useDispatch();
  const data = useSelector(state => state.data.data);
  const tickers = useSelector(state => state.data.tickers);

  return (
    <div className="App">
      <button className='btn-get'onClick={() => dispatch(getData())}>Get Tickers</button>
      <div className="cards">
        { data.length > 0 ? (
            data.filter(({ ticker }) =>
              tickers.some((item) => item === ticker)
            )
            .map(item => <Card key={item.ticker} card={item} />)
          ) : <div><h3>Ничего не найдено...</h3></div>  
        } 
      </div>
    </div>
  );
}

export default App;
