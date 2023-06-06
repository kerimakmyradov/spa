import { createActions } from "redux-actions";


// create redux actions using createActions from redux-actions
export const{fetchPosts, fetchPostsSuccess, fetchPostsFailure}=createActions({
    FETCH_POSTS:undefined,
    FETCH_POSTS_SUCCESS:(posts)=>({posts}),
    FETCH_POSTS_FAILURE:(error)=>({error}),
})
