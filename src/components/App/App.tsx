import { useState } from 'react';
import BaseAmount from '../BaseAmount/BaseAmount';
import Currencies from '../Currencies/Currencies';
import ResultConversion from '../ResultConversion/ResultConversion';
import './App.scss';

import currenciesData from '../../data/currencies';
import Footer from '../Footer/Footer';
import { Currency } from '../../@types/currency';

function App() {
  // Pour créer une variable Reactive avec React, il faut utiliser le hook (fonction) `useState`.
  // En argument du useState je passe la valeur initial de ma variable
  // Je récupère grace à la destructuration une variable contenant la valeur
  // et une fonction pour modifier la valeur
  // La convention veux que la fonction de modification se nomme `set` + le nom de la variable
  const [likesCount, setLikesCount] = useState(0);

  // Je créer une variable reactive qui va contenir la devise selectionné
  // Je met comme valeur par défaut la première devise de la liste
  // On peut définir le type de notre variable d'état sans passé de valeur initial
  // Il faut préciser le type entre `<>` après le useState et avatn les ()
  const [currency, setCurrency] = useState<Currency>(currenciesData[0]);

  return (
    <div className="app">
      <BaseAmount />
      {/* Je fournis la liste des currencies récupérer depuis mon fichier data/currencies.js */}
      <Currencies currencies={currenciesData} onClickCurrency={setCurrency} />
      <ResultConversion
        value={currency.rate}
        currencyName={currency.description}
      />

      <Footer likesCount={likesCount} setLikesCount={setLikesCount} />
    </div>
  );
}

export default App;
