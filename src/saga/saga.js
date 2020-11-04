import { types } from "../store/types";
import { put, takeLatest, call } from "redux-saga/effects";

import axios from "axios";

axios.defaults.baseURL =
  "https://6b9fd4cb-1517-4540-b7ad-63a9ff6818ad.mock.pstmn.io/api/v1/investments";
axios.defaults.headers.post["Content-Type"] = `application/json`;

function* fetchAllMutualFunds(func) {
  try {
    yield put({ type: types.FETCHING_DATA });
    let response = yield call(() => fetchData("/m"));
    
    if (response.status === 200) {
      yield put({
        type: types.GET_ALL_MUTUAL_FUNDS,
        payload: response.mutual_funds,
      });
    }
  } catch (error) {
    yield put({
      type: types.DATA_FETCH_ERROR_MESSAGE,
      payload: error.message,
    });
  }
}

async function fetchData(endpoint) {
  let res = await axios.get(endpoint);
  
  return { ...res.data, status: res.status };
}

function* fetchAllEtfs(func) {
  try {
    yield put({ type: types.FETCHING_DATA });
    let response = yield call(() => fetchData("/etf"));

    if (response.status === 200) {
      yield put({ type: types.GET_ALL_ETF, payload: response.etf });
    }
  } catch (error) {
    yield put({
      type: types.DATA_FETCH_ERROR_MESSAGE,
      payload: error.message,
    });
  }
}

export function* watchRequests() {
 
  yield takeLatest(types.FETCH_ALL_MUTUAL_FUNDS, fetchAllMutualFunds);
  yield takeLatest(types.FETCH_ALL_ETF, fetchAllEtfs);
}
