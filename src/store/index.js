import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';
import logMiddleware from './middlewares/logMiddleware';
import authMiddleware from './middlewares/authMiddleware';

const store = createStore(
  reducer,
  composeWithDevTools(
    // on applique tous les middleware avec un seul applyMiddleware
    // afin que les actions repartent du début de la chaine
    applyMiddleware(logMiddleware, authMiddleware),
  ),
);

export default store;
