import { getHighestId } from './selectors';
import {
  ADD_MESSAGE,
  SET_INPUT_VALUE,
  TOGGLE_SETTINGS,
  SET_SETTINGS_FIELD_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './actions';

const initialState = {
  messages: [
    {
      id: 1,
      author: 'David',
      content: 'Bienvenue sur ma chatroom fictive, elle est codée en React/Redux',
    },
    {
      id: 2,
      author: 'Un utilisateur',
      content: 'Comment puis-je créer un compte ?',
    },
    {
      id: 3,
      author: 'David',
      content: 'La fonctionnalité de création de compte est indisponible pour le moment, mais je vous invite à vous contacter via :  Email : hello@david.fr et en password : test',
    },
    {
      id: 3,
      author: 'David',
      content: 'Je vous invite à faire quelques tests, cette chatroom restera cependant fictive',
    },
  ],
  nickname: null,
  inputValue: '',
  settings: {
    email: '',
    password: '',
    isOpen: true,
    isError: false,
  },
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case SET_INPUT_VALUE:
      return {
        ...oldState,
        inputValue: action.value,
      };
    case ADD_MESSAGE: {
      // on veut fabriquer un nouveau message
      // il faudra s'occuper aussi de générer un nouvel id
      // ensuite, on renverra un nouveau state, on recopiera oldState
      // et on recopiera aussi le contenu du tableau messages
      // au bout duquel on ajoutera le nouveau message créé
      // et pour finir, on remettra inputValue a null

      // emploi d'un selecteur
      const maxId = getHighestId(oldState);

      const newMessage = {
        // si on un max, on ajoute 1,
        // sinon, c'est le premier message, on donne l'id 1
        id: maxId ? maxId + 1 : 1,
        author: oldState.nickname,
        content: oldState.inputValue,
      };

      // on renvoie un nouveau state
      return {
        // on recopie tout
        ...oldState,
        // on change les messages
        messages: [
          // on recopie les anciens messages
          ...oldState.messages,
          // on ajoute notre nouveau message a la fin
          newMessage,
        ],
        // on finit par vider l'input
        inputValue: '',
      };
    }
    case LOGIN_SUCCESS:
      return {
        ...oldState,
        nickname: action.nickname,
        settings: {
          ...oldState.settings,
          // on vide les champs
          email: '',
          password: '',
          // on ferme le panneau settings
          isOpen: false,
          // on précise que y'a pas d'erreur
          isError: false,
        },
      };
    case LOGIN_ERROR:
      return {
        ...oldState,
        settings: {
          ...oldState.settings,
          // on met isError a true pour que l'interface puisse afficher l'erreur
          isError: true,
        },
      };
    case SET_SETTINGS_FIELD_VALUE:
      return {
        // on recopie l'ancien state
        ...oldState,
        settings: {
          ...oldState.settings,
          // utilisation d'une clé dynamique
          // [action.fieldKey] sera remplacé par la valeur dans action.fieldKey
          // dans notre cas : email ou password
          // se référer au container de Settings
          [action.fieldKey]: action.newValue,
        },
      };
    case TOGGLE_SETTINGS:
      return {
        ...oldState,
        settings: {
          ...oldState.settings,
          isOpen: !oldState.settings.isOpen,
        },
      };
    default:
      // par défaut, on renvoie l'ancien state tel quel
      // pas besoin de le recopier avec spread si il ne change pas
      return oldState;
  }
};

export default reducer;
