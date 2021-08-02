import { LOGIN_SUCCESS, SEND_MESSAGE, createAddMessageAction } from 'src/store/actions';

/*
  un middleware est une fonction que l'on va donner au store
  le store s'en servira pour traduire des actions vers des effets de bord
  (cest a dire autre chose qu'une modif simple de state. par exemple : parler a api, timers, )
  l'objet action va passer dans chaque middleware, puis finira par arriver dans le reducer
  si chaque middleware a NEXTÉ l'action
  constatons également que le middleware a accès a l'instance du store
  sur lequel il pourra tout a fait faire des store.dispach, store.getState
*/

const socket = window.io('https://pacific-retreat-59034.herokuapp.com:3001/');

const chatMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      // on se met en mode écoute
      // "lorsque je recois un send_message.... alors jexecute ce callback"
      socket.on('send_message', (message) => {
        // ici, je recois un message en provenance du WebSocket
        // je veux tout simplement stocker ce message dans mon store
        // on peut utiliser l'action ADD_MESSAGE que l'on a déja codée
        // je lui donne en parametre tout le message recu depuis le websocket
        store.dispatch(createAddMessageAction(message));
      });

      // on laisse passer LOGIN_SUCCESS jusqu'au reducer, car il en a besoin
      next(action);
      break;
    case SEND_MESSAGE: {
      // si je recois une action send_message....
      // alors je l'envoie a travers le websocket
      // je récup le state afin d'en extraire le pseudo et le message saisi (inputValue)
      const state = store.getState();
      // j'écris sur le websocket un event send_message, en donnant auteur et pseudo
      socket.emit('send_message', { author: state.nickname, content: state.inputValue });
      // on nexte l'action SEND_MESSAGE afin qu'elle arrive au reducer
      // ce dernier se chargera de vider l'input
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default chatMiddleware;
