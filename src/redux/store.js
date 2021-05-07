import {createStore, applyMiddleware, compose} from 'redux';
import { appReducer } from './reducers'
import createSagaMiddleware from 'redux-saga';
import { defaultState } from './defaultState';
import rootSaga from './sagas/rootSaga';

//Redux DevTools from Chrome store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    appReducer,
    defaultState,
    // compose 는 다수의 store enhancer 를 결합해준다.
    // ()으로 함수를 실행해야 한다.
    //composeEnhancers()
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
