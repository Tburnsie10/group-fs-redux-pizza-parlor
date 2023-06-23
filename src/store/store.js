import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { reducer } from './reducers/rootReducer';

const store = createStore(reducer, applyMiddleware(logger));

export default function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
