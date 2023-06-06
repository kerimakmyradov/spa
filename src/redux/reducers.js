import { handleActions } from 'redux-actions';
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure } from './actions';

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = handleActions(
  {
    [fetchPosts]: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    [fetchPostsSuccess]: (state, { payload: { posts } }) => ({
      ...state,
      posts,
      loading: false,
      error: null,
    }),
    [fetchPostsFailure]: (state, { payload: { error } }) => ({
      ...state,
      loading: false,
      error,
    }),
  },
  initialState
);

export default postReducer;
