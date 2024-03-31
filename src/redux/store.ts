import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
import reducer from "./reducer";

const persistedReducer = persistReducer({ key: "root", storage }, reducer);
export const store = createStore(
  persistedReducer,
  // {}
  //   composeWithDevTools(applyMiddleware(thunk))
  composeWithDevTools()
);
export const persistor = persistStore(store);
