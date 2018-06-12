import { persistReducer, persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import RootReducer from './RootReducer';

function configureStore() {
    const persistConfig = {
        key: 'root',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, RootReducer);
    return createStore(persistedReducer, applyMiddleware(thunk));
}

export const store = configureStore();
export const persistor = persistStore(store);
