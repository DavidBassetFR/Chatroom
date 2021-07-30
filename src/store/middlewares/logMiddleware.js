/*
  un middleware est une fonction que l'on va donner au store
  le store s'en servira pour traduire des actions vers des effets de bord
  (cest a dire autre chose qu'une modif simple de state. par exemple : parler a api, timers, )
  l'objet action va passer dans chaque middleware, puis finira par arriver dans le reducer
  si chaque middleware a NEXTÉ l'action
  constatons également que le middleware a accès a l'instance du store
  sur lequel il pourra tout a fait faire des store.dispach, store.getState
*/
const logMiddleware = (store) => (next) => (action) => {
  console.log('Je suis logMiddleware et je vois passer laction ', action);
  // pour l'instant, je vais laisser passer toutes les actions, avec next()
  next(action);
};

export default logMiddleware;
