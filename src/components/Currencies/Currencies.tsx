import { ChangeEvent, useState } from 'react';
import './Currencies.scss';

// Passage de props
// 1ère étape : Créer le contrat de props
type Currency = {
  description: string;
  code: string;
  rate: number;
};

type CurrenciesProps = {
  currencies: Currency[];
};

// 2ème étape : Déclarer les props dans le composant
function Currencies({ currencies }: CurrenciesProps) {
  // Je créer une variable d'état que je vais chercher à lier à mon input
  const [searchText, setSearchText] = useState('');

  function handleChangeSearchTextInput(event: ChangeEvent<HTMLInputElement>) {
    // Je récupère la nouvelle valeur à enregister
    const newValue = event.target.value;

    // Je modifie la valeur de ma variable d'état
    setSearchText(newValue);
  }

  return (
    <div className="currencies">
      <div className="currencies__title">
        <input
          type="text"
          className="currencies__input"
          // Je lie la valeur de mon input à ma variable d'état
          value={searchText}
          // Lorsque je change la valeur de mon input, je modifie la valeur de ma variable d'état
          // onChange={(event) => setSearchText(event.target.value)}
          onChange={handleChangeSearchTextInput}
        />
        {searchText}
      </div>
      <ul className="currencies__list">
        {currencies.map((currency) => (
          <li className="currencies__item" key={currency.code}>
            <button type="button" className="currencies__item-btn">
              {currency.description}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Currencies;
