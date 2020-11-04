import { createStore, applyMiddleware, compose } from "redux";
import { types } from "./types";
import createSagaMiddleware from "redux-saga";
import { watchRequests } from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let initialState = {
  funds: [],
  isLoading: false,
  error: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALL_MUTUAL_FUNDS:
      return { ...state, funds: [...action.payload], isLoading: false };
    case types.GET_ALL_ETF:
      return { ...state, funds: [...action.payload], isLoading: false };
    case types.FETCHING_DATA:
      return { ...state, isLoading: true };
    case types.DATA_FETCH_ERROR_MESSAGE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return { ...state };
  }
}

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchRequests);
