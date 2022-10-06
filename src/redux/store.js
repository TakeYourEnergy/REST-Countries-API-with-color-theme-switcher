import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './reducers/rootReducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export let store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk))
)