import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {rootReducer} from './reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = devToolsEnhancer();


export const  store = createStore(persistedReducer, enhancer)

export const persistor = persistStore(store);