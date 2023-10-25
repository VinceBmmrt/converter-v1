import { useState } from 'react';
import BaseAmount from '../BaseAmount/BaseAmount';
import Currencies from '../Currencies/Currencies';
import ResultConversion from '../ResultConversion/ResultConversion';
import './App.scss';

import currenciesData from '../../data/currencies';

function App() {
  // Pour créer une variable Reactive avec React, il faut utiliser le hook (fonction) `useState`.
  // En argument du useState je passe la valeur initial de ma variable
  // Je récupère grace à la destructuration une variable contenant la valeur
  // et une fonction pour modifier la valeur
  // La convention veux que la fonction de modification se nomme `set` + le nom de la variable
  const [likesCount, setLikesCount] = useState(0);

  // Fonction qui sera exécuter au click sur le bouton Like
  const handleClickLikeBtn = () => {
    // Je modifie la valeur de likesCount en lui rajouter +1
    // Cela va déclencher une mise à jour du composant
    // La fonction App va de nouveau être exécuter
    setLikesCount(likesCount + 1);
  };

  return (
    <div className="app">
      <BaseAmount />
      {/* Je fournis la liste des currencies récupérer depuis mon fichier data/currencies.js */}
      <Currencies currencies={currenciesData} />
      <ResultConversion />

      <footer>
        {/* Pour ajouter des eventListener, il suffit d'ajouter un `onQQCH` sur l'élément en question */}
        {/* Dans notre exemple onClick, je lui passe la fonction a exécuter */}
        <button type="button" onClick={handleClickLikeBtn}>
          Like ❤️ : {likesCount}
        </button>
      </footer>
    </div>
  );
}

export default App;
