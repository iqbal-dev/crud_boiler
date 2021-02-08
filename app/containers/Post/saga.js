import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_POST } from 'containers/App/constants';
import { postLoaded, postLoadingError } from 'containers/App/actions';

import { makeSelectPost } from 'containers/Post/selectors';
import request from 'utils/request';

export function* getPost() {
  const data = yield select(makeSelectPost())
  console.log(data);
  const requestURL = `https://jsonplaceholder.typicode.com/posts`;

  try {
    const post = yield call(request, requestURL);
    yield put(postLoaded(post));
  } catch (err) {
    yield put(postLoadingError(err));
  }
}

// Individual exports for testing
export default function* postSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(LOAD_POST, getPost);
}
