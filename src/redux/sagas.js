import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from './actions';
import axios from 'axios';

function* handleFetchPosts() {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put(fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(fetchPosts.toString(), handleFetchPosts);
}
