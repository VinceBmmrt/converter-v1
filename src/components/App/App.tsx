import BaseAmount from '../BaseAmount/BaseAmount';
import Currencies from '../Currencies/Currencies';
import ResultConversion from '../ResultConversion/ResultConversion';
import './App.scss';

function App() {
  return (
    <div className="app">
      <BaseAmount />
      <Currencies />
      <ResultConversion />
    </div>
  );
}

export default App;
