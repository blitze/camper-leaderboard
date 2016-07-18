import {applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(sagaMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	sagaMiddleware.run(rootSaga);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextReducer);
		});
	}

	return store;
}