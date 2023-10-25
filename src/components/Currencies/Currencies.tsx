import './Currencies.scss';

// Passage de props
// 1ère étape : Créer le contrat de props
type Currency = {
  description: string;
  code: string;
  rate: number;
};

type CurrenciesProps = {
  currencies: {
    description: string;
    code: string;
    rate: number;
  }[];
};

// 2ème étape : Déclarer les props dans le composant
function Currencies({ currencies }: CurrenciesProps) {
  console.log(currencies);
  return (
    <div className="currencies">
      <div className="currencies__title">Currencies</div>
      <ul className="currencies__list">
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            USD
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            GBP
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            MXN
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            EUR
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            USD
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            GBP
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            MXN
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            EUR
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            USD
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            GBP
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            MXN
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            EUR
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            USD
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            GBP
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            MXN
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            EUR
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            USD
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            GBP
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            MXN
          </button>
        </li>
        <li className="currencies__item">
          <button type="button" className="currencies__item-btn">
            EUR
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Currencies;
