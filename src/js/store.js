import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import log from "./middlewares/log";
import error from "./middlewares/error";

const middlewares = applyMiddleware(thunk, log, error);
export default createStore(reducers, middlewares);