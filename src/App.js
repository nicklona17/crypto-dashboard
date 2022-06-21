import './App.css';
import NewsFeed from './components/newsFeed/NewsFeed';
import CurrencyConverter from './components/currencyConverter/CurrencyConverter';
import ExchangeRate from './components/exchangeRate/ExchangeRate';

const App = () => {
  return (
    <div className='app'>
      <h1 id="page-title">Crypto Dashboard</h1>
      <div className='app-wrapper'>
        <CurrencyConverter />
        <NewsFeed />
      </div>
    </div>
  );
}

export default App;
