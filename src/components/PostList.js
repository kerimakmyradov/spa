import React, { useState, useEffect} from 'react';
import PostItem from './PostItem';
import Loader from './Loader'
import Pagination from './Pagination';
import { Button } from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux'
import { fetchPosts } from '../redux/actions';

const PostList = () => {
  const[currentPage, setCurrentPage]=useState(1)
  const [postsPerPage]=useState(10)
  const[sortAsc, setSortAsc]=useState(true)

  const dispatch=useDispatch()
  const posts=useSelector((state)=>state.posts)
  const loading=useSelector((state)=>state.loading)
  const error=useSelector((state)=>state.error)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  // Get current posts based on Pagination
  const indexOfLastPost=currentPage*postsPerPage
  const indexOfFirstPost=indexOfLastPost-postsPerPage
  const currentPosts=posts.slice(indexOfFirstPost, indexOfLastPost)

  // Change Page
  const handlePageChange=(PageNumber)=>{
    setCurrentPage(PageNumber)
  }

  //sort posts by title
  const sortedPosts=[...currentPosts].sort((a,b)=>
    sortAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
  )

  //togle sorting order
  const toggleSortOrder=()=>{
    setSortAsc(!sortAsc)
  }

  return (
    <>
      {loading ? (
        <div>{<Loader/>}</div>
      ) : error ? (
        <div>Error: {error}</div>
      ):(
        <>
          <Button variant='secondary' onClick={toggleSortOrder}>{sortAsc ? 'Sort A-Z' : 'Sort Z-A'}</Button>
          {sortedPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(posts.length / postsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  );
};

export default PostList;
