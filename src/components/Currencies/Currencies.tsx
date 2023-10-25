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
  return (
    <div className="currencies">
      <div className="currencies__title">Currencies</div>
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
