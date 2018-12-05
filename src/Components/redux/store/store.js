import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import {createBrowserHistory} from 'history';
import {connectRouter} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../redux-saga/sagas';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();


const store = createStore(connectRouter(history)(rootReducer), composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;