import BaseAmount from '../BaseAmount/BaseAmount';
import Currencies from '../Currencies/Currencies';
import ResultConversion from '../ResultConversion/ResultConversion';
import './App.scss';

import currenciesData from '../../data/currencies';

function App() {
  return (
    <div className="app">
      <BaseAmount />
      {/* Je fournis la liste des currencies récupérer depuis mon fichier data/currencies.js */}
      <Currencies currencies={currenciesData} />
      <ResultConversion />
    </div>
  );
}

export default App;
