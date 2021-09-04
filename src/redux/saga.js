import { fetchUserById } from "../api";
import { call, put, take } from "redux-saga/effects";

function* getUserById(id) {
  try {
    yield put({ type: "IS_FETCHING" });
    const user = yield call(fetchUserById, id);
    yield put({ type: "SET_USER", user });
  } catch (error) {
    yield put({ type: "SET_ERROR", error: error.message });
  }
}

function* watchGetUser() {
  while (true) {
    const { id } = yield take("GET_USER");
    yield call(getUserById, id);
  }
}

export default watchGetUser;
