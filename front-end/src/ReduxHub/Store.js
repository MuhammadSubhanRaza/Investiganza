import { createStore } from "redux";
import rootReducer from "./RootReducer";

import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from 'redux-persist'
import { combineReducers } from "redux";


const persistConfig = {
    key:"persist-store",
    storage
};



const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = createStore(persistedReducer);

export const persistor = persistStore(store)

export default store
