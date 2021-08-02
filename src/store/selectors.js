/* eslint-disable import/prefer-default-export */

// notre premier selecteur !
// on appelle selecteur une fonction qui prend en paramètre le state...
// et qui renvoie.... un peu ce qu'on veut...
// une projection (donnée dérivée)
export const getHighestId = (state) => {
  const ids = state.messages.map((msg) => msg.id);

  if (ids.length === 0) {
    // si j'ai pas d'id...
    // disons que le plus grand id est 0
    return 0;
  }

  // on déverse ce tableau dans les parametres de Math.max pour obtenir... le max (si si)
  return Math.max(...ids);
};

export const isUserLogged = (state) => state.nickname !== null;
