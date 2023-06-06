import React, { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { Button } from 'react-bootstrap';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate=useNavigate()


  const navigateBack=()=>{
    navigate('/')
  }

  useEffect(() => {
    // Fetch user details from API based on the provided user ID
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));

    // Fetch posts by the user from API based on the provided user ID
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!user) {
    return <div><Loader/></div>;
  }

  return (
    <div>
      <Button variant="secondary" onClick={navigateBack}>
          Back
      </Button>
      <h2>User Details</h2>
      <div>
        <strong>Name: </strong> {user.name}
      </div>
      <div>
        <strong>Email: </strong> {user.email}
      </div>
      <div>
        <strong>Username: </strong> {user.username}
      </div>
      <h3>Posts by {user.name}</h3>
      {posts.length === 0 ? (
        <div>No posts found.</div>
      ) : (
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default UserDetails;