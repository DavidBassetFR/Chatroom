import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';
import chatMiddleware from './middlewares/chatMiddleware';

const store = createStore(
  reducer,
  composeWithDevTools(
    // on applique tous les middleware avec un seul applyMiddleware
    // afin que les actions repartent du début de la chaine
    applyMiddleware(logMiddleware, authMiddleware, chatMiddleware),
  ),
);

export default store;
