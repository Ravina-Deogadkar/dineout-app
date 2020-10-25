import {createStore, applyMiddleware} from "redux"
import {reducer} from "./reducer/index"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from 'redux-persist';



const persistConfig = {
    key: "cadroot",
    storage,
    // blackList: [reducer.misc, reducer.auth]
};

const reducers = persistReducer(persistConfig, reducer);
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store