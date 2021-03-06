import {applyMiddleware, createStore, compose} from 'redux';
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// we create the app's data redux
const store = createStore(
    reducer, composeEnhancers(applyMiddleware(thunk))
);

// and export it for the main file to provide it it to the root component
export default store;
