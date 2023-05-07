import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //global centralised state

export default store;
