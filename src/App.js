import './App.css';
import NewsFeed from './components/newsFeed/NewsFeed';
import CurrencyConverter from './components/currencyConverter/CurrencyConverter';
import ExchangeRate from './components/exchangeRate/ExchangeRate';

const App = () => {
  return (
    <div className='app'>
      <CurrencyConverter />
      <NewsFeed />
    </div>
  );
}

export default App;
